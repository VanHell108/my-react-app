import React, { useState } from 'react';

const ChuckNorrisJokes = () =>  {
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
         <h1>Chuck Norris Jokes</h1>
         <p id="joke">{joke || 'Loading...'}</p>
         <button onClick={fetchJoke}>Get New Joke</button>
      </div>
   );
}

export default ChuckNorrisJokes;
