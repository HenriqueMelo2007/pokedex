'use client'

import Image from 'next/image'
import pikachuPNG from '@/public/images/pkcPNG.png'
import PokeGrid from '@/components/pokegrid'
import { getAll } from '@/api/apidata'
import { useState, useEffect } from 'react'

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<any[]>([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = await getAll()
      setAllPokemon(pokemonData)
    }

    fetchPokemon()
  }, [])

  const filter = (allPokemon: any) => {
    return allPokemon.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  const filteredPokemonList = filter(allPokemon)

  return (
    <div className="w-screen">
      <div className="flex justify-center items-center flex-col w-screen">
        <div className="relative flex justify-center items-center flex-col mb-16">
          <Image
            src={pikachuPNG}
            width={30}
            alt="Pikachu img"
            className="absolute mr-mPKC"
          />
          <input
            type="text"
            value={searchText}
            placeholder="Search for a Pokémon"
            onChange={e => setSearchText(e.target.value)}
            className="rounded-xl outline-none h-12 w-80 text-base p-2 pl-10 border-2 border-white bg-blue-800 text-white placeholder:text-white"
          />
        </div>
        <PokeGrid pokemonList={filteredPokemonList} />
      </div>
    </div>
  )
}
