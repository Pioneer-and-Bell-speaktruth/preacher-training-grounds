import React from "react";

export default function SecondaryButton({ title, onPress }) {
  return (
    <button style={styles.button} onClick={onPress}>
      <span style={styles.text}>{title}</span>
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: "#34495e",
    padding: 15,
    borderRadius: 10,
    margin: "10px 0",
    cursor: "pointer",
    border: "none",
    width: "100%",
  },

  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
  },
};
