import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ContentFooter from './components/ContentFooter/ContentFooter';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  

  return (
    <TodoProvider>
      <section className='todoapp'>
        <Header />
        <Content />
        <ContentFooter />
      </section>
    </TodoProvider>
  )
}

export default App
