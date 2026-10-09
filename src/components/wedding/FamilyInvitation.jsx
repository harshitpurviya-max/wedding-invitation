import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function FamilyInvitation({ config, shouldReduceMotion }) {
  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[430px] px-4 pb-10 sm:max-w-[540px] md:max-w-[760px]"
    >
      <div className="rounded-[2rem] border border-[#d7c3ad]/70 bg-[radial-gradient(circle_at_top,_rgba(243,214,175,0.55),rgba(255,255,255,0)_36%),linear-gradient(135deg,#fffaf4,#efe2d1)] p-5 shadow-[0_24px_50px_rgba(67,39,31,0.08)] sm:p-7">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.36em] text-[#8a5a3c]">Family blessing</p>
            <h2 className="mt-3 font-display text-4xl text-[#2d1d1f] sm:text-5xl">With love & grace</h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bf8a58] bg-[#f3dbc0] text-[#3b251d]">
            <Sparkles size={18} />
          </div>
        </div>

        <div className="space-y-4 text-sm leading-7 text-[#4d352d]">
          <p>
            We seek your presence and blessings as they celebrate this sacred beginning.
          </p>
          <p>
            The blessing of family, love, and tradition is at the heart of this celebration, and your gracious presence will make the evening complete.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
