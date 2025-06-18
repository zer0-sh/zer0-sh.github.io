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
        TypeScript en React: Tipado Seguro
      </Typography>

      <Typography variant="body1" paragraph>
        TypeScript ha revolucionado el desarrollo de aplicaciones React al
        proporcionar tipado estático y mejores herramientas de desarrollo. La
        combinación de React y TypeScript ofrece un desarrollo más seguro y
        mantenible.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Ventajas de TypeScript
      </Typography>

      <Typography variant="body1" paragraph>
        TypeScript ofrece numerosas ventajas para el desarrollo React:
      </Typography>

      <ul>
        <li>
          <strong>Detección temprana de errores:</strong> Los errores se
          detectan en tiempo de compilación
        </li>
        <li>
          <strong>Mejor autocompletado:</strong> IDEs más inteligentes con
          sugerencias precisas
        </li>
        <li>
          <strong>Refactoring seguro:</strong> Cambios de código más confiables
        </li>
        <li>
          <strong>Documentación implícita:</strong> Los tipos sirven como
          documentación
        </li>
        <li>
          <strong>Mejor mantenibilidad:</strong> Código más fácil de mantener a
          largo plazo
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Configuración Básica
      </Typography>

      <Typography variant="body1" paragraph>
        Para usar TypeScript con React, necesitas instalar las dependencias:
      </Typography>

      <pre>
        {`npm install --save-dev typescript @types/react @types/react-dom
# o
yarn add -D typescript @types/react @types/react-dom`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Ejemplo de Componente Tipado
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí tienes un ejemplo de un componente React con TypeScript:
      </Typography>

      <pre>
        {`import React from 'react';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
  onEdit?: (user: UserCardProps['user']) => void;
  onDelete?: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="user-card">
      <img src={user.avatar || '/default-avatar.png'} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {onEdit && (
        <button onClick={() => onEdit(user)}>
          Editar
        </button>
      )}
      {onDelete && (
        <button onClick={() => onDelete(user.id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default UserCard;`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Hooks con TypeScript
      </Typography>

      <Typography variant="body1" paragraph>
        Los hooks también se benefician del tipado de TypeScript:
      </Typography>

      <pre>
        {`import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/users');
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};`}
      </pre>

      <Typography variant="h5" gutterBottom>
        Mejores Prácticas
      </Typography>

      <Typography variant="body1" paragraph>
        Al usar TypeScript con React, considera estas mejores prácticas:
      </Typography>

      <ol>
        <li>Define interfaces para todas las props de componentes</li>
        <li>Usa tipos genéricos para hooks personalizados</li>
        <li>
          Evita el uso de <code>any</code> cuando sea posible
        </li>
        <li>Utiliza tipos de unión para props opcionales</li>
        <li>Documenta tipos complejos con comentarios</li>
      </ol>

      <Typography variant="body1" paragraph>
        TypeScript ha transformado la forma en que desarrollamos aplicaciones
        React, proporcionando un entorno más seguro y productivo.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'typescript-react-tipado-seguro',
  title: 'TypeScript en React: Tipado Seguro',
  excerpt:
    'Descubre cómo TypeScript mejora el desarrollo de aplicaciones React con tipado estático y mejores herramientas.',
  content: PostContent,
  featured: false,
  image: '/img/blog/react-hooks.jpg',
  date: '2024-01-30',
  readTime: '8 min',
  tags: ['TypeScript', 'React', 'Frontend', 'Desarrollo'],
};

export default post;
