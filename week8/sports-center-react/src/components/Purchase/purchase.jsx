import "./purchase.css";

const Purchase = () => {

    return (
        <section id="purchase">
        <div className="container content">
            <h2 className="h2">PURCHASE FROM US</h2>
            <p className="class-3p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor hic ratione culpa repudiandae iusto dignissimos fugiat ut corrupti!</p>
            <div className="purchase-box">
                <div className="p-card">
                    <img src="photos/purchase1.jpg" alt="Purchase-1" />
                    <p>Kettlebell / 5kg</p>
                    <p className="price"><s>89,99$</s> / 59,99$</p>
                    <p className="add-to-cart">Add To Cart</p>
                    <i className="bi bi-cart-check-fill"></i>
                </div>
                <div className="p-card">
                    <img src="photos/purchase2.jpg" alt="Purchase-2" />
                    <p>Treadmill</p>
                    <p className="price"><s>899,99$</s> / 599,99$</p>
                    <p className="add-to-cart">Add To Cart</p>
                    <i className="bi bi-cart-check-fill"></i>
                </div>
                <div className="p-card">
                    <img src="photos/purchase3.jpg" alt="Purchase-3" />
                    <p>Adjustable Dumbbell</p>
                    <p className="price"><s>89,99$</s> / 59,99$</p>
                    <p className="add-to-cart">Add To Cart</p>
                    <i className="bi bi-cart-check-fill"></i>
                </div>
                <div className="p-card">
                    <img src="photos/purchase4.jpg" alt="Purchase-4" />
                    <p>Kettlebell / 3kg</p>
                    <p className="price"><s>69,99$</s> / 39,99$</p>
                    <p className="add-to-cart">Add To Cart</p>
                    <i className="bi bi-cart-check-fill"></i>
                </div>
            </div>
        </div>
      </section>
    );
}

export default Purchase;