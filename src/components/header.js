import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import "./header.css"

const Header = ({ siteTitle }) => 
{ 
  let [animate, setAnimate] = React.useState(true);

  React.useEffect(()=> {

    if(sessionStorage.getItem("fLoadKey") == null){
      setAnimate(true);
      sessionStorage.setItem("fLoadKey", 1);
    } else {
      setAnimate(false);
    }
  })

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
       <Link className="navbar-brand" to="/"><img src={logo} alt="logo"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          <li className="nav-item">
             <Link to="/" className="nav-link" activeClassName="active">Home</Link>
           </li>
          <li className="nav-item">
             <Link to="/using-typescript/" className="nav-link" activeClassName="active">Go to "Using TypeScript"</Link>
           </li>
           <li className="nav-item">
             <Link to="/page-2/" className="nav-link" activeClassName="active">Page 2</Link>
           </li>
      </ul>
    </div>
  </div>
</nav>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
