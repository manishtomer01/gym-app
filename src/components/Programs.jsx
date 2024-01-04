import { AiFillCaretRight, AiTwotoneCrown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { programs } from "../data";
import Card from "../UI/Card";
import SectionHead from "./SectionHead";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container ">
        <SectionHead icon={<AiTwotoneCrown />} title={"Programs"} />
        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className={"btn sm"}>
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
