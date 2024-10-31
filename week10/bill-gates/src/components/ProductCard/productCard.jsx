import {useState, useContext} from 'react';
import {balanceContext} from '../../context/balanceContext';
import "./productcard.css";

const ProductCard = ({id, name, price, image, description}) => {
    const [quantity, setQuantity] = useState(0);
    const {balance, addToCart} = useContext(balanceContext);
    const canBuy = balance - price >= 0;

    const buy = () =>{
        const canBuy = balance - price;
        if (canBuy >= 0){
            setQuantity((prev) => prev +1);
            addToCart({id, name, price}, 1);
        }
    };

    const sell = () =>{
        if (quantity > 0){
            setQuantity((prev) => prev -1);
            addToCart({id, name, price}, -1);
        }
    };

    return (
        <div className='product-card'>
            <img src={`/images/${image}`} alt={name} />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-description">{description}</p>
                <p className='price'>${price.toLocaleString("en-US")}</p>
                <div className="buttons-container">
                    <button
                    className='button sell-button' onClick={sell}
                    disabled={quantity <= 0}>sell</button>
                    <div className="quantity-display">{quantity}</div>
                    <button
                    className='button buy-button'
                    onClick={buy}
                    disabled={!canBuy}>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;