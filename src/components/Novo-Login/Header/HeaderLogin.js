import React from 'react';
import {HeaderWrap} from './styles'

const Header = () => {
return (
<HeaderWrap>
<header>
    <div className="logo-container">
    <img src='https://meucarro.localiza.com/static/media/logo.af109308.svg' alt="logo" className="logo-localiza"/>
    </div>
    <h1 className="meucarro">#meucarro</h1>
</header>
</HeaderWrap>
)
}

export default Header;