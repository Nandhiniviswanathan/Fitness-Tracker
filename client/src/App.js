import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import FitnessPage from './pages/FitnessPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUsPage from './pages/ContactUsPage';
import FoodHabitsPage from './pages/FoodHabitsPage';
import HealthyFoodPage from './pages/HealthyFoodPage';
import OatsBreakfastCard from './pages/OatsBreakfastCard';
import DetoxWaterPage from './pages/detox';
import WaterPage from './pages/water';
import './App.css';
import styled from 'styled-components';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/food-habits" element={<FoodHabitsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/healthy-food" element={<HealthyFoodPage />} />
            <Route path="/oats-breakfasts" element={<OatsBreakfastCard />} />
            <Route path="/detox" element={<DetoxWaterPage />} />
            <Route path="/water" element={<WaterPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
