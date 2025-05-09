import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import ChuckNorrisJokes from './ChuckNorrisJokes';
import ToDoList from './ToDoList';
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import Welcome from './Welcome';

const App = () =>  {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/my-react-app" element={
          <>
            <Welcome />
            <div id="cards">
              <Cards />
            </div>
            <div id="todo">
              <ToDoList />
            </div>
            <div id="jokes">
              <ChuckNorrisJokes />
            </div>
          </>
        } />
        <Route path="/my-react-app/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
