import PokeCard from './pokecard'
import { getAll } from '@/api/apidata'

const allPokemon = await getAll();

export default function PokeGrid() {
  return (
    <div className=" grid grid-cols-3 gap-8">
      {allPokemon.map((pokemon: any) => {
        return <PokeCard name={pokemon.name} />
      })}
    </div>
  )
}
