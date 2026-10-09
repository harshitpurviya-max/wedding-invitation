import { useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { MusicPlayer } from './components/common/MusicPlayer';
import { RajasthanEnvironment } from './components/common/RajasthanEnvironment';
import { ClosingSection } from './components/closing/ClosingSection';
import { HeroSection } from './components/hero/HeroSection';
import { OpeningExperience } from './components/opening/OpeningExperience';
import { Countdown } from './components/wedding/Countdown';
import { EventSection } from './components/wedding/EventSection';
import { FamilyInvitation } from './components/wedding/FamilyInvitation';
import { FamilyInvitationCards } from './components/wedding/FamilyInvitationCards';
import { WeddingVenues } from './components/wedding/WeddingVenues';
import { weddingConfig } from './data/weddingConfig';

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const musicPlayerRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    musicPlayerRef.current?.playFromUserGesture();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6efe6] text-[#2f1d1e] antialiased">
      <RajasthanEnvironment />

      <OpeningExperience isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />

      <main
        aria-hidden={!isInvitationOpen}
        inert={!isInvitationOpen}
        className={`relative z-10 transition-all duration-700 ${
          isInvitationOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
        }`}
      >
        <HeroSection config={weddingConfig} shouldReduceMotion={shouldReduceMotion} />
        <FamilyInvitation config={weddingConfig} shouldReduceMotion={shouldReduceMotion} />
        <FamilyInvitationCards />
        <EventSection
          days={weddingConfig.days}
          venues={weddingConfig.venues}
          shouldReduceMotion={shouldReduceMotion}
        />
        <WeddingVenues />
        {weddingConfig.countdownTarget && (
          <Countdown targetDate={weddingConfig.countdownTarget} shouldReduceMotion={shouldReduceMotion} />
        )}

        <ClosingSection shouldReduceMotion={shouldReduceMotion} />
      </main>

      <MusicPlayer
        ref={musicPlayerRef}
        isOpen={isInvitationOpen}
        audioUrl={weddingConfig.music.audioUrl}
      />
    </div>
  );
}

export default App;
