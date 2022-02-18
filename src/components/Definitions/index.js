function Definition({ definitions }) {
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Definition
