import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/osaze_beach_hangout.jpg';
import PropTypes from 'prop-types';
import Headline from '../headline';

const Header = props => {
    return(
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test = "logoImg" src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string
}

export default Header;