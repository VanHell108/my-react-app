import React, { useState } from 'react';

function ChuckNorrisJokes() {
   const [joke, setJoke] = useState('');

   function fetchJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
         .then(res => res.json())
         .then(data => setJoke(data.value))
         .catch(err => console.log(err));
   }

   React.useEffect(() => {
      fetchJoke();
   }, []);

   return (
      <div className='chuck-norris-jokes'>
         <h2>Chuck Norris Jokes</h2>
         <p id="joke">{joke || 'Loading...'}</p>
         <button onClick={fetchJoke}>Get New Joke</button>
      </div>
   );
}

export default ChuckNorrisJokes;
