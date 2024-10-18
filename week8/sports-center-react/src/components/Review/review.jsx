import "./review.css";
import Client1 from "/photos/client1.jpg";
import Client2 from "/photos/client2.jpg";

const Review = () => {

    return(
        <section id="review">
        <div className="container content">
            <h2>REVIEW CLIENT</h2>
            <p className="class-4p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor hic ratione culpa repudiandae iusto dignissimos fugiat ut corrupti!</p>
            <div className="review-container">
                <div className="client">
                    <div className="client-info">
                        <img src={Client1} alt="Client-1" />
                        <div className="c-name">
                        <p>Diet Expert</p>
                        <p>CFO</p>
                        </div>
                    </div>
                    <div className="comments">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae soluta at amet commodi itaque? Eaque magni, hic provident iure est beatae inventore earum? Fugit laudantium necessitatibus soluta obcaecati aliquid.</p>
                    </div>
                </div>
                <div className="client">
                    <div className="client-info">
                        <img src={Client2} alt="Client-2" />
                        <div className="c-name">
                        <p>Cardio Trainer</p>
                        <p>CEO</p>
                        </div>
                    </div>
                    <div className="comments">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe non earum ratione veniam unde natus a odit atque, magnam rem doloremque alias molestiae, dolore deleniti quidem ipsa, fuga minima incidunt!</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}

export default Review;