import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    console.log("Fetching bots...");
    fetch("https://bots-si0g.onrender.com/bots")
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        setBots(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`https://bots-si0g.onrender.com/bots/${bot.id}`, { method: "DELETE" });
    setArmy(army.filter((b) => b.id !== bot.id));
    setBots(bots.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App; 