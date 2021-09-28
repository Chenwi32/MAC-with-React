import React from "react";
import "./Home.css";
import {
  banner,
  product_1,
  product_2,
  product_3,
  product_6,
  product_11,
  product_8,
  team_1,
  team_2,
  team_3,
  team_4,
} from "../images/imageindex";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="banner-container flex__col">
        <div className="bannerImg__container">
          <img src={banner} alt="" className="banner" />
        </div>
        <div className="container">
          <h1 id="backToTop">MAfriculture</h1>

          <div className="quotes">
            <p>
              There Is Beauty In Everything — <br />
              African Fashion Is Never An Exception.
              <br />
              <strong>Give The African Style A Try!</strong>
            </p>
            <div id="animated__text" className="animated__text"></div>
            <span className="feel hide" id="feel">
              <strong>“FEEL THE ROYALTY”</strong>
            </span>
            <span className="hide" id="priority">
              <strong>
                <em>Your Satisfaction, Our Priority!</em>
              </strong>
            </span>
          </div>

          <div className="buttons flex">
            <button className="btn banner__btn">Shop Now</button>
            <button className="btn2 banner__btn">Sign Up</button>
          </div>
        </div>
      </div>

      <div className="home-container container">
        <div className="intro">
          <h2>
            Welcome to MAfriculture, the new trending arts and craft market in
            the world. <br />
            Please watch this intrduction from the founder of the company.
          </h2>

          <div className="yout__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bmVKaAV_7-A?autoplay=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <h2 className="title">Featured Products</h2>

        <div className="one__row grid">
          <div>
            <Product
              title="Table Flower Vase"
              image={product_6}
              price={2500}
              rating={3}
              id={5}
            />
          </div>

          <div>
            <Product
              title="Table Flower Vase"
              image={product_3}
              price={4500}
              rating={4}
              id={2}
            />
          </div>

          <div>
            <Product
              title="Dining Table Tray"
              image={product_8}
              price={5000}
              rating={4}
              id={3}
            />
          </div>

          <div>
            <Product
              title="Table Flower Vase"
              image={product_2}
              price={3000}
              rating={3}
              id={4}
            />
          </div>

          <div className="last__featured">
            <Product
              title="Decoration Stand"
              image={product_11}
              price={10000}
              rating={5}
              id={1}
            />
          </div>
        </div>

        <h2 className="title">Premium Product</h2>

        <div className="one__row premium">
          <div className="premium">
            <Product
              title="Floor Flower Vase with Inscription"
              image={product_1}
              price={15000}
              rating={5}
              id={6}
            />
          </div>
        </div>

        <h2 className="title">Our Services</h2>

        <div className="our__services">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet.{"  "}
              <span className="li__svg">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
              </span>
            </li>

            <li>
              Lorem ipsum dolor sit amet.{"  "}
              <span className="li__svg">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
              </span>
            </li>

            <li>
              Lorem ipsum dolor sit amet.{"  "}
              <span className="li__svg">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
              </span>
            </li>
            <li>
              Lorem ipsum dolor sit amet.{"  "}
              <span className="li__svg">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
              </span>
            </li>
          </ul>
        </div>

        {/*//////////////// Why trust us ///////////////*/}

        <h2 className="title">Why you should trust us</h2>

        <div className="trust__us">
          <p className="trust__us-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            natus cumque impedit veritatis amet fugit excepturi? Sunt suscipit
            numquam adipisci iste ut ullam. Veniam commodi molestias suscipit ut
            maxime modi at doloremque perspiciatis nisi? Commodi iste eum hic
            facilis fugiat eaque, provident velit vel perspiciatis quasi ex quam
            non aliquid nam cum dicta beatae delectus quidem quod corrupti
            saepe. Corrupti ullam rem quo corporis maxime ratione provident in
            aliquam. Doloremque eaque blanditiis animi minima nulla, dolorum
            commodi officia, tempora consequatur odio ipsa velit dolorem quam
            corrupti rerum rem libero itaque numquam ipsam delectus illo vel
            magnam dicta?
          </p>

          <div className="team">
            <div className="member flex">
              <img className="member__image" src={team_1} alt="" />

              <div className="member__quotes flex__col">
                <h4 className="member__title">Founder</h4>
                <p className="small">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.”
                </p>

                <p className="member__name">Chenwi Eugene</p>
              </div>
            </div>

            <div className="member flex">
              <img className="member__image" src={team_2} alt="" />

              <div className="member__quotes flex__col">
                <h4 className="member__title">Lorem enginne</h4>
                <p className="small">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.”
                </p>

                <p className="member__name">Eddie Seif</p>
              </div>
            </div>
            <div className="member flex">
              <img className="member__image" src={team_3} alt="" />

              <div className="member__quotes flex__col">
                <h4 className="member__title">Lorem ipsum dolor.</h4>
                <p className="small">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.”
                </p>

                <p className="member__name">Irene Ekoti</p>
              </div>
            </div>
            <div className="member flex">
              <img className="member__image" src={team_4} alt="" />

              <div className="member__quotes flex__col">
                <h4 className="member__title">Lorem ipsum. </h4>
                <p className="small">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.”
                </p>

                <p className="member__name">Chida Nelson</p>
              </div>
            </div>
          </div>

          <h2 className="title cta__title">Sign up here</h2>

          <div className="trust__us">
            <p className="trust__us-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque natus cumque impedit veritatis amet fugit excepturi?
              Sunt suscipit numquam adipisci iste ut ullam. Veniam commodi
              molestias suscipit ut maxime modi at doloremque perspiciatis nisi?
              Commodi iste eum hic facilis fugiat eaque, provident velit vel
              perspiciatis quasi ex quam non aliquid nam cum dicta beatae
              delectus quidem quod corrupti saepe. Corrupti ullam rem quo
              corporis maxime ratione provident in aliquam. Doloremque eaque
              blanditiis animi minima nulla, dolorum commodi officia, tempora
              consequatur odio ipsa velit dolorem quam corrupti rerum rem libero
              itaque numquam ipsam delectus illo vel magnam dicta?
            </p>

            <div className="team"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
