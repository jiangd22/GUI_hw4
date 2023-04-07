import axios from 'axios';

//const baseEndpoint = 'http://localhost:3000/api';
const baseEndpoint = 'https://api.johnlawrimore.com/store/products';

const baseConfig = {
    headers: {
        "Authorization": "DJiang"
    }
};

export const getProductById = (productId) => new Promise((resolve, reject) => {
    axios.get(`${baseEndpoint}/${productId}`, baseConfig)
        .then(response => resolve(response.data))
        .catch(error => {
            alert(error);
            reject(error);
        });
});
