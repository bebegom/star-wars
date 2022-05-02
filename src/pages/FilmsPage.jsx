import {React, useEffect, useState} from 'react'
import { ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import API from '../services/StarwarsAPI'
import Pagination from '../components/PaginationBar'

const FilmsPage = () => {
    const [films, setFilms] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)

    const getFilmsFromAPI = async (page) => {
        setLoading(true)

        try {
            const data = await API.getFilms(page)
            setFilms(data)
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
        getFilmsFromAPI(page)
    }, [page])

    return (
        <div>
            <h1>Films</h1>

            {isError && (<p><strong>ERROR!</strong> {error}</p>)}
        
            {loading && !films && (
                <p>wait for it...</p>
            )}

            {films && (
                <ListGroup>
                    {films.results.map((film) => (
                        <div className='d-flex m-1'>
                            <ListGroupItem className='w-75'>{film.title}</ListGroupItem>
                            <Link to={`/films/${API.getIdFromUrl(film.url)}`}>
                                <Button className='right' variant='secondary'>details</Button>
                            </Link>
                        </div>
                    ))}
                </ListGroup>
            )}

            <Pagination data={films} page={page} pageChange={setPage} />
        </div>
    )
}

export default FilmsPage