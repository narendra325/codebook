import HeroIMG from "../../../assets/images/hero.avif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center my-5 dark:bg-gray-900 dark:text-white">
      <div className="text w-full my-5 lg:w-1/2 px-4">
        <h1 className="font-bold text-4xl md:text-5xl mb-5">
          The Ultimate eBook Store
        </h1>
        <p className="text-lg md:text-2xl mb-5">
          E-commerce (electronic commerce) is the exchange of goods and services
          and the transmission of funds and data over the internet. E-commerce
          relies on technology and digital platforms, including websites.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="visual w-full my-5 lg:w-1/2 lg:max-w-xl px-4">
        <img
          className="rounded-lg max-h-full w-full"
          src={HeroIMG}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
