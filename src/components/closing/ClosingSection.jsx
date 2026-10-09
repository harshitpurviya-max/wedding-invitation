import { motion } from 'framer-motion';

export function ClosingSection({ shouldReduceMotion }) {
  return (
    <section
      data-atmosphere="night"
      aria-labelledby="closing-heading"
      className="closing-scene relative mx-auto mb-12 max-w-[820px] overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-[0_28px_70px_rgba(26,17,19,0.2)] sm:px-12 sm:py-20"
    >
      <div className="closing-stars" aria-hidden="true" />
      <div className="closing-moon" aria-hidden="true" />
      <div className="closing-palace" aria-hidden="true">
        <svg viewBox="0 0 900 280" preserveAspectRatio="xMidYMax meet">
          <path d="M0 280v-68h72v-45h41v45h41v68h72v-102h37v-38h45v38h37v102h63V98h34V58h42v40h34v182h63v-89h38v-42h44v42h38v89h73v-118h33v-42h47v42h33v118h80v-70h41v-42h42v42h41v70z" />
          <path d="M414 280V140q36-50 72 0v140zm-230 0v-60q25-32 50 0v60zm455 0v-60q25-32 50 0v60z" className="closing-palace-cutouts" />
        </svg>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-xl"
      >
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a5a3c]">
          The Rajput Family
        </p>
        <h2 id="closing-heading" className="mt-4 font-display text-3xl leading-snug text-[#542c2a] sm:text-4xl">
          We would love to have you with us
        </h2>
        <div className="mt-7 flex items-center justify-center gap-4 text-[#a17b4d]" aria-hidden="true">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b68a63]" />
          <span className="font-display text-lg">✧</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b68a63]" />
        </div>

        <div className="mt-7 font-hindi text-3xl leading-relaxed text-[#542c2a] sm:text-4xl">
          <p>Anjali</p>
          <p className="my-1 font-display text-2xl text-[#a17b4d]">&amp;</p>
          <p>Aditya</p>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#5a4638] sm:text-base">
          Your presence, laughter and blessings will make these celebrations even more special.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-[#b68a63]/75" aria-hidden="true" />

        <div className="mt-7">
          <h3 className="font-display text-xl font-semibold text-[#542c2a] sm:text-2xl">
            For any queries or assistance
          </h3>
          <div className="mt-3 flex flex-col items-center gap-1.5">
            <a
              href="tel:+917617245736"
              className="rounded-sm px-2 py-1 font-display text-lg text-[#70453a] underline decoration-[#b68a63]/60 underline-offset-4 transition-colors hover:text-[#542c2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#875b3e]"
            >
              +91 76172 45736
            </a>
            <a
              href="tel:9926438671"
              className="rounded-sm px-2 py-1 font-display text-lg text-[#70453a] underline decoration-[#b68a63]/60 underline-offset-4 transition-colors hover:text-[#542c2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#875b3e]"
            >
              99264 38671
            </a>
          </div>
        </div>

        <p className="mt-8 font-display text-xl italic text-[#70453a]">
          With love, Rajput Family <span aria-label="love">❤️</span>
        </p>
      </motion.div>
    </section>
  );
}
