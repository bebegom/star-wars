import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import API from '../services/StarwarsAPI'
import axios from 'axios'
//TODO: for looping over films the character is in
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

axios.defaults.baseURL = 'https://swapi.dev/api'

const PersonPage = () => {
    const [person, setPerson] = useState('')
    const { id } = useParams()

    const getPerson = async (theParams) => {
        const urlWithId = await axios.get(`/people/${theParams}`)
        setPerson(urlWithId.data)
    }

    useEffect( ()=> {
        getPerson(id)
    }, [id])

    return (
        <div>
            {!person && (
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
                        <tr>
                            <th>Films</th>
                            <td>{person.films}</td>
                        </tr>
                    </table>
                </div>
            )}
        </div>
    )
}

export default PersonPage
