import styles from './style.module.scss'

function Synonyms({ synonyms, navigate }) {
  return (
    <div>
      Synonyms:{' '}
      {synonyms.map((synonym, index) => (
        <span key={index}>
          <span className={styles.word} onClick={(e) => navigate(e)}>
            {synonym}
          </span>
          <span> | </span>
        </span>
      ))}
    </div>
  )
}

export default Synonyms
