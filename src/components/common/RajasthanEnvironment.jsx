import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export function RajasthanEnvironment() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const skylineY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const palaceY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -86]);

  return (
    <div className="rajasthan-environment" aria-hidden="true">
      <div className="environment-sky" />
      <motion.div
        className="environment-skyline"
        style={shouldReduceMotion ? undefined : { y: skylineY }}
      >
        <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice">
          <path d="M0 330h90v-74h52v-42h52v42h46v74h72v-96h42v-56h55v56h42v96h66v-132h48v-48h60v48h48v132h74v-89h48v-55h52v55h48v89h76v-120h42v-62h58v62h42v120h85v-82h52v-44h48v44h40v82h74v-115h47v-57h57v57h44v115h85v90H0z" />
          <path d="M0 370h180v-66h25v-39h35v39h24v66h112v-88h32v-36h43v36h32v88h124v-60h35v-32h46v32h35v60h124v-96h32v-40h42v40h32v96h140v-71h32v-35h46v35h32v71h143v-51h34v-29h45v29h34v51h64v50H0z" />
        </svg>
      </motion.div>
      <motion.div
        className="environment-palace"
        style={shouldReduceMotion ? undefined : { y: palaceY }}
      >
        <svg viewBox="0 0 960 500" preserveAspectRatio="xMidYMax meet">
          <path d="M72 500V190h52v-54h28V98h39v38h28v54h42V127h38V78h35V28h46v50h34v49h43v63h34v-44h31V91h35V52h39V91h35v55h30v44h38V135h27V93h39v42h28v55h49v310z" />
          <path d="M111 500V263h31v-44h39v44h31v237zm160 0V243h31v-47h39v47h31v257zm156 0V269h32v-45h38v45h33v231zm168 0V238h32v-48h38v48h33v262zm161 0V266h32v-45h38v45h33v234z" className="palace-arches" />
          <path d="M418 500V225q62-80 124 0v275z" className="palace-gate" />
          <path d="M235 190h492M300 126h365M375 77h215" className="palace-lines" />
        </svg>
      </motion.div>
      <motion.div
        className="environment-foreground"
        style={shouldReduceMotion ? undefined : { y: foregroundY }}
      />
      <div className="environment-grain" />
    </div>
  );
}
