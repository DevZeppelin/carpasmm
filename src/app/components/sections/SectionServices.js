
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdSafetyDivider } from "react-icons/md";
import { RxValue } from "react-icons/rx";
import { SiSimplenote } from "react-icons/si";

const SectionServices = () => {
  return (
    <section>
      <div className="text-center pt-16">
        <h2 className="text-3xl font-bold pb-12 font-righteous text-navbar">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 text-lightGray ">
          <div className="space-y-4 pb-6">
            <AiFillSafetyCertificate className="text-6xl text-navbar mx-auto" />
            <h2 className="uppercase text-navbar font-bold">Calidad</h2>
            <p>Excelencia en nuestros servicios</p>
          </div>
          <div className="space-y-4 pb-6">
            <MdSafetyDivider className="text-6xl text-navbar mx-auto" />
            <h2 className="uppercase text-navbar font-bold">Respeto</h2>

            <p>Puntualidad y atención especial</p>
          </div>
          <div className="space-y-4 pb-6">
            <RxValue className="text-6xl text-navbar mx-auto" />
            <h2 className="uppercase text-navbar font-bold">Valores</h2>

            <p>Ponemos al cliente en primer lugar</p>
          </div>
          <div className="space-y-4 pb-6">
            <SiSimplenote className="text-6xl text-navbar mx-auto" />
            <h2 className="uppercase text-navbar font-bold">
              Simplicidad
            </h2>
            <p>
              Pensamos nuestros servicios en la comodidad del cliente
            </p>
          </div>



        </div>
      </div>
    </section>
  );
};

export default SectionServices;
