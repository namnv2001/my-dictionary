function Phonetics({ phonetics }) {
  const playSound = () => {
    const audio = new Audio(phonetics.audio)
    audio.play()
  }
  return (
    <div>
      {phonetics && (
        <div>
          <h3>Phonetics</h3>
          <div>{phonetics.text}</div>
          <button onClick={playSound}>Play sound</button>
        </div>
      )}
    </div>
  )
}

export default Phonetics
