"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";
import axios from "axios";
import { I18NProvider } from "next/dist/server/future/helpers/i18n-provider";

const categories = [
  { categoria: "AjuntamentDeBarcelona", count: 10 },
  { categoria: "Agape", count: 2 },
  { categoria: "CompanyiaFillesDeLaCaritat", count: 2 },
  { categoria: "FundacióAPIP-ACAM", count: 2 },
  { categoria: "SantJoanDeDéu", count: 3 },
  { categoria: "OperacióFred", count: 2 },
];

let globalIndex = 1; // Índice acumulativo para las imágenes
const initialPosts = categories.flatMap(({ categoria, count }) =>
  Array.from({ length: count }, () => ({
    img: `/image/blogs/ondormir/blog${globalIndex++}.jpg`, // Incrementar el índice acumulativo
    title: "",
    direccion: "",
    metro: "",
    bus: "",
    numero: "",
    email: "",
    horario: "",
    condicio: "",
    categoria,
  }))
);

export function Posts() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedTab, setSelectedTab] = useState("AjuntamentDeBarcelona");

  const filteredPosts = posts.filter((post) => post.categoria === selectedTab);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Filtrar los posts según la categoría seleccionada
        const postsToFetch = initialPosts.filter(post => post.categoria === selectedTab);
  
        // Copiar el estado inicial de los posts
        const updatedPosts = [...initialPosts];
  
        // Obtener las IDs correctas (basadas en el índice del array original)
        const idsToFetch = postsToFetch.map((_, index) => initialPosts.indexOf(postsToFetch[index]) + 1);
  
        // Iterar sobre las IDs reales y hacer las solicitudes
        for (const id of idsToFetch) {
          const [
            nombreResponse,
            direccionResponse,
            metroResponse,
            busResponse,
            numeroResponse,
            emailResponse,
            horarioResponse,
            condicioResponse,
          ] = await Promise.all([
            axios.get(`http://localhost:5000/api/ondormir/nombre/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/direccion/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/metro/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/bus/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/numero/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/email/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/horario/${id}`),
            axios.get(`http://localhost:5000/api/ondormir/condicio/${id}`),
          ]);
  
          // Actualizar el post correspondiente en updatedPosts
          const postIndex = initialPosts.findIndex(post => initialPosts.indexOf(post) === id - 1);
  
          if (postIndex !== -1) {
            updatedPosts[postIndex] = {
              ...updatedPosts[postIndex],
              title: nombreResponse.data.nombre || updatedPosts[postIndex].title,
              direccion: direccionResponse.data.direccion ? `📍 ${direccionResponse.data.direccion}` : "",
              metro: metroResponse.data.metro ? `🚇 ${metroResponse.data.metro}` : "",
              bus: busResponse.data.bus ? `🚌 ${busResponse.data.bus}` : "",
              numero: numeroResponse.data.numero ? `☎️ ${numeroResponse.data.numero}` : "",
              email: emailResponse.data.email ? `📧 ${emailResponse.data.email}` : "",
              horario: horarioResponse.data.horario ? `🕦 ${horarioResponse.data.horario}` : "",
              condicio: condicioResponse.data.condicio || "",
            };
          }
        }
  
        // Filtrar los posts actualizados por categoría
        const filteredPosts = updatedPosts.filter(post => post.categoria === selectedTab);
  
        setPosts(filteredPosts); // Actualizar el estado con los posts filtrados
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };
  
    fetchPosts();
  }, [selectedTab]);
  
  
  return (
    <section className="relative place-items-center p-8">
      <div className="static bg-white z-10">
        <Tabs value={selectedTab} className="mx-auto max-w-7xl w-full mb-16">
          <div className="w-full flex mb-8 flex-col items-center">
            <TabsHeader className="h-24 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <Tab value="AjuntamentDeBarcelona" onClick={() => {setSelectedTab("AjuntamentDeBarcelona");}} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Ajuntament de Barcelona</Tab>
              <Tab value="Agape" onClick={() => {setSelectedTab("Agape");}} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Agape</Tab>
              <Tab value="CompanyiaFillesDeLaCaritat" onClick={() => {setSelectedTab("CompanyiaFillesDeLaCaritat");}} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Companyia Filles de la Caritat</Tab>
              <Tab value="FundacióAPIP-ACAM" onClick={() => {setSelectedTab("FundacióAPIP-ACAM");}} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Fundació APIP-ACAM</Tab>
              <Tab value="SantJoanDeDéu" onClick={() => {setSelectedTab("SantJoanDeDéu");}} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Sant Joan de Déu</Tab>
              <Tab value="OperacióFred" onClick={() => {setSelectedTab("OperacióFred");}} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Operació Fred</Tab>
            </TabsHeader>
          </div>
        </Tabs>
      </div>

      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {filteredPosts.map(({ img, title, direccion, metro, bus, numero, email, horario, condicio }, index) => (
          <BlogPostCard
            key={index}
            img={img}
            title={title}
            direccion={direccion}
            metro={metro}
            bus={bus}
            numero={numero}
            email={email}
            horario={horario}
            condicio={condicio}
          />
        ))}
      </div>
    </section>
  );
}

export default Posts;
