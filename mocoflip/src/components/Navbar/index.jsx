import React from "react";
import { FaBars } from 'react-icons/fa';
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavItem,
        NavMenu,
        NavLinks,
        NavBtn,
        NavBtnLink,
        Button,
        SearchBar
        } from './NavbarElements';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = ({ toggle }) => {
    let loginstatus = JSON.parse(localStorage.getItem("loginstatus")).status;
    let userLogIn = JSON.parse(localStorage.getItem("loginstatus")).id;
    
    if( userLogIn != null ) {
        var username = JSON.parse(localStorage.getItem(userLogIn)).username;
    }

    function signOut(e) {
        e.preventDefault();
        localStorage.setItem("loginstatus", JSON.stringify({'status': false, 'id': NaN}));
        window.location="/"
    }

    return (
        <div style={{ marginBottom: 70}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={ logo } style={{ width: 60, borderRadius: 5}}/>
                        <p style={{ marginLeft: 10, marginBottom: 0 }}>MocoFlip</p>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <SearchBar className="d-flex justify-content-center">
                                <form action='/' method='get'>
                                    <label htmlFor='header-search'>
                                        <span className="visually-hidden align-items-center">Search Flip Books</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="header-search"
                                        placeholder="Search Flip Books"
                                        name="s"
                                        style={{ paddingInline: 15, paddingBlock: 5, borderRadius: 5}}
                                    />
                                </form>
                                {' '}
                            </SearchBar>
                        </NavItem>
                        <NavItem>
                            <NavLinks><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></NavLinks>
                        </NavItem>
                        <NavItem>
                            { loginstatus == true ? <NavLinks><Link to="/list" style={{ textDecoration: 'none', color: 'white' }}>Book List</Link></NavLinks> : null}
                        </NavItem>
                        <NavItem>
                            <NavLinks><Link to="/testimoni" style={{ textDecoration: 'none', color: 'white' }}>Testimoni</Link></NavLinks>
                        </NavItem>
                        <NavItem>
                            { loginstatus == false ? <NavLinks><Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></NavLinks> : null}
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        { loginstatus == false ?
                            <NavBtnLink to='/login'>Sign In</NavBtnLink> :
                            <div style={{ display: 'flex', flexDirection: 'row'}}>
                                <p style={{ margin: 10, color: 'white'}}>Halo, <bold>{username}</bold>!</p>
                                <Button><button onClick={signOut} style={{ background: 'none', padding: 0, border: 'none' }}>Sign Out</button></Button>
                            </div>
                        }
                    </NavBtn>
                </NavbarContainer>,
            </Nav>
        </div>
    )
};


export default Navbar;