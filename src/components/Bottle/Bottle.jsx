import { useEffect, useState } from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handlePurchase }) => {
    return (
        <div>
            <div className="bottle-container">
                <h3>{bottle.name}</h3>
                <img src={bottle.img} alt="" />
                <button onClick={() => handlePurchase(bottle)}>Purchase</button>
            </div>
        </div>
    );
};

export default Bottle;