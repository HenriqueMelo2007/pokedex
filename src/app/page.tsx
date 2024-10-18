import Image from 'next/image'
import poke from '@/public/images/poke.png'
import pikachuPNG from '@/public/images/pkcPNG.png'

import Input from '@/components/input'
import PokeGrid from '@/components/pokegrid'

import PokeCard from "@/components/pokecard"

export default function Home() {
  return (
    <div className="mt-8 w-screen">
      <Image
        src={poke}
        width={230}
        alt="PokemonAPI logo"
        className="mb-16 ml-8"
      ></Image>

      <div className="flex justify-center items-center flex-col">
        <div className='relative flex justify-center items-center flex-col mb-16'>
          <Image
            src={pikachuPNG}
            width={30}
            alt="Pikachu img"
            className="absolute mr-mPKC"
          ></Image>
          <Input></Input>
        </div>
        <PokeGrid></PokeGrid>
        <PokeCard name="Bulbassaur"></PokeCard>
      </div>
    </div>
  )
}
