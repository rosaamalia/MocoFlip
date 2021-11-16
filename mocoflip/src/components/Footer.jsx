import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';

export const FooterContainer = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
`
function Footer(){
    return (
        <FooterContainer>
            <div>
                <img src={logo}
                    style={{width: 30, borderRadius: 5}}></img>
                <span style={{fontSize: 18, color: 'white', paddingLeft: 10, fontWeight: 600}}>MocoFlip</span>
            </div>
            <div style={{paddingTop: 10}}>
                <p style={{color: 'white', textAlign: 'center', margin: 0}}>Kelompok 22 - Serrum - Asek Asek Jos</p>
            </div>
        </FooterContainer>
    );
}

export default Footer;