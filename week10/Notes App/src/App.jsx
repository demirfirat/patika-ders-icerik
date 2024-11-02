import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import Input from './components/Input/Input';
import NoteList from './components/NoteList/NoteList';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
 

  return (
    <>
    <Provider store={store}>
    <div className='App'>
      <h1>NoteApp</h1>
      <SearchInput />
      <Input />
      <div className="note-list">
        <NoteList />
      </div>
    </div>
    </Provider>
    </>
  )
}

export default App
