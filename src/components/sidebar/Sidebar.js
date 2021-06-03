import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';


class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
            
                <h1><Link smooth to="/#start" className="h1_links">Ajay Kumar C R</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> ajaycr4u@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/ajay-kumar-c-r-b945351b7" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/theajaykumar" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                       
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/ajay_27_03/" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:ajaycr4u@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                       
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar