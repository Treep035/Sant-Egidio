"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";


const POSTS = [
  {
    img: `/image/noticies/noticia1.jpeg`,
    title: "El papa Francesc rep en audiència Andrea Riccardi. Mantenir viva l'esperança de la pau. Parlen de migrants i de pau",
  },
  {
    img: `/image/noticies/noticia2.jpg`,
    title: "Las comidas de Navidad de Sant'Egidio en todo el mundo",
  },
  {
    img: `/image/noticies/noticia3.jpg`,
    title: "El invierno empeora la emergencia humanitaria en Ucrania. Sant’Egidio ayuda a las regiones de la línea del frente",
  },
  {
    img: `/image/noticies/noticia4.jpg`,
    title: "Navidad con la Comunidad de Sant’Egidio: la comida que vence la soledad",
  },
  {
    img: `/image/noticies/noticia5.jpg`,
    title: "Misión humanitaria de Sant'Egidio en el Líbano para llevar ayuda a los desplazados de los pueblos destruidos por el reciente conflicto",
  },
  {
    img: `/image/noticies/noticia6.jpg`,
    title: "El pesebre de Santa María de Trastevere revela las esperanzas de un mundo que, en medio de la oscuridad de la pobreza y de la guerra, recibe la luz de la Navidad del Señor",
  },
];

export function Posts() {
  return (
    <section className="grid min-h-screen place-items-center p-8">
      <div className="container mx-auto text-center mb-12">
        {/* Título de noticias */}
        <Typography
          variant="h1"
          className="text-4xl font-bold text-gray-800"
          placeholder="" 
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Notícies
        </Typography>

        {/* Subtítulo de visualización de noticias */}
        <Typography
          variant="lead"
          className="text-gray-500 mt-4"
          placeholder="" 
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Visualitza les notícies de Sant'Egidio
        </Typography>
        <hr className="my-8 border-t-4 border-[rgba(128, 128, 128, 0.34)] w-1/2 mx-auto rounded-md" />
      </div>
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 mt-16">
        {POSTS.map(({ img, title }) => (
          <BlogPostCard
            key={title}
            img={img}
            title={title}
          />
        ))}
      </div>
    </section>
  );
}

export default Posts;