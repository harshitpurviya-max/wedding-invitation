import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function Countdown({ targetDate, shouldReduceMotion }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const targetTimestamp = new Date(targetDate).getTime();
    let timer;

    const update = () => {
      const difference = targetTimestamp - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        window.clearInterval(timer);
        return false;
      }

      setTimeLeft(getTimeLeft(targetDate));
      return true;
    };

    if (update()) {
      timer = window.setInterval(update, 1000);
    }

    return () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
      }
    };
  }, [targetDate]);

  const cells = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="mx-auto max-w-[430px] px-4 pb-10 sm:max-w-[540px] md:max-w-[760px]">
      <div className="rounded-[2rem] border border-[#d7c3ad]/70 bg-[#2d1d1f] p-5 text-[#f7efe7] shadow-[0_24px_50px_rgba(31,22,25,0.18)] sm:p-7">
        <div className="mb-6 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[#d9c0a4]">Countdown</p>
          <h2 className="mt-3 font-display text-4xl text-[#f8f3ee] sm:text-5xl">Until then get ready to celebrate</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cells.map((cell, index) => (
            <motion.div
              key={cell.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="rounded-[1.25rem] border border-[#8f6b4d]/30 bg-[#f7efe7]/5 p-4 text-center"
            >
              <div className="font-display text-4xl text-[#f7efe7]">{String(cell.value).padStart(2, '0')}</div>
              <div className="mt-2 text-[0.62rem] uppercase tracking-[0.26em] text-[#d9c0a4]">{cell.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
