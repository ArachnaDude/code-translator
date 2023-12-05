"use client";

import { translate } from "./morseLookup";
import useHover from "./useHover";

export default function Home() {
  const {
    isHovered: isHoveredH2,
    handleMouseEnter: handleMouseEnterH2,
    handleMouseLeave: handleMouseLeaveH2,
  } = useHover();

  const {
    isHovered: isHoveredButton,
    handleMouseEnter: handleMouseEnterButton,
    handleMouseLeave: handleMouseLeaveButton,
  } = useHover();

  const englishText = "Morse Code Translator";
  const morseText = translate(englishText);

  const buttonText = "submit";
  const morseButton = translate(buttonText);

  return (
    <main>
      <h2
        className="morse-code"
        onMouseEnter={handleMouseEnterH2}
        onMouseLeave={handleMouseLeaveH2}
      >
        {isHoveredH2 ? morseText : englishText}
      </h2>
      <p>Hello World</p>

      <button
        onMouseEnter={handleMouseEnterButton}
        onMouseLeave={handleMouseLeaveButton}
      >
        {isHoveredButton ? morseButton : buttonText}
      </button>
    </main>
  );
}
