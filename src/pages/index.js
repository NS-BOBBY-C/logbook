import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const pageOneParallaxBackground = Array.from({ length: 8 }).map(
  (_, index) => `/img/parallax/layer_0${index + 1}.png`
);

const goals = [
  "On June 11th 2022, I’d like to run the Portland Half Marathon in less than two hours.",
  "On September 1st, 2022, I'd like to reach 1000 ELO on chess.com",
  "During the year 2022, I want to call people instead of texting more",
  "During the year 2022, I want to ask other people for help instead of relying on my own research on the internet",
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const parallax = useRef();

  return (
    <div>
      <Parallax pages={3} ref={parallax}>
        <ParallaxLayer offset={0} factor={3}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--ifm-color-primary-contrast-foreground)",
            }}
          >
            <h2 style={{ color: "var(--ifm-color-primary)" }}>Current Goals</h2>
          </div>
        </ParallaxLayer>
        {/* Background */}
        <ParallaxLayer
          style={{
            backgroundColor: "var(--ifm-color-primary)",
          }}
        />

        <ParallaxLayer speed={0.2}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white" }}>Robert J. Colley</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.6}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <img src={"/img/me.png"} alt="me" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", marginTop: 100, textAlign: "center" }}>
              Developer, blogger, leader, brother, soccer-player, runner,
              advisor, weight-lifter, chess-player, son, skiier, friend.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <div
            style={{
              display: "flex",
              width: "50%",
              marginLeft: "50%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
              padding: 16,
            }}
          >
            {goals.map((item) => (
              <h3>{item}</h3>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundColor: "var(--ifm-color-primary)",
          }}
        />

        {/* Bottom parallax  */}
        {pageOneParallaxBackground.reverse().map((item, index) => (
          <ParallaxLayer
            key={"image" + index}
            offset={2}
            speed={index}
            style={{
              backgroundImage: `url(${item})`,
              backgroundSize: "cover",
            }}
          />
        ))}

        <ParallaxLayer offset={2}>
          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "1rem",
              }}
            >
              <button
                onClick={() => parallax.current.scrollTo(0)}
                style={{
                  background: "transparent",
                  border: "1px solid white",
                  padding: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "5px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Return to top
              </button>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <a
                href="blog"
                style={{
                  backgroundColor: "#ffffff88",
                  border: "5px solid white",
                  padding: "10px",
                  boxShadow: `1px 2px 2px hsl(220deg 60% 50% / 0.2), 2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2), 8px 16px 16px hsl(220deg 60% 50% / 0.2), 16px 32px 32px hsl(220deg 60% 50% / 0.2);`,
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "black",
                  fontSize: "2em",
                  zIndex: 100,
                }}
              >
                <b>Welcome to my Blog!</b>
              </a>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
