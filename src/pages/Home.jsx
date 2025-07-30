import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page" style={styles.container}>
      <h1 style={styles.title}>Welcome to Ultimate Football XI! ⚽</h1>
      <p style={styles.subtitle}>
        Here you can build your dream football team — pick your players, set their positions, and dominate the field!
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3448/3448559.png"
        alt="Team Illustration"
        style={styles.image}
      />

      <div style={styles.buttonRow}>
        <Link to="/create" style={styles.button}>Create Player</Link>
        <Link to="/gallery" style={styles.button}>View Squad</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  image: {
    width: '300px',
    marginBottom: '2rem',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  button: {
    backgroundColor: '#1e90ff',
    color: 'white',
    padding: '1rem 2rem',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
  },
};

export default Home;
