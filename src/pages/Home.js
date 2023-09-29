import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(https://i0.wp.com/www.theindiajobs.com/blog/wp-content/uploads/2018/05/Free-Job-Posting-Sites-scaled.jpg?resize=678%2C387&ssl=1)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    minHeight: "100vh", // Adjust this value as needed for your design
  };
 
  return (
    
    <div style={backgroundImageStyle} >
      
      <Typography sx={{ margin:"5%" }} variant="h2" align="center" color="black">
        Get Hired or Hire people for free!
      </Typography>
      <div >
        <ul className="ul" >
          <li>
          <Button sx={{ margin:"2% 3%",
                backgroundColor: "limegreen", // Change the background color here
                color: "white", // Change the text color here
                "&:hover": {
                  backgroundColor: "turquoise", // Change the hover background color here
                },}} variant="outlined"  >
            <Link to="/employer/dashboard">
              Hire talent
            </Link>
            </Button>
          </li>
          <li>
          <Button sx={{ margin:"2% 3%",
                backgroundColor: "limegreen", // Change the background color here
                color: "white", // Change the text color here
                "&:hover": {
                  backgroundColor: "turquoise", // Change the hover background color here
                },}} variant="outlined">
            <Link to="/employee/feed">
              Get Job Now
            </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
