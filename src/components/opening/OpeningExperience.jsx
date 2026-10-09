import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HawaMahalCurtain } from './HawaMahalCurtain';

export function OpeningExperience({ isOpen, onOpen }) {
  const shouldReduceMotion = useReducedMotion();
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const dismissal = window.setTimeout(
      () => setIsDismissed(true),
      shouldReduceMotion ? 50 : 1250
    );

    return () => window.clearTimeout(dismissal);
  }, [isOpen, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {!isDismissed ? (
        <motion.section
          key="opening-scene"
          role="dialog"
          aria-modal="true"
          aria-label="Wedding invitation opening"
          className="opening-overlay fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: shouldReduceMotion ? 0.05 : 0.45, ease: 'easeInOut' }
          }}
        >
          <div className="opening-artwork-frame">
            <HawaMahalCurtain
              isOpen={isOpen}
              onOpen={onOpen}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
