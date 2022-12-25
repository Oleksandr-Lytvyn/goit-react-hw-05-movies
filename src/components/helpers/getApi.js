import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getApiHome() {
  const data = await axios.get(
    '/3/trending/movie/week?api_key=441b8f442eacb819407bc4b170359715'
  );
  return data;
}
export async function getApiQuery(query) {
  const data = await axios.get(
    `/3/search/movie?api_key=441b8f442eacb819407bc4b170359715&query=${query.toLowerCase()}&page=1`
  );
  return data;
}
export async function getApiDetails(id) {
  const { data } = await axios
    .get(`/3/movie/${id}?api_key=441b8f442eacb819407bc4b170359715`)
    .then(result => {
      return result;
    });
  return data;
}
export async function getApiCast(id) {
  const data = await axios.get(
    `/3/movie/${id}/credits?api_key=441b8f442eacb819407bc4b170359715`
  );
  return data;
}

export async function getApiReviews(id) {
  const data = await axios.get(
    `/3/movie/${id}/reviews?api_key=441b8f442eacb819407bc4b170359715&page=1`
  );
  return data;
}

// ------CLASS API-------
