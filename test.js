const fnPug = require('fn-pug')

const template = "h1 hello ${name}"

const { code, map, ast } = fnPug(template)

const style = fnPug("style= require('./sportsbook-player-projections.styl')").code

console.log(code)
