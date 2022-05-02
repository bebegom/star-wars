import { React, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../services/StarwarsAPI'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const PersonPage = () => {
    const [person, setPerson] = useState('')
    const { id } = useParams()
    const [films, setFilms] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)

    const getPerson = async (id) => {
        setLoading(true)

        try {
            const data = await API.getPerson(id)
            setPerson(data)
            setFilms(data.films)
            setIsError(false)
            setError(null)
        } catch (err) {
            setIsError(true)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect( ()=> {
        getPerson(id)
    }, [id])

    return (
        <div>
            {isError && (<p><strong>ERROR!</strong> {error}</p>)}

            {loading && (
                <p>wait for it...</p>
            )}

            {person && (
                <div className='border border-dark'>
                    <h1 className='detail-header'>Name of character: {person.name}</h1>

                    <h2>Attributes:</h2>

                    <table>
                        <tr>
                            <th>Gender</th>
                            <td>{person.gender}</td>
                        </tr>
                        <tr>
                            <th>Birth year</th>
                            <td>{person.birth_year}</td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td>{person.height}</td>
                        </tr>
                        <tr>
                            <th>Mass</th>
                            <td>{person.mass}</td>
                        </tr>
                        <tr>
                            <th>Hair color</th>
                            <td>{person.hair_color}</td>
                        </tr>
                        <tr>
                            <th>Skin color</th>
                            <td>{person.skin_color}</td>
                        </tr>
                        <tr>
                            <th>Eye color</th>
                            <td>{person.eye_color}</td>
                        </tr>
                    </table>

                    <h2>Films</h2>

                    <ListGroup>
                        {films.map( (film) => (
                            <ListGroupItem as={Link}  
                            to={`/films/${API.getIdFromUrl(film)}`}
                            key={API.getIdFromUrl(film)} >
                                Film {API.getIdFromUrl(film)}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    )
}

export default PersonPage
