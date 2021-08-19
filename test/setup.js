const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest

/* if using ESlint, make .eslintrc.js file and add:
"globals": {
    "supertest": true,
    "expect": true
  }
so there are no issues using the expect and supertest libs globally*/

//add required code for additional chai plugins here