import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { CharactersPage } from './pages/characters/CharactersPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/characters' element={<CharactersPage />} />
				<Route path='/characters:id' element={<Card />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
