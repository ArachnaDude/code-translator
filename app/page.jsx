"use client";

import { translate } from "./morseLookup";
import { useState } from "react";

export default function Home() {
  const [isHover, setHover] = useState(false);

  const englishText = "Morse Code Translator";
  const morseText = translate(englishText);

  return (
    <main>
      <h2
        className="morse-code"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {isHover ? morseText : englishText}
      </h2>
      <p>Hello World</p>
    </main>
  );
}
