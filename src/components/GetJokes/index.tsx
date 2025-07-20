import { useEffect, useState } from "react";
import axios from "axios";

interface Jokestype {
    id : string;
    title : string;
    content : string;
}

function GetJokes() {
    const [jokes, setJokes] = useState<Jokestype[]>([]);
    useEffect(() => {
        axios.get("/api/jokes")
        .then((response) => {
            console.log(response);
            setJokes(response.data) ;
        })
        .catch((err : Error) => {
            if(err instanceof Error) {
                console.log(err);
            }
            
        })
    },[])
  return (
    <div>
      <h1>The Below are Jokes</h1>
      {
        jokes.map((joke) => (
            <div key = {joke.id}>
                <h1>{joke.title}</h1>
                <p>{joke.content}</p>
            </div>
        ))
      }
    </div>
  )
}

export default GetJokes;
