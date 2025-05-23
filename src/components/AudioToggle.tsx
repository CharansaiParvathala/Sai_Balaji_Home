import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { useTranslation } from 'react-i18next';

const AudioToggle: React.FC = () => {
  const { isPlaying, toggleAudio } = useAudio();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleAudio}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-purple-600 dark:text-purple-400"
      aria-label={isPlaying ? t('audio.mute') : t('audio.unmute')}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
};

export default AudioToggle;
