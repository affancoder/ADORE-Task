import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Ensure the path matches the actual directory structure
import Hero from './components/Hero'; 
import Detail from './components/Detail';
import Detail2 from './components/Detail2';
import ClientCarousel from './components/ClientCarousel';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import Testimonial from './components/Testimonial';
import Grow from './components/Grow';
import BlogSlider from './components/BlogSlider';
import Features from './components/Features';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <ClientCarousel/>
      <Detail />
      <Detail2 />
      <FeaturesSection/>
      <ServicesSection/>
      <Testimonial/>
      <Grow/>
      <BlogSlider/>
      <Features/>
      <ContentSection/>
      <Footer/>
    </div>
  );
}

export default App;
