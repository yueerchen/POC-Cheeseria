import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js'; 

describe('GET /cheeses', () => {
  it('should return a list of cheeses', (done) => {
    request(app)
      .get('/cheeses')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.above(0);
        done();
      });
  });

  it('should return a specific cheese', (done) => {
    request(app)
      .get('/cheeses/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(1);
        done();
      });
  });
});