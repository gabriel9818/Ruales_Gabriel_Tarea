import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import "./global.css";

type Screen = 'login' | 'welcome' | 'home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onContinue={() => setCurrentScreen('login')} />;
      case 'login':
        return (
          <LoginScreen 
            onLogin={() => setCurrentScreen('home')}
            onRegister={() => console.log('Navigate to register')}
          />
        );
      case 'home':
        return <HomeScreen onLogout={() => setCurrentScreen('login')} />;
      default:
        return <WelcomeScreen onContinue={() => setCurrentScreen('login')} />;
    }
  };

  return renderScreen();
}