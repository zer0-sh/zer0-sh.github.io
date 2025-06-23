import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Box,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { getFeaturedPosts, getAllPosts } from '../../data/posts';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(6),
}));

const StyledFeaturedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledRegularCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

const StyledFeaturedMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  [theme.breakpoints.up('md')]: {
    height: 250,
  },
}));

const StyledRegularMedia = styled(CardMedia)({
  height: 160,
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

const StyledExcerpt = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  flexGrow: 1,
}));

const StyledTags = styled(Box)({
  marginTop: 'auto',
});

const StyledTag = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const StyledMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(1),
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const StyledFeaturedBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  zIndex: 1,
}));

function BlogHome() {
  const navigate = useNavigate();

  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const regularPosts = allPosts.filter(post => !post.featured);

  const handlePostClick = slug => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = dateString =>
    new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <StyledContainer maxWidth="lg">
      <StyledTitle variant="h3" component="h1">
        <b>Mi pequeño rincón</b>
      </StyledTitle>

      {/* Posts Destacados */}
      <StyledSectionTitle variant="h4" component="h2">
        <b> Publicaciones Destacadas </b>
      </StyledSectionTitle>

      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <Grid item xs={12} sm={6} md={3} key={post.slug}>
            <StyledFeaturedCard>
              <CardActionArea
                onClick={() => handlePostClick(post.slug)}
                sx={{ height: '100%' }}
              >
                <Box position="relative">
                  <StyledFeaturedMedia image={post.image} title={post.title} />
                  <StyledFeaturedBadge label="Destacado" size="small" />
                </Box>
                <StyledCardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    <b> {post.title} </b>
                  </Typography>
                  <StyledExcerpt variant="body2" color="textSecondary">
                    {post.excerpt}
                  </StyledExcerpt>
                  <StyledTags>
                    {post.tags.slice(0, 2).map(tag => (
                      <StyledTag
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </StyledTags>
                  <StyledMeta>
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </StyledMeta>
                </StyledCardContent>
              </CardActionArea>
            </StyledFeaturedCard>
          </Grid>
        ))}
      </Grid>

      {/* Resto de Posts */}
      <Divider sx={{ margin: '4rem 0 2rem 0' }} />

      <StyledSectionTitle variant="h4" component="h2">
        <b> Todas las Publicaciones </b>
      </StyledSectionTitle>

      <Grid container spacing={3}>
        {regularPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <StyledRegularCard>
              <CardActionArea
                onClick={() => handlePostClick(post.slug)}
                sx={{ height: '100%' }}
              >
                <StyledRegularMedia image={post.image} title={post.title} />
                <StyledCardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    <b> {post.title} </b>
                  </Typography>
                  <StyledExcerpt variant="body2" color="textSecondary">
                    {post.excerpt}
                  </StyledExcerpt>
                  <StyledTags>
                    {post.tags.slice(0, 2).map(tag => (
                      <StyledTag
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </StyledTags>
                  <StyledMeta>
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </StyledMeta>
                </StyledCardContent>
              </CardActionArea>
            </StyledRegularCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default BlogHome;
