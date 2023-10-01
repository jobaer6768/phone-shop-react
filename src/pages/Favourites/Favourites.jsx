import { useEffect, useState } from "react";
import PhoneCard from "../../components/Phones/PhoneCard";


const Favourites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noDataFound, setNoDataFound] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if (!favoriteItems) {
            setNoDataFound("No Items Here");
        }
        else {
            setFavorites(favoriteItems);

            const total = favoriteItems.reduce((preValue, currValue) => preValue+currValue.price, 0);
            setTotalPrice(total);
        }

    }, [])

    const handleRemoveBtn = () => {
        localStorage.clear();
        setFavorites([]);
        setNoDataFound("No Items Here");
    }

    return (
        <div className="text-center">
            {
                noDataFound ? <p className="flex justify-center items-center h-[60vh] text-5xl font-bold">{noDataFound}</p>
                    :
                    <div className="my-10">
                        <div className="text-2xl font-semibold my-2">
                            Total Price: {totalPrice}
                        </div>
                        {favorites.length > 0 && <button onClick={handleRemoveBtn} className="px-5 py-2 rounded-lg my-4 mb-6 font-medium bg-red-300 text-white">Remove All</button>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {
                                isShow ? favorites?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                                    :
                                    favorites?.slice(0, 4).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                            }
                        </div>
                        {
                            favorites.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 py-2 rounded-lg my-4 mb-6 font-medium bg-green-300 text-white">{isShow ? 'See Less' : 'See More'}</button>
                        }
                    </div>
            }
        </div>
    );
};

export default Favourites;