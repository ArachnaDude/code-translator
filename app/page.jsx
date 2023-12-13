"use client";

import { translate } from "./morseLookup";
import useHover from "./useHover";
import { useState } from "react";

export default function Home() {
  const {
    isHovered: isHoveredH2,
    handleMouseEnter: handleMouseEnterH2,
    handleMouseLeave: handleMouseLeaveH2,
  } = useHover();

  const {
    isHovered: isHoveredSubmitButton,
    handleMouseEnter: handleMouseEnterSubmitButton,
    handleMouseLeave: handleMouseLeaveSubmitButton,
  } = useHover();

  const {
    isHovered: isHoveredClearButton,
    handleMouseEnter: handleMouseEnterClearButton,
    handleMouseLeave: handleMouseLeaveClearButton,
  } = useHover();

  const englishText = "Morse Code Translator";
  const morseText = translate(englishText);

  const buttonSubmitText = "submit";
  const morseSubmitButton = translate(buttonSubmitText);

  const buttonClearText = "clear";
  const morseClearButton = translate(buttonClearText);

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(translate(input));
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <main>
      <h2
        className="text-5xl"
        onMouseEnter={handleMouseEnterH2}
        onMouseLeave={handleMouseLeaveH2}
      >
        {isHoveredH2 ? morseText : englishText}
      </h2>
      <p>Translate English into Morse Code</p>

      <form>
        <label htmlFor="translator"></label>
        <textarea
          className="border-4"
          id="translator"
          rows="4"
          cols="50"
          placeholder="Type your message in here, and see it translated to Morse Code!"
          value={input}
          onChange={handleChange}
        ></textarea>{" "}
        <br />
        <button
          onClick={handleSubmit}
          onMouseEnter={handleMouseEnterSubmitButton}
          onMouseLeave={handleMouseLeaveSubmitButton}
        >
          {isHoveredSubmitButton ? morseSubmitButton : buttonSubmitText}
        </button>
        <button
          onClick={handleClear}
          onMouseEnter={handleMouseEnterClearButton}
          onMouseLeave={handleMouseLeaveClearButton}
        >
          {isHoveredClearButton ? morseClearButton : buttonClearText}
        </button>
      </form>
    </main>
  );
}
