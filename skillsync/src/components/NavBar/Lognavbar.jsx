import React from 'react';
import './Lognavbar.css';
import { Link } from 'react-router-dom';

export default function Lnavbar() {
  return (
    <>
       <nav className="navBar">
        <div className="navDiv">
         <div className="logo"><a href="#">InternX</a></div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/internships">Internships</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
                <Link to="/login"><button className="Nbutton">Log in</button></Link>
            </ul>
        </div>
     </nav>
    </>
  );
}

