import PokeCard from './pokecard'
import { getAll } from '@/api/apidata'

const allPokemon = await getAll();

export default function PokeGrid() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      {allPokemon.map((pokemon: any) => {
        return <PokeCard name={pokemon.name} />
      })}
    </div>
  )
}
