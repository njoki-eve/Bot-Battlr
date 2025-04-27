import React from "react";


function BotCard({ bot, addToArmy, onClick, dischargeBot}){
   const handleEnlist =(e) => {
     e.stopPropagation();
     addToArmy(bot)
   }
   const handleDischarge = (e) => {
      e.stopPropagation();
      dischargeBot(bot.id)
   }


  return(
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name}/>
        <h3>{bot.name}</h3>
        <div className="bot-stats">
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </div>
        <div className="bot-class">{bot.bot_class}</div>
        <div className="bot-actions">
        <button onClick={handleEnlist}>Enlist</button>
        <button className="delete-btn" onClick={handleDischarge}>x</button>
        </div>
        
    </div>
  )
}
export default BotCard;