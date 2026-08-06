import React from "react";
import {
  Main,
  About,
  Skills,
  Project,
  Contact,
} from "../components";
import FadeIn from '../components/FadeIn';

function Home() {
  return (
    <FadeIn transitionDuration={700}>
      <Main/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </FadeIn>
  );
}

export default Home;