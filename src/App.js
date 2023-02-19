import { useEffect } from "react";
import appCss from "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  // const onClose = () => {
  //   tg.close();
  // };

  return (
    <div className={appCss}>
      <button onClick={onclose}>close</button>
      <button onClick={onclose}>open</button>
      <button onClick={onclose}>kek</button>
      <button onClick={onclose}>x</button>
      <button onClick={onclose}>y</button>
    </div>
  );
}

export default App;
