import profilePic from "./assets/profile_pic.jpg"

function Card(){
   return (
      <div className="card">
         <img className="card-image" src={profilePic} alt="profile_pic" />
         <h2 className="card-title">Ivan Semchev</h2>
         <p className="card-name">I like playing puzzle video games as well as watching Fantasy and Sci-Fi movies.</p>
      </div>
   );
}

export default Card