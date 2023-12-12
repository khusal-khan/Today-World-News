import React from 'react'
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <>
        <div className="wrapper">
            <div className="multi_color_border"></div>
            <div className="top_nav">
                <div className="left">
                    <div className="logo"><p>Today <span>News</span> World</p></div>
                    <div className="search_bar">
                        <input type="text" placeholder="Search"/>
                    </div>
                </div> 
                <div className="right">
                    <ul>
                    <li><a href="#">Whats Next</a></li>
                    <li><a href="#">LogIn</a></li>
                    <li><a href="#">SignUp</a></li>
                    {/* <li><a href="#">Post a Job</a></li> */}
                    </ul>
                </div>
            </div>
            <div className="bottom_nav">
                <ul>
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/technology">Technology</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/entertainment">Entertainments</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/health">Health</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="banner">
                <img src="https://i.imgur.com/iFaKR9k.png" alt="banner_img"/>
            </div> */}
        </div>
    </>
  )
}
export default Navbars;