import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from 'lucide-react';

function hasValue(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function EventDetails({ event, date, venue, hideDate }) {
  const address = event.address || venue?.address;
  const mapUrl = event.mapUrl || venue?.mapUrl;
  const details = [
    { value: hideDate ? null : event.date || date, icon: CalendarDays, label: 'Date' },
    { value: event.time, icon: Clock3, label: 'Time' },
    { value: venue?.name, icon: MapPin, label: 'Venue' },
    { value: address, icon: MapPin, label: 'Address' }
  ].filter((detail) => hasValue(detail.value));

  return (
    <>
      {details.length > 0 && (
        <dl className="mt-5 grid gap-3 text-sm text-[#4a362b] sm:grid-cols-2">
          {details.map(({ value, icon: Icon, label }) => (
            <div key={label} className="flex min-w-0 items-start gap-2.5">
              <Icon aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-[#82563c]" />
              <div className="min-w-0">
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-[#806653]">{label}</dt>
                <dd className="mt-0.5 break-words">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      )}

      {hasValue(event.dressCode) && (
        <p className="event-dress-code mt-4 text-sm text-[#4a362b]">
          {event.dressCode}
        </p>
      )}

      {hasValue(event.note) && (
        <p className="mt-3 border-l border-[#b68a63] pl-3 text-sm leading-6 text-[#5d4339]">
          {event.note}
        </p>
      )}

      {hasValue(mapUrl) && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#875b3e]/50 px-4 py-2 text-sm font-medium text-[#4a2b22] transition-colors hover:bg-[#875b3e]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#875b3e]"
        >
          Get Directions
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      )}
    </>
  );
}

function EventCard({ event, date, venue, index, shouldReduceMotion, sceneClassName = '', hideDate = false }) {
  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.55 }}
      className={`event-card event-${event.atmosphere || 'ritual'} ${sceneClassName} relative overflow-hidden rounded-[1.5rem] border p-5 sm:p-6`}
    >
      <div className="event-card-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[0.67rem] uppercase tracking-[0.28em] text-[#795a43]">{event.name}</p>
            {hasValue(event.hindiTitle) && (
              <h4 className="mt-1 font-hindi text-3xl text-[#2f1d1e]">{event.hindiTitle}</h4>
            )}
          </div>
          <span className="event-mark mt-1 shrink-0" aria-hidden="true" />
        </div>

        <EventDetails event={event} date={date} venue={venue} hideDate={hideDate} />
      </div>
    </motion.article>
  );
}

function SceneBackdrop({ sceneRef, shouldReduceMotion }) {
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <motion.div
      className="nov-29-scene-backdrop"
      style={shouldReduceMotion ? undefined : { y: backgroundY }}
      aria-hidden="true"
    />
  );
}

function FestivalBackdrop({ sceneRef, shouldReduceMotion }) {
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <motion.div
      className="dec-01-scene-backdrop"
      style={shouldReduceMotion ? undefined : { y: backgroundY }}
      aria-hidden="true"
    />
  );
}

function WeddingBackdrop({ sceneRef, shouldReduceMotion }) {
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <motion.div
      className="dec-02-scene-backdrop"
      style={shouldReduceMotion ? undefined : { y: backgroundY }}
      aria-hidden="true"
    />
  );
}

function DayChapter({ day, dayIndex, venue, shouldReduceMotion }) {
  const sceneRef = useRef(null);
  const isImmersiveDay = day.id === 'nov-29';
  const isFestivalDay = day.id === 'dec-01';
  const isWeddingDay = day.id === 'dec-02';
  const hasSceneBackdrop = isImmersiveDay || isFestivalDay || isWeddingDay;
  const sceneQuote = isImmersiveDay
    ? 'हर शुभ शुरुआत, अपनों के आशीर्वाद से।'
    : isFestivalDay
      ? 'रंग, राग और रिश्तों की खुशियाँ।'
      : isWeddingDay
        ? 'दो दिलों का मिलन, दो परिवारों का संगम।'
        : '';

  return (
    <section
      ref={hasSceneBackdrop ? sceneRef : undefined}
      aria-labelledby={`${day.id}-heading`}
      data-atmosphere={day.atmosphere}
      className={`day-chapter day-${day.atmosphere} ${isImmersiveDay ? 'day-scene-nov-29' : ''} ${isFestivalDay ? 'day-scene-dec-01' : ''} ${isWeddingDay ? 'day-scene-dec-02' : ''} overflow-hidden rounded-[2rem] border border-[#d7c3ad]/70 p-4 shadow-[0_24px_50px_rgba(67,39,31,0.08)] sm:p-6`}
    >
      {isImmersiveDay && (
        <>
          <SceneBackdrop sceneRef={sceneRef} shouldReduceMotion={shouldReduceMotion} />
          <div className="nov-29-scene-vignette" aria-hidden="true" />
        </>
      )}
      {isFestivalDay && (
        <>
          <FestivalBackdrop sceneRef={sceneRef} shouldReduceMotion={shouldReduceMotion} />
          <div className="dec-01-scene-top-overlay" aria-hidden="true" />
          <div className="dec-01-scene-vignette" aria-hidden="true" />
        </>
      )}
      {isWeddingDay && (
        <>
          <WeddingBackdrop sceneRef={sceneRef} shouldReduceMotion={shouldReduceMotion} />
          <div className="dec-02-scene-vignette" aria-hidden="true" />
        </>
      )}

      <div className={`day-chapter-heading relative mb-4 overflow-hidden rounded-[1.5rem] px-5 py-6 sm:px-7 sm:py-8 ${isImmersiveDay ? 'nov-29-scene-heading' : ''} ${isFestivalDay ? 'dec-01-scene-heading' : ''} ${isWeddingDay ? 'dec-02-scene-heading' : ''}`}>
        {!isFestivalDay && !isWeddingDay && (
          <span className="day-chapter-ornament pointer-events-none absolute inset-0" aria-hidden="true" />
        )}
        <div className="relative flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#f0d4b4]">{day.date}</p>
            <h3 id={`${day.id}-heading`} className="mt-2 font-hindi text-4xl text-[#fff8ef] sm:text-5xl">
              {day.title}
            </h3>
            {sceneQuote && (
              <p className="mt-3 max-w-xl font-hindi text-sm leading-7 text-[#f3dfc3] sm:text-base">
                {sceneQuote}
              </p>
            )}
          </div>
          {!isFestivalDay && !isWeddingDay && (
            <span className="font-display text-5xl text-[#efd0a8]/70" aria-hidden="true">
              0{dayIndex + 1}
            </span>
          )}
        </div>
        {venue && hasValue(venue.name) && (
          <p className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-xs text-[#fff5e9]">
            <MapPin aria-hidden="true" size={14} />
            {venue.name}
          </p>
        )}
        {hasValue(day.locationNote) && (
          <p className={`relative mt-4 max-w-lg border-l border-[#efd0a8]/70 pl-3 text-sm leading-6 text-[#fff5e9] ${isImmersiveDay ? 'nov-29-scene-note' : ''}`}>
            {day.locationNote}
          </p>
        )}
      </div>

      <div className={`day-events day-events-${day.id} ${isImmersiveDay ? 'nov-29-events' : ''} ${isFestivalDay ? 'dec-01-events' : ''} ${isWeddingDay ? 'dec-02-events' : ''}`}>
        {day.events.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            date={day.date}
            venue={venue}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
            sceneClassName={isImmersiveDay ? 'nov-29-event' : isFestivalDay ? 'dec-01-event' : isWeddingDay ? 'dec-02-event' : ''}
            hideDate={isImmersiveDay || isFestivalDay || isWeddingDay}
          />
        ))}
      </div>
    </section>
  );
}

export function EventSection({ days = [], venues = {}, shouldReduceMotion }) {
  return (
    <section aria-labelledby="celebration-heading" className="mx-auto max-w-[430px] px-4 pb-12 sm:max-w-[600px] md:max-w-[820px]">
      <header className="mb-8 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[#8a5a3c]">The wedding celebrations</p>
        <h2 id="celebration-heading" className="mt-2 font-display text-4xl text-[#2d1d1f] sm:text-5xl">
          Three chapters, one celebration
        </h2>
      </header>

      <div className="space-y-7">
        {days.map((day, dayIndex) => {
          const venue = venues[day.venueId];

          return (
            <DayChapter
              key={day.id}
              day={day}
              dayIndex={dayIndex}
              venue={venue}
              shouldReduceMotion={shouldReduceMotion}
            />
          );
        })}
      </div>
    </section>
  );
}
