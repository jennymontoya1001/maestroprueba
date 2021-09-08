import { Link, NavLink } from 'react-router-dom';

import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        Sistema Maestro Geek

                    </Link>

                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        <img
                            src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                            id="icon"
                            alt="User Icon"
                            width="100px" />
                    </Link>

                    <div className="navbar-collapse">
                        <div className="navbar-nav">

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/Estudiantes"
                            >
                                Estudiantes
                            </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Mentores
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Buscar
                            </NavLink>
                        </div>
                    </div>

                </nav>

            </div>
        )
    }
}
