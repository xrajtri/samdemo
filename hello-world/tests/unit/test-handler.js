'use strict';

const app  = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
    //Status Code Validation
    it('Status Code Validation - Passed', async () => {
        const result = await app.lambdaHandler(event, context)
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
    });
    //Response Validation
    it('Response Validation - Passed ', async () => {
        const result = await app.lambdaHandler(event, context)
        expect(result).to.be.an('object');
        expect(result.body).to.be.an('string');
        let response = JSON.parse(result.body);
        expect(response).to.be.an('object');
        expect(response.addressStatus).to.be.equal("Validated");
        expect(response.message).to.be.equal("Address validated successfully.");
    });
});
