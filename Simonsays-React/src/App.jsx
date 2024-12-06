import './App.css'
import { useState, useEffect } from 'react'

function sleep (ms = 500){
  return new Promise((res) => setTimeout(res, ms));
}

const boardItem = [
 {id : 1, name: "green", sound:"/sounds/green.mp3"}, 
 {id : 2, name: "blue", sound:"/sounds/blue.mp3"}, 
 {id : 3, name: "yellow", sound:"/sounds/yellow.mp3"}, 
 {id : 4, name: "red", sound:"/sounds/green.mp3"}, 
];
function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [computerArray, setComputerArray] = useState([]);
  const [userArray, setUserArray] = useState([]);
  const [turn, setTurn] = useState(true);

  const playSound = (idOrPath) => {
    let sound;
    if (typeof idOrPath === "string") {
      sound = idOrPath;
    }else { sound = boardItem.find(item => item.id === idOrPath)?.sound;}
    if (sound){
      const audio = new Audio(sound);
      audio.play();
    }
  }
  const handleStart = () => {
    setIsPlaying(true);
    setComputerArray([]);
    setUserArray([]);
    setScore(0);
    setTimeout(() => {
      computerTurn();
    },1000)
  }

  const computerTurn = () => {
    const random = Math.floor(Math.random()*4)+1;
    setComputerArray ((prev) => [...prev, random]);
  }
  useEffect (() => {
    const animateComputerArray = async () => {
      for (let i = 0; i < computerArray.length; i++){
        const pad = document.getElementById(computerArray[i]);
        pad?.classList.add("active");
        playSound(computerArray[i]);
        await sleep();
        pad?.classList.remove("active");
        await sleep();
      }
      if (computerArray.length !== 0){
        setTurn(!turn);
      }
    };
    animateComputerArray();
  }, [computerArray]);
  
  useEffect (() => {
    if(userArray.length === 0)return;
    if(userArray.length === computerArray.length){
      if(JSON.stringify(userArray) === JSON.stringify(computerArray)){
        setScore((prev) => prev + 1);
        setUserArray([]);
        setTimeout(() => {
          computerTurn();
        }, 1000);
        setTurn(!turn);
      } else{
        playSound("/sounds/game-over.mp3")
        setIsPlaying(false);
      }
    }
  }, [userArray]);

  const handleUserClick = async(e) => {
    const id = parseInt(e.target.id);
    setUserArray((prev) => [...prev, id]);
    const pad = document.getElementById(id);
    pad.classList.add("active");
    playSound(id);
    await sleep();
    pad.classList.remove("active");
  }
  return (
    <div className='App'>
      <h2>Score: {score}</h2>
      {isPlaying && <p> {turn ? "Simon" : "You"} </p> }
      {!isPlaying && (
        <div className='start'>
          <h2>Simon Game</h2>
          <div className="startBtn" onClick={handleStart}>
            Start Game
          </div>
        </div>
      )}
      {isPlaying && (
        <div className="board">
          <div className="pads">
            {boardItem.map((item) =>(
              <div
              key={item.name}
              id={item.id}
              className={`pad ${item.name}`}
              onClick={handleUserClick}></div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
