import { React, useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import API from '../services/StarwarsAPI'

const PeoplePage = () => {
    const [people, setPeople] = useState('');
  
    const getPeopleFromAPI = async () => {
        const data = await API.getPeople();
        setPeople(data);
    };

    useEffect(() => {
        getPeopleFromAPI()
    }, [])

    return (
        <div>
            <h1>People</h1>

            {!people && (
                <p>wait for it...</p>
            )}

            {people && (
                <ListGroup>
                {people.results.map((person) => (
                    <div className='d-flex m-1'>
                    <ListGroupItem className='w-75'>{person.name}</ListGroupItem>
                    <Link to={`/people/${API.getIdFromUrl(person.url)}`}>
                        <Button className='right' variant='secondary'>details</Button>
                    </Link>
                  </div>
                ))}
                </ListGroup>
            )}

            <div className="d-flex justify-content-between align-items-center">
                <Button variant='primary'>Previous page</Button>
                <p>PAGE of PAGES</p>
                <Button variant='primary'>Next page</Button>
            </div>

        </div>
    )
}

export default PeoplePage
