import PropTypes from 'prop-types'
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

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlePurchase: PropTypes.func.isRequired
}

export default Bottle;