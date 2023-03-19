import {createElement, useState} from 'react';
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from './components/GameCatalog/GameCatalog';
import CreateGame from './components/CreateGame.js';
import Login from './components/Login'
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import GameCard from './components/GameCatalog/GameCard';

function App() {
  // page is immutable
  // setPage is a function which holds the current state.
  const [page,setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld/>,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
    '/login': <Login/>,
    '/register': <Register/>,
  }

  const navigationChangeHandler = (path) => {
      console.log(path)
      setPage(path)
  }

  return (
    <div id="box">

        <Header
        navigationChangeHandler={navigationChangeHandler}
        />

      

        <main id="main-content">
          {routes[page] || <ErrorPage>Some info</ErrorPage>}
        </main>
    </div>
  );
}

export default App;
