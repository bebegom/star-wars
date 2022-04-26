import {React, useEffect, useState, Link} from 'react'
import { ListGroup, ListGroupItem, Button} from 'react-bootstrap'
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
      
      {films && (
          <ListGroup>
              {films.results.map((film) => (
                  <div className='d-flex m-1'>
                    <ListGroupItem className='w-75'>{film.title}</ListGroupItem>
                    <Button className='right' variant='secondary'>details</Button>
                  </div>
              ))}
          </ListGroup>
      )}
    </div>
  )
}

export default FilmsPage