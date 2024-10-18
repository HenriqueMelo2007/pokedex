interface prop {
  name: string
}

export default function PokeCard ({name}: prop) {
  return (
    <div className="pt-3 pl-3 w-80 h-28 border-2 border-yellow-300 rounded-2xl">
      <h2 className="font-geist text-yellow-300" >{name}</h2>
    </div>
  )
}