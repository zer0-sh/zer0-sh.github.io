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
  '& pre': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[100],
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

function PostContent() {
  return (
    <StyledContent>
      <Typography variant="h4" gutterBottom>
        Optimización de Rendimiento en React
      </Typography>

      <Typography variant="body1" paragraph>
        El rendimiento es un aspecto crucial en el desarrollo de aplicaciones
        React. Una aplicación lenta puede frustrar a los usuarios y afectar
        negativamente la experiencia de usuario.
      </Typography>

      <Typography variant="h5" gutterBottom>
        ¿Por qué es importante la optimización?
      </Typography>

      <Typography variant="body1" paragraph>
        La optimización de rendimiento en React es importante por varias
        razones:
      </Typography>

      <ul>
        <li>
          <strong>Mejor experiencia de usuario:</strong> Aplicaciones más
          rápidas y responsivas
        </li>
        <li>
          <strong>Menor consumo de recursos:</strong> Menos uso de CPU y memoria
        </li>
        <li>
          <strong>Mejor SEO:</strong> Los motores de búsqueda favorecen sitios
          rápidos
        </li>
        <li>
          <strong>Mayor retención de usuarios:</strong> Los usuarios abandonan
          sitios lentos
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Técnicas de Optimización
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí tienes algunas técnicas efectivas para optimizar React:
      </Typography>

      <ol>
        <li>
          <strong>React.memo:</strong> Para evitar re-renders innecesarios
        </li>
        <li>
          <strong>useMemo y useCallback:</strong> Para memorizar valores y
          funciones
        </li>
        <li>
          <strong>Code Splitting:</strong> Para cargar código bajo demanda
        </li>
        <li>
          <strong>Lazy Loading:</strong> Para cargar componentes cuando se
          necesiten
        </li>
      </ol>

      <Typography variant="h5" gutterBottom>
        Ejemplo de Optimización
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí tienes un ejemplo de cómo usar React.memo:
      </Typography>

      <pre>
        {`import React, { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Componente costoso que solo se re-renderiza
  // cuando cambian las props
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

export default ExpensiveComponent;`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Herramientas de Medición
      </Typography>

      <Typography variant="body1" paragraph>
        Para medir el rendimiento de tu aplicación, puedes usar:
      </Typography>

      <ul>
        <li>
          <strong>React DevTools Profiler:</strong> Para analizar re-renders
        </li>
        <li>
          <strong>Lighthouse:</strong> Para métricas de rendimiento web
        </li>
        <li>
          <strong>WebPageTest:</strong> Para análisis detallado de carga
        </li>
        <li>
          <strong>Chrome DevTools:</strong> Para análisis de rendimiento
        </li>
      </ul>

      <Typography variant="body1" paragraph>
        La optimización de rendimiento es un proceso continuo que requiere
        monitoreo constante y ajustes basados en métricas reales.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'optimizacion-rendimiento-react',
  title: 'Optimización de Rendimiento en React',
  excerpt:
    'Aprende técnicas efectivas para mejorar el rendimiento de tus aplicaciones React y proporcionar una mejor experiencia de usuario.',
  content: PostContent,
  featured: false,
  image: '/img/blog/react-hooks.jpg',
  date: '2024-01-25',
  readTime: '6 min',
  tags: ['React', 'Performance', 'Optimización', 'Frontend'],
};

export default post;
