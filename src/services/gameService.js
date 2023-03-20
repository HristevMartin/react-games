const baseUrl = 'http://localhost:3030/data';

export function getAll(){
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
    .then(res=>res.json())

}

// export const getOne = (id) => fetch(`${baseUrl}/games/${id}`).then(res=>res.json());

export function getOne(id){
    console.log('here WEEEEEEEEEEE')
    return fetch(`${baseUrl}/games/${id}`)
        .then(res=>res.json())
}

export const getLatest = () => {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`).then(x=>x.json())
}

export default [getAll,getOne];

