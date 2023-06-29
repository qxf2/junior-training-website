/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const path = require("path");
const gmail = require("gmail-tester");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  registerReportPortalPlugin(on);
  on("task", {
    "gmail:check": async args => {
      const { from, to, subject } = args;
      const email = await gmail.check_inbox(
        path.resolve("junior-training-website.json"), // credentials.json is inside plugins/ directory.
        path.resolve("token.json"), // gmail_token.json is inside plugins/ directory.
       args.options
      );
      return email;
    }
  });
}
