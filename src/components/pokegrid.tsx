import PokeCard from './pokecard'

interface prop {
  pokemonList: any
}

export default function PokeGrid({ pokemonList }: prop) {
  return (
    <div className=" grid grid-cols-3 gap-8">
      {pokemonList.map((pokemon: any) => {
        return <PokeCard name={pokemon.name} />
      })}
    </div>
  )
}
