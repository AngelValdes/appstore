const expect = require('chai').expect;
const faker = require('faker');
const Course = require('../src/models/course');

describe('Course Model', () => {
  var testCourses;
  var tempCourse;

  // Test for all Courses
  it('Gets All', (done) => {
    Course.all(
      (err) => {
        throw new Error(err);
      },
      (courses) => {
        this.testCourses = courses;
        expect(this.testCourses.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a Course
  it('Adds a new Course', (done) => {
    // Generate a fake Course with a random title
    const fakeCourse = { name: faker.name.firstName() };
    // Call course model for adding
    Course.add(fakeCourse,
      (err) => {
        throw new Error(err);
      },
      (course) => {
        // Save the returned data for later use in tests
        this.tempCourse = course.dataValues;

        // Course.title returned from model should match course.title supplied
        expect(course.title).to.be.equal(fakeCourse.title);
        done();
      }
    );
  });

  // Find a Course
  it('Find a Course', (done) => {
    // Generate a fake Course with a random title
    const targetCourse = this.testCourses[0];

    // Call course model for finding
    Course.one(targetCourse,
      (err) => {
        throw new Error(err);
      },
      (course) => {
        // Course.title returned from model should match course.title supplied
        expect(course.title).to.be.equal(targetCourse.title);
        done();
      }
    );
  });

  // Update a Course
  it('Update a Course', (done) => {
    // Load in the info for an existing course
    const updateCourse = this.tempCourse;

    // Generate a new title for hte course
    updateCourse.name = 'Not A Real Name';

    // Call course model for updating
    Course.update(updateCourse,
      (err) => {
        throw new Error(err);
      },
      (course) => {
        // Save the returned data for later use in tests
        this.tempCourse = course;
        // Course.title returned from model should match course.title supplied
        expect(course.title).to.be.equal(updateCourse.title);
        done();
      }
    );
  });

  // Remove a Course
  it('Remove a Course', (done) => {
    // Load in the info for an existing course
    const removeCourse = this.tempCourse;
    removeCourse.force = true;
    // Call course model for updating
    Course.remove(removeCourse,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // if successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});
