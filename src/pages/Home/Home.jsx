import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phone from "../../components/Phones/Phone";


const Home = () => {

    const phones = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <Phone phones={phones}></Phone>
        </div>
    );
};

export default Home;