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
  const [input, setInput] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Append current key to the input array.
      setInput((prevInput) => {
        // Create a new array of inputs; if length exceeds, shift off the oldest.
        const newInput = [...prevInput, e.key].slice(-KONAMI_CODE.length);
        // Check if the entered sequence matches the Konami code.
        if (newInput.join("") === KONAMI_CODE.join("")) {
          router.push("/purpose");
        }
        return newInput;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);
}
