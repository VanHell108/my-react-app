import { Link, useLocation } from 'react-router-dom';

const Header = () => {
   const location = useLocation();
   const isContactPage = location.pathname === '/my-react-app/contact';

   const handleHomeClick = () => {
      window.scrollTo(0, 0);
    };

  return (
    <header>
      <h1>
         <Link to="/my-react-app"
               onClick={handleHomeClick}
               className='header-link'>
                  My React Website
         </Link>
      </h1>
      <nav>
         <ul>
            <li>
               <Link to="/my-react-app"
                     onClick={handleHomeClick}>
                        Home
               </Link>
            </li>
            {!isContactPage && (
               <>
                  <li><a href="#cards">Cards</a></li>
                  <li><a href="#todo">To-Do</a></li>
                  <li><a href="#jokes">Jokes</a></li>
               </>
            )}
            <li><Link to="/my-react-app/contact">Contact</Link></li>
         </ul>
      </nav>
    </header>
  );
}

export default Header