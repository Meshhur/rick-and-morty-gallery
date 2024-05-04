import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersonPage, CharactersPage, SignIn, SignUp, HomePage } from "./pages";
import './App.css';
import { observer } from 'mobx-react-lite';


const App = observer(() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/characters' element={<CharactersPage />} />
                <Route path='/characters:id' element={<PersonPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
})

export default App;
