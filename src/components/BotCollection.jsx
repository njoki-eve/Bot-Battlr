import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy,setSelectedBot, dischargeBot}) {
  return(
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-grid">
         {bots.map((bot) => (
           <BotCard 
             key={bot.id}
             bot={bot}
             onClick={() => setSelectedBot(bot)}
             addToArmy={addToArmy}
             dischargeBot={dischargeBot}
           />
         ))}
      </div>
    </div>
  )
}
export default BotCollection;