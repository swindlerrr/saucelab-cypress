// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypresnpm install -D cypress-xpaths.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@cypress-audit/lighthouse/commands' 

const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')
  
  module.exports = (on, config) => {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })
      
          on('task', {
              lighthouse: lighthouse(),
          })
        
  }