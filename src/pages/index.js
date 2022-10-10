import React from "react";

const linkStyle = {
  padding: 8,
  color: "white",
};

const links = [
  { title: "Blog", href: "/blog" },
  { title: "Programming Blog", href: "/programming-blog" },
  { title: "Exercise Blog", href: "/exercise-blog" },
  { title: "Chess Blog", href: "/chess-blog" },
];

export default function Index() {
  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "black" }}>
        <h1
          style={{
            color: "white",
            fontSize: 600,
          }}
        >
          RJC
        </h1>
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
