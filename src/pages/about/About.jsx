import { Header } from "../../components";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";
export default function About() {
  return (
    <>
      <Header title={"About Us"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        voluptas incidunt deserunt iusto odio aliquam repellat consectetur.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod repellendus
              odio consectetur laborum sunt voluptates cum amet illum
              reiciendis. Esse quis eos a.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod repellendus
              odio consectetur laborum sunt voluptates cum amet illum
              reiciendis. Esse quis eos a.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod
              repellendus.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod repellendus
              odio consectetur laborum sunt voluptates cum amet illum
              reiciendis. Esse quis eos a.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod repellendus
              odio consectetur laborum sunt voluptates cum amet illum
              reiciendis. Esse quis eos a.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod repellendus
              odio consectetur laborum sunt voluptates cum amet illum
              reiciendis. Esse quis eos a.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod repellendus
              odio consectetur laborum sunt voluptates cum amet illum
              reiciendis. Esse quis eos a.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              eveniet officia doloremque, tempore ad accusamus? Quod
              repellendus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
