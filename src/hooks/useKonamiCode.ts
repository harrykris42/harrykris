"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the Konami code sequence
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function useKonamiCode() {
  const [, setInput] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Append current key to the input array.
      setInput(prev => {
        const keys = [...prev, e.key].slice(-KONAMI_CODE.length)
        if (keys.join('') === KONAMI_CODE.join('')) {
          router.push('/purpose')
        }
        return keys
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);
}
