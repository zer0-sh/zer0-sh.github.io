import React from 'react';
import {
  Container,
  Typography,
  Box,
  Chip,
  Breadcrumbs,
  Paper,
  Divider,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, Book } from '@mui/icons-material';
import { getPostBySlug } from '../../data/posts';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const StyledMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

const StyledTags = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledTag = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.grey[800]
      : theme.palette.grey[100],
  color: theme.palette.text.primary,
}));

const StyledContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: 1.7,
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
    position: 'relative',
    backgroundColor: theme.palette.mode === 'dark' ? '#1e1e2e' : '#f5f5f5',
    color: theme.palette.text.primary,
    paddingBlock: `${theme.spacing(6)} ${theme.spacing(2)}`,
    paddingInline: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'auto',
    fontFamily: 'Fira Code, monospace',
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.mode === 'dark' ? '#444' : '#ddd'}`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 4px 10px rgba(0, 0, 0, 0.5)'
        : '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundImage: `
    radial-gradient(circle at 1em 1em, #ff5f56 0.45em, transparent 0.55em),
    radial-gradient(circle at 2.5em 1em, #ffbd2e 0.45em, transparent 0.55em),
    radial-gradient(circle at 4em 1em, #27c93f 0.45em, transparent 0.55em)
  `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
  },
}));

const StyledNotFound = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8),
}));

const StyledBackButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = getPostBySlug(slug);

  const formatDate = dateString =>
    new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  if (!post) {
    return (
      <StyledContainer maxWidth="md">
        <StyledNotFound>
          <Typography variant="h4" gutterBottom>
            Publicación no encontrada
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            La publicación que buscas no existe o ha sido eliminada.
          </Typography>
          <StyledBackButton variant="text" onClick={() => navigate('/blog')}>
            Volver al blog
          </StyledBackButton>
        </StyledNotFound>
      </StyledContainer>
    );
  }

  const PostContent = post.content;

  return (
    <StyledContainer maxWidth="md">
      {/* Breadcrumbs */}
      <StyledBreadcrumbs>
        <Button
          color="inherit"
          onClick={() => navigate('/')}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Home sx={{ marginRight: 1 }} />
          Inicio
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate('/blog')}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Book sx={{ marginRight: 1 }} />
          Blog
        </Button>
        <Typography color="textPrimary">{post.title}</Typography>
      </StyledBreadcrumbs>

      {/* Header del Post */}
      <StyledHeader>
        <StyledTitle variant="h3" component="h1">
          <b> {post.title} </b>
        </StyledTitle>

        <StyledMeta>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            {formatDate(post.date)}
          </Typography>
          <Typography variant="body2">•&nbsp;&nbsp;{post.readTime}</Typography>
          {post.featured && (
            <Chip label="Destacado" size="small" color="primary" />
          )}
        </StyledMeta>

        <Typography variant="body1" color="textSecondary" paragraph>
          {post.excerpt}
        </Typography>

        <StyledTags>
          {post.tags.map(tag => (
            <StyledTag key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </StyledTags>
      </StyledHeader>

      <Divider />

      {/* Contenido del Post */}
      <Paper elevation={0} sx={{ padding: 0, backgroundColor: 'transparent' }}>
        <StyledContent>
          <PostContent />
        </StyledContent>
      </Paper>

      {/* Footer del Post */}
      <Divider sx={{ margin: '4rem 0 2rem 0' }} />

      <Box textAlign="center">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          ¿Te gustó esta entrada?
        </Typography>
        <Button variant="text" onClick={() => navigate('/blog')}>
          Ver más publicaciones
        </Button>
      </Box>
    </StyledContainer>
  );
}

export default BlogPost;
