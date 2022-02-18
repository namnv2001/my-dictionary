import Definition from 'components/Definitions'
import Phonetics from 'components/Phonetics'

import { MdError } from 'react-icons/md'

function Meaning({ meaning, errorResponse }) {
  return (
    <>
      {errorResponse && (
        <div className={'mt-6'}>
          <h3 className={'text-red-600 flex items-center gap-2'}>
            <MdError className={'text-3xl'} />
            Error: {errorResponse.title}
          </h3>
          <div className={'text-sm'}>{errorResponse.message}</div>
          <div className={'text-sm'}>{errorResponse.resolution}</div>
        </div>
      )}
      {meaning && (
        <div className={'mt-4'}>
          <h1 className={'capitalize'}>{meaning.word}</h1>
          {meaning.origin && (
            <div className={'italic text-sm'}>Origin: {meaning.origin}</div>
          )}
          <div className={'flex mt-4 gap-2'}>
            <Definition definitions={meaning.meanings[0].definitions} />
            <Phonetics phonetics={meaning.phonetics[0]} />
          </div>
        </div>
      )}
    </>
  )
}

export default Meaning
