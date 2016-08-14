const expect = require('chai').expect;
const request = require('supertest');

describe('Course Routes', () => {
  var server;
  var course;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Apps
  it('GET /api/v1/courses returns multiple courses', (done) => {
    request(server)
      .get('/api/v1/courses')
      .set('Accept', 'courselication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const courses = res.body;

        // Save one single course from the list to test on in later tests
        this.course = courses[0];
        expect(courses.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single course
  it('GET /api/v1/courses/:id returns a obj with id, name, and semester properties', (done) => {
    request(server)
      .get('/api/v1/courses/' + this.course.id)
      .set('Accept', 'courselication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const course = res.body;
        expect(course).to.have.property('id');
        expect(course).to.have.property('name');
        expect(course).to.have.property('semester');
      })
      .end(done);
  });
});
