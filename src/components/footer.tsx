import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
// const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.santegidio.org/"
            target="_blank"
            variant="h6"
            className="text-gray-900"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Sant Egidio
          </Typography>
          {/* <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul> */}
          <div className="flex w-fit justify-center gap-2">
            <a href="https://x.com/santegidio_ES" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <i className="fa-brands fa-twitter text-lg" />
              </IconButton>
            </a>
            <a href="https://www.youtube.com/@santegidio" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <i className="fa-brands fa-youtube text-lg" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/sant.egidio/?hl=es" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/SantEgidioBarcelona/" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
        >
          <a href="https://www.prateducacio.com/" target="_blank">
            Prat Educació
          </a>{" "}
            - {" "}
          <a href="https://github.com/Treep035" target="_blank">
            Marco Fernández
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
