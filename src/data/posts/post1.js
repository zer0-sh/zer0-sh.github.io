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
        Introducción a React Hooks
      </Typography>

      <Typography variant="body1" paragraph>
        Los React Hooks han revolucionado la forma en que escribimos componentes
        funcionales. Introducidos en React 16.8, los hooks nos permiten usar
        estado y otros recursos de React sin necesidad de clases.
      </Typography>

      <Typography variant="h5" gutterBottom>
        ¿Qué son los Hooks?
      </Typography>

      <Typography variant="body1" paragraph>
        Los hooks son funciones especiales que te permiten
        &ldquo;engancharte&rdquo; a características de React desde componentes
        funcionales. Los hooks más comunes son:
      </Typography>

      <ul>
        <li>
          <strong>useState:</strong> Para manejar estado local
        </li>
        <li>
          <strong>useEffect:</strong> Para efectos secundarios
        </li>
        <li>
          <strong>useContext:</strong> Para consumir contexto
        </li>
        <li>
          <strong>useReducer:</strong> Para manejo de estado complejo
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Ejemplo Práctico
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí tienes un ejemplo básico de cómo usar useState:
      </Typography>

      <pre>
        {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Reglas de los Hooks
      </Typography>

      <Typography variant="body1" paragraph>
        Es importante seguir estas reglas al usar hooks:
      </Typography>

      <ol>
        <li>Solo llama hooks en el nivel superior de tu componente</li>
        <li>
          No llames hooks dentro de loops, condiciones o funciones anidadas
        </li>
        <li>Solo llama hooks desde componentes funcionales o custom hooks</li>
      </ol>

      <Typography variant="h5" gutterBottom>
        Ventajas de los Hooks
      </Typography>

      <Typography variant="body1" paragraph>
        Los hooks ofrecen varias ventajas sobre las clases:
      </Typography>

      <ul>
        <li>Código más limpio y fácil de entender</li>
        <li>Mejor reutilización de lógica</li>
        <li>
          Evita problemas con <code>this</code>
        </li>
        <li>Mejor optimización del compilador</li>
      </ul>

      <Typography variant="body1" paragraph>
        Los hooks han cambiado fundamentalmente cómo desarrollamos aplicaciones
        React, haciendo el código más funcional y mantenible.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'introduccion-react-hooks',
  title: 'Introducción a React Hooks',
  excerpt:
    'Descubre cómo los React Hooks han revolucionado el desarrollo de componentes funcionales y simplificado el manejo de estado.',
  content: PostContent,
  featured: true,
  image: '/img/blog/react-hooks.jpg',
  date: '2024-01-15',
  readTime: '5 min',
  tags: ['React', 'JavaScript', 'Frontend'],
};

export default post;
