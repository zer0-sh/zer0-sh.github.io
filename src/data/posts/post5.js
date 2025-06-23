import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContent = styled(Box)(({ theme }) => ({
  '& h2': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  '& h3': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  '& li': {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  '& strong': {
    color: theme.palette.text.primary,
  },
  '& code': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[100],
    color: theme.palette.text.primary,
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.spacing(0.5),
    fontFamily: 'monospace',
  },
}));

function PostContent() {
  return (
    <StyledContent>
      <Typography variant="h4" gutterBottom>
        Linux para Desarrollo: Configuración Inicial
      </Typography>

      <Typography variant="body1" paragraph>
        Linux se ha convertido en el sistema operativo preferido para muchos
        desarrolladores gracias a su flexibilidad, rendimiento y el poderoso
        control que ofrece sobre el entorno de desarrollo.
      </Typography>

      <Typography variant="h5" gutterBottom>
        ¿Por qué Linux para desarrollo?
      </Typography>

      <Typography variant="body1" paragraph>
        Estas son las ventajas clave de usar Linux como entorno de desarrollo:
      </Typography>

      <ul>
        <li>
          <strong>Terminal poderosa:</strong> Bash/Zsh y herramientas CLI
          nativas
        </li>
        <li>
          <strong>Mejor rendimiento:</strong> Menos consumo de recursos que
          otros SO
        </li>
        <li>
          <strong>Contenedores nativos:</strong> Docker funciona mejor en Linux
        </li>
        <li>
          <strong>Personalización total:</strong> Puedes configurar cada aspecto
          del sistema
        </li>
        <li>
          <strong>Compatibilidad con servidores:</strong> Entorno similar a
          producción
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Configuración básica recomendada
      </Typography>

      <Typography variant="body1" paragraph>
        Para comenzar con un entorno profesional en Linux:
      </Typography>

      <ol>
        <li>
          <strong>Distribución:</strong> Ubuntu LTS, Fedora o Pop!_OS para
          estabilidad
        </li>
        <li>
          <strong>Terminal:</strong> Zsh con Oh My Zsh y Powerlevel10k
        </li>
        <li>
          <strong>Shell:</strong> Fish o Zsh con autocompletado inteligente
        </li>
        <li>
          <strong>Gestor de paquetes:</strong> Snap y Flatpak para aplicaciones
        </li>
        <li>
          <strong>Entorno gráfico:</strong> GNOME o KDE Plasma según preferencia
        </li>
      </ol>

      <Typography variant="h5" gutterBottom>
        VS Code en Linux
      </Typography>

      <Typography variant="body1" paragraph>
        VS Code es el editor preferido por muchos desarrolladores y me incluyo
        allí por su versatilidad y extensibilidad. Aquí te muestro cómo
        instalarlo y configurarlo en distintas distros Linux:
      </Typography>

      <Typography variant="h6" paragraph>
        Debian / Ubuntu:
      </Typography>

      <pre>
        {`# Instalación en Debian/Ubuntu
sudo apt update
sudo apt install -y wget
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install -y code`}
      </pre>

      <Typography variant="h6" paragraph>
        Fedora / RHEL / CentOS:
      </Typography>

      <pre>
        {`# Instalación en Fedora / RHEL / CentOS
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\\nname=Visual Studio Code\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo dnf check-update
sudo dnf install -y code`}
      </pre>

      <Typography variant="h6" paragraph>
        Arch Linux / Manjaro (y derivados):
      </Typography>

      <pre>
        {`# Instalación en Arch Linux (y derivados como Manjaro)
sudo pacman -Syu --noconfirm code   # O usa 'code-oss' si prefieres el repo comunitario

# Si no está en los repos oficiales, puedes instalar desde AUR:
# yay -S visual-studio-code-bin`}
      </pre>

      <Typography variant="h5" paragraph>
        Extensiones recomendadas para VS Code:
      </Typography>

      <pre>
        {`# Mis extensiones recomendadas
code --install-extension ms-python.python
code --install-extension ms-vscode.cpptools
code --install-extension vscjava.vscode-java-pack
code --install-extension ms-vscode-remote.remote-containers
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension Postman.postman-for-vscode
code --install-extension ritwickdey.LiveServer`}
      </pre>

      <Typography variant="h6" paragraph>
        Configuración recomendada para VS Code en Linux:
      </Typography>

      <ul>
        <li>Usar la integración nativa con la terminal</li>
        <li>Configurar atajos de teclado personalizados</li>
        <li>Habilitar el renderizado GPU para mejor rendimiento</li>
        <li>
          Habilita Dev Containers si trabajas con Docker, para entornos de
          desarrollo reproducibles y aislados.
        </li>
      </ul>

      <Typography variant="h4" gutterBottom>
        Docker en Linux
      </Typography>

      <Typography variant="body1" paragraph>
        Docker es una plataforma de contenedores que permite empaquetar
        aplicaciones junto a todas sus dependencias en entornos aislados y
        portables. En lugar de virtualizar un sistema operativo completo como lo
        haría una máquina virtual, Docker utiliza contenedores ligeros que se
        ejecutan directamente sobre el kernel del sistema anfitrión, lo que
        mejora significativamente el rendimiento y reduce el uso de recursos.
        Esta tecnología resulta especialmente útil para desarrolladores y
        equipos DevOps, ya que facilita la consistencia entre entornos de
        desarrollo, pruebas y producción, permite despliegues rápidos y seguros,
        y simplifica la distribución de software a través de imágenes
        reutilizables. Docker funciona nativamente en Linux con mejor
        rendimiento que en otros sistemas:
      </Typography>

      <pre>
        {`# Instalación universal de Docker usando binarios oficiales

# Descargar y extraer los binarios oficiales de Docker
DOCKER_VERSION=25.0.3
curl -fsSL https://download.docker.com/linux/static/stable/x86_64/docker-\${DOCKER_VERSION}.tgz -o docker.tgz
tar xzvf docker.tgz

# Mover los binarios al directorio del sistema
sudo mv docker/* /usr/bin/

# Crear grupo docker y habilitar permisos de usuario
sudo groupadd docker 2>/dev/null || true
sudo usermod -aG docker $USER
newgrp docker

# Iniciar el servicio y habilitarlo al arranque
sudo systemctl enable docker
sudo systemctl start docker

# Verificar la instalación
docker --version
docker run hello-world`}
      </pre>

      <Typography variant="body1" paragraph>
        Buenas prácticas con Docker en Linux:
      </Typography>

      <ol>
        <li>Usar volúmenes para datos persistentes</li>
        <li>Configurar límites de recursos para contenedores</li>
        <li>Usar Docker Compose para entornos multi-contenedor</li>
        <li>
          Monitorear con <code>docker stats</code> y <code>ctop</code>
        </li>
      </ol>

      <Typography variant="h5" gutterBottom>
        Lando para wordpress y desarrollo web
      </Typography>

      <Typography variant="body1" paragraph>
        Lando es una herramienta de desarrollo local basada en Docker que
        simplifica enormemente la creación de entornos complejos como LAMP, MEAN
        o JAMstack. Una de sus mayores ventajas es la facilidad con la que
        permite usar diferentes versiones de PHP, Apache y bases de datos sin
        necesidad de instalar nada directamente en tu sistema. Con solo unos
        pocos comandos y un archivo de configuración (`.lando.yml`), puedes
        levantar un entorno completo y consistente, replicable en cualquier
        equipo. Esto resulta ideal para trabajar en múltiples proyectos con
        distintos requerimientos, manteniendo cada stack aislado y bajo control
        sin conflictos globales ni configuraciones manuales engorrosas. Lando es
        una herramienta que simplifica la creación de entornos de desarrollo
        locales basados en Docker:
      </Typography>

      <pre>
        {`# Instalación en Linux
wget https://github.com/lando/lando/releases/download/v3.6.4/lando-x64-v3.6.4.deb
sudo dpkg -i lando-x64-v3.6.4.deb
sudo apt-get install -f

# Configuración básica para proyecto PHP
# .lando.yml
name: my-project
recipe: lamp
config:
  php: '8.1'
  webroot: web
  database: mariadb
  xdebug: true

# Iniciar entorno
lando start`}
      </pre>

      <Typography variant="body1" paragraph>
        Ventajas de usar Lando:
      </Typography>

      <ul>
        <li>Configuración reproducible entre equipos</li>
        <li>Integración con VS Code para debugging</li>
        <li>Preconfigurado para CMS populares (Drupal, WordPress)</li>
        <li>Herramientas CLI incluidas (Composer, Drush, WP-CLI)</li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Optimización del entorno Linux
      </Typography>

      <Typography variant="body1" paragraph>
        Para maximizar la productividad en Linux:
      </Typography>

      <ol>
        <li>
          <strong>Alias útiles:</strong> Crear atajos en <code>~/.bashrc</code>{' '}
          o <code>~/.zshrc</code>
        </li>
        <li>
          <strong>Gestor de ventanas:</strong> i3, Sway o AwesomeWM para
          productividad
        </li>
        <li>
          <strong>Monitorización:</strong> htop, glances y ncdu para recursos
        </li>
        <li>
          <strong>Desarrollo web:</strong> Configurar dnsmasq para dominios{' '}
          <code>*.test</code>
        </li>
        <li>
          <strong>Automatización:</strong> Usar scripts Bash/Python para tareas
          repetitivas
        </li>
      </ol>

      <Typography variant="body1" paragraph>
        Con esta configuración, tendrás un entorno de desarrollo profesional en
        Linux que rivaliza (y en muchos casos supera) a las alternativas
        comerciales, especialmente para desarrollo web, contenedores y
        aplicaciones cloud.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'linux-for-development',
  title: 'Linux para Desarrollo: Configuración con VS Code',
  excerpt:
    'Guía completa para configurar un entorno de desarrollo  VS Code, Docker, Lando y herramientas esenciales.',
  content: PostContent,
  featured: true,
  image: '/img/blog/VSCode.png',
  date: '2024-03-15',
  readTime: '10 min',
  tags: ['Linux', 'Desarrollo', 'Docker', 'VS Code', 'Lando'],
};

export default post;
