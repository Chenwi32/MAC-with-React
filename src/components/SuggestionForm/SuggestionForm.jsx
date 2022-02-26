import React from "react";
import "./SuggestionForm.scss";

function SuggestionForm() {
  return (
    <div>
      <form className="footer__main-form flex__col" action="">
        <div className="footer__cta__input-container flex__col">
          <p>
            If you have any sugestions on how we could improve our System,
            please leave a message below
          </p>
          <label className="footer__cta-label" htmlFor="name">
            Name:
          </label>
          <input type="text" className="footer__cta-input" />

          <label className="footer__cta-label" htmlFor="email">
            Email:
          </label>
          <input type="email" className="footer__cta-input" />

          <label className="footer__cta-label" htmlFor="message">
            Message:
          </label>

          <textarea
            className="message"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="footer__cta__button flex">
          <button type="submit" className="btn2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SuggestionForm;
