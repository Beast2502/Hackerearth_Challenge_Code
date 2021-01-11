import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className= "fa fa-home fa-lg"></span>Home

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className = "nav-link" to="/shortlisted">
                                <span className="fa fa-shorlisted fa-lg"></span>Shortlisted 
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/rejected">
                                <span className="fa fa-rejected fa-lg"></span>Rejected
                            </NavLink>


                        </NavItem>
                    </Nav>

                </Navbar>
            </div>
        );
    }
}

export default Header;