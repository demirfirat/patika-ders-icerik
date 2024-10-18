import { createRoot } from 'react-dom/client';
import App2 from './App2.jsx';
import App from './App.jsx';
import './index.css';
import { useState } from 'react';

const Root = () => {
  const [isvisible, setIsVisible] = useState(true);
  const app = isvisible ? <App /> : null;
  return(
  <>
  <div style={{display : 'flex', flexDirection: 'column'}}>
    <button onClick={()=> setIsVisible(prev=> !prev)}>Toggle</button>
    {app}
  </div>
  </>
  );
};

createRoot(document.getElementById('root')).render(
  
    <Root />
)
