import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Zj-uqOSHiymyteiIBbO0f6qTMG5wymiRHJaIweebtfo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
