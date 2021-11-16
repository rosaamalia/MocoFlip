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

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="Home" onClick={toggle}>
                        Demo
                    </SidebarLink>
                    <SidebarLink to="Home" onClick={toggle}>
                        Testimoni
                    </SidebarLink>
                    <SidebarLink to="Home" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;