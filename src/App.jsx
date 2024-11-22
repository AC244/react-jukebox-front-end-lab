
import TrackList from './components/trackList.jsx';
import TrackForm from './components/trackForm.jsx';
import NowPlaying from './components/NowPlaying.jsx';
import { useState, useEffect } from "react"
import * as trackService from './services/trackService'

const App = () => {
  const [trackList, setTrackList] = useState([])
  const [selected, setSelected] = useState(null)
  const [playing, setPlaying] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const getTracks = async () => {
      try {
        const tracks = await trackService.index()
        if (tracks.error) {
          throw new Error(tracks.error)
        }
        setTrackList(tracks)
      } catch (error) {
        console.log(error)
      }
    }
    getTracks()
  }, [])

  const updateSelected = (track) => {
    setSelected(track)
  }

  const handleFormView = (track) => {
    if (!track.title) {
      setSelected(null)
    } else {
      setSelected(track)
    }
    setIsFormOpen(!isFormOpen)
  }
  const updatePlaying = (track) => {
    setPlaying(track)
  }
  const handlePlayingView = (track) => {
    if (!track.title) setSelected(null)
    setPlaying(!playing)
  }

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData)
      if (newTrack.error) {
        throw new Error(newTrack.error);
      }
      setTrackList([newTrack, ...trackList])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.update(formData, trackId)

      if (updatedTrack.error) {
        throw new Error(updatedTrack.error);
      }
      const updatedTrackList = trackList.map((track) =>
        track._id !== updatedTrack._id ? track : updatedTrack
      )
      setTrackList(updatedTrackList)
      setSelected(updatedTrack)
      setIsFormOpen(false)

    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId)
      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      }
      const updatedTrackList = trackList.filter((track) => track._id !== deletedTrack._id)

      setTrackList(updatedTrackList)
      setSelected(null)
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TrackList
        trackList={trackList}
        updateSelected={updateSelected}
        updatePlaying={updatePlaying}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
        handleDeleteTrack={handleDeleteTrack}
      />
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack}
          handleUpdateTrack={handleUpdateTrack}
          selected={selected}
        />
      ) : <NowPlaying
        playing={playing}
        handlePlayingView={handlePlayingView}
      />}

    </>
  )
}

export default App
