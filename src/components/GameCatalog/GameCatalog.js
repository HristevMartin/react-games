import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import GameCard from "./GameCard";

const GameCatalog = () => {
    const [games,setGames] = useState([]);
    // const [loading, setLoading] = useEffect(false);



    useEffect( () => {
        gameService.getAll()
            .then(result=>{
            setGames(result)

        });

    }, []);

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
            {games.length > 0
            ?
            games.map(x => <GameCard key={x._id} game={x} />)
            : 
            <h3 className="no-articles">No articles yet</h3>
            }
        
    </section>
    )
}

export default GameCatalog;