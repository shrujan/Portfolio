import React from 'react';
import './Header.scss';
import logoWhite from '../../Assets/Img/logo-white.png';
import Aux from '../../HOC/Auxilary';
import addHeader from '../../HOC/addHeader';

const Header = () => {
    return (
        <Aux>
            {/* <header  className="header"> */}
                <div className="header__logo-container">
                    <img src={logoWhite} alt="Shrujan Shetty" className="header__logo" />
                </div>
                <div className="header__header-text-btn-container">
                        <h1 className="header-primary">
                            <span className="header-primary--main-header">Shrujan Shetty</span>
                            <span className="header-primary--sub-header">senior front end engineer</span>
                        </h1>
                        <a href="#" className="btn btn--btn-white btn--btn-animated">Discover More</a>
                </div>
            
            {/* </header> */}
        </Aux>
        
    )
}

export default addHeader(Header, 'header');