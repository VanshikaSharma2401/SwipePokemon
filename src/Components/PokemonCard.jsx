import React, { useEffect, useState } from 'react';
import SpeechBubble from './SpeechBubble';

const PokemonCard = ({ pokemon, onLike, onDislike, stopSpeech }) => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  useEffect(() => {
    if (pokemon) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = `Hello, my name is ${pokemon.name}. Please select me.`;
      window.speechSynthesis.speak(msg);
      
      setShowSpeechBubble(true);
      const timer = setTimeout(() => setShowSpeechBubble(false), 3000);
      
      return () => {
        clearTimeout(timer);
        window.speechSynthesis.cancel(); 
      };
    }
  }, [pokemon]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel(); 
    };
  }, []);

  if (!pokemon) return null;

  return (
    <div className="border-2 border-black p-4 rounded-lg bg-[#f1e8e8] shadow-md text-center relative min-w-[400px]">
      {showSpeechBubble && <SpeechBubble text={`Hello, my name is ${pokemon.name}. Please select me.`} />}
      <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{pokemon.name}</h2>
      <div className="mt-2">
        <p className="font-semibold">Abilities</p>
        <div className="flex flex-wrap justify-center">
          {pokemon.abilities.map(ability => (
            <span key={ability} className="bg-gray-200 rounded-md border-[1.5px] border-black px-3 py-1 m-1">
              {ability}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <p className="font-semibold">Types</p>
        <div className="flex flex-wrap justify-center">
          {pokemon.types.map(type => (
            <span 
              key={type} 
              className={`type type-${type.toLowerCase()} bg-gray-200 rounded-md border-[1.5px] border-black px-3 py-1 m-1`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-around">
        <button 
          className="px-5 py-2 bg-[#FF69B4] text-white font-semibold rounded-lg border-[1.5px] border-black"
          onClick={onDislike}
        >
          Dislike
        </button>
        <button 
          className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg border-[1.5px] border-black"
          onClick={onLike}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
