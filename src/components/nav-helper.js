import React from 'react'
import localLinks from 'local-links'
import app from 'ampersand-app'

export default React.createClass({
  displayName: 'NavHelper',

  onClick(event) {
    const pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render() {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})