import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Ensure the path matches the actual directory structure
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import Detail2 from "./components/Detail2";
import ClientCarousel from "./components/ClientCarousel";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import Testimonial from "./components/Testimonial";
import Grow from "./components/Grow";
import BlogSlider from "./components/BlogSlider";
import Features from "./components/Features";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfileBuilding from "./components/pages/ProfileBuilding";
import RecruitmentManagement from "./components/pages/RecruitmentManagement"; 
import TaskManement from "./components/pages/TaskManagement";
import GraphicDesigning from "./components/pages/GraphicDesigning";
import LeadGeneration from "./components/pages/LeadGeneration";
import MarketResearch from "./components/pages/MarketResearch";
import VirtualAssistant from "./components/pages/VirtualAssistant";
import WebinarWorkshopManagement from "./components/pages/WebinarandWorkshopManagement";
import DatabaseManagement from "./components/pages/DatabaseManagement";
import CustomerFeedback from "./components/pages/CustomerFeedback";
import TrainingManagement from "./components/pages/TrainingManagement";
import SoftwareServices from "./components/pages/SoftwareServices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        {/* <Hero />
      <ClientCarousel />
      <Detail />
      <Detail2 />
      <FeaturesSection />
      <ServicesSection /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ClientCarousel />
                <Detail />
                <Detail2 />
                <FeaturesSection />
                <ServicesSection />
                <Testimonial />
                <Grow />
                <BlogSlider />
                <Features />
                <ContentSection />
              </>
            }
          />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/profile-building" element={<ProfileBuilding />} />
          <Route
            path="/recruitment-management"
            element={<RecruitmentManagement />}
          />
          <Route
            path="/task-management"
            element={<TaskManement />}
          />
          <Route
            path="/graphic-designing"
            element={<GraphicDesigning />}
          />
          <Route
            path="/lead-generation"
            element={<LeadGeneration />}
          />
          <Route
            path="/market-research"
            element={<MarketResearch />}
          />
          <Route
            path="/virtual-assistant"
            element={<VirtualAssistant />}
          />
          <Route
            path="/webinar-workshop-management"
            element={<WebinarWorkshopManagement />}
          />
          <Route
            path="/Database-management"
            element={<DatabaseManagement />}
          />
          <Route
          path="/customer-feedback"
          element={<CustomerFeedback />}
          />
          <Route
            path="/training-management"
            element={<TrainingManagement />}
          />
          <Route
            path="/software-services"
            element={<SoftwareServices />}
          />
        </Routes>
      </Router>
      {/* <Testimonial />
      <Grow />
      <BlogSlider />
      <Features />
      <ContentSection /> */}
      <Footer />
    </div>
  );
}

// done

export default App;
