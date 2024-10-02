import { FiMail, FiTwitter } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const TopLeyend = ({toggleNav}) => {
  return (
    <div className="flex justify-center md:justify-between pt-2 text-black md:text-lightGray md:bg-darkGray">
      <div className="hidden md:flex px-12">
        <p className="text-sm font-bold tracking-widest my-auto font-righteous uppercase text-secundary">
          alquiler de carpas
        </p>
      </div>
      <div className="p-2 ml-2 md:hidden absolute top-0 right-5 w-10 text-4xl">
        <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div>
        <div className="text-xl space-x-3 pr-6 text-darkGray md:text-secundary">
          <a
            href="https://api.whatsapp.com/send?phone=5492616917202"
            target="_blank"
            rel="noreferrer"
          >
            <button aria-label="go to my whatsapp" alt="whatsapp-logo">
              <FaWhatsapp className="hover:text-navbar" />
            </button>
          </a>
          <a
              href="https://www.facebook.com/carpasmm/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaFacebook className="hover:text-navbar" />
              </button>
            </a>

          <a
            href="https://www.instagram.com/carpasmm/"
            target="_blank"
            rel="noreferrer"
          >
            <button aria-label="go to my instagram" alt="instagram-logo">
              <FaInstagram className="hover:text-navbar" />
            </button>
          </a>

         

          <a
            href="mailto:marcelomorales8670@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-navbar" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeyend;
