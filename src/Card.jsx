import { useState } from "react";
import profilePic from "./assets/profile_pic.jpg"

function Card(){

   const [hovered, setHovered] = useState(false);

   // Handle mouse hover events
   const handleMouseEnter = () => setHovered(true);
   const handleMouseLeave = () => setHovered(false);

   return (
      <div 
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
         <img className="card-image" src={profilePic} alt="profile_pic" />
         <h2 className="card-title">Ivan Semchev</h2>
         <p className="card-text">
            I like playing puzzle video games as well as
            <span className="card-hover-text">
               {hovered ? " watching Fantasy and Sci-Fi movies." : "..."}
            </span>
         </p>
      </div>
   );
}

export default Card