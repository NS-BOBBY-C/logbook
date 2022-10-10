import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Landing from "../components/landing";

export default function Index() {
  return (
    <BrowserOnly>
      <Landing />
    </BrowserOnly>
  );
}
