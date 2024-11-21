import { useState } from "react"

const TrackForm = ({ handleAddTrack, selected, handleUpdateTrack }) => {
  const initialState = {
    title: " ",
    artist: " "
  }

  const [formData, setFormData] = useState(selected ? selected : initialState);
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault()
    if (selected) {
      handleUpdateTrack(formData, selected._id)
    } else {
      handleAddTrack(formData)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">{selected ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
}

export default TrackForm

