import "./card.css";

const Card = () => {
    return (
    <div className="card-container row text-center gap-5">
        <div className="card">
            <div className="card-content">
            <h3>325</h3>
            <span>Course</span>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
            <h3>405</h3>
            <span>Work Out</span>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
            <h3>305</h3>
            <span>Working Hour</span>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
            <h3>705</h3>
            <span>Happy Client</span>
            </div>
        </div>
     </div>
    );
}

export default Card