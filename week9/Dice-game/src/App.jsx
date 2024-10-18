import { useState } from 'react'
import './App.css';

//resimleri import etme
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';

const diceImages = [
    dice1, dice2, dice3, dice4, dice5, dice6];
  
  const DiceGame = () => {
    const [playerName, setPlayerName] = useState("Player 1");
    const [playerDice, setPlayerDice] = useState(6);
    const [computerDice, setComputerDice] = useState(6);
    const [result, setResult] = useState("");
    const [rolling, setRolling] = useState(false); 
  
    // Zar atma işlemi
    const rollDice = () => {
      setRolling(true);
      setResult(""); // Önceki sonucu temizle
  
      // 3 saniye boyunca zarları rastgele değiştirme
      const interval = setInterval(() => {
        setPlayerDice(Math.floor(Math.random() * 6) + 1);
        setComputerDice(Math.floor(Math.random() * 6) + 1);
      }, 100);
  
      // 3 saniye sonra durdur ve gerçek zar sonuçlarını belirle
      setTimeout(() => {
        clearInterval(interval);
        const newPlayerDice = Math.floor(Math.random() * 6) + 1;
        const newComputerDice = Math.floor(Math.random() * 6) + 1;
  
        setPlayerDice(newPlayerDice);
        setComputerDice(newComputerDice);
        setRolling(false);
  
        // Kazananı belirlemek
        if (newPlayerDice > newComputerDice) {
          setResult(`${playerName} wins! 🎉`);
        } else if (newPlayerDice < newComputerDice) {
          setResult("Computer wins! 🤖");
        } else {
          setResult("It's a draw! 😮");
        }
      }, 3000); // 3 saniye bekle
    };
  
    return (
      <div className="app">
        <h1>🎲 Dice Game 🎲</h1>
        <div>
          <label htmlFor="playerName">Player Name: </label>
          <input 
            type="text" 
            id="playerName" 
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)} 
          />
        </div>
  
        <div className='dices'>
            <div className='player'>
            <h2>{playerName} 😎</h2>
          {/* Kullanıcı zar görüntüsü */}
          <img 
            src={diceImages[playerDice - 1]} 
            alt={`Player Dice`} 
          />
          </div>
          <div className='player'>
          {/* Bilgisayar zar görüntüsü */}
          <h2>Computer 🤖</h2>
          <img 
            src={diceImages[computerDice - 1]} 
            alt={`Computer Dice`} 
          />
          </div>
        </div>
  
        {/* Zar atma butonu */}
        <button 
          className="roll-button"
          onClick={rollDice} 
          disabled={rolling} // Zar atılırken buton devre dışı
        >
          {rolling ? "Rolling..." : "Roll the Dice"}
        </button>
  
        {/* Sonuç */}
        <h2 className="result">{result}</h2>
        <footer>🎲 Dice Game 🎲</footer>
      </div>
    );
  };
  
  export default DiceGame;