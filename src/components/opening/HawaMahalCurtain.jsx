import { motion } from 'framer-motion';

export function HawaMahalCurtain({ isOpen, onOpen, shouldReduceMotion }) {
  const curtainTransition = {
    duration: shouldReduceMotion ? 0.08 : 1.8,
    ease: 'easeInOut'
  };

  return (
    <div className={`opening-scene${isOpen ? ' is-opening' : ''}`}>
      <div className="hawa-curtain-stage" aria-hidden="true">
        <motion.div
          className="hawa-curtain-panel hawa-curtain-left"
          animate={isOpen ? { x: '-110%' } : { x: 0 }}
          transition={curtainTransition}
        />
        <motion.div
          className="hawa-curtain-panel hawa-curtain-right"
          animate={isOpen ? { x: '110%' } : { x: 0 }}
          transition={curtainTransition}
        />
      </div>

      {!isOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="opening-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5d7a4]"
        >
          TAP TO OPEN
        </button>
      )}
    </div>
  );
}
