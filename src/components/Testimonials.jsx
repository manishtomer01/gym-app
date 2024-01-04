import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import Card from "../UI/Card";
import { useState } from "react";
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { id, name, quote, job, avatar } = testimonials[index];
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          className="testimonials__head"
          icon={<ImQuotesLeft />}
          title="testimonials"
        />
        <Card className="testimonials">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            onClick={() => {
              setIndex((prev) => prev - 1);
              if (index <= 0) {
                setIndex(testimonials.length - 1);
              }
            }}
            className="testimonials__btn"
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            onClick={() => {
              setIndex((prev) => prev + 1);
              if (index >= testimonials.length - 1) {
                setIndex(0);
              }
            }}
            className="testimonials__btn"
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}
