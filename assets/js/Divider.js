import React from "react";

export default function Divider() {
  return <div style={styles.divider} />;
}

const styles = {
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    margin: "15px 0",
    width: "100%",
  },
};
