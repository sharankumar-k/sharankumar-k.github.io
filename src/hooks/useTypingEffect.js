import { useEffect, useState } from "react";

/**
 * Cycles through a list of words with a typing / deleting animation,
 * the same effect that used to live in script.js.
 *
 * @param {string[]} words - words to type out, one after another
 * @param {object} [options]
 * @param {number} [options.typingSpeed] - ms between each typed character
 * @param {number} [options.deletingSpeed] - ms between each deleted character
 * @param {number} [options.pauseAfterWord] - ms to pause once a word is fully typed
 * @param {number} [options.pauseBeforeNextWord] - ms to pause after deleting before typing the next word
 */
function useTypingEffect(
  words,
  {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseAfterWord = 1500,
    pauseBeforeNextWord = 500,
  } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    // Word fully typed -> wait, then start deleting.
    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseAfterWord);
      return () => clearTimeout(timeout);
    }

    // Word fully deleted -> move to the next word.
    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pauseBeforeNextWord);
      return () => clearTimeout(timeout);
    }

    // Still typing or still deleting.
    const timeout = setTimeout(
      () => {
        const nextLength = isDeleting ? text.length - 1 : text.length + 1;
        setText(currentWord.slice(0, nextLength));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterWord, pauseBeforeNextWord]);

  return text;
}

export default useTypingEffect;
