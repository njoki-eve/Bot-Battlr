# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Bot battlr

Welcome to the Bot Army Manager! This is a fun and interactive React application where you can manage your army of bots. You can enlist bots, sort them by different attributes, and even discharge them from your army. It's a great way to practice React skills and have fun with bots!

## Features

    Bot Collection:

        View a collection of bots with their details (health, damage, armor, etc.).

        Enlist bots into your army by clicking on them.

    Your Bot Army:

        See the bots you've enlisted in your army.

        Discharge bots from your army if you no longer need them.

    Sorting:

        Sort your bots by health, damage, or armor using a floating sort dropdown.

    Floating Sort Div:

        The sort dropdown is a floating div that stays on the screen, making it easy to sort your bots anytime.

## How It Works 
1. Bot Collection (BotCollection.jsx)

This component displays all the bots available for enlistment. Each bot is represented as a BotCard.

    Props:

        bots: The list of bots to display.

        onEnlist: A function to handle enlisting a bot into your army.

    Styling:

        The bots are arranged in a grid layout using CSS Grid or Flexbox.

        Each bot card is compact and visually appealing.

2. Bot Card (BotCard.js)

This component represents a single bot in the collection or army.

    Props:

        bot: The bot object containing details like health, damage, and armor.

        onEnlist or onDischarge: Functions to handle enlisting or discharging the bot.

   
    Styling:

        The army section is styled similarly to the bot collection but with a distinct look to differentiate it.

4. Sort Component (Sort.js)

This component allows you to sort your bots by health, damage, or armor. It’s a floating div that stays on the screen for easy access.

    Props:

        onSort: A function to handle sorting based on the selected criteria.

## How to Run the Project 

    Clone the Repository:
    git clone https://github.com/your-username/bot-army-manager.git

    Install Dependencies:
    npm install

    Run the App:
    npm run dev

    Open in Browser:
    Visit http://localhost:8001 to see your bot army

## Technologies Used 
    React: For building the user interface.
    CSS: For styling the components.

    JavaScript: For handling logic and state management.

created by EVE