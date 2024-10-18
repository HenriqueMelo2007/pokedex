import Image from 'next/image'
import poke from '@/public/images/poke.png'
import pikachuPNG from '@/public/images/pkcPNG.png'

import Input from '@/components/input'
import PokeGrid from '@/components/pokegrid'

export default function Home() {
  return (
    <div className="mt-8 w-screen">
      <Image
        src={poke}
        width={230}
        alt="PokemonAPI logo"
        className="mb-16 ml-8"
      ></Image>

      <div className="relative flex justify-center items-center flex-col">
        <Image
          src={pikachuPNG}
          width={30}
          alt="Pikachu img"
          className="absolute mr-mPKC"
        ></Image>

        <Input></Input>
        <PokeGrid></PokeGrid>
      </div>
    </div>
  )
}
