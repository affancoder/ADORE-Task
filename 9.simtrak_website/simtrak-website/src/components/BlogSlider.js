import React from 'react';
import './Blogslider.css';

import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';

const BlogGrid = () => {
  const blogs = [
    {
      id: 1,
      image: image1,
      title: "Strategies for Improving Business Productivity",
      text: "Having a #business plan ready but there is no clarity of the tasks performed, results in the decrease in the #productivity of [...]"
    },
    {
      id: 2,
      image: image2,
      title: "Ways To Expand Your Business",
      text: "There comes a certain point in your# business where the brand or the #product of the organization has reached its maturity stage […]"
    },
    {
      id: 3,
      image: image3,
      title: "Secrets for growing business",
      text: "When you start a #business, your main goal is to establish it, and bring it to the top of the #market. However, […]"
    },
    {
      id: 4,
      image: image4,
      title: "Types of Training in Human Resource Management",
      text: "Training is #teaching or #developing any skills or #knowledge in oneself related to a specific competency. It is also done to enhance […]"
    }
  ];

  return (
    <div className="blog-section">
      <h2 className="blog-title">Blogs & Updates</h2>
      <p className="blog-description">
        Our blog section is a hub for expert analysis, informative articles, and thought-provoking discussions on the most pressing topics in the industry.
      </p>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
