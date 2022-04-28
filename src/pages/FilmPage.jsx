import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/StarwarsAPI'
import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.dev/api'

const FilmPage = () => {
    const [film, setFilm] = useState('')

    const { id } = useParams()

    const getFilmFromAPI = async (theParams) => {
        const urlWithId = await axios.get(`/films/${theParams}`)
        setFilm(urlWithId.data)
    }

    useEffect( ()=> {
        getFilmFromAPI(id)
    }, [id])

    return (
        <div>
            <h1>One film</h1>

            {!film && (
                <p>wait for it...</p>
            )}

            {film && (
                <p>i got a film: {film.title}</p>
            )}
        </div>
    )
}

export default FilmPage
