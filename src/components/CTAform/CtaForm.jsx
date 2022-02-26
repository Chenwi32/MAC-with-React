import React from "react";
import "./CtaForm.scss";

function CtaForm() {
  return (
    <div>
      <h3 className="title2 cta__title">Sign up here</h3>

      <div className="cta">
        <p className="cta__p">
          We are working to make this a multi-vendor platform, so we strongly
          encourage you to register your interest if you are a creative arts and
          craft designer looking to expand your scope and get more people to
          know about your work and get to buy from you. <br />
          if you are not a designer but love our products, we still encourage to
          sign up for an account as a regular customer so that you can be
          benefiting from our bonuses.
        </p>
        <form action="" className="cta__form flex">
          <div className="cta__input-container flex__col">
            <label className="cta__label" htmlFor="username">
              Username:
            </label>
            <input type="text" className="cta__input" />

            <label className="cta__label" htmlFor="email">
              Email:
            </label>
            <input type="email" className="cta__input" />
          </div>
          <div className="cta__button flex">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CtaForm;
