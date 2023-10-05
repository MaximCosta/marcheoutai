import React from "react";
import { Header, SearchBar, HomeImage, Feature, About, Contact} from "../../components";
import featureData from "../../constants/feature.json";
import aboutData from "../../constants/about.json";
import contactData from "../../constants/contact.json";
import "../../styles/Home.css";

const Home = () => {
    const imageUrl = "https://www.montpellier.fr/uploads/Image/da/43542_588_LUD_6928.jpg";

    return (
        <div className="home-container">
            <HomeImage imageUrl={imageUrl}/>
            <div className="content-container">
                <Header title="Trouve le marché proche de chez toi" />
                <SearchBar placeholder="Renseignez votre adresse" />
            </div>
            <Feature data={featureData.Features} />
            <About data={aboutData.About} />
            <Contact data={contactData.Contact} />
        </div>
    );
};

export default Home;
