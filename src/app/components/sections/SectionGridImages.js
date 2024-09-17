import { IndexGridImageContent } from "../IndexGridImageContent";


const SectionGridImages = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-8 md:m-24 text-center">
            <IndexGridImageContent 
              name="Montaje"
              src="/grid/armado.jpg"
              alt="Montaje"
            />
            <IndexGridImageContent 
              name="Bodegas"
              src="/grid/bodegas.jpg"
              alt="Bodegas"
            />
            <IndexGridImageContent 
              name="Casamientos"
              src="/grid/casamiento.jpg"
              alt="Casamientos"
            />
            <IndexGridImageContent 
              name="Campo abierto"
              src="/grid/estadio.jpg"
              alt="estadio"
            />
            <IndexGridImageContent 
              name="Stand"
              src="/grid/eventos.jpg"
              alt="eventos"
            />
            <IndexGridImageContent 
              name="Extensiòn de ambientes"
              src="/grid/extension.jpg"
              alt="extension"
            />
            <IndexGridImageContent 
              name="Calefactor en invierno"
              src="/grid/calefactor.jpg"
              alt="calefactor"
            />
            <IndexGridImageContent 
              name="Fiestas"
              src="/grid/fiesta.jpg"
              alt="fiesta"
            />
            <IndexGridImageContent 
              name="Lugares remotos"
              src="/grid/montaña2.jpg"
              alt="montaña2"
            />
            <IndexGridImageContent 
              name="Cerca de la piscina"
              src="/grid/pool.jpg"
              alt="pool"
            />
            <IndexGridImageContent 
              name="Donde quieras"
              src="/grid/rio.jpg"
              alt="rio"
            />
            <IndexGridImageContent 
              name="Simple"
              src="/grid/simple.jpg"
              alt="simple"
            />
            <IndexGridImageContent 
              name="Ferias"
              src="/grid/stands.jpg"
              alt="stands"
            />
            <IndexGridImageContent 
              name="Fiesta abierta"
              src="/grid/fiesta2.jpg"
              alt="fiesta2"
            />
            <IndexGridImageContent 
              name="Montaña"
              src="/grid/montaña.jpg"
              alt="montaña"
            />
            
          
      </div>
    </section>
  );
};

export default SectionGridImages;
