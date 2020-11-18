import service from '../index';

const URL = service.url;

function getAll() {
  return fetch(`${URL}/catalog`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(
      async (response) => {
        if (response.ok) {
          const allProducts = await response.json();
          return allProducts;
        }
        const status = await response.status;
        return status;
      },
    );
}

export default {
  getAll,
};
