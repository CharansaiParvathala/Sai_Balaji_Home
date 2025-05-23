import React, { useEffect, useState } from 'react';
import { useAudio } from '../context/AudioContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const { playAudio, currentTemple, audioReady } = useAudio();

  const imagesToLoad = [
    currentTemple.image,
    '/image/company.png',
    '/image/tirumala.png',
    '/image/ganesh.png',
    '/image/kasi.png',
  ];

  useEffect(() => {
    let isMounted = true;
    imagesToLoad.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!isMounted) return;
        setLoadedCount(count => count + 1);
      };
      img.onerror = () => {
        if (!isMounted) return;
        setLoadedCount(count => count + 1);
      };
    });

    return () => {
      isMounted = false;
    };
  }, [currentTemple.image]);

  const allImagesLoaded = loadedCount >= imagesToLoad.length;
  const readyToEnter = allImagesLoaded && audioReady;

  const handleEnter = async () => {
    await playAudio();   // play audio on user click
    onComplete();
  };

  return (
    <div
      className="splash-screen flex flex-col items-center justify-center min-h-screen transition-all duration-500"
      style={{
        backgroundImage: readyToEnter ? `url(${currentTemple.image})` : undefined,
        backgroundColor: '#000',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="om-symbol text-8xl text-white drop-shadow-xl animate-pulse">
        ॐ
      </div>
      <div className="loading-text mt-4 text-xl text-white drop-shadow-lg">
        {!readyToEnter
          ? `Loading ${Math.round((loadedCount / imagesToLoad.length) * 100)}%...`
          : 'Welcome!'}
      </div>

      {readyToEnter && (
        <button
          onClick={handleEnter}
          className="welcome-button mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Enter
        </button>
      )}
    </div>
  );
};

export default SplashScreen;
