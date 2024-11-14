import React, { useState } from "react"

const TrackForm = ({ onSubmit, trackToEdit }) => {
  const [title, setTitle] = useState(trackToEdit ? trackToEdit.title : "")
  const [artist, setArtist] = useState(trackToEdit ? trackToEdit.artist : "")
  const [releaseYear, setReleaseYear] = useState(trackToEdit ? trackToEdit.releaseYear : "")
  const [posterImage, setPosterImage] = useState(trackToEdit ? trackToEdit.posterImage : "")

  const handleSubmit = (e) => {
    e.preventDefault()
    const track = { title, artist, releaseYear, posterImage }
    onSubmit(track)
    setTitle("")
    setArtist("")
    setReleaseYear("")
    setPosterImage("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{trackToEdit ? "Edit Track" : "Add New Track"}</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Song Title"
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist Name"
        />
      </label>
      <label>
        Release Year:
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
        />
      </label>
      <label>
        Poster Image URL:
        <input
          type="text"
          value={posterImage}
          onChange={(e) => setPosterImage(e.target.value)}
          placeholder="Image URL"
        />
      </label>
      <button type="submit">{trackToEdit ? "Update Track" : "Add Track"}</button>
    </form>
  )
}

export default TrackForm

