import Header from './Header';
import Footer from './Footer';
import Card from './Card'

function App() {
  return(
    <>
      <Header />
      <div className="card-container">
         <Card />
         <Card />
         <Card />
      </div>
      <Footer />
    </>
 )
}

export default App
