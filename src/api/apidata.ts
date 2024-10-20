const url = 'https://pokeapi.co/api/v2/'

export async function getAll() {
  const response = await fetch(url + 'pokemon?limit=100000&offset=0.').then(
    response => response.json()
  )
  return response.results;
}

export async function getPokemonInfo(name: string) {
  const response = await fetch(`${url}pokemon/${name}`).then(
    response => response.json()
  )
  return response;
}
