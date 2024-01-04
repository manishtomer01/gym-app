import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
export default function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorksOut</h4>
          <h1>Join The Legends of Fitness World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, in ex
            numquam explicabo possimus accusantium sed et quam ipsum at?
          </p>
          <Link to={"/plans"} className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="main__header" />
          </div>
        </div>
      </div>
    </header>
  );
}
