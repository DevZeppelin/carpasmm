"use client"

import { FaRocketchat } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrInstall } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaUnsplash } from "react-icons/fa";
import Layout from "../components/Layout";
import { ServiciosItem } from "../components/ServiciosItem";


const Servicios = () => {
  return (
    <div>
      
      <Layout classServicios={"bg-secundary text-navbar"}>
        <div>
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-darkGray uppercase textDark">
              Servicios
            </h1>
          </div>
          <div>
      
            <section className="text-secundary-400 body-font">
              <div className="p-6 md:p-24 py-16 mx-auto">               
            
                <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-6 text-yellow">
                    Variedad de servicios
                  </h1>
                  <p className="w-1/2 md:w-full text-lg px-2 md:px-32  text-lightGray leading-relaxed text-opacity-80">
                   Nuestro principal servicio consiste en el alquiler de carpas para eventos al aire libre: 
                  </p>
                 
                </div>
               
                   
                  <div className="flex flex-wrap -m-4">
                        <ServiciosItem
                          titulo={"Asesoramiento"}
                          icono={
                            <FaRocketchat className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Traslado"}
                          icono={
                            <CiDeliveryTruck className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Instalación"}
                          icono={
                            <GrInstall className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Iluminación"}
                          icono={
                            <FaRegLightbulb className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Desmontaje"}
                          icono={
                            <LiaFileExportSolid className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        <ServiciosItem
                          titulo={"Retiro"}
                          icono={
                            <FaUnsplash className="mx-auto text-4xl text-yellow" />
                          }
                        />
                        
                        
                  </div>
                    
              </div>
            </section>
          </div>
        </div>
        </Layout>
    </div>
  );
};

export default Servicios;
