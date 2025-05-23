import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Temples from './sections/Temples';
import Contact from './sections/Contact';
import SplashScreen from './components/SplashScreen';
import Chatbot from './components/Chatbot';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.title = "Sri Sai Balaji Constructions";
  }, []);

  return (
    <ThemeProvider>
      <AudioProvider>
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <div className="min-h-screen bg-gradient-to-b from-mint-50 to-aqua-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
            <Navbar />
            <Header />
            <main>
              <Hero />
              <Services />
              <Projects />
              <Achievements />
              <Temples />
              <Contact />
            </main>
            <Footer />
            <Chatbot />
          </div>
        )}
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;