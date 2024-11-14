import React from "react"

const TrackList = ({ tracks, onDelete, onEdit, onPlay }) => {
  return (
    <ul className="track-list">
      {tracks.map((track) => (
        <li key={track.id} className="track-item">
          <div>
            <h3>{track.title}</h3>
            <p>Artist: {track.artist}</p>
            <p>Release Year: {track.releaseYear}</p>
            <img src={track.posterImage} alt={track.title} className="track-image" />
          </div>
          <div>
            <button onClick={() => onPlay(track.id)}>Play</button>
            <button onClick={() => onEdit(track.id)}>Edit</button>
            <button onClick={() => onDelete(track.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TrackList


