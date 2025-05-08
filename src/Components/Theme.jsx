import React from "react";
import { useState } from "react";
import love from "../assets/love1.jpg";
import hate from "../assets/hate1.jpg";
import happy from "../assets/happy.jpg";
import sad from "../assets/sad1.jpg";
import life from "../assets/life.jpg";
import death from "../assets/death2.jpg";

const themes = [
  { name: "Love", image: love , href: "#love-section"},
  { name: "Hate", image: hate , href: "#hate-section"},
  { name: "Happiness", image: happy, href: "#happy-section" },
  { name: "Saddness", image: sad , href: "#sad-section"},
  { name: "Life", image: life , href: "#life-section"},
  { name: "Death", image: death, href: "#death-section" },
];

const Theme = () => {
  const [bgImg, setBgImg] = useState(null);
  const [nextBgImg, setNextBgImg] = useState(null);

  const handleHover = (img) => {
    setNextBgImg(img);
    setTimeout(() => {
      setBgImg(img);
      setNextBgImg(null);
    }, 500);
  };

  return (
    <div className="theme-section-wrapper">
      <div
        className="theme-section bg-current"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {nextBgImg && (
        <div
          className="theme-section bg-next"
          style={{
            backgroundImage: `url(${nextBgImg})`,
          }}
        ></div>
      )}

      <div className="theme-content">
        <p>
          In a quiet corner of a timeless, enchanted library, you find yourself
          standing before a grand, ancient map—a map that does not mark places
          on Earth but the secret realms of emotion and imagination. Each
          destination on this map reveals a different facet of human experience
          captured in delicate verses and vibrant poems. The soft glow of
          candlelight dances along its faded edges as if to invite you on a
          journey of discovery.<br></br>
          <br></br>
          As you gaze upon the map, you notice several paths emerging from a
          single crossroads. One path is lined with rose petals and whispers of
          romance—the Heart’s Garden, where every word sings with the delicate
          power of love and longing. Another path disappears into the depths of
          misty woodlands, where shadows and secrets converge to form the
          Echoing Woods, a realm of mystery and hidden tales. A third route
          winds along a babbling brook under a canopy of ancient trees, leading
          to the Verdant Meadows, where nature and the passage of time are
          celebrated in every verse. And yet another trail, marked by the
          bittersweet silhouettes of sunsets and memories, beckons toward the
          Remembrance Alcove, inviting you to revisit stories of loss, hope, and
          renewal.<br></br>
          <br></br>
          In this haven of poetic expression, your journey awaits. Choose the
          path that calls to you—whether you are drawn by the allure of passion,
          the allure of mystery, the vibrancy of nature, or the poignant echo of
          remembrance. Each theme is a doorway to a unique collection of poems,
          crafted to resonate with the particular pulse of your heart.<br></br>
          <br></br>
          Select the theme you want to explore, and let your spirit wander
          freely through the tapestry of stories, as each poem unfolds like a
          chapter in an epic narrative only you can complete.
        </p>
      </div>
      <div className="theme-btns">
        {themes.map((theme) => (
          <a
            key={theme.name}
            className={theme.name.toLowerCase()}
            href={theme.href}
            onMouseEnter={() => handleHover(theme.image)}
            onMouseLeave={() => handleHover(null)}
          >
            {theme.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Theme;

/*
<a href="" id="love">Love</a>
<a href="" id="hate">Hate</a>
<a href="" id="happy">Happiness</a>
<a href="" id="sad">Saddness</a>
<a href="" id="life">Life</a>
<a href="" id="death">Death</a>
*/
