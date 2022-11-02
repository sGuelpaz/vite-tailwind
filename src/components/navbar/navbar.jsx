import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export const Navbar = ({ rutas }) => {
    return (
        <div className='mb-20'>

            <nav className=" bg-red-900 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-lg">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href=" " className="flex items-center">
                        <img src={ Logo } className="h-12 rounded-full p-2 bg-black" alt="Logo"/>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className=" bg-white hover:shadow-lg hover:shadow-white hover:bg-black hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Volver</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm bg-white text-black rounded-lg md:hidden hover:bg-black hover:text-white hover:shadow-lg hover:shadow-white " aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Abrir menú</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            {rutas.map(([title, url]) => (
                                <li><Link to={url} key={title} className="text-white  px-3 py-2 rounded-lg  m-2 font-medium   hover:shadow hover:bg-slate-100 hover:text-slate-900 ">{title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <nav classNameName="flex sm:justify-start space-x-4 bg-red-900">
        {rutas.map(([title, url]) => (
          <Link to={url} classNameName="text-white  px-2 py-1 rounded-lg  m-3 font-medium  hover:bg-slate-100 hover:text-slate-900 ">{title}</Link>
        ))}
      </nav> */}
        </div>
    )
}
