import { API_ORIGIN, API_PATH } from '~constants/index';

const fetchApi = async () => {
  const result = await fetch(`${API_ORIGIN}${API_PATH}`);
  const data = await result.json();
  return data;
};

export default fetchApi;
