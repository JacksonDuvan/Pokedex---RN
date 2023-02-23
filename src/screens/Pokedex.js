import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import { PokemonList } from '../components/PokemonList'

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)

      const pokemonsArray = []
      for await (const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
        
        pokemonsArray.push({
          id: pokemonDetails?.id,
          name: pokemonDetails?.name,
          type: pokemonDetails?.types[0]?.type?.name,
          order: pokemonDetails?.order,
          imagen: pokemonDetails?.sprites?.other['official-artwork']?.front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.log('error >>',error);
    }
  }
 
  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  },[])


  return (
    <SafeAreaView>
      <PokemonList 
        isNext={nextUrl} 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
      />
    </SafeAreaView>
  )
}