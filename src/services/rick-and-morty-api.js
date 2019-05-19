export default function getCharacters(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => [json.info.pages, json.results]);
}
