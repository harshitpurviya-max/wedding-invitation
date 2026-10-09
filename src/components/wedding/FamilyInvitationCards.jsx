const familyInvitations = [
  {
    label: 'BRIDE’S FAMILY',
    names: (
      <>
        Shri Moti Singh Rajput
        <span className="my-1 block font-hindi text-lg text-[#a17b4d]">&amp;</span>
        Late Smt. Rekha Singh Rajput
      </>
    ),
    message:
      'With the blessings of our elders and the grace of the Almighty, we cordially invite you to grace the wedding ceremony of our beloved daughter and bless the couple as they begin their new journey together.'
  },
  {
    label: 'GROOM’S FAMILY',
    names: (
      <>
        Shri Rajesh Singh Tomar
        <span className="my-1 block font-hindi text-lg text-[#a17b4d]">&amp;</span>
        Smt. Anuradha Tomar
      </>
    ),
    message:
      'With immense joy, we invite you to join us in celebrating the auspicious wedding of Anjali and Aditya. Your gracious presence and blessings will make this joyous occasion truly memorable for both families.'
  }
];

export function FamilyInvitationCards() {
  return (
    <section
      aria-labelledby="family-invitations-heading"
      className="mx-auto max-w-[820px] px-4 pb-12"
    >
      <header className="mb-6 text-center sm:mb-8">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8a5a3c]">
          A heartfelt invitation
        </p>
        <h2
          id="family-invitations-heading"
          className="mt-2 font-display text-3xl font-semibold text-[#542c2a] sm:text-4xl"
        >
          WITH THE BLESSINGS OF OUR FAMILIES
        </h2>
        <span className="mx-auto mt-4 block h-px w-20 bg-[#b68a63]/70" aria-hidden="true" />
      </header>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {familyInvitations.map(({ label, names, message }) => (
          <article
            key={label}
            className="min-w-0 rounded-[1.5rem] border border-[#b68a63]/65 bg-[radial-gradient(ellipse_at_top,rgba(243,214,175,0.32),transparent_55%),linear-gradient(145deg,#fffdf8,#f4eadc)] p-5 text-center shadow-[0_18px_42px_rgba(67,39,31,0.1)] sm:p-7"
          >
            <p className="text-[0.66rem] font-medium tracking-[0.24em] text-[#8a5a3c]">
              {label}
            </p>
            <h3 className="mt-4 break-words font-display text-xl font-semibold leading-snug text-[#542c2a] sm:text-2xl">
              {names}
            </h3>
            <span className="mx-auto my-5 block h-px w-14 bg-[#b68a63]/70" aria-hidden="true" />
            <p className="break-words text-sm leading-7 text-[#4d352d] sm:text-base">
              {message}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
