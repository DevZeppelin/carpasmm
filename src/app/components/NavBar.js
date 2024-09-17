import Link from "next/dist/client/link";

const NavBar = ({ classHome, classQuienesSomos, classServicios, classContacto }) => {
  return (
    <div className="flex my-0 md:py-8 justify-between px-0 font-bold bg-navbar text-primary text-xl">
      <div className="hidden md:flex">
        
        <Link href="/">
          <span className={`px-3 hover:bg-secundary hover:text-navbar ml-24 py-10 ${classHome}`}>Home</span>
        </Link>       
      
        <Link href="/servicios">
          <span className={`px-3 hover:bg-secundary hover:text-navbar py-10 ${classServicios}`}>Servicios</span>
        </Link>      
        <Link href="/acercade">
          <span className={`px-3 hover:bg-secundary hover:text-navbar py-10 ${classQuienesSomos}`}>Acerca de nosotros</span>
        </Link>         
        <Link href="/contacto">
          <span className={`px-3 hover:bg-secundary hover:text-navbar py-10 ${classContacto}`}>Contacto</span>
        </Link>       

      </div>
      

     
    </div>
  );
};

/* md:hidden */

export default NavBar;
