
import React from 'react';
//initial welcome screen
const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to PokéSwipe!</h1>
      <h5 className=" font-bold mb-4">How to play PokeSwipe</h5>
      <p className="mb-8">Pokemon Appear One at a Time choose "Like" or "Dislike" Build Your Favourite Team!</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={onStart}
      >
        Let's Go!
      </button>
    </div>
  );
};

export default WelcomeScreen;
