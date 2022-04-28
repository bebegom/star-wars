import {React, useEffect, useState} from 'react'
import { ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import API from '../services/StarwarsAPI'

const FilmsPage = () => {
    const [films, setFilms] = useState('')

    const getFilmsFromAPI = async () => {
        const data = await API.getFilms()
        setFilms(data)
    }

    useEffect( ()=> {
        getFilmsFromAPI()
    }, [])

  return (
    <div>
      <h1>Films</h1>
      
      {!films && (
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
    </div>
  )
}

export default FilmsPage