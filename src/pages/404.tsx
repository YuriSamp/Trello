import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import svg404 from '../../public/404.svg'

export default function NotFound() {

  return (
    <section className='text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <p className='text-3xl'>Pelo visto essa página ainda não foi escrita</p>
        <Image
          src={svg404}
          alt='imagem de um computador com erro'
          width={600}
          height={600}
        />
        <div className='pt-6'>
          <Link href='/home' className='flex items-center gap-2'>
            <AiOutlineArrowLeft className='h-7 w-7' />
            <p className='text-2xl'>Voltar a home</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
