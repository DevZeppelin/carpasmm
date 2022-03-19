import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contacto" className="bg-black text-white text-center">
      <div className="p-2 mt-24 md:p-3 space-y-8">
        <img src="/logo.png" className="w-full md:w-1/2 h-full md:h-1/2 p-0 md:p-2 mt-16 mx-auto animate-pulse" />
        <div className="text-lg md:text-2xl">
          <h3 className=" text-gray-200 font-righteous">
            ¡Contactanos a través de nuestras redes!
          </h3>
          <div className="flex flex-wrap justify-center p-6 md:p-10 md:pr-30 mx-4 gap-4 text-2xl md:text-4xl">
            <a
              href="mailto:carpasmm@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my mail" alt="mail-logo">
                <FiMail className="hover:text-blue-600" />
              </button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5492616917202"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my instagram" alt="instagram-logo">
                <FaWhatsapp className="hover:text-blue-600" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/carpasmm/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my instagram" alt="instagram-logo">
                <FaInstagram className="hover:text-blue-600" />
              </button>
            </a>
            <a
              href="https://www.facebook.com/carpasmm/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaFacebook className="hover:text-blue-600" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="p-2 text-xs bg-citrorange text-lightGray z-50">
        Make with &#128153; in Mendoza, Argentina by{" "}
        <a
          href="https://devzepelin.ar"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-yellow"
        >
          Gino.
        </a>
        <span>
          {" "}
          All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default Footer;
