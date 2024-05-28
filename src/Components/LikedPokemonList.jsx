import React from 'react';
//conditional component to show all the liked pokemons
const LikedPokemonList = ({ likedPokemon, onRestart,onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <h2 className="text-3xl font-bold mb-4">Liked Pokémon</h2>
      <div className="flex flex-wrap justify-center">
        {likedPokemon.map(pokemon => (
          <div key={pokemon.id} className="border-2 border-black p-4 m-2 rounded-lg bg-[#f1e8e8] shadow-md text-center">
            <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mx-auto" />
            <h2 className="text-2xl font-bold mt-4">{pokemon.name}</h2>
          </div>
        ))}
      </div>
      <div className='flex gap-2'>
      <button 
        className="mt-4 px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg border-[1.5px] border-black"
        onClick={onRestart}
      >
        Want to Select More?
      </button>
      <button 
        className="mt-4 px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg border-[1.5px] border-black"
        onClick={onReset}
      >
        Want to Reselect?
      </button>
      </div> 
    </div>
  );
};

export default LikedPokemonList;
