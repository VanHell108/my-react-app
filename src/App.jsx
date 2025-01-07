import Header from './Header';
import Footer from './Footer';
import Card from './Card'

function App() {
  return(
    <>
      <Header />
      <main>
      <div className="card-container">
         <Card />
         <Card />
         <Card />
         <Card />         
         <Card />         
         <Card />         
         <Card />         
         <Card />         
      </div>
      </main>
      <Footer />
    </>
 )
}

export default App
