# Appstore

[ ![codeship status for seanedw1/appstore](https://codeship.com/projects/b60f7a80-4964-0134-e318-56bd1d4e9b8b/status?branch=master)](https://codeship.com/projects/169525)

full sail  student app store

## Package dependencies

To install all dependencies in command line run.

```
npm i

npm i mocha -g

```

### ENV file

create a .env following this file structure on root level

```
DB_HOST=localhost
DB_NAME=apiCRUD
DB_USER=root
DB_PASS=
DB_SCHEMA=mysql
DB_PORT=3306
```

### Server

To start sever in command line run.

Server runs on port 3000.

```
npm start
```

Server runs on port 3000.


### Unit test

To run unit test sever must be off.

To start unit test in command line run.

```
npm test
```

### Workflow

1) Confirm in master branch

2) create a new branch

```
git checkout -b branchname
```

3) push up to new feature branch

```
git add -A

git commit -m 'insert your msg here'

git push

```

if this is your first time pushing to new branch run

```
git push --set-upstream origin branchname
```

5) once pushed we return to the master branch to merge (pull in) the feature branch

```
git checkout master
```
6) now that we are back in the master branch merge your feature branch into your master branch use the merge command followed by a push

```
git merge branchname

git push
```

7) now that we have successfully merged our feature branch our ci tool will check to make sure your code is passing.

8) once codeship confirms that the build passes we want to tag this version then merge our master into our release branch.

9) to create a tag run

```
git tag v1.0.6 commitidgoeshere
```

10) once we have created our tag we want to continue with our merge to the release branch

```
git checkout release

git merge branchname

git push
```
11) once we push to release branch our codebase enters the first phase of the Deployment pipeline

### Deployment

1) once we merge our code to master our ci test run to confirm our codebase is passing our automated test.

2) if our codebase passes ci test (codeship) we manually merge master branch to the release branch
which is the first step in the deployment pipeline.

3) once ci tool (codeship) confirms the build is good it will automatically be deployed from release repo onto our staging server.

4) once completed and we confirmed out codebase is good we will manually push on heroku to the production server

## Endpoints

### CRUD FOR USERS

*  POST localhost:3000/api/v1/users - Create User

sample
```
{
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
}
```

* GET localhost:3000/api/v1/users/1 - Display User by id

sample response
```
{
  "id": 1,
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-08T01:45:31.000Z",
  "apps": []
}
```

* GET localhost:3000/api/v1/users - Display All Users

sample response
```
[
  {
    "id": 1,
    "name": "john doe",
    "age": 50,
    "hobby": "dancing",
    "createdAt": "2016-08-07T01:45:31.000Z",
    "updatedAt": "2016-08-07T01:45:31.000Z"
  },
  {
    "id": 2,
    "name": "jane doe",
    "age": 34,
    "hobby": "softball",
    "createdAt": "2016-08-7T21:56:43.000Z",
    "updatedAt": "2016-08-7T21:56:43.000Z"
  },
  {
    "id": 3,
    "name": "kevin smith",
    "age": 21,
    "hobby": "programming",
    "createdAt": "2016-08-07T00:25:11.000Z",
    "updatedAt": "2016-08-07T00:25:13.000Z"
  }
]
```


*  POST localhost:3000/api/v1/users/1 - Update User by id

sample
```
{
  "id": 1,
  "name": "steven smith",
  "age": 45,
  "hobby": "sports",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-11T21:54:21.000Z",
}
```

*  DELETE localhost:3000/api/v1/users/1 - DELETE User by id

sample response
```
1
```

### CRUD FOR APPS


*  POST localhost:3000/api/v1/apps - create app

sample
```
{
  "title": "test app",
  "description": "fjndclkdlj",
}
```


* GET localhost:3000/api/v1/apps/1 - Display App by id

sample response
```
{
  "id": 1,
  "title": "test app",
  "description": "fjndclkdlj",
  "releaseDate": null,
  "createdAt": "2016-08-11T21:57:20.000Z",
  "updatedAt": "2016-08-11T21:57:20.000Z",
  "userID": null
}
```

* GET localhost:3000/api/v1/users/1 - Display All Apps from specific user

sample response
```
{
  "id": 1,
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
  "createdAt": "2016-06-08T01:45:31.000Z",
  "updatedAt": "2016-06-11T21:54:21.000Z",
  "apps": [
    {
      "id": 1,
      "title": "test app",
      "description": "fjndclkdlj",
      "releaseDate": null,
      "createdAt": "2016-08-11T21:57:20.000Z",
      "updatedAt": "2016-08-12T18:30:49.000Z",
      "userID": 1
    }
  ]
}
```

* GET localhost:3000/api/v1/apps - Display All Apps

sample response
```
[
  {
    "id": 1,
    "title": "test app",
    "description": "fake app",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
  {
    "id": 2,
    "title": "test app 2",
    "description": "fake app 2",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
  {
    "id": 3,
    "title": "test app 3",
    "description": "fake app 3",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
]
```

*  POST localhost:3000/api/v1/apps/1 - UPDATE App by id

sample
```
{
  "id": 1,
  "title": "testing",
  "description": "you are updating",
  "releaseDate": null,
  "createdAt": "2016-08-12T18:31:36.000Z",
  "updatedAt": "2016-08-12T19:41:46.000Z",
  "userID": null
}
```

*  DELETE localhost:3000/api/v1/apps/1 - DELETE App by id

sample response
```
1
```

### CRUD FOR COURSE

*  POST localhost:3000/api/v1/courses - Create course

sample
```
{
  "name": "deployment of web application",
  "code": "dwa123",
  "semester": "1608",
}
```

* GET localhost:3000/api/v1/courses/1 - Display courses by id

sample response
```
{
  "id": 1,
  "name": "deployment of web application",
  "code": "dwa123",
  "semester": "1608",
  "hours": 50,
  "startDate": "null",
  "endDate": "null",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-08T01:45:31.000Z",
}

```

* GET localhost:3000/api/v1/courses - Display All courses

sample response
```
[
{
  "id": 1,
  "name": "deployment of web application",
  "code": "dwa123",
  "semester": "1608",
  "hours": "null",
  "startDate": "null",
  "endDate": "null",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-08T01:45:31.000Z",
},{
  "id": 2,
  "name": "mobile device deployment",
  "code": "mdd123",
  "semester": "1610",
  "hours": "null",
  "startDate": "null",
  "endDate": "null",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-08T01:45:31.000Z",
},{
  "id": 3,
  "name": "final project 1",
  "code": "fp1",
  "semester": "1610",
  "hours": "null",
  "startDate": "null",
  "endDate": "null",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-08T01:45:31.000Z",
}

]
```


*  POST localhost:3000/api/v1/courses/1 - Update courses by id

sample
```
{
  "name": "deployment of web application",
  "code": "dwa123",
  "semester": "1610",
  "hours": "null",
  "startDate": "null",
  "endDate": "null",
}

```

*  DELETE localhost:3000/api/v1/courses/1 - DELETE courses by id

sample response
```
1
```

##### Contributors
[View Contributors](https://github.com/seanedw1/appstore/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
