import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  product_1,
  // product_2,
  // product_3,
  // product_6,
  // product_11,
  // product_8,
  team_1,
  team_2,
  team_3,
  team_4,
} from "../images/imageindex";
import Product from "../product/Product";
import BottomAds from "../bottomAds/BottomAds";
import TeamMember from "./teamMembers/TeamMember";
import Banner from "./banner/Banner";
import { db } from "../../firebase"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    db.collection('products').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {

          setProducts(prev => ([...prev, doc.data()]))
        })
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  console.log({ products });

  return (
    <div className="home">
      <Banner />
      <div className="home-container container flex__col">
        <div className="main">
          <div className="intro">
            <h2>
              Welcome to MAfriculture, the new trending arts and craft market in
              the world. <br />
              Please watch this intrduction from the founder of the company.
            </h2>

            <div className="yout__video">
              <iframe
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
            {products.map(({ title, image, rating, price }, index) => (
              <div key={index}>
                <Product
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                  id={index}
                />
              </div>
            ))}
            
            {/* <div>
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
            </div> */}
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
                Lorem ipsum dolor sit amet.
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
            <h3 className="title2 ">Meet the team commited to serve you</h3>
            <div className="team flex">
              <div className="team__member flex__col">
                <TeamMember
                  image={team_1}
                  title="Founder"
                  comments="This project keeps me up at night"
                  name="Chenwi Eugene"
                />
              </div>

              <div className="team__member-down flex__col">
                <TeamMember
                  image={team_2}
                  title="Lorem enginne"
                  comments="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard."
                  name="Eddie Seif"
                />
              </div>

              <div className="team__member flex__col">
                <TeamMember
                  image={team_3}
                  title="Lorem ipsum dolor"
                  comments="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard."
                  name="Irene Ekoti"
                />
              </div>
              <div className="team__member-down flex__col">
                <TeamMember
                  image={team_4}
                  title="Lorem ipsum"
                  comments="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard."
                  name="Nchida Nelson"
                />
              </div>
            </div>

            <h3 className="title2 cta__title">Sign up here</h3>

            <div className="cta">
              <p className="cta__p">
                We are working to make this a multi-vendor platform, so we
                strongly encourage you to register your interest if you are a
                creative arts and craft designer looking to expand your scope
                and get more people to know about your work and get to buy from
                you. <br />
                if you are not a designer but love our products, we still
                encourage to sign up for an account as a regular customer so
                that you can be benefiting from our bonuses.
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
          <BottomAds />
        </div>
      </div>
    </div>
  );
}

export default Home;
