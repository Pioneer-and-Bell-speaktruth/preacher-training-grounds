import React from "react";

export default function VerseCard({ verse, onPress }) {
  return (
    <div style={styles.card} onClick={onPress}>
      <div style={styles.ref}>{verse.ref}</div>
      <div style={styles.theme}>{verse.theme}</div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.15)", // replaces RN elevation
  },

  ref: {
    fontSize: 18,
    fontWeight: 700,
  },

  theme: {
    fontSize: 14,
    color: "#555",
  },
};
