/*
*   Star Wars API service
*/

import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.dev/api'

// get people from SWAPI TODO: skapa en try-catch
const getPeople = async (page) => {
    const res = await axios.get(`/people/?page=${page}`)
    return res.data
}

const getPerson = async (id) => {
    const res = await axios.get(`/people/${id}`)
    return (res.data)
}

// get films from SWAPI TODO: skapa en try-catch
const getFilms = async (page) => {
    const res = await axios.get(`/films/?page=${page}`)
    return res.data
}

const getFilm = async (id) => {
    const res = await axios.get(`/films/${id}`)
    return (res.data)
}

// Extract ID from SWAPI url
const getIdFromUrl = (url) => {
	// eslint-disable-next-line no-unused-vars
	const [_endpoint, id] = url
		.replace('https://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/')

	return id
}

const search = async (page) => {
    return axios.get(`/?page=${page}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPeople,
    getPerson,
    getFilms,
    getFilm,
    getIdFromUrl,
    search,
}