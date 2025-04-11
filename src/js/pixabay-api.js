import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49650006-f0ae027caead239649e4c06a7';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
