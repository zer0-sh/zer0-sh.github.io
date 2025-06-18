// Importar todos los posts
import post1 from './posts/post1';
import post2 from './posts/post2';
import post3 from './posts/post3';
import post4 from './posts/post4';
import post5 from './posts/post5';

// Array con todos los posts
const posts = [post1, post2, post3, post4, post5];

// Función para obtener posts destacados
export const getFeaturedPosts = () => posts.filter(post => post.featured);

// Función para obtener todos los posts
export const getAllPosts = () => posts;

// Función para obtener un post por slug
export const getPostBySlug = slug => posts.find(post => post.slug === slug);

export default posts;
