import Search from 'components/Search'
import Meaning from 'components/Meaning'
import { useState } from 'react'

function App() {
  const [result, setResult] = useState(undefined)

  return (
    <div className={'bg-gray-200 flex items-center justify-center h-screen'}>
      <div className={'bg-white rounded-md shadow-md p-16 max-w-screen-xl'}>
        <Search setMeaning={setResult} />
        <Meaning meaning={result} />
      </div>
    </div>
  )
}

export default App
