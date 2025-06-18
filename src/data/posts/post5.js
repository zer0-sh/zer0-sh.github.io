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
        Testing en React: Mejores Prácticas
      </Typography>

      <Typography variant="body1" paragraph>
        El testing es una parte fundamental del desarrollo de software moderno.
        En React, tener una buena estrategia de testing puede marcar la
        diferencia entre un proyecto exitoso y uno que falla en producción.
      </Typography>

      <Typography variant="h5" gutterBottom>
        ¿Por qué es importante el testing?
      </Typography>

      <Typography variant="body1" paragraph>
        El testing en React ofrece múltiples beneficios:
      </Typography>

      <ul>
        <li>
          <strong>Confianza en el código:</strong> Sabes que tu aplicación
          funciona como esperas
        </li>
        <li>
          <strong>Refactoring seguro:</strong> Puedes cambiar código sin miedo a
          romper funcionalidad
        </li>
        <li>
          <strong>Documentación viva:</strong> Los tests sirven como
          documentación del comportamiento
        </li>
        <li>
          <strong>Detección temprana de bugs:</strong> Los errores se encuentran
          antes de llegar a producción
        </li>
        <li>
          <strong>Mejor diseño:</strong> El testing fuerza un mejor diseño de
          componentes
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Tipos de Testing
      </Typography>

      <Typography variant="body1" paragraph>
        En React, puedes implementar diferentes tipos de testing:
      </Typography>

      <ol>
        <li>
          <strong>Unit Testing:</strong> Pruebas de componentes individuales
        </li>
        <li>
          <strong>Integration Testing:</strong> Pruebas de interacción entre
          componentes
        </li>
        <li>
          <strong>E2E Testing:</strong> Pruebas de flujos completos de usuario
        </li>
        <li>
          <strong>Visual Testing:</strong> Pruebas de cambios visuales
        </li>
      </ol>

      <Typography variant="h5" gutterBottom>
        Configuración de Testing
      </Typography>

      <Typography variant="body1" paragraph>
        Para configurar testing en React, necesitas instalar las dependencias:
      </Typography>

      <pre>
        {`npm install --save-dev @testing-library/react @testing-library/jest-dom
# o
yarn add -D @testing-library/react @testing-library/jest-dom`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Ejemplo de Test de Componente
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí tienes un ejemplo de cómo testear un componente React:
      </Typography>

      <pre>
        {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders counter with initial value', () => {
    render(<Counter />);
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
  });

  test('increments counter when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Incrementar');
    fireEvent.click(button);
    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  });

  test('decrements counter when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrementar');
    fireEvent.click(decrementButton);
    expect(screen.getByText('Contador: -1')).toBeInTheDocument();
  });
});`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Testing de Hooks
      </Typography>

      <Typography variant="body1" paragraph>
        Para testear hooks personalizados, puedes usar
        <code>@testing-library/react-hooks</code>:
      </Typography>

      <pre>
        {`import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Mejores Prácticas
      </Typography>

      <Typography variant="body1" paragraph>
        Al escribir tests para React, considera estas mejores prácticas:
      </Typography>

      <ol>
        <li>Testea el comportamiento, no la implementación</li>
        <li>Usa queries accesibles (getByRole, getByLabelText)</li>
        <li>Escribe tests que resistan refactoring</li>
        <li>Mantén los tests simples y legibles</li>
        <li>Usa data-testid solo como último recurso</li>
      </ol>

      <Typography variant="body1" paragraph>
        Una estrategia de testing sólida es fundamental para el éxito de
        cualquier proyecto React a largo plazo.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'testing-react-mejores-practicas',
  title: 'Testing en React: Mejores Prácticas',
  excerpt:
    'Aprende las mejores prácticas para implementar testing efectivo en aplicaciones React y mejorar la calidad del código.',
  content: PostContent,
  featured: false,
  image: '/img/blog/react-hooks.jpg',
  date: '2024-02-05',
  readTime: '9 min',
  tags: ['Testing', 'React', 'Jest', 'Frontend'],
};

export default post;
