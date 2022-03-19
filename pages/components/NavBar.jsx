import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-around px-12  md:px-64 font-bold bg-black text-white'>
        <a href="#carpas">Carpas</a> <span>•</span>
        <a href="#servicios">Servicios</a> <span>•</span>
        <a href="#contacto">Contacto</a>        
    </div>
  )
}

export default NavBar