import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Buscar por tipo</h1>
        <PropertyList/>
        <h1 className="homeTitle">Destacados</h1>
        <FeaturedProperties/>
        <MailList/>
      
      </div>
    </div>
  );
};

export default Home;
