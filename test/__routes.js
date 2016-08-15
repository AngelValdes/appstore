// const expect = require('chai').expect;
// const request = require('supertest');

// array of all routes include keys to test
const routes = [
  {
    description: 'Create an app',
    route: 'api/v1/apps',
    method: 'post',
  },
  {
    description: 'Read an app',
    route: 'api/v1/apps',
    method: 'get',
  },
  {
    description: 'Read an app by id',
    route: 'api/v1/apps/:id',
    method: 'get',
  },
  {
    description: 'update an app',
    route: 'api/v1/apps/:id',
    method: 'post',
  },
  {
    description: 'delete an app',
    route: 'api/v1/apps/:id',
    method: 'delete',
  },
  {
    description: 'Create an user',
    route: 'api/v1/users',
    method: 'post',
  },
  {
    description: 'Read an user',
    route: 'api/v1/users',
    method: 'get',
  },
  {
    description: 'Read an user by id',
    route: 'api/v1/users/:id',
    method: 'get',
  },
  {
    description: 'Read all apps for user',
    route: 'api/v1/users/:id/apps',
    method: 'get',
  },
  {
    description: 'Update an user',
    route: 'api/v1/users/:id',
    method: 'post',
  },
  {
    description: 'Delete an user',
    route: 'api/v1/users/:id',
    method: 'delete',
  },
  {
    description: 'Create an Course',
    route: 'api/v1/courses',
    method: 'post',
  },
  {
    description: 'Read an Course',
    route: 'api/v1/courses',
    method: 'get',
  },
  {
    description: 'Read an Course by id',
    route: 'api/v1/courses/:id',
    method: 'get',
  },
  {
    description: 'update an Course',
    route: 'api/v1/courses/:id',
    method: 'post',
  },
  {
    description: 'delete an Course',
    route: 'api/v1/courses/:id',
    method: 'delete',
  },
];

// setup a group of test
describe('Route testing', () => {
  // declare block scope for server
  let server;

// before each instance
  beforeEach(() => {
    server = require('../src/server');
  });

// after each instance
  afterEach(() => {
    server.close();
  });

// loop to run threw routes
  for (let i = 0; i < routes.length; i++) {
// it statement gives description of what test is suppose to do
    it(routes[i].description, () => {
    // closing of the it statement
    });
  }


  // closing describe
});