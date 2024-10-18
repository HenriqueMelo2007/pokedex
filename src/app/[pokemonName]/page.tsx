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
        width={240}
        height={240}
        priority
      ></Image>
      <div className='grid grid-cols-3 gap-8 -mt-3'>
        <p className='font-geist2 text-2xl' >Weight: {especificPokemon.weight}</p>
        {stats.map(({ base_stat, stat }) => (
          <div className="flex">
            <h1 className='font-geist2 text-2xl' >{stat.name}: </h1>
            <h1 className='font-geist2 text-2xl' >{base_stat}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
