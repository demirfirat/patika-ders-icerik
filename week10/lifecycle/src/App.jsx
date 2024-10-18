import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useUnmount from '/src/useUnmount';
import useMount from './useMount';
import Button from './Button';


function App(props) {
  const [count, setCount] = useState(0);
  const [refreshCount, setRefreshCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => ++count);
  },[]);

  const memoizedValue = useMemo(() => {
    console.log("calculating..");
    const value = count * count * count;
    return value;
  }, [count]);
  console.log(handleClick);
  
  console.log(memoizedValue);

 /* const [refreshCount, setRefreshCount] = useState(0);
  //let count = 0;
  const count = useRef(0);

  const divRef = useRef(null);

  const handleClick = () => {
    count.current = count.current + 1;
    //setRefreshCount((prev) => ++prev);
    console.log(count); 
  };

  useEffect(() => {
    console.log(divRef);
  },[]);
  console.log(divRef);
  
    

  console.log("yeni render", Math.random());
  */

  /*
  const isMounted = useRef(false);
  useEffect(() =>{
    if (isMounted.current){
      //componentDidUpdate
      console.log(count);
    }
    isMounted.current = true;
  }, [count, props]);

  //componentDidMount
 useEffect(() =>{});

 //usemount
 useMount(() => {
   console.log("burası takılırken çalışır. özel hook");
 })
    //componentWillUnmount
 useUnmount(() => {
    console.log("burası sökülürken çalışır. özel hook");
  });
  */
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <span>{count}</span>
        <Button onClick={handleClick}>
          İncrese
        </Button>
        <Button onClick={() => setRefreshCount((prev) => ++prev)}>
          İncrese2
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
