import { ArrowUpRight, MapPin } from 'lucide-react';

const venues = [
  {
    id: 'nov-29-venue',
    date: '29 NOVEMBER',
    title: 'शुभ आरंभ',
    function: 'Matapujan & Mandap',
    address: 'House No. 29, Varsha Colony, Vidisha Road, BERASIA',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=23.626346%2C77.444295'
  },
  {
    id: 'dec-venue',
    date: '1 & 2 DECEMBER',
    title: 'Rathore Palace, Bhopal',
    subtitle: 'Wedding celebrations',
    functions: 'Mehendi · Haldi · Sangeet · Engagement · Faldan · Varmala · Reception · Phere',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Rathore%20Palace%2C%20Bhopal'
  }
];

function PalaceArch() {
  return (
    <svg
      className="mx-auto mb-3 h-9 w-16 text-[#a77a48]"
      viewBox="0 0 64 36"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 34V18C5 8.6 17.1 2 32 2s27 6.6 27 16v16M13 34V19c0-6.1 8.5-11 19-11s19 4.9 19 11v15M2 34h60M27 34V23a5 5 0 0 1 10 0v11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 13v3m-1.5-1.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function VenuePanel({ venue }) {
  return (
    <article className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-[#b68a63]/70 bg-[radial-gradient(ellipse_at_top,rgba(243,214,175,0.32),transparent_52%),linear-gradient(145deg,#fffdf8,#f3e8d9)] p-5 shadow-[0_20px_46px_rgba(67,39,31,0.1)] sm:p-7">
      <div className="pointer-events-none absolute inset-[0.45rem] rounded-[1.4rem] border border-[#b68a63]/25" aria-hidden="true" />
      <div className="relative text-center">
        <PalaceArch />
        <p className="text-[0.67rem] font-medium tracking-[0.28em] text-[#8a5a3c]">
          {venue.date}
        </p>
        <h3 className="mt-3 break-words font-hindi text-3xl leading-snug text-[#542c2a] sm:text-4xl">
          {venue.title}
        </h3>
        {venue.subtitle && (
          <p className="mt-2 font-display text-lg italic text-[#806044]">
            {venue.subtitle}
          </p>
        )}
        <span className="mx-auto my-5 block h-px w-16 bg-[#b68a63]/75" aria-hidden="true" />

        {venue.function && (
          <p className="break-words font-display text-xl font-semibold leading-relaxed text-[#542c2a]">
            {venue.function}
          </p>
        )}
        {venue.functions && (
          <p className="break-words text-sm leading-7 text-[#4d352d] sm:text-base">
            {venue.functions}
          </p>
        )}
        {venue.address && (
          <p className="mx-auto mt-4 flex max-w-sm items-start justify-center gap-2 break-words text-sm leading-6 text-[#5a4638]">
            <MapPin aria-hidden="true" size={17} className="mt-1 shrink-0 text-[#9b7047]" />
            <span>{venue.address}</span>
          </p>
        )}

        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#875b3e]/55 bg-[#fffaf3]/70 px-5 py-2.5 text-sm font-medium text-[#542c2a] transition-colors hover:bg-[#875b3e]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#875b3e]"
        >
          <MapPin aria-hidden="true" size={16} />
          Get Directions
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </article>
  );
}

export function WeddingVenues() {
  return (
    <section aria-labelledby="wedding-venues-heading" className="mx-auto max-w-[900px] px-4 pb-12">
      <header className="mb-8 text-center">
        <p className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#9a6a45]">
          Wedding venues
        </p>
        <h2 id="wedding-venues-heading" className="font-display text-4xl text-[#2d1d1f] sm:text-5xl">
          Places of Celebration
        </h2>
      </header>
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {venues.map((venue) => (
          <VenuePanel key={venue.id} venue={venue} />
        ))}
      </div>
    </section>
  );
}
