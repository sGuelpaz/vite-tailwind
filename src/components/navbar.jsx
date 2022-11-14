import React from 'react'
import { Link } from 'react-router-dom';
import Button from './buttons/button';

import { SiVisualstudiocode } from 'react-icons/si';


export const Navbar = ({rutas, abrir, setAbrir, linksB}) => {
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-red-900 py-4  px-7'>

            <div className='font-bold text-2xl cursor-pointer flex items-center'>
                <span className='text-white text-3xl mr-1 pt-2'>
                <SiVisualstudiocode size={50} />
                </span>
            </div>

            <div onClick={()=>setAbrir(!abrir)} className='text-3xl absolute right-8 top-6 cursor-pointer text-white md:hidden'>
            <ion-icon name={abrir ? 'close-outline' : 'menu-outline'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${abrir ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} `}>
                {rutas.map(([title, url]) => (
                    <li key={title} className='my-7 md:my-0'><Link to={url} className="px-2 py-1 ml-2 rounded-lg text-white text-lg transition duration-300 ease-in-out 
                    font-medium hover:shadow hover:bg-slate-100 hover:text-slate-900
                    ">{title}</Link></li>
                ))}

                {linksB.map(([name, urlB]) =>(
                    <li key={name} className='my-7 md:my-0 ' >
                    <Button><Link to={urlB}>{name}</Link></Button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
