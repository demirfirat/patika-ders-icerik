import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { data } from './data';

const alphabet = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S','Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z'];

function App() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [resultQuestion, setResultQuestion] = useState(false);
  const [wrong, setWrong] = useState(false);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const setKeyword = (keyword) => {
    if (keywords.length < answer.length) {
      keywords.push(keyword);
      setKeywords([...keywords]);
    }
    if (keywords.length === answer.length) {
      if (answer === keywords.join('')) {
        setIndex(index + 1);
        setKeywords([]);
        setResultQuestion(true);
      } else {
        setWrong(true);
      }
    }
  };

  useEffect(() => {
    setWrong(false);
    setAnswer("");
    setResultQuestion(false);
    if (typeof data[index] !== 'undefined') {
      const currentData = data[index];
      const answer = currentData.answer.toLowerCase();
      setAnswer(answer);
      setQuestion(`${currentData.id} - ${currentData.question}`); 
      const stringToArray = answer.split("");
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      const alphabetLowerData = stringToArray.map(answer => answer.toLowerCase());
      setAnswerArray(shuffle(alphabetLowerData));
    }
  }, [resultQuestion]);

  const removeKeyword = (index) => {
    keywords.splice(index, 1);    
    setKeywords([...keywords]);
  };

  return (
    <>
      <div className="App">
        {answer !== "" &&
          <div>
            <div>
              <span className='question'>{question}</span>
            </div>
            <div className='question-container'>
              {keywords.map((item, index) => (
                <span 
                  style={{ 'borderBottom': wrong ? '3px solid red' : '3px solid #ddd' }} 
                  className='question-element' 
                  onClick={() => removeKeyword(index)} 
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className='buttons'>
              {answerArray.map((item, index) => (
                <button className='button' key={index} onClick={() => setKeyword(item)}>{item}</button>
              ))}
            </div>
          </div>
        }
        {answer === "" &&
          <div className={"empty-message"}>Sorular Bitti 🥳</div>
        }
      </div>
    </>
  );
}

export default App;
