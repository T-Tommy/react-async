export function getCharacters(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => [json.info.pages, json.results]);
}

export function getLocations(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
    .then(res => res.json())
    .then(json => [json.info.pages, json.results]);
}
