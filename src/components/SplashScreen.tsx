import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { TEMPLES } from '../constants';

const DAY_SPECIFIC_TEMPLES: Record<number, number> = {
  0: 16, // Sunday → Konark Sun Temple
  1: 6,  // Monday → Somnath
  2: 12, // Tuesday → Hanuman Garhi
  3: 0,  // Wednesday → Siddhivinayak
  4: 13, // Thursday → Dwarkadhish Temple
  5: 15, // Friday → Mahalakshmi Temple
  6: 14, // Saturday → Shani Shingnapur
};

const getDayTemple = () => {
  const dayOfWeek = new Date().getDay();
  const templeId = DAY_SPECIFIC_TEMPLES[dayOfWeek];
  const temple = TEMPLES.find(t => t.id === templeId);
  if (temple) return temple;

  // fallback
  const daySpecificIds = Object.values(DAY_SPECIFIC_TEMPLES);
  const nonDaySpecific = TEMPLES.filter(t => !daySpecificIds.includes(t.id));
  return nonDaySpecific[dayOfWeek % nonDaySpecific.length] || TEMPLES[0];
};

export interface Temple {
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
  initializeAudio: () => Promise<void>;
  currentTemple: Temple;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = (): AudioContextType => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTemple] = useState<Temple>(() => {
    const temple = getDayTemple();
    const filename = temple.image.split('/').pop() || '';
    const basename = filename.replace(/\.[^/.]+$/, '');
    return {
      ...temple,
      audio: `/audio/${basename}.mp3`,
    };
  });

  const initializeAudio = (): Promise<void> => {
    const src = currentTemple.audio;
    return new Promise(resolve => {
      const a = new Audio(src);
      a.volume = 0.3;
      a.loop = true;
      a.oncanplaythrough = () => {
        audioRef.current = a;
        if (isPlaying) a.play().catch(() => setIsPlaying(false));
        resolve();
      };
      a.onerror = () => {
        console.error('Audio load failed:', src);
        resolve();
      };
    });
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleAudio = () => setIsPlaying(p => !p);

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, initializeAudio, currentTemple }}>
      {children}
    </AudioContext.Provider>
  );
};
