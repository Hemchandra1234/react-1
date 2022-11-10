import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Counter from '../Component/Counter';
import Home from '../site_components/Home'
import Service from '../site_components/Service'
import Contact from '../site_components/Contact'
import About from '../site_components/About'
const RoutingDemo = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/service">Service </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact">Contact </Link>
                        </li>

                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                </div>
            </nav>

            <Switch>
                {/* <Route path="/counter" component={Counter}>
            </Route>     */}
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/service" exact>
                    <Service />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default RoutingDemo;
