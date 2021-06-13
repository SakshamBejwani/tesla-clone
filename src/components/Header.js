import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import LanguageIcon from '@material-ui/icons/Language';
import { Translate } from '@material-ui/icons';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt ="" />
            </a>

            <Menu>
                <a href ="#">Model S</a>
                <a href ="#">Model Y</a>
                <a href ="#">Model 3</a>
                <a href ="#">Model X</a>
                <a href ="#">Solar Roof</a>
                <a href ="#">Solar Panels</a>

            </Menu>
            <RightMenu>
                <a href ="#">Shop</a>
                <a href ="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerMenu show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href = "#">Model S</a></li>
                <li><a href = "#">Model Y</a></li>
                <li><a href = "#">Model 3</a></li>
                <li><a href = "#">Model X</a></li>
                <li><a href = "#">Solar Roof</a></li>
                <li><a href = "#">Solar Panels</a></li>
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Cyber Truck</a></li>
                <li><a href = "#">Powerwall</a></li>
                <li><a href = "#">Commercial Energy</a></li>
                <li><a href = "#">Utilities</a></li>
                <li><a href = "#">Test Drive</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">Find Us</a></li>
                <li><a href = "#">Support</a></li>
                <li><a href = "#">Careers</a></li>
                <li><a href = "#">Shop</a></li>
                <li><a href = "#">Account</a></li>
                <li><a href = "#">More</a></li>
                <LanguageWrapper>
                    <LanuageIconGlobe />
                    <p>United States</p>
                </LanguageWrapper>

                
            </BurgerMenu>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    justify-content: space-between;
    z-index:1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;


    a { 
        font-size:14px;
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
        letter-spacing:1px;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
const BurgerMenu = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background-color: rgba(249,249,249, 0.95);
    width: 380px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' } ;
    transition: transform 0.3s ease-in;
    li{ 
        padding: 8px 8px;
        a{  
            font-size:14px;
            font-weight: 450;
        }
    }
    ClearIcon
`

const CustomClose = styled(ClearIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`

const LanguageWrapper = styled.div`
    display: flex;
    padding: 8px 8px;
    p{  
        cursor: pointer;
        padding: 0px 8px;
        font-size:14px;
        font-weight: 500;
    }
`

const LanuageIconGlobe = styled(LanguageIcon)`
    
   
`