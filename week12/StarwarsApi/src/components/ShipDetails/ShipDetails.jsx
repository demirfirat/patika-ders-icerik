import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './shipdetails.css';

function ShipDetails () {
    const [ship, setShip] = useState(null);
    const {name} = useParams();

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
        .then((response)=> response.json()).then((data)=> {
            const foundShip = data.results.find((ship) => ship.name === name);
            setShip(foundShip);
        });
    }, [name]);

    const navigate = useNavigate("/");

    if (!ship) {
        return <div className="loading">Loading..</div>
    }

    return (
        <div className="single-ship">
            <div className="ship-shadow">
            <div className="ship-detail">
                <div className="ship-name">
                    <p className="name">{ship.name}</p>
                </div>
                <div className="ship-img">
                    <img src="https://img1.cgtrader.com/items/695727/2b2d3a2bea/large/star-wars-falcon-ship-3d-model-fbx-blend.jpg" alt="image" />
                </div>
                <div className="ship-details">
                    <div className="ship-detail-info">
                        <span className="title">Model: </span>
                        <span className="value">{ship.model}</span>
                    </div>
                    <div className="ship-detail-info">
                        <span className="title">Hyperdrive Rating: </span>
                        <span className="value">{ship.hyperdrive_rating}</span>
                    </div>
                    <div className="ship-detail-info">
                        <span className="title">Passengers: </span>
                        <span className="value">{ship.passengers}</span>
                    </div>
                    <div className="ship-detail-info">
                        <span className="title">Max Atmosphering Speed:  </span>
                        <span className="value">{ship.max_atmosphering_speed}</span>
                    </div>
                    <div className="ship-detail-info">
                        <span className="title">Manufacturer: </span>
                        <span className="value">{ship.manufacturer}</span>
                    </div>
                    <div className="ship-detail-info">
                        <span className="title">Crew: </span>
                        <span className="value">{ship.crew}</span>
                    </div>
                    <div className="ship-detail-info">
                        <span className="title">Cargo Capacity: </span>
                        <span className="value">{ship.cargo_capacity}</span>
                    </div>
                    <div><button onClick={() => navigate(-1)}>Back</button></div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ShipDetails;