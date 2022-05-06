import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import HeroSection from '../components/HeroSection';
import SectionCards from '../components/SectionCards';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

export default function Home() {
  let tl = useRef();
  const heroRef = useRef();
  const sectionCardsRef = useRef();
  const heroSelector = gsap.utils.selector(heroRef);
  const sectionSelector = gsap.utils.selector(sectionCardsRef);

  useLayoutEffect(() => {
    const flagPoles = CSSRulePlugin.getRule('.card:before');
    console.log(flagPoles);
    tl.current = gsap
      .timeline({
        defaults: { duration: 2, ease: 'power4.inOut' },
      })
      .to(heroSelector('.heading'), {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
      })
      .to(
        heroSelector('.form'),
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          opacity: 1,
          y: 0,
        },
        '-=2'
      )
      .to(sectionSelector('.card'), { scaleY: 1, stagger: 0.2 }, '-=2')
      .to(
        flagPoles,
        {
          opacity: 1,
          stagger: 1,
          transform: 'translateY(0px) translateX(-.5rem)',
        },
        '-=2'
      )
      .to(
        [sectionSelector('.card-title'), sectionSelector('.card-description')],
        { opacity: 1, stagger: 0.1, duration: 1.2 },
        '-=2'
      );
  }, []);

  return (
    <>
      <HeroSection ref={heroRef} />
      <SectionCards ref={sectionCardsRef} />
    </>
  );
}
