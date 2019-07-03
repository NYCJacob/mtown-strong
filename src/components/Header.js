import React from 'react'
import PropTypes from 'prop-types'
import mtfist from '../images/mtfist-hires.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo-holder">
            {/*<span className="icon fa-diamond"></span>*/}
          <span className="logo-image"><img src={mtfist} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1 id="mt-strong" style={{color: "blue", textShadow: "white 2px 0 2px"}}>Marbletown Strong</h1>
                <p style={{color: "lightblue", fontWeight: "bold"}}>An Independent Expenditure Committee registered with the New York Board of Elections</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Mission</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Campaigns</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Contribute</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
