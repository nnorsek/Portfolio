"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  pauseTime = 1500,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-baseline gap-[3.9px]">
      <span className="text-emerald-500 font-bold">{text}</span>
      <span className="w-[2px] h-[1em] bg-emerald-500 animate-blink" />
    </span>
  );
};

export default Typewriter;
