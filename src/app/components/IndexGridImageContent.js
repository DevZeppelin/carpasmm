/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

//Componente q dejamos de usar
export const IndexGridImageContent = ({ name, src, alt }) => {

  return (
    <div className="border-navbar m-2" >

      <div className="relative imagen-filtro overflow-hidden h-full" >
          <div className="indexGridImageText z-10 rounded-b-2xl">
            {name}
          </div>
          <Image
            src={src} className="w-full z-0 rounded-b-2xl h-full"
            alt={alt}
            width={300}
            height={300}
          />        

        <style jsx>{`
          
          .imagen-filtro {
            transition: all 0.4s ease;   
          }         
          
        `}</style>
      </div>
    </div>

  );
};
