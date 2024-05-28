import { API_URL,IMAGE_URL } from '@/Urls';
import axios from 'axios';

export const getPokemon = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}`);
    const pokemon = response.data;
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: `${IMAGE_URL}${pokemon.id}.png`,
      abilities: pokemon.abilities.map(ability => ability.ability.name),
      types: pokemon.types.map(type => type.type.name),
    };
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};
