import { Card } from './components/Card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharactersPage } from './pages/characters/CharactersPage';
import './App.css';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/characters' element={<CharactersPage />}/>
                <Route path='/characters:id' element={<Card />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
