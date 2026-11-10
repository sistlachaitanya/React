import { useEffect, useState } from "react";

export default function Jocker() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  let [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  const getNewJoke = async () => {
    let response = await fetch(url);
    let jsonResponse = await response.json();

    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <h1>Jocker!</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>Get Joke</button>
    </div>
  );
}
