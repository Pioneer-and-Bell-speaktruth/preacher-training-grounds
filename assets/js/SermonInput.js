import React from "react";

export default function SermonInput({ value, onChangeText, placeholder }) {
  return (
    <textarea
      style={styles.input}
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      placeholder={placeholder}
    />
  );
}

const styles = {
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    minHeight: 60,
    marginBottom: 15,
    width: "100%",
    fontSize: 16,
    border: "1px solid #ddd",
    resize: "vertical",
  },
};
