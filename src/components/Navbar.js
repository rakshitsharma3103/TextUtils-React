import React from 'react'
//here we just type rfc, and we get react function based component
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {           // export default is the main component in file
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>      {/*here using backticks i use template literal in this string like [$] */}
<a className="navbar-brand" href="/">{props.title}</a>                   {/*    here prop just accept the values written in App.js field */}
{/* <Link className="navbar-brand" to="/">{props.title}</Link>    (link and to are used in case of router)*/}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">{props.About}</a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check text-${props.backgroundColor === 'light'?'#0d600d':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode1} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label" htmlFor="exampleRadios1"></label>
</div>
    <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,              //here i tell the compiler that i will just pass string value in title and about.
    About: PropTypes.string               //if i used string.isRequired then the field must not be empty.
}

Navbar.defaultProps = {
    title: 'Set title here',              //here i pass the default values so that if in case i dont give value to title and about these default value override it.
    About : 'About'
};