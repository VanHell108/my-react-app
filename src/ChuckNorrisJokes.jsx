import { useState, useEffect, useRef } from 'react';

const ChuckNorrisJokes = () => {
   const [joke, setJoke] = useState('');
   const [loading, setLoading] = useState(false);
   const buttonRef = useRef(null);

   function fetchJoke() {
      setLoading(true);
      fetch('https://api.chucknorris.io/jokes/random')
         .then(res => res.json())
         .then(data => {
            setJoke(data.value);
            setLoading(false);
         })
         .catch(err => {
            console.log(err);
            setLoading(false);
         });
   }

   useEffect(() => {
      fetchJoke();
   }, []);

   function handleClick() {
      fetchJoke();
      if (buttonRef.current) {
         buttonRef.current.blur();
      }
   }

   return (
      <div className='chuck-norris-jokes'>
         <h1>Chuck Norris Jokes</h1>
         <p id="joke">{joke || 'Loading...'}</p>
         <button 
            ref={buttonRef} 
            onClick={handleClick} 
            disabled={loading}
         >
            {loading ? 'Loading...' : 'Get New Joke'}
         </button>
      </div>
   );
};

export default ChuckNorrisJokes;
