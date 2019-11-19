import { URL, API_KEY } from '../config'

function fetchCity(cityID) {
  return fetch(
    `${URL}?id=${cityID}&units=metric&appid=${API_KEY}`
  ).then(response => response.json())
}
export default fetchCity
