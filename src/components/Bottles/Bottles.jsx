import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { getDataLS, saveDataLS } from "../utilities/utilities";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handlePurchase = (bottle) => {
        console.log(bottle);
        const newPurchase = [...purchase, bottle];
        setPurchase(newPurchase);
        saveDataLS(bottle.id);
    }

    useEffect(() => {
        const cart = getDataLS();
        setPurchase(cart);
    }, [])

    return (
        <div>
            <h3>Available Bottle: {bottles.length}</h3>
            <h4>Cart: {purchase.length}</h4>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handlePurchase={handlePurchase}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;