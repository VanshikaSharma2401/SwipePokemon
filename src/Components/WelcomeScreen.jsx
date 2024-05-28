
import React from 'react';
//initial welcome screen
const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to PokéSwipe!</h1>
      <p className="mb-8">Swipe through Pokémon and build your dream team!</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
};

export default WelcomeScreen;
