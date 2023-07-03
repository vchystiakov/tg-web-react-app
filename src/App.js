// import useEffect module
import { useEffect } from 'react';
// import Telegram instruments
import { useTelegram } from './hooks/useTelegram';
//import styles of Application
import './App.css';
// import Header module
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const { onToggleButton, tg } = useTelegram();
  // using useEffect hook for creating working state of telegram application
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}
export default App;

//lesson timecode 29:46
