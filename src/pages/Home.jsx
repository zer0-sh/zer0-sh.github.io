import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
};
