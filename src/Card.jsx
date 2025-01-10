import { useState } from "react";
import PropTypes from "prop-types"
import blankPic from "./assets/blank_profile_pic.png"

function Card(props){

   const [hovered, setHovered] = useState(false);

   const handleMouseEnter = () => setHovered(true);
   const handleMouseLeave = () => setHovered(false);

   return (
      <div 
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
         <img className="card-image" src={props.profilePic} alt="profile_pic" />
         <h2 className="card-title">{props.name}</h2>
         <p className="card-text">
            I like {props.like} as well as
            <span className="card-hover-text">
               {hovered ? ` ${props.asWell}!` : "..."}
            </span>
         </p>
      </div>
   );
}
Card.propTypes = {
   profilePic: PropTypes.img,
   name: PropTypes.string,
   like: PropTypes.string,
   asWell: PropTypes.string
}
Card.defaultProps= {
   profilePic: blankPic,
   name: "Guest",
   like: "pasta",
   asWell: "lasagna"
}

export default Card