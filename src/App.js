import { useState } from "react";

import "./styles/App.css";
import "./styles/reset.css";

import { makeRequest } from "./api/api";
import { SideMenu } from "./components/SideMenu/SideMenu";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Oi, meu chapa.",
    },
  ]);

  return (
    <div className="App">
      <SideMenu />
      <h1>It's alive!</h1>
    </div>
  );
}

export default App;
