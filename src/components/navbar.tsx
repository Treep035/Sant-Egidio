import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  CakeIcon,
  MoonIcon,
  HomeModernIcon,
  HeartIcon
} from "@heroicons/react/24/solid";
import { useLanguage } from "../languages/LanguageContext";
import Image from "next/image";

const NAV_MENU = [
  {
    name: "On menjar",
    icon: CakeIcon,
    href: "/onmenjar",
  },
  {
    name: "On dormir",
    icon: MoonIcon,
    href: "/ondormir",
  },
  {
    name: "On rentar-se",
    icon: HomeModernIcon,
    href: "/onrentarse",
  },
  {
    name: "On curar-se",
    icon: HeartIcon,
    href: "/oncurarse",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_self" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <div className="container mx-auto flex items-center justify-between">
      <Typography
        as="a"
        href="http://localhost:3000"
        target="_self"
        color="blue-gray"
        className="text-lg font-bold"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Image
          src="/image/back.png" // Ruta de la imagen
          alt="Sant'Egidio"
          width={150}  // Ajusta el tamaño de la imagen
          height={50}  // Ajusta el tamaño de la imagen
        />
      </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          {/* Menú desplegable de idiomas */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 rounded border border-gray-300"
          >
            <option value="es">Español</option>
            <option value="ca">Catalán</option>
            <option value="en">Inglés</option>
          </select>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 rounded border border-gray-300"
            >
              <option value="es">Español</option>
              <option value="ca">Catalán</option>
              <option value="en">Inglés</option>
            </select>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
