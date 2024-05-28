import React, { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import PokemonCard from '../components/PokemonCard';
import LikedPokemonList from '../components/LikedPokemonList';
import { getPokemon } from '@/Api';

const Home = () => {
  const [started, setStarted] = useState(false);
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [showLikedPokemon, setShowLikedPokemon] = useState(false);

  useEffect(() => {
    if (started) {
      loadNewPokemon();
    }
  }, [started]);

  const startApp = () => {
    setStarted(true);
  };

  const stopApp = () => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel(); 
    setShowLikedPokemon(true);
    setStarted(false);
    setCurrentPokemon(null); 
  };

  const loadNewPokemon = async () => {
    const id = Math.floor(Math.random() * 898) + 1; 
    const pokemon = await getPokemon(id);
    setCurrentPokemon(pokemon);
  };

  const handleLike = () => {
    setLikedPokemon([...likedPokemon, currentPokemon]);
    loadNewPokemon();
  };

  const handleDislike = () => {
    loadNewPokemon();
  };

  const handleRestart = () => {
    setShowLikedPokemon(false);
    startApp();
  };
  const handleReset = () => {
    setShowLikedPokemon(false);
    setLikedPokemon([]);
    startApp();
  };
  

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {!started && !showLikedPokemon && (
        <WelcomeScreen onStart={startApp} />
      )}
      {started && (
        <div className="flex flex-col items-center justify-center mt-28">
          <PokemonCard 
            pokemon={currentPokemon} 
            onLike={handleLike} 
            onDislike={handleDislike} 
            stopSpeech={() => window.speechSynthesis.cancel()} 
          />
          <button 
            className="mt-4 px-5 py-2 bg-red-500 text-white font-semibold rounded-lg border-[1.5px] border-black"
            onClick={stopApp}
          >
            Stop Selection
          </button>
        </div>
      )}
      {showLikedPokemon && (
        <LikedPokemonList likedPokemon={likedPokemon} onRestart={handleRestart} onReset={handleReset}/>
      )}
    </div>
  );
};

export default Home;
