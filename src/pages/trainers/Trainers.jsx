import { Header, Trainer } from "../../components/index";
import HeaderImage from "../../images/header_bg_5.jpg"
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import "./trainers.css"

export default function Trainers() {
  return (
    <>
      <Header title={"Our Trainers"} image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem,
        accusantium earum aliquam dolorum nam eius pariatur quae magnam.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin   />, link: socials[3] }
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}







