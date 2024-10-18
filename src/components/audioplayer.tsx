'use client'

import { useEffect, useRef, useState } from 'react'
import PalletTownAudio from '../public/audios/PalletTown.mp3'

import PlayM from '@/public/images/m1.png'
import StopM from '@/public/images/m2.png'

import Image from 'next/image'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.loop = true
        audio.play().catch(error => {
          console.error('Erro ao reproduzir o áudio:', error)
        })
      } else {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [isPlaying])

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='ml-8'>
      <button onClick={handlePlayAudio}>
        <Image src={isPlaying ? StopM : PlayM} width={30} height={30} alt='Music'></Image>
      </button>
      <audio ref={audioRef} src={PalletTownAudio} />
    </div>
  )
}
