interface prop {
  name: string
}

import pokeball from '@/public/images/ball.png'

import Image from 'next/image'
import Link from 'next/link'

export default function PokeCard({ name }: prop) {
  return (
    <Link
      href={`/${name}`}

      className="w-80 h-32 border-2 border-white bg-blue-800 rounded-2xl flex justify-center items-center gap-3 hover:cursor-pointer"
    >
      <Image width={40} alt="pokeball image" src={pokeball}></Image>
      <div className="border-2 h-20 border-white"></div>
      <h2 className="font-geist text-white text-4xl">{name}</h2>
    </Link>
  )
}
