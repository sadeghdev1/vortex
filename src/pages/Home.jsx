import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Classification from '../components/Classification/Classification';
import Collection from '../components/Collection/Collection';
import Contact from '../components/Contact/Contact';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

export default function Home(){

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '30px',
      duration: 900,
      easing: 'ease-out',
      opacity: 0,
      origin: 'bottom',
      reset: false,
      mobile: true,
    });

    sr.reveal('.reveal', {
      interval: 120,
    });

    sr.reveal('.reveal-left', {
      origin: 'left',
    });

    sr.reveal('.reveal-right', {
      origin: 'right',
    });

    sr.reveal('.reveal-top', {
      origin: 'top',
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Classification />
      <Collection />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}