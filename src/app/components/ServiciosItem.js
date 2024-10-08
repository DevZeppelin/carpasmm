

export const ServiciosItem = ({ titulo, icono }) => {
  return (
      <div className="w-full md:w-1/3 p-4">
        <div className="space-y-4 h-full text-center bg-primary hover:bg-lowContrast border border-navbar-700 border-opacity-75 p-6 rounded-lg text-navbar hover:text-primary">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-navbar-800 hover:text-primary  mb-4">
            {icono}
          </div>
          <h2 className="uppercase">{titulo}</h2>
      
        </div>
      </div>
  );
};
