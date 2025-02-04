import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";


interface BlogPostCardProps {
  img: string;
  title: string;
  direccion?: string;
  metro?: string;
  bus?: string;
  numero?: string;
  email?: string;
  horario?: string;
  condicio?: string;
}

export function BlogPostCard({
  img,
  title,
  direccion,
  metro,
  bus,
  numero,
  email,
  horario,
  condicio,
}: BlogPostCardProps) {
  const direccionSinEmoji = direccion ? direccion.replace("📍", "").trim() : "";
  const mapsLink = direccionSinEmoji ? `https://www.google.com/maps?q=${encodeURIComponent(direccionSinEmoji)}` : "#";
  console.log({ title, direccion, metro, bus, numero, horario, condicio });
  return (
    <Card shadow={true} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardHeader placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-110 object-cover"
        />
      </CardHeader>
      <CardBody className="p-6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Typography
          as="a"
          href={mapsLink}
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
        >
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {direccion}
        </Typography>
        <Typography className="mb-6 font-normal !text-black-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {metro}
        </Typography>
        <Typography className="mb-6 font-normal !text-black-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {bus}
        </Typography>
        <Typography className="mb-6 font-normal !text-black-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {numero}
        </Typography>
        <Typography className="mb-6 font-normal !text-black-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {email}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {horario}
        </Typography>
        <Typography className="mb-6 font-normal !text-black-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {condicio}
        </Typography>
        <div className="flex items-center gap-4">
        </div>
      </CardBody>
    </Card>
  );
}


export default BlogPostCard;