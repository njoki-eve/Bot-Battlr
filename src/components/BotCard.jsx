import React from "react";

function BotCard({ bot, action, actionLabel, deleteAction }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      <button onClick={() => action(bot)}>{actionLabel}</button>
      {deleteAction && <button onClick={() => deleteAction(bot)}>Discharge</button>}
    </div>
  );
}

export default BotCard;