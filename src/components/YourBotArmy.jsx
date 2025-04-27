import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;