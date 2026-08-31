import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

import WhatWeOffer from './components/WhatWeOffer';

import Metrics from './components/Metrics';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import CareerDetails from './pages/CareerDetails';
import Projects from './components/Projects';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import MissionSection from './components/MissionSection';
import JobOverview from './pages/JobOverview';
import ApplyForm from './pages/ApplyForm';
import ProtectedAdminRoute from './admin/ProtectAdmin';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* All pages use Layout */}
        <Route path="/" element={<Layout />}>
          
          {/* Home Page */}
          <Route index element={
            <>
              <Hero />
              <MissionSection/>
              
              <WhatWeOffer />
              <Projects />
              <WhyChooseUs />
              <Metrics />
              <FaqSection />
             
            </>
          } />

          {/* Other Pages */}
          <Route path="about" element={<FaqSection />}/>
         <Route path="services" element={<WhatWeOffer />}/>
          <Route path="mission" element={<MissionSection/>}/>
          <Route path="/careers" element={<CareerDetails />} />
          <Route path="/career/:id" element={<JobOverview />} />
         <Route path="/career/:id/apply" element={<ApplyForm />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Pages (No navbar & footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard"
           element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>


      </Routes>
    </Router>
  );
};

export default App;
