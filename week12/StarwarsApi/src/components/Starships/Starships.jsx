import { useNavigate } from "react-router-dom";
import './starships.css';

function Starships ({name, hyperDrive, model}) {
    const navigate = useNavigate();

    return (
        <>
        <div className="ship"
        onClick={() => navigate("/ship/" + name)}>
            <div className="ship-imgs">
                <img src="https://img1.cgtrader.com/items/695727/2b2d3a2bea/large/star-wars-falcon-ship-3d-model-fbx-blend.jpg" alt="starwars" />
            </div>
            <div className="ship-info">
                <h2>{name}</h2>
                <div className="info-row">
                    <span className="title">Model: </span>
                    <span className="value">{model}</span>
                </div>
                <div className="info-row">
                    <span className="title">Hyperdrive Rating: </span>
                    <span className="value">{hyperDrive}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Starships;