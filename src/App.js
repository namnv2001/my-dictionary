import Search from 'components/Search'
import Meaning from 'components/Meaning'
import { useState } from 'react'

function App() {
  const [meaning, setMeaning] = useState(undefined)
  const [errorResponse, setErrorResponse] = useState(undefined)

  return (
    <div className={'bg-gray-200 flex items-center justify-center h-screen'}>
      <div
        className={
          'bg-white rounded-md shadow-md p-16 w-md max-h-4/5 overflow-hidden'
        }
      >
        <Search setMeaning={setMeaning} setErrorResponse={setErrorResponse} />
        <Meaning
          meaning={meaning}
          errorResponse={errorResponse}
          setMeaning={setMeaning}
          setErrorResponse={setErrorResponse}
        />
      </div>
    </div>
  )
}

export default App
