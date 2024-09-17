import Link from "next/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 top-16 right-0 font-bold bg-secundary w-3/5 rounded-b-3xl border-2 border-navbar"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2 text-lowContrast mb-5 space-y-6">
        <Link href="/">
          <span className="mr-2  mt-2 px-3 hover:border-navbar">Home 🏠</span>
        </Link>
        
        <Link href="/servicios">
          <span className="mr-2 mt-5 px-3 hover:border-navbar">Servicios 🛠</span>
        </Link>        
        <Link href="/acercade">
          <span className="mr-2 mt-5 px-3 hover:border-navbar">Acerca de 🙋‍♂️</span>
        </Link>
      
        <Link href="/contacto">
          <span className="mr-2 mt-5 px-3 hover:border-navbar">Contactanos 📞</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
