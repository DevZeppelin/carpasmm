/* eslint-disable @next/next/no-img-element */

import Link from "next/dist/client/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import MainBarButton from "./MainBarButton";


const TopMainScreen = () => {
  return (
      <div className="flex my-8 p-0 md:p-0 px-12 md:px-24 text-navbar bg-secundary justify-center md:justify-between">
        <Link href="/">
          <img
            src="logo.webp"
            alt="carpas mm alquiler lonas toldos mendoza"
            width="400"
            height="400"
            className="animate-logo"
          />
        </Link>

        <div className="hidden md:flex justify-between space-x-4 text-center my-auto p-4 text-lg">

            <div className="pr-12">
              <a
                href="https://api.whatsapp.com/send?phone=5492616917202"
                target="_blank"
                rel="noreferrer"
              >
                <MainBarButton
                  logo={
                    <FaWhatsapp className="text-navbar text-2xl flex my-auto m-2" />
                  }
                  text="Whatsapp, SMS o llamadas"
                  description2="+5492616917202"
                  classType="text-navbar"
                />
              </a>
              
              
              <a
                href="mailto:marcelomorales8670@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MainBarButton
                  logo={
                    <FiMail className="text-navbar text-2xl flex my-auto m-2" />
                  }
                  text="Correo electrónico"
                  description2="marcelomorales8670@gmail.com"
                  classType="text-navbar"
                />
              </a>
            </div>
            <Link href="/contacto">
            <p className="rounded-lg p-4 text-xl my-auto btn">Llamanos</p>
          </Link>
        </div>
          
        </div>
  );

};

export default TopMainScreen;
