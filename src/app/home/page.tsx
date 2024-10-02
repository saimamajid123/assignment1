import Image from "next/image";
import React from "react";

const HOme = () => {
    return (
       <div className="hero">
          <div className="hero-text">
            <p className="heading1">Hello,</p>
            <p className="heading2">I am Saima Majid</p>
            <p className="heading3">Web Developer</p>
          </div>
          <div className="hero-img">
            <Image src={'/profile-img.jpg'} alt="profile-image" width={400} height={400} className="image"/>
          </div>
       </div>
    )
}

export default HOme;