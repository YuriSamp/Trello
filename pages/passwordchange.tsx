import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Swal from 'sweetalert2'
import { getAuth } from 'firebase/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { app } from '@/Firebase/ClientApp';

const auth = getAuth(app);

export default function Passwordchange() {

  const [email, setEmail] = useState('')
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendPasswordResetEmail(email)

    Swal.fire({
      icon: 'success',
      text: 'Verifique na sua caixa de entrada se o email já chegou',
      confirmButtonColor: '#D8807D'
    })
  }

  return (
    <>
      <Head>
        <title>Trello</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
        <section className='flex flex-col'>
          <Link href='./' className='pb-8 flex items-center gap-3 w-24'>
            <AiOutlineArrowLeft />
            <p className='text-xl'>Return</p>
          </Link>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Forget your password?</h1>
            </div>
            <p className='text-center py-6 text-xl'>Dont worry, insert your email</p>
            <div className='flex flex-col gap-2 pt-4'>
              <label>Email Adress</label>
              <input type='email' placeholder='Email Adress' className='py-2 px-2 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='pt-4'>
              <button className='w-full bg-[#138859] rounded-lg h-12'>Log In</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
