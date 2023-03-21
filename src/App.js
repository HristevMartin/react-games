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
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  // page is immutable
  // setPage is a function which holds the current state.
  
  //we do not need this since we use the react routing
  // const [page,setPage] = useState('/home');


  //bottom two function's to be deleted
//   const navigationChangeHandler = (path) => {
//     setPage(path)
// }

  // const router = (path) => {
  //   let pathName = path.split('/')
  //   let rootPath = pathName[1];
  //   let argument = pathName[2];

  //   const routes = {
  //     'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
  //     'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
  //     'create-game': <CreateGame />,
  //     'login': <Login/>,
  //     'register': <Register/>,
  //     'details': <GameDetails id={argument}/>
  //   }

  //   return routes[rootPath]
  // }


  return (
    <div id="box">

        <Header/>

        <main id="main-content">
          <Switch>
            <Route path="/"  exact component={WelcomeWorld} />
            <Route path="/home"  exact component={WelcomeWorld} />
            <Route path="/games" exact component={GameCatalog} />
            <Route path="/create-game" component={CreateGame} />
            <Route path="/login" component= {Login} />
            <Route path="/register" component={Register} />
            <Route path="/games/:gameId" exact component={GameDetails} />
            <Route path="/custom2">
                <h2>Custom page</h2>
                <p>dsadasdsa</p>
            </Route>
            <Route path="/logout" exact render={(props) => {
              console.log('Logged Out')

              // -> this is same as the one below.
              props.history.push('/')          
              // return <Redirect to="/" />
            }} />
          </Switch>
        </main>
    </div>
  );
}

export default App;
