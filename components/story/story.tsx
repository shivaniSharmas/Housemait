"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./story.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const storyRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!storyRef.current) return;

  const ctx = gsap.context(() => {
    const slides = gsap.utils.toArray<HTMLElement>(".story-slide");

    /* =================================================
     * INITIAL STATE
     * ================================================= */

    gsap.set(slides, {
      autoAlpha: 1,
    });

    gsap.set(".story-slide.home", {
      autoAlpha: 1,
    });

    /*
     * All slide content starts slightly above
     */

    gsap.set(".calendar-content", {
      y: -100,
      autoAlpha: 0,
    });

    gsap.set(".chores-content", {
      y: -100,
      autoAlpha: 0,
    });

    gsap.set(".meals-content", {
      y: -100,
      autoAlpha: 0,
    });

    gsap.set(".lists-content", {
      y: -100,
      autoAlpha: 0,
    });

    gsap.set(".whatsapp-content", {
      y: -100,
      autoAlpha: 0,
    });

    /* =================================================
     * PHONE CLUSTERS
     * ================================================= */

    gsap.set(
      [
        ".calendar-phones",
        ".chores-phones",
        ".meals-phones",
        ".lists-phones",
        ".whatsapp-phone",
      ],
      {
        autoAlpha: 0,
        scale: 0.9,
      }
    );

    /*
     * IMPORTANT:
     * Every phone image starts BELOW the phone screen.
     */

    gsap.set(
      [
        ".calendar-phones .phone-screen img",
        ".chores-phones .phone-screen img",
        ".meals-phones .phone-screen img",
        ".lists-phones .phone-screen img",
        ".whatsapp-phone .phone-screen img",
      ],
      {
        yPercent: 100,
      }
    );

    /*
     * Make sure the moving image is clipped
     * inside the phone screen.
     */

    gsap.set(
      [
        ".calendar-phones .phone-screen",
        ".chores-phones .phone-screen",
        ".meals-phones .phone-screen",
        ".lists-phones .phone-screen",
        ".whatsapp-phone .phone-screen",
      ],
      {
        overflow: "hidden",
      }
    );

    /* =================================================
     * MAIN TIMELINE
     * ================================================= */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top top",
        end: "+=7000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    /* =================================================
     * CONTINUOUS FLOATING ICONS
     * ================================================= */

    gsap.to(".home .icon1", {
      y: 20,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".home .icon2", {
      y: 30,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.4,
    });

    gsap.to(".home .icon3", {
      y: 18,
      duration: 3.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.8,
    });

    gsap.to(".home .icon4", {
      y: 25,
      duration: 4.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.2,
    });

    gsap.to(".home .icon5", {
      y: 32,
      duration: 3.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });

    gsap.to(".home .icon6", {
      y: 22,
      duration: 4.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.6,
    });

    gsap.to(".home .icon7", {
      y: 28,
      duration: 3.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.2,
    });

    gsap.to(".home .icon8", {
      y: 20,
      duration: 4.3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.3,
    });

    /* =================================================
     * HOME
     * ================================================= */

    tl.to(
      ".home .icon1",
      {
        x: 480,
        y: 0,
        scale: 0.0,
        rotation: -15,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".home .icon2",
      {
        x: 380,
        y: 70,
        scale: 0.0,
        rotation: 12,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".home .icon3",
      {
        x: -380,
        y: 60,
        rotation: -10,
        duration: 1,
        scale: 0.0,
         ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".home .icon4",
      {
        x: -480,
        y: 0,
        rotation: 15,
        duration: 1,
        scale: 0.0,
         ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".home .icon5",
      {
        x: -480,
        y: -80,
        rotation: -10,
        duration: 1,
        scale: 0.0,
         ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".home .icon6",
      {
        x: -380,
        y: -100,
        rotation: 15,
        duration: 1,
        scale: 0.0,
         ease: "power2.inOut",
      },
      0
    );
    tl.to(
      ".home .icon7",
      {
        x: 380,
        y: -100,
        rotation: 15,
        duration: 1,
        scale: 0.0,
         ease: "power2.inOut",
      },
      0
    );
    tl.to(
      ".home .icon8",
      {
        x: 480,
        y: -100,
        rotation: 15,
        duration: 1,
        scale: 0.0,
         ease: "power2.inOut",
      },
      0
    );
   gsap.set(".shadow", {
  autoAlpha: 0,
  scale: 0.3,
});

tl.to(
  ".shadow",
  {
    autoAlpha: 1,
    scale: 1,
    duration: 1,
    ease: "power2.out",
  },
  0
);
    /* Move home phone slightly forward */

    tl.to(
      ".home-phone",
      {
        scale: 1,
        duration: 0.8,
      },
      0.2
    );

    /*
     * Fade home out
     */

    tl.to(
      ".home",
      {
        autoAlpha: 0,
        duration: 0,
      },
      1
    );

    /* =================================================
     * CALENDAR
     * ================================================= */

    tl.to(
      ".calendar-phones",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
      },
      1
    );

   
    /*
     * CALENDAR IMAGE
     * Bottom -> Top
     */

    tl.fromTo(
      ".calendar-phones .phone-screen img",
      {
        yPercent: 2,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
      },
      1.05
    );

    /*
     * Calendar content
     */

    tl.to(
      ".calendar-content",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
      },
      1.1
    );

    tl.fromTo(
      ".calendar-front",
      {
        x: 0,
        rotation: 0,
      },
      {
        x: 0,
        rotation: 0,
        duration: 0,
      },
      0
    );

    tl.fromTo(
      ".calendar-back",
      {
        x: 80,
        rotation: 8,
      },
      {
        x: 0,
        rotation: 6,
        duration: 0.8,
      },
      1.1
    );

    tl.fromTo(
      ".calendar-notification-top",
      {
        y: -30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
      },
      1.6
    );

    tl.fromTo(
      ".calendar-notification-bottom",
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
      },
      1.7
    );

    /*
     * Hold Calendar
     */

    tl.to({}, {
      duration: 0.8,
    });

    /*
     * Fade Calendar
     */

    tl.to(".calendar", {
      autoAlpha: 0,
      duration: 0,
    });

    /* =================================================
     * CHORES
     * ================================================= */

    tl.to(
      ".chores-phones",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
      },
      "<"
    );

    /*
     * CHORES IMAGE
     * Bottom -> Top
     */

    tl.fromTo(
      ".chores-phones .phone-screen img",
      {
        yPercent: 2,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );

    /*
     * Chores content
     */

    tl.to(
      ".chores-content",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".chores-front",
      {
        x: 0,
      },
      {
        x: 0,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".chores-back",
      {
        x: 60,
        rotation: 8,
      },
      {
        x: 0,
        rotation: -5,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".chores-notification",
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
      }
    );

    tl.to({}, {
      duration: 0.2,
    });

    tl.to(".chores", {
      autoAlpha: 0,
      duration: 0,
    });

    /* =================================================
     * MEALS
     * ================================================= */

    tl.to(
      ".meals-phones",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
      },
      "<"
    );

    /*
     * MEALS IMAGE
     * Bottom -> Top
     */

    tl.fromTo(
      ".meals-phones .phone-screen img",
      {
        yPercent: 2,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );

    /*
     * Meals content
     */

    tl.to(
      ".meals-content",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".meals-front",
      {
        x: 0,
      },
      {
        x: 0,
        duration: 0,
      },
      "<"
    );

    tl.fromTo(
      ".meals-back",
      {
        x: 60,
        rotation: 8,
      },
      {
        x: 0,
        rotation: 5,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".meals-notification",
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
      }
    );

    tl.to({}, {
      duration: 0.8,
    });

    tl.to(".meals", {
      autoAlpha: 0,
      duration: 0,
    });

    /* =================================================
     * LISTS
     * ================================================= */

    tl.to(
      ".lists-phones",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
      },
      "<"
    );

    /*
     * LISTS IMAGE
     * Bottom -> Top
     */

    tl.fromTo(
      ".lists-phones .phone-screen img",
      {
        yPercent: 2,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );

    /*
     * Lists content
     */

    tl.to(
      ".lists-content",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".lists-front",
      {
        x: 0,
      },
      {
        x: 0,
        duration: 0,
      },
      "<"
    );

    tl.fromTo(
      ".lists-back",
      {
        x: 60,
        rotation: 8,
      },
      {
        x: 0,
        rotation: -5,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".lists-notification",
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
      }
    );

    tl.to({}, {
      duration: 0.8,
    });

    tl.to(".lists", {
      autoAlpha: 0,
      duration: 0,
    });

    /* =================================================
     * WHATSAPP
     * ================================================= */

    tl.to(
      ".whatsapp-phone",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
      },
      "<"
    );

    /*
     * WHATSAPP IMAGE
     * Bottom -> Top
     */

    tl.fromTo(
      ".whatsapp-phone .phone-screen img",
      {
        yPercent: 2,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<"
    );

    /*
     * WhatsApp content
     */

    tl.to(
      ".whatsapp-content",
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
      },
      "<"
    );

    tl.fromTo(
      ".whatsapp-notification",
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0,
      }
    );
  }, storyRef);

  return () => {
    ctx.revert();
  };
}, []);

  return (
    <section className="story" ref={storyRef}>
      <div className="story-inner">

        {/* =================================================
            HOME
        ================================================= */}

        <div className="story-slide home">

          <div className="home-phone phone">
            <img
              className="phone-frame"
              src="/img/phone.webp"
              alt=""
            />
            <div className="shadow">

             </div>
            <div className="phone-screen">
              <img
                src="/img/calendar.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="floating-icon icon1">
            <img src="/img/one.svg" alt="" />
          </div>

          <div className="floating-icon icon2">
            <img src="/img/two.svg" alt="" />
          </div>

          <div className="floating-icon icon3">
            <img src="/img/three.svg" alt="" />
          </div>

          <div className="floating-icon icon4">
            <img src="/img/four.svg" alt="" />
          </div>

          <div className="floating-icon icon5">
            <img src="/img/five.svg" alt="" />
          </div>

          <div className="floating-icon icon6">
            <img src="/img/six.svg" alt="" />
          </div>
          <div className="floating-icon icon7">
            <img src="/img/seven.svg" alt="" />
          </div>

          <div className="floating-icon icon8">
            <img src="/img/three.svg" alt="" />
          </div>
        </div>


        {/* =================================================
            CALENDAR
        ================================================= */}

        <div className="story-slide calendar">

          <div className="slide-content calendar-content">

            <h2>
              One calendar,
              <br />
              the whole family
            </h2>

            <p>
              School runs, clubs, birthdays and appointments,
              colour-coded by person.
            </p>

            <div className="sync">
              <span>Syncs with</span>

              <div className="sync-icons">
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
              </div>
            </div>

          </div>


          <div className="phone-cluster calendar-phones">

            <div className="phone calendar-back">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/calendar-2.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="phone calendar-front">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/calendar.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="notification calendar-notification-top">
              ⚽
              <span>Football - Tue 5pm</span>
            </div>

            <div className="notification calendar-notification-bottom">
              🎂
              <span>Grandma's birthday - Sun</span>
            </div>

          </div>

        </div>


        {/* =================================================
            CHORES
        ================================================= */}

        <div className="story-slide chores">

          <div className="slide-content chores-content">

            <h2>
              Chores kids
              <br />
              actually do
            </h2>

            <p>
              Routines and quests with stars to earn and treats
              to spend. Beds get made, teeth get brushed, and
              nobody nags.
            </p>

          </div>


          <div className="phone-cluster chores-phones">

            <div className="phone chores-back">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/task.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="phone chores-front">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/rewards.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="notification chores-notification">
              👕
              <span>Wash laundry</span>
              <b>✓</b>
            </div>

          </div>

        </div>


        {/* =================================================
            MEALS
        ================================================= */}

        <div className="story-slide meals">

          <div className="slide-content meals-content">

            <h2>
              A week of dinners
              <br />
              in minutes
            </h2>

            <p>
              Plan the week from your family recipe box,
              and every ingredient lands on the shopping list
              by itself.
            </p>

          </div>


          <div className="phone-cluster meals-phones">

            <div className="phone meals-back">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/meal-plan.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="phone meals-front">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/recipie.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="notification meals-notification">
              ✨
              <span>Easy dinner tonight?</span>
            </div>

          </div>

        </div>


        {/* =================================================
            LISTS
        ================================================= */}

        <div className="story-slide lists">

          <div className="slide-content lists-content">

            <h2>
              Lists that keep
              <br />
              everyone in sync
            </h2>

            <p>
              To-dos and shopping, shared in real time.
              Add it the moment you think of it, sorted before
              you forget.
            </p>

          </div>


          <div className="phone-cluster lists-phones">

            <div className="phone lists-back">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/list-2.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="phone lists-front">
              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/lists.jpg"
                  alt=""
                />
              </div>
            </div>


            <div className="notification lists-notification">
              🍓
              <span>Strawberries</span>
              <b>✓</b>
            </div>

          </div>

        </div>


        {/* =================================================
            WHATSAPP
        ================================================= */}

        <div className="story-slide whatsapp">

          <div className="slide-content whatsapp-content">

            <h2>
              Manage it all
              <br />
              in WhatsApp
            </h2>

            <p>
              Message Housemate like a friend. It adds the
              event, updates the list and answers back
              in seconds.
            </p>

          </div>


          <div className="single-phone whatsapp-phone">

            <div className="phone">

              <img
                className="phone-frame"
                src="/img/phone.webp"
                alt=""
              />

              <div className="phone-screen">
                <img
                  src="/img/chat.jpg"
                  alt=""
                />
              </div>

            </div>


            <div className="notification whatsapp-notification">
              ✓
              <span>Added to calendar</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}