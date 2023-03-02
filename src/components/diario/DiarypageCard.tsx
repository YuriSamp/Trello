
import React, { SetStateAction, Dispatch } from 'react'

interface Props {
  item: string
  setDiarioOpen: Dispatch<SetStateAction<boolean>>
}

export default function DiarypageWritten({ item, setDiarioOpen }: Props) {
  return (
    <div className='w-60 h-52 bg-neutral-900 flex px-2 py-2 cursor-pointer relative select-none rounded-md'
      onClick={() => setDiarioOpen(true)}
    >
      <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
      <div className='flex justify-between absolute bottom-0 left-0 py-2 bg-neutral-800 w-full px-3 rounded-b-md'>
        <p>Um pequeno passeio</p>
        <p>{item}</p>
      </div>
    </div>
  )
}
