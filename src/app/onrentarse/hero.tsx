"use client";

import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";


function Hero() {
  return (
<header className="mt-5 bg-white p-8">
  <div className="w-full container mx-auto pt-12 pb-24 text-center">
    {/* Flex container para alinear la imagen y el texto horizontalmente */}
    <div className="w-full bg-[#f7931d] p-8 rounded-lg shadow-lg flex items-center justify-center space-x-16">
      {/* Imagen */}
      <div className="flex-shrink-0">
        <Image
          src="/image/onrentarse.png" // Cambia la ruta de la imagen
          alt="Imagen representativa"
          width={150} // Puedes ajustar el tamaño según sea necesario
          height={150}
          className="rounded-lg"
        />
      </div>

      {/* Contenedor para los textos */}
      <div className="flex flex-col items-center">
        <Typography
          className="text-[#E2E8F0] text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] text-center"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          ON RENTAR-SE
        </Typography>
        <Typography
          variant="lead"
          className="text-[#D1D7DB] px-6 mt-4 text-center"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          A Barcelona gratuïtament
        </Typography>
      </div>
    </div>
  </div>
</header>
  );
}
export default Hero;
