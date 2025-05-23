import React, { useEffect, useState, useMemo } from 'react';
import { useAudio } from '../context/AudioContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [audioReady, setAudioReady] = useState(false);
  const { initializeAudio, currentTemple } = useAudio();

  const imagesToLoad = useMemo<string[]>(() => {
    if (!currentTemple?.image) return [];
    return [
      currentTemple.image,
      '/image/company.png',
      '/image/tirumala.png',
      '/image/ganesh.png',
      '/image/kasi.png',
    ];
  }, [currentTemple.image]);

  // preload images
  useEffect(() => {
    if (imagesToLoad.length === 0) return;
    let isMounted = true;
    imagesToLoad.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => isMounted && setLoadedCount(c => c + 1);
      img.onerror = () => isMounted && setLoadedCount(c => c + 1);
    });
    return () => { isMounted = false; };
  }, [imagesToLoad]);

  // once images loaded, preload audio
  useEffect(() => {
    if (loadedCount < imagesToLoad.length) return;
    initializeAudio().then(() => setAudioReady(true));
  }, [loadedCount, imagesToLoad.length, initializeAudio]);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const allLoaded = loadedCount >= imagesToLoad.length && audioReady;
  const pct = imagesToLoad.length
    ? Math.round((loadedCount / imagesToLoad.length) * 100)
    : 0;

  const handleEnter = () => {
    if (allLoaded) onComplete();
  };

  return (
    <div
      className="splash-screen flex flex-col items-center justify-center min-h-screen transition-all duration-500"
      style={{
        backgroundImage: allLoaded ? `url(${currentTemple.image})` : undefined,
        backgroundColor: '#000',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="om-symbol text-8xl text-white drop-shadow-xl animate-pulse">
        ॐ
      </div>
      <div className="loading-text mt-4 text-xl text-white drop-shadow-lg">
        {allLoaded ? 'Welcome!' : `Loading ${pct}%`}
      </div>
      {allLoaded && (
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
