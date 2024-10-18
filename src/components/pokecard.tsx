interface prop {
  name: string
}

export default function PokeCard ({name}: prop) {
  return (
    <div className="w-96 h-40 border-2 border-yellow-300 ">
      <h2>{name}</h2>
    </div>
  )
}