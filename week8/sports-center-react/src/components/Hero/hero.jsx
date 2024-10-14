import "./hero.css";

const Hero = () => {
    return (
        <section className="section" id="hero">
            <div className="container content">
                <div className="section-title">
                    <button className="hero-btn" type="button">POWERFULL</button>
                    <h1>Group <br /> Practice <br /> With Trainer</h1>
                    <p className="text-start lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus quia amet dignissimos quis tempore odit ipsum architecto corporis odio, omnis libero impedit natus sapiente soluta veritatis obcaecati?
                    </p>
                    <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary me-md-5 px-3" type="button">Sign Up</button>
                    <button className="btn btn-outline-light px-3" type="button">Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;