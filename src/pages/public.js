import React from 'react'

export default React.createClass({
  displayName: 'PublicPage',
  render() {
    return (
      <div className='container'>
        <a href='/repos' className='button button-large'>Big button</a>
      </div>
    )
  }
})