/* eslint-disable @next/next/no-img-element */

import Link from "next/dist/client/link";

const SectionWelcome = () => {
  return (
    <section>
      <div>
        <div className="flex relative overflow-hidden md:grid md:grid-cols-2 text-lg xs:px-2 sm:px-6 md:px-12 bg-primary">
          <span className="first-block text-center text-lightGray space-y-4 md:space-y-10 p-6 md:p-8 my-auto bg-secundary z-40 opacity-80 md:opacity-95 h-full xs:text-base sm:text-lg">
            <h1 className="font-navbar text-navbar text-xl md:text-3xl mt-1 font-righteous">
              Convertimos espacios abiertos en los más bellos salones de fiesta
            </h1>
            <div className="h-1 w-64 bg-navbar  mx-auto"></div>
            <p>
              
            </p>
            <p>
              Alquiler de carpas, traslado, armado e instalación, iluminación, y retiro en puerta.
            </p>
            <p>
              Usted disfruta de su evento, ¡nosotros nos encargamos de lo demás!
            </p>

            
              <button className="btn opacity-100 uppercase mt-6">
                Recibimos todos los medios de pago
              </button>
            

          </span>

          <div className="flex flex-wrap m-0 p-0 justify-center align-middle absolute bottom-0 left-0 h-full md:relative md:h-full md:max-w-auto">
            <img
              src="/01.webp"
              alt="carpas mm evento al aire libre"

            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
