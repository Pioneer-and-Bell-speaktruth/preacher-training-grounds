import React from "react";

export default function EmptyState({ title, subtitle }) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      {subtitle && <div style={styles.subtitle}>{subtitle}</div>}
    </div>
  );
}

const styles = {
  container: {
    padding: 40,
    textAlign: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
  },
};
