const request = require('request-promise');

class Request {
    constructor(apiKey) {
        this.apiKey = apiKey;

        if (this.key == null || this.key === '') {
            throw new Error('You need to provide a valid api key');
        }

        this.request = request.defaults({
            auth: {
                user: `${this.apiKey}:`,
                sendImmediately: true,
            }
        });
    }

    post(url) {
        return url;
    }

    get(url) {
        return url;
    }
}

module.exports = Request;
