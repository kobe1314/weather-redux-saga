const fetchAPI = (apiUrl) => {
    return fetch(apiUrl).then(resp => resp.json()).catch(error => console.log(error));
}

export {
    fetchAPI
}