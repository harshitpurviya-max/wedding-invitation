import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = forwardRef(function MusicPlayer({ isOpen, audioUrl = '' }, ref) {
  const [isMuted, setIsMuted] = useState(false);
  const [playbackMessage, setPlaybackMessage] = useState('');
  const audioRef = useRef(null);

  const playAudio = useCallback(() => {
    const audioElement = audioRef.current;

    if (!audioElement || !audioUrl) {
      return;
    }

    audioElement.volume = isMuted ? 0 : 0.5;
    audioElement.play()
      .then(() => {
        setPlaybackMessage('');
      })
      .catch(() => {
        setPlaybackMessage('Music could not start.');
      });
  }, [audioUrl, isMuted]);

  useImperativeHandle(ref, () => ({ playFromUserGesture: playAudio }), [playAudio]);

  const handleMuteToggle = () => {
    const audioElement = audioRef.current;

    if (!audioElement || !audioUrl) {
      return;
    }

    audioElement.muted = !audioElement.muted;
    setIsMuted(audioElement.muted);
  };

  return (
    <>
      {audioUrl && <audio ref={audioRef} src={audioUrl} loop preload="none" />}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
            <button
              type="button"
              aria-label={isMuted ? 'Unmute wedding music' : 'Mute wedding music'}
              aria-pressed={isMuted}
              onClick={handleMuteToggle}
              disabled={!audioUrl}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4b78a]/65 bg-[#2d1d1d]/95 text-[#f5efe8] shadow-[0_8px_24px_rgba(31,22,25,0.24)] backdrop-blur-sm transition-colors hover:border-[#e7c79a] hover:bg-[#43292a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7c79a] motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-45"
            >
              {isMuted ? (
                <Volume2 aria-hidden="true" size={19} />
              ) : (
                <VolumeX aria-hidden="true" size={19} />
              )}
            </button>
          <p className="sr-only" aria-live="polite">{playbackMessage}</p>
        </div>
      )}
    </>
  );
});
