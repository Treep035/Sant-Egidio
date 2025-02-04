"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a
      href="https://www.santegidio.org/downloads/Guia-ON-Barcelona-2021.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}
      >
        <Image
          width={32}
          height={32}
          className="w-5 h-5"
          alt="PDF SANT EGIDIO"
          src="/image/pdf.png"
        />{" "}
        PDF SANT EGIDIO
      </Button>
    </a>
  );
}
