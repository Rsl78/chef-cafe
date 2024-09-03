import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/title';

function App() {
  return (
    <div className="container  mx-auto font-lexend">
      <Navbar/>
      <Header/>
      <Title/>
    </div>
  );
}

export default App
