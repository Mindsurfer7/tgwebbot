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
    </div>
  );
}

export default App;
