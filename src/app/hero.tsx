"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
      <div className="w-full container mx-auto pt-12 pb-24 text-center">
        <div className="w-full bg-[#223564] p-8 rounded-lg shadow-lg flex items-center justify-center space-x-16 ml-4">
          {/* Imagen a la izquierda */}
          <div className="flex-shrink-0">
            <Image
              src="/image/egidio.jpg" // Cambia la ruta de la imagen
              alt="Imagen representativa"
              width={150} // Puedes ajustar el tamaño según sea necesario
              height={150}
              className="rounded-lg"
            />
          </div>
          
          {/* Contenedor para los textos en vertical */}
          <div className="flex flex-col items-center">
            {/* Apartado para "Comunitat de Sant Egidio" con fondo azul */}
            <Typography
              color="white"
              className="text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px]"
              placeholder="" 
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Comunitat de Sant Egidio
            </Typography>
            
            {/* Apartado para "La pregària, els pobres i la pau" con fondo azul */}
            <Typography
              variant="lead"
              className="text-gray-300 px-6"
              placeholder="" 
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              La pregària, els pobres i la pau
            </Typography>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
