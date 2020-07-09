const fnPug = require('fn-pug')

module.exports = {
  process(src) {
    const runtime = "require('fn-pug/lib/runtime/vdom').default(require('virtual-dom/h'))"
    const header =`var $$ = ${runtime}`
    const { code } = fnPug(src)
    const footer = 'module.exports = template'

    return [header, code, footer].join('\n')
  }
};
