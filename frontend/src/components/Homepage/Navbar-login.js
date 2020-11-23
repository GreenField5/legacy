import { Link } from "react-router-dom";
import './A-Style.css';

import React, { useState } from 'react';
//import styled from 'styled-components';
import { Modal } from './SignInModal';
//import { Modal2 } from './SignUpModal';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 10vh;
  
// `;

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    //pop up functions
    const [showModal, setShowModal] = useState(false);
    // to open the pop up (toggle between open and close)
      const openModal = () => {
        setShowModal(prev => !prev);
      };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <h3>FoodDose</h3>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/restaurants' className='nav-links' onClick={closeMobileMenu}>RESTURANTS</Link>
                        </li>
                        <li className='nav-item'>
                            {/* <Container> */}
                            <Link  className='nav-links' onClick={openModal}>SIGN IN</Link>
                            <Modal  className='containerPop'showModal={showModal} setShowModal={setShowModal} />
                            {/* </Container> */}
                        </li>
                        <li className='nav-item'>
                        {/* <Container>
                            <Link  className='nav-links' onClick={openModal}>SIGN UP</Link>
                            <Modal2 showModal={showModal} setShowModal={setShowModal} />
                            </Container> */}
                        <Link  className='nav-links' onClick={closeMobileMenu}>SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar