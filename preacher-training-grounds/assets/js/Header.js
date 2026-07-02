import React from "react";

export default function Header({ children }) {
  return <h1 style={styles.header}>{children}</h1>;
}

const styles = {
  header: {
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
};
