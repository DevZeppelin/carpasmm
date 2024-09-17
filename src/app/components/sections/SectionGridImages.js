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
              name="Canchas"
              src="/grid/estadio.jpg"
              alt="estadio"
            />
            <IndexGridImageContent 
              name="Stands"
              src="/grid/eventos.jpg"
              alt="eventos"
            />
            <IndexGridImageContent 
              name="Extensiones de ambiente"
              src="/grid/extension.jpg"
              alt="extension"
            />
            <IndexGridImageContent 
              name="Con calefactores"
              src="/grid/calefactor.jpg"
              alt="calefactor"
            />
            <IndexGridImageContent 
              name="Fiestas en la noche"
              src="/grid/fiesta.jpg"
              alt="fiesta"
            />
            <IndexGridImageContent 
              name="Lugares remotos"
              src="/grid/montaña2.jpg"
              alt="montaña2"
            />
            <IndexGridImageContent 
              name="Cerca de la pile"
              src="/grid/pool.jpg"
              alt="pool"
            />
            <IndexGridImageContent 
              name="Campos"
              src="/grid/rio.jpg"
              alt="rio"
            />
            <IndexGridImageContent 
              name="Simples"
              src="/grid/simple.jpg"
              alt="simple"
            />
            <IndexGridImageContent 
              name="Ferias"
              src="/grid/stands.jpg"
              alt="stands"
            />
            <IndexGridImageContent 
              name="Fiestas en el día"
              src="/grid/fiesta2.jpg"
              alt="fiesta2"
            />
            <IndexGridImageContent 
              name="Montañas"
              src="/grid/montaña.jpg"
              alt="montaña"
            />
            
          
      </div>
    </section>
  );
};

export default SectionGridImages;
