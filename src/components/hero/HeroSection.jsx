import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function JaipurSilhouette() {
  return (
    <svg viewBox="0 0 900 230" preserveAspectRatio="xMidYMax meet">
      <path d="M0 224V172h46v-30h24v-16h16v16h23v30h31v-48h22v-32h18V66h19V50h10V34h10V50h10v16h18v20h18v54h30v-40h19V82h10V66h10V50h10V34h11V18h12v16h11v16h10v16h10v18h18v50h26v-32h20V98h15v-24h10V50h10V34h10V18h12v16h10v16h10v24h15v32h20v46h26v-42h18v-20h11v-14h11v14h12v20h18v42h33v-32h19v-18h13v-14h13v14h14v18h20v50h26v-26h18v-15h12v15h19v28h38v51H0Z" />
      <path d="M164 220v-46h35v46m117 0v-64h45v64m127 0v-78h45v78m126 0v-60h43v60m99 0v-46h35v46" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M171 220v-23a10 10 0 0 1 20 0v23m132 0v-38a12 12 0 0 1 24 0v38m131 0v-51a12 12 0 0 1 24 0v51m126 0v-36a12 12 0 0 1 24 0v36m104 0v-23a10 10 0 0 1 20 0v23" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M345 82V50h10V34h10V18h12V6h12v12h11v16h10v16h10v32m-65 0V50h10V34h10V18m148 80V66h10V50h10V34h12V18h12v16h10v16h10v16h10v32m-64 0V66h10V50h10V34m-193 48h66m77 16h64" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M0 223h900" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FloralSprig({ className }) {
  return (
    <svg className={className} viewBox="0 0 110 180" aria-hidden="true">
      <path d="M8 172C35 138 58 98 83 24" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 145c-13-1-20-10-20-20 13-1 22 5 24 14m12-16c-13-3-18-13-16-23 13 1 20 8 20 18m12-20c-12-4-16-15-12-24 12 3 18 11 16 21m12-22c-10-6-12-17-6-25 11 5 15 14 11 23m9-24c-8-8-7-18 0-25 9 7 11 17 6 25m-45 90c12-10 23-8 29 0-8 10-19 13-29 6m16-28c13-8 24-4 28 5-10 9-21 10-30 1m15-28c13-6 23-1 26 9-11 7-22 6-29-4m13-25c12-3 21 4 22 14-12 5-22 2-27-9" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="83" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

export function HeroSection({ config, shouldReduceMotion }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const atmosphereY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const architectureY = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const ornamentY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <section ref={heroRef} className="hero-royal" aria-labelledby="hero-wedding-heading">
      <motion.div
        className="hero-atmosphere"
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: atmosphereY }}
      />
      <motion.div
        className="hero-jaipur-layer"
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: architectureY }}
      >
        <JaipurSilhouette />
      </motion.div>
      <motion.div
        className="hero-floral-layer"
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: ornamentY }}
      >
        <FloralSprig className="hero-floral hero-floral-left" />
        <FloralSprig className="hero-floral hero-floral-right" />
      </motion.div>

      <div className="hero-royal-card">
        <div className="hero-royal-topline">
          <span className="hero-royal-kicker">A Wedding Invitation</span>
          <span className="hero-royal-emblem" aria-hidden="true">✧</span>
        </div>

        <div className="hero-royal-main">
          <div className="hero-jaali-detail" aria-hidden="true" />
          <p className="hero-royal-overline">With love and blessings</p>
          <h1 id="hero-wedding-heading" className="hero-royal-heading">
            शुभ विवाह
          </h1>
          <p className="hero-royal-english">A Celebration of Love</p>
          {config.weddingDate && (
            <p className="hero-royal-date">{config.weddingDate}</p>
          )}
          <div className="hero-royal-divider" aria-hidden="true">
            <span>✧</span>
          </div>
          <p className="hero-royal-copy">
            With joy and blessings, we invite you to celebrate this special occasion.
          </p>
        </div>

        <div className="hero-royal-footer" aria-hidden="true">
          <span />
          <span className="hero-royal-footer-mark">❧</span>
          <span />
        </div>
      </div>

      <p className="hero-scroll-cue">
        <span aria-hidden="true" />
        Scroll to explore
      </p>
    </section>
  );
}
