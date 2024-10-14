import "./trainer.css";

const Trainer = () => {

    return (
        <section id="trainer">
        <div className="container content">
            <h2 className="h2">OUR BEST TRAINERS</h2>
            <p className="class-2p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor hic ratione culpa repudiandae iusto dignissimos fugiat ut corrupti!</p>
            <div className="trainer-cards">
                <div className="trainer-card">
                    <div className="top-bar"></div>
                    <img src="photos/trainer1.jpg" alt="Trainer-1" />
                    <div className="trainer-info">
                        <h2>Jane Doe</h2>
                        <p>Cardio Trainer</p>
                    </div>
                </div>
                <div className="trainer-card">
                    <div className="top-bar"></div>
                    <img src="photos/trainer2.jpg" alt="Trainer-2" />
                    <div className="trainer-info">
                        <h2>Nick Mitchell</h2>
                        <p>Personal Trainer</p>
                    </div>
                </div>
                <div className="trainer-card">
                    <div className="top-bar"></div>
                    <img src="photos/trainer3.jpg" alt="Trainer-3" />
                    <div className="trainer-info">
                        <h2>Kayla Itsines</h2>
                        <p>Stretching Trainer</p>
                    </div>
                </div>
            </div>
        </div>
      </section>   
    );
}

export default Trainer;