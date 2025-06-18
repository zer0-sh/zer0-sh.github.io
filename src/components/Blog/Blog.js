import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogHome from './BlogHome';
import BlogPost from './BlogPost';

function Blog() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} />
      <Route path="/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default Blog;
