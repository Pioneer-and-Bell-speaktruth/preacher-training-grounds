import React from "react";

/**
 * PWA‑compatible Audio Bible Player
 * Uses HTML5 <audio> instead of expo-av
 */
export default function AudioBiblePlayer({ book, chapter, version }) {
  const baseUrl =
    version === "KJV"
      ? "https://www.audiotreasure.com/KJV"
      : "https://www.audiotreasure.com/ASV";

  const audioUrl = `${baseUrl}/${book}/${book}_${chapter}.mp3`;

  function playAudio() {
    const audioElement = document.getElementById(`audio-${book}-${chapter}`);
    if (audioElement) {
      audioElement.play();
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.label}>{version} Audio</div>

      {/* Hidden audio element (HTML5) */}
      <audio id={`audio-${book}-${chapter}`} src={audioUrl} preload="none" />

      <button style={styles.button} onClick={playAudio}>
        <span style={styles.buttonText}>
          Play {book} {chapter}
        </span>
      </button>
    </div>
  );
}

const styles = {
  container: { marginTop: 10 },

  label: { fontSize: 16, fontWeight: 700, marginBottom: 5 },

  button: {
    backgroundColor: "#1e3a8a",
    padding: 10,
    borderRadius: 8,
    cursor: "pointer",
    border: "none",
    width: "100%",
    textAlign: "center",
  },

  buttonText: { color: "#fff", fontWeight: 700 },
};
