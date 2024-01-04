import HeaderImage from "../../images/header_bg_2.jpg";
import { Header } from "../../components/index";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";
export default function Contact() {
  return (
    <>
      <Header title={"Get In Touch"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
        facere accusamus ab quos.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:support@eggator.com"
              traget="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/ernest_achiever"
              traget="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+917900698938"
              traget="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
