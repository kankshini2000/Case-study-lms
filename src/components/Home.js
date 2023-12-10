import React, { useEffect } from "react";
import Navbar from "./Navbar";
// Import your CSS file for styling

function Home() {
  // Use useEffect to add effects when the component mounts
  useEffect(() => {
    // Example: Add a fade-in effect to the title
    const title = document.querySelector(".fade-in");
    if (title) {
      title.style.opacity = 0;
      let opacity = 0;
      const fadeIn = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.1;
          title.style.opacity = opacity;
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <figure className="text-center">
        <blockquote className="blockquote">
          <h1 className="fade-in">Learning Management System</h1>
        </blockquote>
        <h2 className="blockquote-footer">
          An system where User can see all the enrolled course details he has
          been enrolled in.
        </h2>
      </figure>
    </div>
  );
}

export default Home;
