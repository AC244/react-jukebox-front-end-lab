 const NowPlaying = ({ playing, handlePlayingView })  => {

    return !playing ? ('') : (
      <div >
          <ul>
            <li>Title: {playing.title}</li>
            <li> Artist:{playing.artist}</li>
            <button onClick={handlePlayingView}>Stop Playing</button>
          </ul>
      </div>
  
    )
  }
  export default NowPlaying