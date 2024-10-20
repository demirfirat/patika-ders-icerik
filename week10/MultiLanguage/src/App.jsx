import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';


const functionOutOfComponent = (user) => {
  console.log("hello");
  console.log(i18next.t("welcome", { user }));
  
}
function App() {
  const [count, setCount] = useState(0)
  const {t, i18n} = useTranslation();
  const changeLanguage = (e) => {
    const langKey = e.target.value
    i18n.changeLanguage(langKey);
  }

  const user = {
    name: "John",
    surname: "Doe",
  }
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
      <h1>MultiLanguage</h1>
      <h3 className='value'>{ new Date("2022-01-01T00:00:00").toLocaleString(
        i18n.language
      )}</h3>
      <span>{t("Title")} </span>
      <select onChange={changeLanguage}>
        <option value="tr">{t("languages.tr")}</option>
        <option value="en">{t("languages.en")}</option>
        <option value="ar">{t("languages.ar")}</option>
      </select>
      <div className="card">
      <button>{i18n.language}</button>
        <button onClick={() => setCount((count) => count + 1)}>
          {t("btn")} {count}
        </button>
        <button onClick={()=>{
          functionOutOfComponent(user);
        }}> {t("selam")}</button>
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
