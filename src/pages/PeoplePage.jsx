import { React, useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
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

            {people && (
                <ListGroup>
                {people.results.map((person) => (
                    <ListGroupItem>{person.name}</ListGroupItem>
                ))}
                </ListGroup>
            )}

        </div>
    )
}

export default PeoplePage
