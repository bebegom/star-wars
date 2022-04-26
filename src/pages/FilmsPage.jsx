import {React, useEffect, useState} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
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
                  <ListGroupItem>{film.title}</ListGroupItem>
              ))}
          </ListGroup>
      )}
    </div>
  )
}

export default FilmsPage