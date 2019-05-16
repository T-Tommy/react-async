export default function getQuotes(count) {
  return fetch(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.json());
}
