import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 CI/CD Pipeline Working!</h1>
      <p style={styles.text}>
        This React app is automatically built using GitHub Actions and deployed
        using Netlify.
      </p>

      <div style={styles.card}>
        <h2>🔥 What just happened?</h2>
        <ul>
          <li>Code pushed to GitHub</li>
          <li>CI pipeline triggered</li>
          <li>Project built automatically</li>
          <li>Deployed live on Netlify</li>
        </ul>
      </div>

      <p style={styles.footer}>Made by Archit 💻</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#38bdf8",
  },
  text: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "left",
  },
  footer: {
    marginTop: "40px",
    fontSize: "14px",
    opacity: 0.7,
  },
};

export default App;