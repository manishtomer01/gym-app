import React from "react";
import { Header } from "../../components/index";
import { plans } from "../../data";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import "./plans.css";
export default function Plans() {
  return (
    <>
      <Header image={HeaderImage} title="Membership Plans">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores fugiat
        illo cumque.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => (
            <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {features.map(({ available, feature }, index) => (
                <p className={!available ? "disabled" : ""}>{feature}</p>
              ))}
              <button className="btn lg">Choose Plan</button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
