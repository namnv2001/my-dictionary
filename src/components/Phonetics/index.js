import { AiOutlineSound } from 'react-icons/ai'

import styles from './style.module.scss'

function Phonetics({ phonetics }) {
  const playSound = () => {
    const audio = new Audio(phonetics.audio)
    audio.play()
  }
  return (
    <div className={'w-3/12'}>
      {phonetics && (
        <div>
          <h3>Phonetics</h3>
          <div className={'flex gap-4 items-center'}>
            <div className={'-mt-2'}>{phonetics.text}</div>
            {phonetics.audio && (
              <button onClick={playSound} className={styles.btn}>
                <AiOutlineSound className={styles.icon} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Phonetics
