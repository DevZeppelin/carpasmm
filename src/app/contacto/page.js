"use client"

import MainBarButton from "../components/MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Layout from "../components/Layout";

const Contacto = () => {

  return (
    <div>

      <Layout classContacto={"bg-secundary text-darkGray"}>
        <div className="bg-hero-pages bg-cover w-full text-center py-20 md:py-40">
          <h1 className="text-4xl font-bold text-darkGray uppercase textDark">
            ¡Contactenos!
          </h1>
        </div>
        <div className="text-center pt-6 text-lightGray">
          <h2 className="text-2xl pt-6 p-4">Escribame o llame para presupuestos o cualquier duda que tenga:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 md:p-8 ">
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5492616917202"
                target="_blank"
                rel="noreferrer"
              >
                <MainBarButton
                  logo={
                    <FaWhatsapp className="text-yellow text-2xl md:text-6xl flex my-auto m-4" />
                  }
                  text="Whatsapp SMS y llamadas"
                  description2="+5492616917202"
                  classType="text-yellow text-2xl my-2"
                />
              </a>
            </div>
            <div>
              <a
                href="mailto:marcelomorales8670@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MainBarButton
                  logo={
                    <FiMail className="text-yellow text-2xl md:text-6xl flex my-auto m-4" />
                  }
                  text="Correo electrónico"
                  description2="marcelomorales8670@gmail.com"
                  classType="text-yellow text-xl my-2"
                />
              </a>
            </div>
          </div>
        </div>

  
      </Layout>
    </div>
  );
};

/* style="" */

export default Contacto;
