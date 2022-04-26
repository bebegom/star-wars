import HomePage from './pages/HomePage'
import PeoplePage from './pages/PeoplePage'
import FilmsPage from './pages/FilmsPage'
import Navigation from './components/Navigation'
import './App.css'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div id='App'>
            <Navigation />

            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/people" element={<PeoplePage />} />
                    <Route path="/films" element={<FilmsPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </div>
    )
}

export default App