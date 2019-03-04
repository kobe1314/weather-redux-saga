const fetchAPI = (apiUrl) => {
    return fetch(apiUrl).then(resp => resp.json());
}

export {
    fetchAPI
}