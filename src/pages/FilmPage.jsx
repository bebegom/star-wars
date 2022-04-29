import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import API from '../services/StarwarsAPI'
import axios from 'axios'
//TODO: for looping over characters in the film
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

axios.defaults.baseURL = 'https://swapi.dev/api'

const FilmPage = () => {
    const [film, setFilm] = useState('')

    const { id } = useParams()

    const getFilm = async (theParams) => {
        const urlWithId = await axios.get(`/films/${theParams}`)
        setFilm(urlWithId.data)
    }

    useEffect( ()=> {
        getFilm(id)
    }, [id])

    return (
        <div>
            {!film && (
                <p>wait for it...</p>
            )}

            {film && (
                <div className='border border-dark'>
                    <h1 className='detail-header'>Title of film: {film.title}</h1>

                    <h2>Attributes:</h2>

                    <table>
                        <tr>
                            <th>Episode</th>
                            <td>{film.episode_id}</td>
                        </tr>
                        <tr>
                            <th>Director</th>
                            <td>{film.director}</td>
                        </tr>
                        <tr>
                            <th>Producer</th>
                            <td>{film.producer}</td>
                        </tr>
                        <tr>
                            <th>Release date</th>
                            <td>{film.release_date}</td>
                        </tr>
                        <tr>
                            <th>Characters</th>
                            <td>{film.characters}</td>
                        </tr>

                    </table>

                    <h2>Characters</h2>

                    {/* <ListGroup>
                        {film.characters.map(character => (
                            <ListGroupItem>{character.name}</ListGroupItem>
                        ))}
                    </ListGroup> */}
                </div>

            )}
        </div>
    )
}

export default FilmPage
