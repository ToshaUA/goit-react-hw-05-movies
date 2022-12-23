import axios from 'axios';
import toast from 'react-hot-toast';

const API_KEY = '32028637-276a2373722dd1782ac5b8692';
axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getImages(query, pageNum) {
  try {
    const response = await axios.get(
      `/?key=${API_KEY}&q=${query}&page=${pageNum}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return {
      total: response.data.total,
      hits: response.data.hits,
    };
  } catch (error) {
    toast.error('Something wrong :( Please reload this page');
  }
}
