import React, { createContext, useState, useEffect } from "react";

// ---------------------------------------------------------
// GREEK WORD OF THE DAY (Option A: Date-Based Rotation)
// ---------------------------------------------------------

export const GreekWordContext = createContext();

const GREEK_WORDS = [
  {
    word: "λόγος (logos)",
    meaning: "word, message, reason",
    strongs: "G3056",
    notes: "Used of Jesus as the divine Word (John 1:1).",
  },
  {
    word: "ἀγάπη (agapē)",
    meaning: "selfless, sacrificial love",
    strongs: "G26",
    notes: "The highest form of love; God's love for mankind.",
  },
  {
    word: "πίστις (pistis)",
    meaning: "faith, trust, belief",
    strongs: "G4102",
    notes: "Often refers to saving faith or faithfulness.",
  },
  {
    word: "χάρις (charis)",
    meaning: "grace, favor, kindness",
    strongs: "G5485",
    notes: "God’s unmerited favor toward humanity.",
  },
  {
    word: "ἐκκλησία (ekklesia)",
    meaning: "assembly, church",
    strongs: "G1577",
    notes: "Refers to the called-out people of God.",
  },
  // Add more anytime — the system auto-rotates
];

export default function GreekWordProvider({ children }) {
  const [wordOfTheDay, setWordOfTheDay] = useState(null);

  useEffect(() => {
    const today = new Date().getDate(); // 1–31
    const index = today % GREEK_WORDS.length;
    setWordOfTheDay(GREEK_WORDS[index]);
  }, []);

  return (
    <GreekWordContext.Provider value={{ wordOfTheDay }}>
      {children}
    </GreekWordContext.Provider>
  );
}
