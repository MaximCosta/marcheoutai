import React from "react";
import { Header, SearchBar, HomeImage } from "../../components";
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
        </div>
    );
};

export default Home;
