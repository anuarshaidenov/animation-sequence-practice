import { forwardRef } from 'react';

import Card from './Card';

const SectionCards = forwardRef((_, ref) => {
  return (
    <section className="py-10 md:pt-16 md:pb-32" ref={ref}>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 lg:gap-10">
        <Card
          title="Modular"
          description="Go beyond teaching with just video. Choose from our library of
        interactive modules or create your own."
        />
        <Card
          title="Customizable."
          description="Use our Headless API to build truly custom frontends."
        />
        <Card
          title="PPP & Managed Payments."
          description="Offer parity pricing, and leave the headache of processing to us."
        />
        <Card
          title="Built by Teachers."
          description="Offer parity pricing, and leave the headache of processing to us."
        />
      </ul>
    </section>
  );
});

SectionCards.displayName = 'SectionCards';
export default SectionCards;
