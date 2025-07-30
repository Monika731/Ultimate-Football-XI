import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './PlayerDetail.css';

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching player:", error.message);
      } else {
        setPlayer(data);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) return <p style={{ color: 'white' }}>Loading player...</p>;

  return (
    <div className="player-detail-container">
      <h2 className="player-name">{player.name}</h2>
      <div className="player-info-card">
        <p><strong>Position:</strong> {player.position}</p>
        <p><strong>Speed:</strong> {player.speed} mph</p>
        <p><strong>Country:</strong> {player.country || 'N/A'}</p>
        <p><strong>Created:</strong> {new Date(player.created_at).toLocaleString()}</p>
      </div>

      <div className="player-buttons">
        <Link to={`/players/${player.id}/edit`} className="edit-btn">Edit Player</Link>
        <Link to="/gallery" className="back-btn">← Back to Squad</Link>
      </div>
    </div>
  );
};

export default PlayerDetail;
