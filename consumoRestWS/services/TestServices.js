export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const createPostService = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json); fnExito(); });
}

export const createDocumentType = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: post.title,
            descripcion: post.body,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('http://192.168.100.52:8080/inventarios/rest/tipoDocumento/crear', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json); fnExito(); });
}


export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'MENSAJE MODIFICADO ESTE SI XDDDDDDDDDDDDDDDDD',
            body: 'suerte en mi evaluacion,SANTI EXONERAME PORFA :(',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const getByUserIdSerivice = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?id=1')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const getPokeApi = () => {
    fetch('https://pokeapi.co/api/v2/ability/7/')
        .then(res => res.json())
        .then(json => console.log(json))
}

export const addFakePage = () => {
    const config = {
        method: 'POST',
        body: JSON.stringify({

            "id": 888,
            "title": "EY MUY BUENAS A TODOS FEISIMOS",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }

        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const updateFakePage = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({

            "id": 888,
            "title": "EY MUY BUENAS A TODOS FEISIMOS",
            "price": 109.95,
            "description": "AQUI ANTIVEGETA 888888888888888888888888888888888888888",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }

        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const getDocumentTypes = () => {
    fetch('http://192.168.100.52:8080/inventarios/rest/tipoDocumento/recuperar')
        .then(res => res.json())
        .then(json => console.log(json))
}