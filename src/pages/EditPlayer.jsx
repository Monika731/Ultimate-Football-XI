import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './EditPlayer.css';

const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);

  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching player:", error);
      } else {
        setPlayer(data);
        setName(data.name);
        setSpeed(data.speed);
        setPosition(data.position);
        setCountry(data.country || '');
      }
    };

    fetchPlayer();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('players')
      .update({ name, speed, position, country })
      .eq('id', id);

    if (error) {
      alert('Error updating player: ' + error.message);
    } else {
      navigate(`/players/${id}`);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this player?');
    if (!confirm) return;

    const { error } = await supabase
      .from('players')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Error deleting player: ' + error.message);
    } else {
      navigate('/gallery');
    }
  };

  if (!player) return <p style={{ color: 'white' }}>Loading player data...</p>;

  return (
    <div className="edit-player-container">
      <h2>Edit Player</h2>
      <form onSubmit={handleUpdate} className="edit-form">

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Speed (mph):</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          required
        />

        <label>Position:</label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        >
          <option value="">-- Select Position --</option>
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Forward">Forward</option>
        </select>

        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <div className="edit-buttons">
          <button type="submit" className="update-btn">Save Changes</button>
          <button type="button" className="delete-btn" onClick={handleDelete}>Delete Player</button>
        </div>
      </form>
    </div>
  );
};

export default EditPlayer;
