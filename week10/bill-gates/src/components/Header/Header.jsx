import './header.css';

const Header =({balance}) => {
    return (
        <>
        <div className="container">
            <header className='head'>
                <img src="/img/billgates.jpg" alt="billy-gutess" className="head-img" />
                <h1 className='head-title'>Spend Bill Gates Money</h1>
            </header>
            </div>
            <div className="money-container">
                ${balance.toLocaleString("en-US")}
            </div>
        </>
    );
};

export default Header