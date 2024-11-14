import React, { useState, useEffect } from 'react';
import TrackList from './components/trackList.jsx';
import TrackForm from './components/trackForm.jsx';
// import NowPlaying from './components/nowPlaying.jsx';


const App = () => {
  const [tracks, setTracks] = useState([])
  const [trackToEdit, setTrackToEdit] = useState(null)

  const handleAddTrack = (track) => {
    const newTrack = {
      id: Date.now(),
      ...track,
    }
    setTracks([...tracks, newTrack])
  }

  const handleDeleteTrack = (id) => {
    const filteredTracks = tracks.filter((track) => track.id !== id)
    setTracks(filteredTracks)
  }

  const handleEditTrack = (id) => {
    const track = tracks.find((t) => t.id === id)
    setTrackToEdit(track)
  }

  const handleUpdateTrack = (updatedTrack) => {
    const updatedTracks = tracks.map((track) =>
      track.id === updatedTrack.id ? updatedTrack : track
    )
    setTracks(updatedTracks)
    setTrackToEdit(null)
  }

  return (
    <div id="app">
      <h1>React Jukebox</h1>
      <TrackForm onSubmit={trackToEdit ? handleUpdateTrack : handleAddTrack} trackToEdit={trackToEdit} />
      <TrackList
        tracks={tracks}
        onDelete={handleDeleteTrack}
        onEdit={handleEditTrack}
        onPlay={() => {}}
      />
    </div>
  )
}

export default App
