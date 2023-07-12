import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css'

//https://api.themoviedb.org/3/movie/550?api_key=06d44c43498a48bdff7e17b8a0069038&language=pt-BR
//    URL DA API: /movie/157336?api_key=06d44c43498a48bdff7e17b8a0069038&append_to_response=videos,images


function Home(){
    const [filmes, setFilmes] = useState([]);

useEffect(()=>{

    async function loadfilmes(){
        const response = await api.get("movie/now_playing", {
            params: {
                api_key:"06d44c43498a48bdff7e17b8a0069038",
                language: "pt-BR",
                page: 1,
            }
        })
        //console.log(response.data.results.slice(0, 10));
        setFilmes(response.data.results.slice(0, 20))
    }
    loadfilmes();

}, [])
    return(
        <div className="container">
           <div className="lista-filmes">
           {filmes.map((filme) =>{
            return(
            <article key={filme.id}>
                <strong>{filme.title}</strong>
               {/*  <img src={'https://image.tmdb.org/t/p/original/${filme.poster_path}'} alt={filme.title} />  */}
                { <img src={'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'} alt={filme.title} /> }
                {/* <img src={'https://image.tmdb.org/t/p/original/${filme.poster_path}'} alt={filme.title} /> */}
                <Link to={'/filme/${filme.id}'}>Acessar</Link>
            </article>
           )
           })}
           </div>    
        </div>
    )
}

export default Home;