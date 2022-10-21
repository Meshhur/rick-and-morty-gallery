import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersonPage } from "./pages/person/PersonPage"
import { CharactersPage } from './pages/characters/CharactersPage';
import './App.css';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/characters' element={<CharactersPage />}/>
                <Route path='/characters:id' element={<PersonPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
