import React from 'react'
import PropTypes from 'prop-types'

import ContactPage from '../pages/contact-page'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Mission</h2>
          <p>We are a concerned group of grounded Marbletown residents who have simply had enough of the power hungry opportunists, seeking voters at the cost of integrity and commitment to democratic values.</p>
          <p>
            Marbletown Strong was created as a vehicle to promote honest government and laws preserving our rural quality of life.  Marbletown is one of the few towns in New York that has maintained its rural character
            while maintaining a strong financial position.  The constant threat of development for development sake threatens the charm of our town.  We have decided to put our money where our mouth's are and fight to preserve
            our town.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Campaigns</h2>
          <h3>2019 Marbletown Election</h3>
          <p><span style={ {fontWeight: "bold", color: "blue"}}>Marbletown Strong</span> will be conducting a campaign for the Democrats' primary.  Our involvement in the general election has yet to be determined.</p>
          <h3>Event Space Law</h3>
          <p><span style={ {fontWeight: "bold", color: "blue"}}>Marbletown Strong</span> will be monitoring the progress of this proposed legislation and are evaluating our options.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contribute</h2>
          <p>Online contributions are temporarily closed. <br/>  If you wish to contribute please send and email to <span style={ {fontWeight: "bold", color: "blue"}}>info@marbletownstrong.com</span>.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ContactPage/>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main