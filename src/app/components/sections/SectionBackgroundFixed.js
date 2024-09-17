import Link from "next/dist/client/link";

const SectionBackgroundFixed = () => {
  return (
    <section>
      <div className="p-8 md:p-32 py-32 font-bold text-center bg-cover bg-hero-bigger bg-right bg-fixed grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 bg-primary p-20 rounded-3xl border-4 bg-opacity-80 border-lowContrast ">
          <h2 className="text-3xl font-righteous fadeIn text-lowContrast textDark">
            Que tu evento sea único
          </h2>
          <div className="text-lowContrast space-y-3 text-lg">
            <p>
              Nuestro servicio presenta una importante ventaja económica frente a caros salones de fiestas
            </p>
            <p>
              Además que cualquier espacio verde, remoto o simplemente lindo, podés convertirlo en el lugar perfecto para festejar
            </p>
          </div>
          <div></div>

          <Link href="/contacto">
            <button className="btn uppercase">Contactanos</button>
          </Link>
        </div>
      </div>
      <style jsx>{`  
          .textLight {
            text-shadow: 1px 2px 4px white;
          }          
        `}</style>
    </section>
  )
}

export default SectionBackgroundFixed
