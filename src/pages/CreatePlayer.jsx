import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import './CreatePlayer.css';

const CreatePlayer = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !speed || !position) {
      alert('Please fill in all required fields.');
      return;
    }

    const { error } = await supabase.from('players').insert([
      {
        name,
        speed: parseInt(speed),
        position,
        country,
      },
    ]);

    if (error) {
      alert('Error creating player: ' + error.message);
    } else {
      navigate('/gallery');
    }
  };

  return (
    <div className="create-container">
      <div className="create-inner">
        <h2 className="create-heading">Create a New Player</h2>

        <img
          className="team-illustration"
          src="https://cdn-icons-png.flaticon.com/512/3448/3448559.png"
          alt="Team Icon"
        />

        <form onSubmit={handleSubmit} className="create-form">
          <div className="form-section">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter player's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label>Speed (mph):</label>
            <input
              type="number"
              placeholder="Enter speed"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label>Position:</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="">-- Select Position --</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

        <div className="form-section">
            <label>Country:</label>
            <input
            type="text"
            placeholder="e.g. Argentina"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            />
        </div>

          <div className="submit-section">
            <button type="submit">Create Player</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlayer;
