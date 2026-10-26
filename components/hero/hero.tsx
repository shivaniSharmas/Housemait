
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          once: true,
        },
      }).from(
        [
          ".hero-inner-div h1",
          ".hero-inner-div > p:first-of-type",
          ".hero-inner-div .buttons",
          ".hero-inner-div .small-text",
        ],
        {
          y: 32,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        }
      );
    }, heroRef);

    return () => context.revert();
  }, []);

    return(
           <div className="hero" ref={heroRef}>
              <div className="hero-inner-div">
                  <h1>Family life, organised  with AI.</h1>
                  <p>One home for the family calendar, meals, lists and chores, with an AI assistant
                     in WhatsApp that does it all for you.</p>
                  <div className="buttons">
                       <div className="button button-purple">
                          <a href="#">
                            Get the app
                          </a>
                      </div>
                      <div className="button button-transparent">
                          <a href="#">
                            See how it works
                          </a>
                     </div>
                  </div>

                 

                  <p className="small-text"> Free 30-day trial · No card to start · Cancel anytime </p>
              </div>
          </div>
    );
}