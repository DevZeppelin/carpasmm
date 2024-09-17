/* eslint-disable @next/next/no-img-element */
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Layout from "../components/Layout";
import Image from "next/image";


const QuienesSomos = () => {
  return (
    <div>

      <Layout classQuienesSomos={"bg-secundary text-darkGray"}>
        <section className="text-lightGray">
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-darkGray uppercase textDark">
              Nosotros
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center space-y-8 md:space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold text-yellow">
                Somos la solución a los eventos al aire libre
              </h2>
              <div className="bg-yellow w-32 h-1 mx-auto"></div>
              <p className="font-bold"> Nuestro propósito:</p>
              <p>
                Crear experiencias únicas y memorables proporcionando soluciones personalizadas en alquiler de carpas y gazebos para eventos al aire libre.
              </p>


            </div>
            <div className="my-auto p-8">
              <Image
                width={400}
                height={300}
                src="/logo.png"
                alt="carpas mm alquiler carpas gazebos infraestructura "

              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center text-lightGray">
          <div className="space-y-4">
            <FaEye className="mx-auto text-4xl text-yellow" />
            <h2 className="text-2xl text-yellow">Visión</h2>
            <p>
              Ofrecer un servicio integral que combine carpas y gazebos de calidad con una instalación eficiente, iluminación profesional y un traslado sin complicaciones, asegurando la satisfacción y tranquilidad de nuestros clientes en cada evento.
            </p>
          </div>
          <div className="space-y-4">
            <BiCheckShield className="mx-auto text-4xl text-yellow " />
            <h2 className="text-2xl text-yellow">Misión</h2>
            <p>
              Ser la opción líder y confiable en alquiler de estructuras para eventos, reconocidos por nuestra excelencia en servicio y por transformar espacios en lugares especiales para celebrar.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
