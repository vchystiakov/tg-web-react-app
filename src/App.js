// import useEffect module
import { useEffect } from 'react';
// import Telegram instruments
import { useTelegram } from './hooks/useTelegram';
//import styles of Application
import './App.css';
// import Header module
import Header from './components/Header/Header';

function App() {
  const { onToggleButton, tg } = useTelegram();
  // using useEffect hook for creating working state of telegram application
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      App is working
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}
export default App;
