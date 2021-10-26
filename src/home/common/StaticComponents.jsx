// import { useState } from "react";
import { Link } from "react-router-dom";

const InitialOptions = ({ opts = [] }) => opts.map(({ name, ref }, i) => {

  return <li className="nav-item" key={i}>
        <Link className="nav-link" aria-current="page" to={ref}>{name}</Link>
  </li>
});

export const NavBar = ({brandSide = {} , leftOptions = [] }) => {

    const { brand = "NavBar", link = "" } = brandSide;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <Link className="navbar-brand" href={link}>{brand}</Link> {/* Navbar */}
                
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <InitialOptions opts={leftOptions}/>
                    </ul>
                    
                    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>

                </div>

            </div>
        </nav>
    );

}