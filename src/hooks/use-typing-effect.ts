"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Typing effect hook — cycles through an array of words with
 * a typewriter animation. Uses requestAnimationFrame-friendly
 * setTimeout intervals so it doesn't fight the main thread.
 */
export function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2200
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      return pauseTime;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return typingSpeed;
    }

    setText(
      isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)
    );

    if (!isDeleting && text === currentWord) {
      setIsDeleting(true);
      return pauseTime;
    }

    return isDeleting ? deletingSpeed : typingSpeed;
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    const delay = tick();
    const timeout = setTimeout(() => {
      if (!isDeleting && text === words[wordIndex]) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const currentWord = words[wordIndex];
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime, tick]);

  return text;
}
