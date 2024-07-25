/* eslint-disable new-cap */
const {Given, When, Before, After} = require('@cucumber/cucumber');
const logger = require(`../../logging/logger`);
// eslint-disable-next-line no-unused-vars

After(async function(testCase) {
});
Before(function(testCase) {
});
Given('I do a before step', {timeout: 180 * 1000}, async function() {
    await logger.info(`I do a before step`);
});
Given('I do something crazy', {timeout: 180 * 1000}, async function() {
    await logger.info(`I do a something crazy`);
});
