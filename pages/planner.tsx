import Head from 'next/head';
import { Sidebar } from '@ui/aside';
import { Navbar } from '@ui/navbar';
import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import PlannerLista from '@ui/planer/listas';
import { useRouter } from 'next/router';

export default function Planner() {

  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Navbar
            Page={page}
          />
          <section className='flex flex-col mx-8 my-8 '>
            <section className='flex justify-evenly'>
              <div className='pt-11 flex flex-col justify-center '>
                <h1 className='text-center text-5xl' >Planos para um dia incrivel ! </h1>
              </div>

              <div className='pt-8 flex flex-col gap-6'>
                <h1 className='text-2xl'>Informações importantes</h1>
                <div className='flex w-full gap-3 items-center'>
                  <AiOutlineCalendar className='w-7 h-7' />
                  <p>Informe o dia</p>
                </div>
                <div className='flex w-full gap-3 items-center'>
                  <AiOutlineHeart className='w-7 h-7' />
                  <p>Informe seus sentimentos</p>
                </div>
                <div className='flex w-full gap-3 items-center'>
                  <BsBook className='w-7 h-7' />
                  <p>Escreva sobre o seu dia</p>
                </div>
              </div>
            </section>

            <div className=' pt-20 grid grid-cols-2  2xl:grid-cols-3 justify-items-center'>
              <div className='flex flex-col gap-3'>
                <h1 className='pl-8 text-2xl'>Manhâ</h1>
                <PlannerLista
                  checkbox={true}
                  Quantidade={5}
                />

                <div className='pt-20 flex flex-col gap-3'>
                  <h1 className='pl-8 text-2xl'>Tarde</h1>
                  <PlannerLista
                    checkbox={true}
                    Quantidade={5}
                  />
                </div>
              </div>

              <div>
                <div className='flex flex-col gap-3'>
                  <h1 className='pl-8 text-2xl'>Noite</h1>
                  <PlannerLista
                    checkbox={true}
                    Quantidade={5}
                  />
                </div>

                <div className='pt-[92px] flex flex-col gap-3'>
                  <h1 className='text-2xl'>Notas</h1>
                  <PlannerLista
                    checkbox={false}
                    Quantidade={5}
                  />
                </div>
              </div>

              <div>
                <div className='flex flex-col gap-3 pt-10 2xl:pt-0'>
                  <h1 className='text-2xl'>Metas</h1>
                  <PlannerLista
                    checkbox={false}
                    Quantidade={5}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}