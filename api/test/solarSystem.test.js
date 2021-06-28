//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Planet', () => {
    /*
      * Test the /GET route
      */
    describe('/GET solar system', () => {
        it('it should GET all the planets', (done) => {
            chai.request(server)
                .get('/solarSystem')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(8);
                    done();
                });
        });
    });

    describe('/GET planet', () => {
        it('it should GET Mercury planet', (done) => {
            chai.request(server)
                .get('/solarSystem/mercury')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property("name").eql('Mercury');
                    res.body.should.have.property("picture");
                    res.body.should.have.property("age").eql(4.503);
                    res.body.should.have.property("mass").eql("3.285 × 10^23");
                    res.body.should.have.property("imageUri").eql(`http://${res.request.host}/images/planets/Mercury_in_true_color.jpg`);
                    done();
                });
        });
    });

});