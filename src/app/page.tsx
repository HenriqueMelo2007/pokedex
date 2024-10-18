import Image from 'next/image'
import poke from '@/public/images/poke.png'
import pikachuPNG from '@/public/images/pkcPNG.png'
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
        <input
          type="text"
          placeholder="Search for a Pokemon"
          className="rounded-xl outline-none h-12 w-80 text-base p-2 pl-10 border-2 border-yellow-300 bg-blue-800 text-yellow-300 placeholder:text-yellow-300"
        />
        <PokeGrid></PokeGrid>
      </div>
    </div>
  )
}
