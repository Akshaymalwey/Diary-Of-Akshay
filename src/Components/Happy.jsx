import React, { useState, useRef } from "react";
const Happy = () => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);
  const emojies = [
    "🎉",
    "🎊",
    "✨",
    "💫",
    "🌟",
    "🥳",
    "💥",
    "🎈",
    "🎀",
    "🎶",
    "🕺",
    "💃",
    "💖",
    "💗",
    "💓",
    "💞",
    "💘",
    "💝",
    "💌",
    "💕",
    "🐶",
    "🐱",
    "🐰",
    "🐥",
    "🐻",
    "🐼",
    "🦄",
    "🐝",
    "🐧",
    "🐨",
    "🍭",
    "🍬",
    "🍫",
    "🍩",
    "🍪",
    "🍦",
    "🍉",
    "🍓",
    "🍒",
    "🍍",
    "🌞",
    "🌈",
    "🌸",
    "🌻",
    "🌼",
    "🌺",
    "🍀",
    "🌿",
    "🌤️",
    "☀️",
  ];

  const handleButtonClick = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left - 320;
    const centerY = rect.top - 250;

    const newRipples = Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 12) * Math.PI;
      const offsetX = Math.cos(angle) * 500;
      const offsetY = Math.sin(angle) * 500;

      return {
        id: Date.now() + i,
        emoji: emojies[Math.floor(Math.random() * emojies.length)],
        startX: centerX,
        startY: centerY,
        endX: centerX + offsetX,
        endY: centerY + offsetY,
      };
    });

    setRipples((prev) => [...prev, ...newRipples]);
    setTimeout(() => {
      setRipples([]);
    }, 1500);
  };

  return (
    <div className="happy-section" id="happy-section">
      <div className="happy-content">
        <h1>Luminous Grove</h1>
        <p>
          As your eyes drift across the ancient map’s golden inlays, one path
          gleams more brightly than the rest—radiant and warm, as if kissed by
          morning sunlight. Drawn to its glow, you follow the trail, and soon
          the air around you shifts. The quiet hush of the library gives way to
          soft laughter on the breeze, the gentle hum of honeybees, and the
          vibrant flutter of butterflies weaving joy into every moment. Welcome
          to The Luminous Grove. Here, happiness blooms without hesitation. The
          trees sway in a rhythmic dance, their leaves shimmering with hues of
          hope, warmth, and childlike wonder. Every stone along the path hums a
          cheerful tune, and golden petals drift down like blessings from a
          smiling sky. This realm celebrates the simple joys: the thrill of
          first light, the comfort of togetherness, the delight in everyday
          magic. Within this grove, the poems are bright and boundless—verses
          that skip like sunbeams across the heart. They speak of laughter
          shared under open skies, of dreams waking gently into reality, and of
          the strength found in kindness and light. Take a breath. Let the joy
          seep into your soul. In The Luminous Grove, happiness is not
          fleeting—it is a rhythm you remember, a feeling you carry, a melody
          you are meant to sing. Begin your journey here, and let your smile
          lead the way.
        </p>

        <button ref={buttonRef} onClick={handleButtonClick}>
          Read
        </button>

        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="emoji-ripple"
            style={{
              left: ripple.startX,
              top: ripple.startY,
              transform: `translate(${ripple.endX - ripple.startX}px, ${
                ripple.endY - ripple.startY
              }px)`,
            }}
          >
            {ripple.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Happy;
