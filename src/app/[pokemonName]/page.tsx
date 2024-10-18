import { getPokemonInfo } from '@/api/apidata'

import Image from 'next/image'

export default async function PokemonPage({
  params
}: {
  params: { pokemonName: string }
}) {
  const pokemonName = params.pokemonName
  const especificPokemon = await getPokemonInfo(pokemonName)

  const { stats } = especificPokemon

  return (
    <div className="w-screen flex items-center flex-col">
      <Image
        src={especificPokemon.sprites.front_default}
        alt="Pokemon Image"
        width={200}
        height={200}
        priority
      ></Image>
      <p>Weight: {especificPokemon.weight}</p>

      {stats.map(({ base_stat, stat }) => (
        <div className="flex">
          <h1>{stat.name}: </h1>
          <h1>{base_stat}</h1>
        </div>
      ))}
    </div>
  )
}
