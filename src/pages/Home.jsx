import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
};
