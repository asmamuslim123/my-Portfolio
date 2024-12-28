"use client";
<<<<<<< HEAD
=======
/* eslint-disable @typescript-eslint/no-unused-vars */

import Projects from '@/components/Projects';
import Hero from '../components/Hero';
import Skills from '@/components/Skills';
import Contact from '../components/Contact';
>>>>>>> c9ea043e70ee7063938c192346f24603fdc03c27
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[]);
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  )
}
