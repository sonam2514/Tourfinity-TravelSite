// src/pages/Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts, blogCategories } from '../data/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <div className="container">
        {/* Blog Header */}
        <div className="blog-page-header">
          <h1>Travel Blog & Guides</h1>
          <p>Discover expert tips, destination guides, and travel insights to plan your perfect trip</p>
        </div>

        {/* Category Filters */}
        <div className="blog-filters">
          {blogCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="blog-results">
          <p>{filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found</p>
        </div>

        {/* Blog Grid */}
        <div className="blog-page-grid">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Back to Home */}
        <div className="blog-back">
          <Link to="/" className="btn-back">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;