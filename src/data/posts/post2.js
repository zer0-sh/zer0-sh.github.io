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
        Material UI: Diseño Consistente en React
      </Typography>

      <Typography variant="body1" paragraph>
        Material UI es una de las bibliotecas de componentes más populares para
        React. Basada en los principios de diseño de Google Material Design,
        proporciona componentes pre-construidos que facilitan el desarrollo de
        interfaces modernas.
      </Typography>

      <Typography variant="h5" gutterBottom>
        ¿Por qué Material UI?
      </Typography>

      <Typography variant="body1" paragraph>
        Material UI ofrece varias ventajas para el desarrollo frontend:
      </Typography>

      <ul>
        <li>
          <strong>Componentes listos para usar:</strong> Botones, formularios,
          navegación, etc.
        </li>
        <li>
          <strong>Diseño responsive:</strong> Se adapta automáticamente a
          diferentes tamaños de pantalla
        </li>
        <li>
          <strong>Tema personalizable:</strong> Fácil personalización de
          colores, tipografías y espaciado
        </li>
        <li>
          <strong>Accesibilidad:</strong> Componentes que siguen las mejores
          prácticas de a11y
        </li>
        <li>
          <strong>Documentación excelente:</strong> Ejemplos claros y API bien
          documentada
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Configuración Básica
      </Typography>

      <Typography variant="body1" paragraph>
        Para comenzar con Material UI, necesitas instalar las dependencias:
      </Typography>

      <pre>
        {`npm install @mui/material @emotion/react @emotion/styled
# o
yarn add @mui/material @emotion/react @emotion/styled`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Ejemplo de Componente
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí tienes un ejemplo de cómo crear un botón con Material UI:
      </Typography>

      <pre>
        {`import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

function MyButton() {
  return (
    <StyledButton 
      variant="contained" 
      color="primary"
    >
      Hacer clic
    </StyledButton>
  );
}`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Sistema de Temas
      </Typography>

      <Typography variant="body1" paragraph>
        Material UI utiliza un sistema de temas que permite personalizar
        fácilmente la apariencia de toda la aplicación:
      </Typography>

      <pre>
        {`import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Tus componentes aquí */}
    </ThemeProvider>
  );
}`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Mejores Prácticas
      </Typography>

      <Typography variant="body1" paragraph>
        Al usar Material UI, considera estas mejores prácticas:
      </Typography>

      <ol>
        <li>
          Utiliza el sistema de espaciado de Material UI para consistencia
        </li>
        <li>Aprovecha los breakpoints para diseño responsive</li>
        <li>Personaliza temas en lugar de sobrescribir estilos directamente</li>
        <li>Usa los componentes de layout como Grid y Container</li>
        <li>Mantén la jerarquía visual con Typography</li>
      </ol>

      <Typography variant="body1" paragraph>
        Material UI ha simplificado significativamente el desarrollo de
        interfaces de usuario en React, proporcionando una base sólida para
        crear aplicaciones modernas y accesibles.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'material-ui-diseno-consistente',
  title: 'Material UI: Diseño Consistente en React',
  excerpt:
    'Explora cómo Material UI facilita el desarrollo de interfaces modernas y consistentes en aplicaciones React.',
  content: PostContent,
  featured: false,
  image: '/img/blog/react-hooks.jpg',
  date: '2024-01-20',
  readTime: '7 min',
  tags: ['React', 'Material UI', 'Frontend', 'Diseño'],
};

export default post;
