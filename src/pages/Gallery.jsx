import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [players, setPlayers] = useState([]);

  const totalPlayers = players.length;
  const avgSpeed = players.length
  ? (players.reduce((sum, p) => sum + Number(p.speed), 0) / players.length).toFixed(1)
  : 0;

  const positionCounts = players.reduce((acc, player) => {
  acc[player.position] = (acc[player.position] || 0) + 1;
  return acc;
  }, {});

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching players:", error);
      } else {
        setPlayers(data);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="gallery-container">
      <div className="summary-stats">
        <h2>Squad Summary</h2>
        <p><strong>Total Players:</strong> {totalPlayers}</p>
        <p><strong>Average Speed:</strong> {avgSpeed} mph</p>
        <p><strong>Positions:</strong></p>
        <ul>
            {Object.entries(positionCounts).map(([pos, count]) => (
            <li key={pos}>{pos}: {count}</li>
            ))}
        </ul>
       </div>
      <h2 className="gallery-heading">Your Squad</h2>
      <div className="gallery-grid">
        {players.map((player) => (
          <div key={player.id} className="gallery-card">
            <h3>{player.name}</h3>
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>Speed:</strong> {player.speed} mph</p>
            <p><strong>Country:</strong> {player.country}</p>
            <div className="gallery-actions">
              <Link className="view-link" to={`/players/${player.id}`}>View</Link>
              <Link className="edit-link" to={`/players/${player.id}/edit`}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
