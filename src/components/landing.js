import React, { useState, useEffect } from "react";

const linkStyle = {
  padding: 8,
  color: "white",
};

const links = [
  { href: "/blog", title: "Blog" },
  { href: "/exercise-blog", title: "Exercise Blog" },
  { href: "/programming-blog", title: "Programming Blog" },
  { href: "/chess-blog", title: "Chess Blog" },
];

export default function Landing() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "black" }}>
        <h1 style={{ color: "white", fontSize: matches ? 600 : 200 }}>RJC</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            paddingRight: 64,
          }}
        >
          {links.map((item) => (
            <a href={item.href} style={linkStyle} key={item.title}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
