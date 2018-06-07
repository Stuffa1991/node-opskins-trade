const request = require('./helper/Request');
const item = require('./classes/Item');
const test = require('./classes/Test');
const trade = require('./classes/Trade');
const user = require('./classes/User');

class OPSkinsTrade {
    constructor(apiKey) {
        this.request = new request(apiKey);
        this.item = new item(this.request);
        this.test = new test(this.request);
        this.trade = new trade(this.request);
        this.user = new user(this.request)
    }
}

module.exports = OPSkinsTrade;
