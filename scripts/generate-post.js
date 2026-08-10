#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) => new Promise((r) => rl.question(q, r));

async function generate() {
  const slug = await ask('Slug (ej: "mi-post"): ');
  const title = await ask('Titulo: ');
  const category = await ask('Categoria (DevOps/Ciberseguridad/Desarrollo/General): ');
  const excerpt = await ask('Extracto: ');
  const cover = (await ask('URL imagen de portada (opcional, ej: /blog-posts/images/portada.jpg): ')).trim();

  const date = new Date().toISOString().split('T')[0];
  const coverField = cover ? `coverImage: "${cover}"\ncoverAlt: "Portada de ${title}"` : '';

  const template = `---
title: "${title}"
date: "${date}"
category: "${category}"
excerpt: "${excerpt}"
${coverField}
---

Escribe aqui tu contenido...

---

## Seccion

Contenido de la seccion.

![Descripcion de la imagen](/blog-posts/images/ejemplo.jpg)
`;

  const filePath = path.join('public/blog-posts', `${slug}.md`);
  fs.writeFileSync(filePath, template);
  console.log(`\n✓ Post creado: ${filePath}`);
  console.log('✓ Index se genera automáticamente con npm run generate-index');

  rl.close();
}

generate();
