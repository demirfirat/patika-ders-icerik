import { useState } from 'react';
import './ourclasses.css';
import Yogaphoto from "/photos/yoga.jpg";
import Groupphoto from "/photos/group.webp";
import Solophoto from "/photos/solo.jpg";
import Stretchingphoto from "/photos/stret.webp";

const OurClasses = () => {
    //aktif sınıfı yönetmek için state kullanıyoruz.
    const [activeClass, setActiveClass] = useState('yoga');

    //buton tıklama fonksiyonu
    const handleButtonClick = (className) => {
        setActiveClass(className); //tıklanan class'ı aktif yap.
    };

    return (
        <section id='classes' className='classes-section'>
            <div className="container content">
                <h2>OUR CLASSES</h2>
                <p className="class-1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor hic ratione culpa repudiandae iusto dignissimos fugiat ut corrupti!
                </p>
                {/*Butonlar*/}
                <div className="classes-buttons">
                    <button className={`class-btn ${activeClass === 'yoga' ? 'active' : ''}`} onClick={() => handleButtonClick('yoga')}>Yoga</button>
                    <button className={`class-btn ${activeClass === 'group' ? 'active' : ''}`} onClick={() => handleButtonClick('group')}>Group</button>
                    <button className={`class-btn ${activeClass === 'solo' ? 'active' : ''}`} onClick={() => handleButtonClick('solo')}>Solo</button>
                    <button className={`class-btn ${activeClass === 'stretching' ? 'active' : ''}`} onClick={() => handleButtonClick('stretching')}>Stretching</button>
                    {/*Butonlar bitiş*/}
                </div>
                {/* Content alanı */}
                <div className={`class-content yoga-content ${activeClass === 'yoga' ? 'active-content' : ''}`}>
                    <div className="classes-text">
                        <h3>Why are your Yoga?</h3>
                        <p className="text-dark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi blanditiis libero neque dolor laborum! Ab maxime odio cum suscipit impedit vero sequi reiciendis, doloremque mollitia accusantium dolores quae. 
                        </p>
                        <h3>When comes Yoga Your Time.</h3>
                        <p>Saturday-Sunday: 8:00am — 10:00am</p>
                        <p>Monday-Tuesday: 10:00am — 12:00pm</p>
                        <p>Wednesday-Friday: 3:00pm — 6:00pm</p>
                    </div>
                    <img src={Yogaphoto} alt="Yoga" />
                </div>
                <div className={`class-content group-content ${activeClass === 'group' ? 'active-content' : ''}`}>
                    <div className="classes-text">
                        <h3>Group Practice</h3>
                        <p className="text-dark">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error facilis tenetur excepturi hic totam, in sit est incidunt nisi sequi saepe expedita vero dolorum, aliquid blanditiis porro et eum esse!
                        </p>
                        <h3>When comes Group Time.</h3>
                        <p>Saturday-Sunday: 10:00am — 12:00pm</p>
                        <p>Monday-Tuesday: 12:00pm — 3:00pm</p>
                        <p>Wednesday-Friday: 4:00pm — 7:00pm</p>
                    </div>
                    <img src={Groupphoto} alt="Group" />
                </div>

                <div className={`class-content solo-content ${activeClass === 'solo' ? 'active-content' : ''}`}>
                    <div className="classes-text">
                        <h3>Solo Practice</h3>
                        <p className="text-dark">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error facilis tenetur excepturi hic totam, in sit est incidunt nisi sequi saepe expedita vero dolorum, aliquid blanditiis porro et eum esse!
                        </p>
                        <h3>When comes Solo Time.</h3>
                        <p>Saturday-Sunday: 7:00am — 9:00am</p>
                        <p>Monday-Tuesday: 11:00am — 1:00pm</p>
                        <p>Wednesday-Friday: 2:00pm — 3:00pm</p>
                    </div>
                    <img src={Solophoto} alt="Solo" />
                </div>

                <div className={`class-content stretching-content ${activeClass === 'stretching' ? 'active-content' : ''}`}>
                    <div className="classes-text">
                        <h3>Stretching</h3>
                        <p className="text-dark">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error facilis tenetur excepturi hic totam, in sit est incidunt nisi sequi saepe expedita vero dolorum, aliquid blanditiis porro et eum esse!
                        </p>
                        <h3>When comes Stretching Time.</h3>
                        <p>Saturday-Sunday: 9:00am — 10:00am</p>
                        <p>Monday-Tuesday: 12:00pm — 14:00pm</p>
                        <p>Wednesday-Friday: 5:00pm — 8:00pm</p>
                    </div>
                    <img src={Stretchingphoto} alt="Stretching" />
                </div>
                {/* CONTENT AREA END */}
            </div>
        </section>
    );
};

export default OurClasses;