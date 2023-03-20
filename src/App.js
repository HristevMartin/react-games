import {createElement, useState} from 'react';
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from './components/GameCatalog/GameCatalog';
import CreateGame from './components/CreateGame.js';
import Login from './components/Login'
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import GameCard from './components/GameCatalog/GameCard';
import GameDetails from './components/GameDetails';

function App() {
  // page is immutable
  // setPage is a function which holds the current state.
  const [page,setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    setPage(path)
}



  const router = (path) => {
    let pathName = path.split('/')
    let rootPath = pathName[1];
    let argument = pathName[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      'create-game': <CreateGame />,
      'login': <Login/>,
      'register': <Register/>,
      'details': <GameDetails id={argument}/>
    }

    return routes[rootPath]
  }


  return (
    <div id="box">

        <Header
        navigationChangeHandler={navigationChangeHandler}
        />

        <main id="main-content">
          {router(page) || <ErrorPage>Some info</ErrorPage>}
        </main>
    </div>
  );
}

export default App;
