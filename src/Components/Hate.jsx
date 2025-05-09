import React from "react";
import { useState, useEffect, useRef } from "react";
import Rain from "./Rain";

const Hate = () => {
  const wrapperRef = useRef(null);
  const [flash, setFlash] = useState(false);
  const [fadeIntro, setFadeIntro] = useState(false);
  const [poems, setPoems] = useState(false);

  const handleClick = () => {
    setFadeIntro(true);
    setTimeout(() => setPoems(true), 500);
  };

  useEffect(() => {
    const flashInterval = setInterval(() => {
      const delay = Math.random() * 10000 + 5000;
      setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 100);
      }, delay);
    }, 15000);

    return () => clearInterval(flashInterval);
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className="hate-section"
        id="hate-section"
        style={{ position: "relative", height: "100vh", zIndex: 1 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: flash ? "white" : "transparent",
            transition: "background-color 0.1s",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <Rain containerRef={wrapperRef} style={{ position: "absolute" }} />
        {!poems && (
          <div
            className="hate-content"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h1>The Ashen Vale</h1>
            <p>
              As your journey through the enchanted map unfolds, your eyes
              wander to a less-trodden path—one almost hidden in the folds of
              time. Its trail is not bathed in light, nor framed by blossoms.
              Instead, it winds through scorched earth and smoldering silence,
              beneath a sky heavy with unspoken storms. You hesitate. But
              something within you stirs—curiosity, maybe, or a need to
              understand the fire that sometimes burns behind the smile, the
              wound beneath the calm. This is The Ashen Vale. A realm forged not
              of peace or beauty, but of raw, unfiltered emotion. Here, the
              verses do not whisper—they roar. They confront. They bleed. This
              is where anger finds its voice, where betrayal writes its name,
              where resentment is not hidden, but examined. It is not an easy
              walk, nor a gentle one. But for those who dare to face the shadows
              within, The Ashen Vale offers clarity in the chaos—a poetry that
              does not ask for forgiveness, only to be heard. So, if you are
              ready, step carefully. The poems that follow are not meant to
              soothe, but to spark.
            </p>
            <button onClick={handleClick}>Read</button>
          </div>
        )}
        {poems && (
            <div className="hate-poems">
                <a href="https://www.instagram.com/p/CkoTbOwoUj2/" target="_blank">It was never love...</a>
                <a href="https://www.instagram.com/p/C3v0cfoyw2K/?img_index=1" target="_blank">Seven Deadly Insects</a>
                <a href="https://www.instagram.com/p/C5ehU--IBSL/?img_index=1" target="_blank">Why to grieve when you could Fly</a>
                <a href="https://www.instagram.com/p/C50kfVCvgIZ/?img_index=1" target="_blank">Black Pit of Emptiness</a>
                <a href="https://www.instagram.com/p/DGdtfUlIHJ7/?img_index=1" target="_blank">If thoughts could Kill</a>
            </div>
        )}
      </div>
    </>
  );
};

export default Hate;
