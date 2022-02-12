import useAxios from 'hooks/useAxios'
import Synonyms from 'components/Synonyms'
import Antonyms from 'components/Antonyms'

function Definition({ setErrorResponse, setMeaning, definitions }) {
  const { receiveData } = useAxios({ setMeaning, setErrorResponse })
  const navigate = (e) => {
    receiveData(e.target.innerText)
  }

  return (
    <div className={'w-9/12'}>
      <h3>Definitions</h3>
      <div className={'h-48 overflow-auto'}>
        {definitions.map((def, index) => (
          <div key={index} className={'text-sm'}>
            <div className={'font-semibold'}>
              {index + 1}: {def.definition}
            </div>
            {def.example && <div>Example: {def.example}</div>}
            {def.antonyms[0] && (
              <Antonyms antonyms={def.antonyms} navigate={navigate} />
            )}
            {def.synonyms[0] && (
              <Synonyms synonyms={def.synonyms} navigate={navigate} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Definition
