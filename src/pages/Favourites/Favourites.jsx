import { useEffect, useState } from "react";
import PhoneCard from "../../components/Phones/PhoneCard";


const Favourites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noDataFound, setNoDataFound] = useState("");

    useEffect(() => {

        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if (!favoriteItems) {
            setNoDataFound("No Items Here");
        }
        else {
            setFavorites(favoriteItems);
        }

    }, [])

    return (
        <div>
            {
                noDataFound ? <p className="flex justify-center items-center h-[60vh]">{noDataFound}</p>
                    :
                    <div className="flex my-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {
                                favorites?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favourites;