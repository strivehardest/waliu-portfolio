import { useEffect, useRef, useState } from "react";

const TYPING_SPEED = 60;
const PAUSE = 1200;

export default function TypingEffect({ phrases, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    if (!deleting && charIdx < phrase.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(phrase.slice(0, charIdx + 1));
        setCharIdx((i) => i + 1);
      }, TYPING_SPEED);
    } else if (!deleting && charIdx === phrase.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), PAUSE);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(phrase.slice(0, charIdx - 1));
        setCharIdx((i) => i - 1);
      }, TYPING_SPEED / 2);
    } else if (deleting && charIdx === 0) {
      timeoutRef.current = setTimeout(() => {
        setPhraseIdx((i) => (i + 1) % phrases.length);
        setDeleting(false);
      }, 500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-2 h-6 bg-blue-500 align-bottom animate-pulse ml-1" style={{borderRadius:2}} />
    </span>
  );
}
