import Header from './Header';
import Footer from './Footer';
import Card from './Card'
import myPic from "./assets/profile_pic.jpg"
import rocketRaccoonPic from "./assets/rocket_raccoon_profile_pic.jpg"
import babyGrootPic from "./assets/baby_groot_profile_pic.jpg"

function App() {
  return(
    <>
      <Header />
      <main>
      <div className="card-container">
         <Card profilePic={myPic} name="Ivan Semchev" like="playing puzzle video games" asWell="watching Fantasy and Sci-Fi movies"/>
         <Card profilePic={rocketRaccoonPic} name="Rocket Raccoon" like="building advanced weapons and gadgets" asWell="stealing and scavenging"/>   
         <Card profilePic={babyGrootPic} name="Baby Groot" like={`"I am Groot"`} asWell={`"We are Groot"`}/>
         <Card />   
      </div>
      </main>
      <Footer />
    </>
 )
}

export default App
