const Request = require('./helper/Request');
const Item = require('./classes/Item');
const Test = require('./classes/Test');
const Trade = require('./classes/Trade');
const User = require('./classes/User');

class OPSkinsTrade {
    constructor(apiKey) {
        this.Request = new Request(apiKey);
        this.Item = new Item(this.request);
        this.Test = new Test(this.request);
        this.Trade = new Trade(this.request);
        this.User = new User(this.request)
    }
}

module.exports = OPSkinsTrade;
