import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components"

const NavbarWrapper = styled.div`
  width: 200px;
  background-color: lightgrey;
  height: 100vh;
  margin-right: 50px;
`

export default function Navbar(props) {
    return (
        <NavbarWrapper>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Recipe</Link>
                    </li>
                </ul>
            </nav>
        </NavbarWrapper>
    )
}