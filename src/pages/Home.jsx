import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Classification from '../components/Classification/Classification';
import Collection from '../components/Collection/Collection';
import Contact from '../components/Contact/Contact';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

export default function Home(){
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
  )
}
