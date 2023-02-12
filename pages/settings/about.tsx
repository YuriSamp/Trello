import { useState } from 'react'
import Head from 'next/head'
import { Navbar } from '@ui/navbar'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft, AiOutlineGithub } from 'react-icons/ai'
import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link'



export default function Settings() {
  const router = useRouter()
  const page = router.pathname

  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]


  const [selected, setSelected] = useState(people[0])

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <Navbar
        Page={page}
      />
      <main className='px-96 pt-16 '>
        <Link href='/' className='flex items-center gap-1'>
          <AiOutlineArrowLeft className='h-6 w-6' />
          <p className='text-2xl'>Home</p>
        </Link>
        <section className='pt-10 pb-2  border-b-2 border-gray-800'>
          <div className='flex'>
            <div className='pl-6' >
              <Avatar.Root className='w-24 h-24 inline-flex justify-center items-center overflow-hidden cursor-pointer select-none bg-white rounded-full'>
                <Avatar.Image
                  className='w-full h-full object-cover border-inherit'
                  src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
                  alt=''
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                  CT
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <div className='flex flex-col pl-8 pt-3'>
              <p className='text-3xl'>Yuri Sampaio</p>
              <p>yurisamp123@gmail.com</p>
            </div>
          </div>
          <ul className='flex gap-5 pt-6'>
            <li>
              <p className='text-xl cursor-pointer '>Perfil e visibilidade</p>
            </li>
            <li>
              <p className='text-xl cursor-pointer '>Configurações</p>
            </li>
            <li>
              <p className='text-xl cursor-pointer'>Atividade</p>
            </li>
            <li>
              <p className='text-xl cursor-pointer' >Atalhos</p>
            </li>
            <li>
              <p className='text-xl cursor-pointer settingUnderline relative text-[#138859]'>Sobre</p>
            </li>
          </ul>
        </section>

        {/* Daqui pra cima eu vou arrancar depois */}

        <section >
          <div className='pt-5 flex flex-col  px-4'>
            <h1 className='text-2xl py-5 '>Porque esse aplicativo existe ? </h1>
            <p className='text-lg tracking-wider'>Esse projeto nasceu da minha vontade de ter um lugar para escrever o meu diário,
              mas eu nunca encontrei um aplicativo para computador da exata maneira que eu queria,
              então por muito tempo eu usei o Google Keep depois acabei migrei para o notion,
              o notion soluciona o problema de ter um lugar para armazenar o meu diário e tem uma interface muito legal,
              mas acabando criando outros problemas enquanto tenta resolver as coisas básicas, visando deixar as coisas da maneira
              que eu sempre quis, esse projeto ganhou vida .
            </p>
            <h1 className='text-2xl py-5 '>O que ele utiliza por debaixo dos panos ? </h1>
            <ul>
              <li><p>- Next Js</p></li>
              <li><p>- Typescirpt</p></li>
              <li><p>- Tailwind Css</p></li>
              <li><p>- Framer motion</p></li>
              <li><p>- mongoDB</p></li>
              <li><p>- Firebase</p></li>
              <li><p>- Jotai</p></li>
            </ul>
            <div className='flex flex-col justify-center items-center pt-10'>
              <p className='text-lg'>Caso queira ver o codigo</p>
              <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='pt-3'>
                <AiOutlineGithub className='w-16 h-16' />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}