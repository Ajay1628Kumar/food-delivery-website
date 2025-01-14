import Hero from "../components/hero";
import FoodItem from "../components/foodItems";
import FoodData from "../databases/foodData";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <h1 className="text-center text-[#2C2F24] text-2xl  mt-10 mb-7 font-[PlayFair] font-medium md:text-4xl">
        Browse Our Menu
      </h1>

      <hr className="mt-5 border-black" />

      {/* FoodItem Section */}
      <div className="md:grid md:grid-cols-5">
        {FoodData.map((data) => {
          return (
            <FoodItem
              imgSrc={data.imgSrc}
              price={data.price}
              rating={data.rating}
              foodName={data.foodName}
              key={data.id}
            />
          );
        })}
      </div>

      {/* FooterSection */}
      <Footer />
    </div>
  );
};

export default Home;
