import styles from './style.module.scss'

function Antonyms({ antonyms, navigate }) {
  return (
    <div>
      Antonyms:{' '}
      {antonyms.map((antonym, index) => (
        <span key={index}>
          <span className={styles.word} onClick={(e) => navigate(e)}>
            {antonym}
          </span>
          <span> | </span>
        </span>
      ))}
    </div>
  )
}

export default Antonyms
