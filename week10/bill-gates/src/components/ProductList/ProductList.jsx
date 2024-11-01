import './product.css';

const ProductList = ({products, onBuy, onSell }) => {

    return (
        <div className="product-list">
            <div className="products">
                {products.map(product => (
                    <div className='product' key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className='price'>${product.price.toLocaleString("en-US")}</p>
                        <div className='cart'>
                            <button className='sell-button' disabled={product.quantity === 0}
                            onClick={() => onSell(product.id, product.price)} style={{ backgroundColor: product.quantity > 0 ? '#F53B6E': 'rgb(227,227,232)', color: product.quantity > 0 ? 'white' : 'black'}}>Sell</button>
                            <input type="text" className='input' value={product.quantity} readOnly />
                            <button className='buy-button' onClick={()=> onBuy(product.id, product.price)}>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;