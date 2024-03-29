import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endPoindUrl){
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`
    const response = await fetch(endPoindUrl || url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export async function getPokemonDetailsByUrlApi(url){
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export async function getPokemonDetailsApi(id){
  try {
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url)
    const result = response.json()
    return result
  } catch (error) {
    throw error
  }
} 