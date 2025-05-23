import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { TEMPLES } from '../constants';

const DAY_SPECIFIC_TEMPLES: Record<number, number> = {
  0: 16,
  1: 6,
  2: 12,
  3: 0,
  4: 13,
  5: 15,
  6: 14,
};

const getDayTemple = () => {
  const dayOfWeek = new Date().getDay();
  const templeId = DAY_SPECIFIC_TEMPLES[dayOfWeek];
  const temple = TEMPLES.find(t => t.id === templeId);
  if (temple) return temple;

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
  playAudio: () => Promise<void>;
  toggleAudio: () => Promise<void>;
  currentTemple: Temple;
  audioReady: boolean;
  initializeAudio: () => Promise<void>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = (): AudioContextType => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
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

  // Initialize audio on mount
  const initializeAudio = (): Promise<void> => {
    return new Promise((resolve) => {
      if (audioRef.current) {
        resolve();
        return;
      }
      const a = new Audio(currentTemple.audio);
      a.volume = 0.3;
      a.loop = true;

      a.oncanplaythrough = () => {
        setAudioReady(true);
        audioRef.current = a;
        resolve();
      };

      a.onerror = () => {
        console.error('Failed to load audio:', currentTemple.audio);
        setAudioReady(false);
        resolve();
      };
    });
  };

  useEffect(() => {
    initializeAudio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTemple.audio]);

  const playAudio = (): Promise<void> => {
    if (!audioRef.current) return Promise.resolve();
    return audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(err => {
        console.error('Play audio failed:', err);
        setIsPlaying(false);
      });
  };

  // The fix: toggleAudio either plays or pauses based on current state
  const toggleAudio = async (): Promise<void> => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Toggle play failed:', error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, playAudio, toggleAudio, currentTemple, audioReady, initializeAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
