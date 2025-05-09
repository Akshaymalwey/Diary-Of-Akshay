import React, { useEffect, useState, useRef } from "react";

const Love = () => {
  const [hearts, setHearts] = useState([]);
  const loveRef = useRef(null);
  const colours = ["#AC1754", "#E53888", "#F37199", "#F7A8C4"];
  const fallings = ["fall1", "fall2", "fall3", "fall4", "fall5", "fall6"];

  const [fadeIntro, setFadeIntro] = useState(false);
  const [poems, setPoems] = useState(false);

  const handleClick = () => {
    setFadeIntro(true);
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
        <div className={`love-content ${fadeIntro ? "hidden" : ""}`}>
          <h1>The Heart’s Garden</h1>
          <p>
            As your fingers trace the ancient map once more, your gaze is drawn
            to a gentle glow—warm, inviting, almost alive. A cobblestone path,
            edged with climbing roses and dew-kissed ivy, winds softly into the
            distance. The air grows sweeter here, thick with the scent of
            blooming jasmine and the hush of tender promises. You follow the
            trail, your footsteps light, your heart stirred by something you
            cannot quite name. Welcome to The Heart’s Garden. This is where love
            dwells—not just in the grand declarations or stolen kisses, but in
            the quiet glances, the trembling beginnings, the aching goodbyes. In
            this realm, the sun never fully sets, casting everything in a
            perpetual golden hour. The breeze carries the laughter of shared
            memories and the hush of unspoken dreams. Every poem here is a petal
            pressed between pages, a fragment of longing, joy, heartbreak, or
            hope. They are not always soft—sometimes love arrives like thunder
            before the rain—but each verse grows from a place of truth, rooted
            in the most vulnerable parts of the soul. So wander freely. Pluck a
            verse like a flower. Let your heart break a little, and bloom again.
            The Heart’s Garden awaits—with arms open, and pages turning.
          </p>
          <button onClick={handleClick}>Read</button>
        </div>
      )}
      {poems && (
        <div className="love-poems">
          <a href="https://www.instagram.com/p/C2vTba6ywzn/" target="_blank">
            Petrichor Smell
          </a>
          <a href="https://www.instagram.com/p/C4j_0LbvQJC/" target="_blank">
            The Sweet Season
          </a>
          <a
            href="https://www.instagram.com/p/C5ItQW4vstw/?img_index=1"
            target="_blank"
          >
            I Hope To See You Again
          </a>
          <a
            href="https://www.instagram.com/p/C6PDGTcv6v3/?img_index=1"
            target="_blank"
          >
            Here's a Guide to Write about Love
          </a>
          <a
            href="https://www.instagram.com/p/C8VQdM2o-I0/?img_index=1"
            target="_blank"
          >
            In Love with the Idea of You
          </a>
          <a href="https://www.instagram.com/p/DAWrZFool3S/" target="_blank">
            It's love if...
          </a>
          <a
            href="https://www.instagram.com/p/DH60iXSoyMn/?img_index=1"
            target="_blank"
          >
            The Love (Three Pieces)
          </a>
        </div>
      )}
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
