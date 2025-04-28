import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} action={enlistBot} actionLabel="Enlist" />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;