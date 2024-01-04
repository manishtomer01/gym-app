import { Header } from "../../components/index";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

export default function Gallery() {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= 15; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title={"Our Gallery"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt
        voluptate recusandae est minus aliquam.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery Image${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
