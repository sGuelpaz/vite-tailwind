import React from 'react'
import Button from '../../components/buttons/button'

export const Login = () => {
  return (
    <div className='py-52 '>
        {/* bg-gradient-to-br from-black to-red-900 h-screen */}
        <div className='md:w-8/12 lg:w-1/2 xl:w-1/3 h-fit mx-auto  bg-red-900 w-96 pb-8 text-center shadow-2xl shadow-zinc-900 rounded-3xl'>
            <span className='text-2xl font-bold text-white '>Logueate</span>
            <form action="">
            <div className='my-12'>
                <input className="shadow px-3 py-1 text-xl font-normal text-slate-800 bg-white rounded focus:outline-none" type="text" placeholder='Usuario'/>
            </div>
            <div className='mb-12'>
                <input className='shadow px-3 py-1 text-xl font-normal text-slate-800 bg-white rounded focus:outline-none' type="text" placeholder='Contraseña'/>
            </div>
            <div className='ml-[-24px]'>
            <Button className="" >Iniciar sesión</Button>
            </div>
            </form>
        </div>
    </div>
  )
}
