import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'PublicPage',
  
  render() {
    return (
      <NavHelper className='container'>
        <header role='banner'>
          <h1>Lablr</h1>
        </header>
        <div>
          <p>We label stuff for you, because we can&trade;</p>
          <a href='/repos' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with Github
          </a>
        </div>
      </NavHelper>
    )
  }
})