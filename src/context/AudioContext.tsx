import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { TEMPLES } from '../constants';

const DAY_SPECIFIC_TEMPLES = {
  0: 16, // Sunday → Konark Sun Temple (Lord Surya, id: 16)
  1: 6,  // Monday → Somnath (Lord Shiva, id: 6)
  2: 12, // Tuesday → Hanuman Garhi (Lord Hanuman, id: 12)
  3: 0,  // Wednesday → Siddhivinayak (Lord Ganesha, id: 0)
  4: 13, // Thursday → Dwarkadhish Temple (Lord Vishnu/Krishna, id: 13)
  5: 15, // Friday → Mahalakshmi Temple (Goddess Lakshmi, id: 15)
  6: 14, // Saturday → Shani Shingnapur (Lord Shani, id: 14)
};

const getDayTemple = (): Temple => {
  const dayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
  const templeId = DAY_SPECIFIC_TEMPLES[dayOfWeek];

  // Find the temple with the matching ID
  const temple = TEMPLES.find(t => t.id === templeId);

  if (temple) {
    return temple;
  }

  // Fallback: If no specific temple is found, cycle through non-day-specific temples
  const daySpecificIds = Object.values(DAY_SPECIFIC_TEMPLES);
  const nonDaySpecificTemples = TEMPLES.filter(t => !daySpecificIds.includes(t.id));
  const fallbackIndex = dayOfWeek % nonDaySpecificTemples.length;
  return nonDaySpecificTemples[fallbackIndex] || TEMPLES[0]; // Default to first temple if none found
};

interface Temple {
  id: number;
  name: string;
  god: string;
  chant: string;
  description: string;
  visitOrder: string;
  image: string;
  link: string;
  audio: string;
}

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
  initializeAudio: () => void;
  currentTemple: Temple;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTemple] = useState<Temple>(() => {
    const temple = getDayTemple();
    return {
      ...temple,
      audio: `/audio/hanumangarhi.mp3`,
      //audio: `/audio/${temple.name.toLowerCase().replace(/\s+/g, '')}.mp3`,
    };
  });

  const initializeAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(currentTemple.audio);
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTemple.audio]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, initializeAudio, currentTemple }}>
      {children}
    </AudioContext.Provider>
  );
};