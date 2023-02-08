import Image from 'next/image'
import { BsSearch, BsGear, BsTrash, BsBook } from 'react-icons/bs'
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai'
import { FiTarget } from 'react-icons/fi'
import logo from '../../public/teste.png'

export const Sidebar = () => {
  return (
    <aside className='w-64 min-h-screen flex flex-col items-center border-r-2 border-gray-800 justify-between'>

      {/* <Image src={logo} className='' /> */}

      <section >
        <h1 className='pt-4 pb-1 text-4xl font-semibold italic border-b-2 border-white border-dashed'>FYESTA</h1>
        <div className='flex flex-col gap-6 pt-28'>
          <div className='flex gap-3 items-center cursor-pointer'>
            <BsSearch className='text-xl' />
            <p className='text-xl'>Search</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer '>
            <BsGear className='text-xl' />
            <p className='text-xl'>Settings</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <BsTrash className='text-xl' />
            <p className='text-xl'>Trash</p>
          </div>
        </div>

        <div className='flex flex-col gap-6 pt-12 '>
          <div className='flex gap-3 items-center cursor-pointer'>
            <BsBook className='text-xl' />
            <p className='text-xl'>Diario</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <AiOutlineCalendar className='text-xl' />
            <p className='text-xl' >Semana</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <FiTarget className='text-xl' />
            <p className='text-xl'>Metas</p>
          </div>
        </div>
      </section>



      <div className='flex gap-3 items-center cursor-pointer border-t-2 border-gray-800 w-full justify-center py-4 '>
        <AiOutlinePlus className='text-2xl' />
        <p>New Page</p>
      </div>
    </aside>

  )
}