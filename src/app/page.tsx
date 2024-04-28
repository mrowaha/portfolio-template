/**
 * Home is a server component
 */

import Hero from "@/components/hero";
import author from "@/assets/rowaha-author.jpg";
import banner from "@/assets/hero-bg.jpg"
import Intro from "@/components/intro";

export default function Home() {

  return (
    <main>
      <div id="home">
        <Hero
          img={{src: author.src}}
          bg={{src: banner.src}}
        />
        <Intro
          name="Muhammad Rowaha"
          profile="An enthusiastic full-stack software engineer developing solutions for improved efficiency"
          resume={{href: "/rowaha-resume.pdf"}} 
        />
      </div>
    </main>
  );
}