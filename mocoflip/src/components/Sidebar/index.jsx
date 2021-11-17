import React from 'react';
import { SidebarContainer,
        Icon,
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SidebarRoute, 
        SidebarBtnWrap, 
    } from './SidebarElements';
import { Button } from '../Navbar/NavbarElements';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    let loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
    let username = JSON.parse(localStorage.getItem("username"));

    function signOut(e) {
        e.preventDefault();
        localStorage.setItem("loginstatus", JSON.stringify(false));
        window.location="/"
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </SidebarLink>
                    { loginstatus == true ?
                    <SidebarLink to="/" onClick={toggle}>
                        <Link to="/list" style={{ textDecoration: 'none', color: 'white' }}>Demo</Link>
                    </SidebarLink> : null
                    }
                    <SidebarLink to="/" onClick={toggle}>
                        <Link to="/testimoni" style={{ textDecoration: 'none', color: 'white' }}>Testimoni</Link>
                    </SidebarLink>
                    { loginstatus == false ?
                    <SidebarLink to="/" onClick={toggle}>
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link>
                    </SidebarLink> : null
                    }
                </SidebarMenu>
                <SidebarBtnWrap>
                    { loginstatus == false ?
                    <SidebarRoute to="/login">Sign In</SidebarRoute> :
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <p style={{ margin: 10, color: 'white'}}>Halo, {username}!</p>
                        <Button><button onClick={signOut} style={{ background: 'none', padding: 0, border: 'none' }}>Sign Out</button></Button>
                    </div>
                    }
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;