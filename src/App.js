import { useEffect } from 'react';
import './App.css';
// Variable which whil close App
const tg = window.Telegram.WebApp;

function App() {
  // using useEffect hook for creating working state of telegram application
  useEffect(() => {
    tg.ready();
  });
  // event function which will close App
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      work
      {/* Adding eventListener onCLick to button in order to close an application if the button is clicked */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
