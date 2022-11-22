const URL = 'https://fakestoreapi.com/products';

export const fetchAPI = async() => {
    let res = await fetch(URL);
    let result = await res.json();

    return result;
};
