import app from 'ampersand-app'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles/main.styl'
import Router from './router'

window.app = app;

app.extend({
    init () {
        this.router = new Router()
        this.router.history.start()
    }
})

app.init()