import fields from './selectFields';

function makeFetcher(field) {
  return (page = 1) =>
    fetch(`https://rickandmortyapi.com/api/${field.toLowerCase()}/?page=${page}`)
      .then(res => res.json())
      .then(json => [json.info.pages, json.results]);
}

export default Object.keys(fields).reduce((acc, cur) => ({ ...acc, [`${cur.toLowerCase()}s`]: makeFetcher(cur) }), {});
