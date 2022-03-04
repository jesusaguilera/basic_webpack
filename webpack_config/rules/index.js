// Rules
const rulesJs  = require('./rules_js')
const rulesHtml  = require('./rules_html')
const rulesCss  = require('./rules_css')
const rulesSass  = require('./rules_sass')
const rulesImages  = require('./rules_images')
const rulesFonts  = require('./rules_fonts')

const rules = [ rulesJs, rulesHtml, rulesCss, rulesSass, rulesImages, rulesFonts ]

module.exports = rules 
