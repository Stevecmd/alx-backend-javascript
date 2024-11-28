const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 when :id is a number', (done) => {
    request(`${baseUrl}12`, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request(`${baseUrl}hello`, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return the correct payment methods', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  const url = 'http://localhost:7865/login';

  it('should return the correct welcome message', (done) => {
    const options = {
      url,
      method: 'POST',
      json: {
        userName: 'Betty'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };
    request(options, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
