function Phonetics({ phonetics }) {
  const playSound = () => {
    const audio = new Audio(phonetics.audio)
    audio.play()
  }
  return (
    <div>
      <h3>Phonetics</h3>
      <div>{phonetics.text}</div>
      <button onClick={playSound}>Play sound</button>
    </div>
  )
}

export default Phonetics
