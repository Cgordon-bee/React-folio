import React, { useState } from 'react';
import './header.css'
import Mobile from './mobile';
import Web from './web/index';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    

        <div className="header">
            <div className="logo">Carol Gordon "The Smooth Coding Operator"</div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={() =>setIsOpen(!isOpen)}>
                        {/* style sheet is not bringing through icon - needs to be corrected */}
                    <i class="fi fi-br-Menu-burger menu-icon"></i>
                </div>
                {isOpen && <Mobile  isOpen={isOpen} setIsOpen ={setIsOpen} />}
            </div>
        </div>
    </div>
    );   
}

export default Header;