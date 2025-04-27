import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy"; 
import BotSpecs from './BotSpecs';

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:3000/bots');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Failed to fetch bots:', error);
        // Optionally set error state to show to users
        // setError(error.message);
      }
    };
  
    fetchBots();
  }, []);
  
  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(bot => bot.id !== botId));
      setArmy(army.filter(bot => bot.id !== botId));
    });
  };

  return (
    <div>
      <YourBotArmy 
        army={army} 
        removeFromArmy={removeFromArmy} 
        dischargeBot={dischargeBot}
      />
      
      {selectedBot ? (
        <BotSpecs 
          bot={selectedBot}
          goBack={() => setSelectedBot(null)}
          enlistBot={addToArmy}
        />
      ) : (
        <BotCollection 
          bots={bots} 
          addToArmy={addToArmy} 
          setSelectedBot={setSelectedBot}
          dischargeBot={dischargeBot}
        />
      )}
    </div>
  );
}

export default BotsPage;