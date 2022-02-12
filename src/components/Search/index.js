import useAxios from 'hooks/useAxios'
import { useForm } from 'react-hook-form'
import { SearchIcon } from '@chakra-ui/icons'

function Search({ setMeaning, setErrorResponse }) {
  const { receiveData } = useAxios({ setMeaning, setErrorResponse })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    receiveData(data.word)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex relative'}>
      <input
        {...register('word', { required: true })}
        placeholder='Enter a word'
        autoComplete='off'
        className={
          'py-2 px-4 rounded-l-full border-gray-500 border-r-0 text-base w-full outline-none focus-visible:outline-none'
        }
      />
      {errors.word?.type === 'required' && (
        <div className={'absolute left-4 -bottom-5 text-sm text-red-600'}>
          This field is required
        </div>
      )}
      <button
        type='submit'
        className={
          'text-2xl py-2 px-4 rounded-r-full border-gray-500 border-l-0 bg-white outline-none'
        }
      >
        <SearchIcon />
      </button>
    </form>
  )
}

export default Search
