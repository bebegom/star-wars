import { React, useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import API from '../services/StarwarsAPI'
import PaginationBar from '../components/PaginationBar'

const PeoplePage = () => {
    const [people, setPeople] = useState('');
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)
  
    const getPeopleFromAPI = async (page) => {
        setLoading(true)

        try {
            const data = await API.getPeople(page);
            setPeople(data);
            setIsError(false)
            setError(null)
        } catch (err) {
            setIsError(true)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getPeopleFromAPI(page)
    }, [page])

    return (
        <div>
            <h1>People</h1>

            {isError && (<p><strong>ERROR!</strong> {error}</p>)}

            {loading && !people && (
                <p>Wait for it...</p>
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

            <PaginationBar data={people} page={page} pageChange={setPage} />
        </div>
    )
}

export default PeoplePage
