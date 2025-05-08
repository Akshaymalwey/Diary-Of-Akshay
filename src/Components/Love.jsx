import { div } from "framer-motion/client";
import React, { useEffect, useState, useRef } from "react";

const Love = () => {
  const [hearts, setHearts] = useState([]);
  const loveRef = useRef(null);
  const colours = ["#AC1754", "#E53888", "#F37199", "#F7A8C4"];
  const fallings = ["fall1", "fall2", "fall3", "fall4", "fall5", "fall6"];

  const [fadeIntro, setFadeIntro] = useState(false);
  const [poems, setPoems] = useState(false);

  const handleClick = () => {
    setFadeIntro(false);
    setTimeout(() => setPoems(true), 500);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heartTop = e.clientY;
      const heartLeft = e.clientX;
      const color = colours[Math.floor(Math.random() * colours.length)];
      const fall = fallings[Math.floor(Math.random() * fallings.length)];

      const newHeart = {
        id: Date.now().toString() + Math.random().toString(),
        top: `${heartTop}px`,
        left: `${heartLeft}px`,
        color: `${color}`,
        animation: `${fall} 1s linear forwards`,
      };

      setHearts((prevHearts) => [...prevHearts, newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, 1000);
    };

    const loveEl = loveRef.current;
    if (loveEl) {
      loveEl.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (loveEl) {
        loveEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={loveRef}
      className="love-section"
      id="love-section"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      {!poems && (
        <div className={`love-content ${fadeIntro ? 'hidden' : ''}`}>
          <h1>Whispers of a Wandering Heart</h1><p>
            In a quiet corner of the universe, where silence holds the loudest
            echoes, a heart once wandered — not in search of someone, but of
            something: a feeling, a spark, a reason to write. It danced between
            stolen glances and unsent messages, bloomed in moonlit solitude, and
            found rhythm in the rain. Along the way, it gathered verses — soft,
            aching, glowing — each one a reflection of what it could never quite
            say aloud. This section is not just about love; it's about the
            moments that led to it. The sighs between sentences, the warmth of
            words unspoken, the beauty of longing. These poems are more than
            just ink on a screen — they are confessions, dreams, and quiet
            revolutions of the heart. So breathe slow, scroll gently, and let
            the petals fall. You’re stepping into a story that still doesn’t
            know how it ends.
          </p><button onClick={handleClick}>Read</button>
        </div>
      )}
      {poems && (
        <div className="love-poems">
          <a href="">Petrichor Smell</a>
          <a href="">The Sweet Season</a>
          <a href="">I Hope To See You Again</a>
          <a href="">Here's a Guide to Write about Love</a>
          <a href="">In Love with the Idea of You</a>
          <a href="">It's love if...</a>
          <a href="">The Love (Three Pieces)</a>
        </div>
      )
      }
      {hearts.map((heart) => (
        <i
          key={heart.id}
          className="fa fa-heart"
          style={{
            position: "absolute",
            top: heart.top,
            left: heart.left,
            color: heart.color,
            animation: heart.animation,
            fontSize: "12px",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default Love;
