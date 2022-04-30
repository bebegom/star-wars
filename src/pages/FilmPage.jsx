import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../services/StarwarsAPI'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const FilmPage = () => {
    const [film, setFilm] = useState('')
    const { id } = useParams()
    const [people, setPeople] = useState('')

    const getFilm = async (id) => {
        const data = await API.getFilm(id)
        setFilm(data)
        setPeople(data.characters)
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

                    </table>

                    <h2>Characters</h2>

                    <ListGroup>
                        {people.map( (person) => (
                            <ListGroupItem as={Link}  
                            to={`/people/${API.getIdFromUrl(person)}`}
                            key={API.getIdFromUrl(person)} >
                            Character {API.getIdFromUrl(person)}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>

            )}
        </div>
    )
}

export default FilmPage
