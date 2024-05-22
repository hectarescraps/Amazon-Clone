import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/91NrJMBpqcL._SY522_.jpg"
          />
          <Product
            id="49538094"
            title="Ooni Karu 12 Multi-Fuel Outdoor Pizza Oven – Portable Wood and Gas Fired Pizza Oven with Pizza Stone"
            price={289.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51KMxpkCJwL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Taylormade Golf P770 P 770 Phantom Black Forged Irons 4-PW KBS Tour Black Stiff"
            price={1499.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/51lI3+aTZDL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Tom's of Maine Fluoride-Free Antiplaque & Whitening Natural Toothpaste, Peppermint, 5.5 oz. 2-Pack"
            price={11.56}
            rating={5}
            image="https://m.media-amazon.com/images/I/71G6RRpVieL._SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Outward Hound Fun Feeder Slo Bowl, Slow Feeder Dog Bowl, Medium/Mini, Turquoise"
            price={10.43}
            rating={3}
            image="https://m.media-amazon.com/images/I/81Cpr-IVKhL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Wavestorm-15th Anniversary Edition Soft Top Foam 8ft Surfboard | for Beginners and All Levels | Includes Accessories | Leash and Multiple Fin Options, Turquoise pinline"
            price={259.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71B9AvLL0HL._AC_SX679_.jpg"
          />
          <Product
            id="9021090210"
            title="Spikeball 3 Ball Original Roundnet Game Set - Includes 3 Balls, net and Bag"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81EAY6jCWiL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
