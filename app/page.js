import Compare from "./components/homePage/Compare";
import Footer from "./components/homePage/Footer";
import Header from "./components/homePage/Header";
import Hotels from "./components/homePage/Hotels";
import Trending from "./components/homePage/Trending";
import Types from "./components/homePage/Types";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hotels />
      <Compare />
      <Types />
      <Trending />
      <Footer />
    </div>
  );
}
