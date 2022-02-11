function Definition({ definitions }) {
  return (
    <div>
      <h3>Definitions</h3>
      {definitions.map((def, index) => (
        <div key={index}>
          <div>
            {index + 1}: {def.definition}
          </div>
          {def.example && <div>Example: {def.example}</div>}
          {def.antonyms[0] && <div>Antonyms: {def.antonyms.join(', ')}</div>}
          {def.synonyms[0] && <div>Synonyms: {def.synonyms.join(', ')}</div>}
        </div>
      ))}
    </div>
  )
}

export default Definition
