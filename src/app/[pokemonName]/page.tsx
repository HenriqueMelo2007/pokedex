

import { getPokemonInfo } from '@/api/apidata'


import Image from 'next/image';

export default async function PokemonPage ({params} : {params: {pokemonName: string}}) {
  const pokemonName = params.pokemonName;
  const especificPokemon = await getPokemonInfo(pokemonName)

  console.log(especificPokemon)


  return (
    <div className="w-screen flex justify-center items-center flex-col" >
      <Image src={especificPokemon.sprites.front_default} alt='Pokemon Image' width={200} height={200}></Image>
    </div>
  )
}