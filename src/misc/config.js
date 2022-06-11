const API_BASE_URL = 'https://api.tvmaze.com/search';
export async function apiGet(queryString) {
  const respons = await fetch(
    `${API_BASE_URL}/search/shows?q=${queryString}`
  ).then(r => r.json());
  return respons;
}
