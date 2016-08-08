# Appstore

full sail  student app store

## Package dependencies

To install all dependencies in command line run.

```
npm i

npm i mocha -g

```

### Server

To start sever in command line run.

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
    "title": "app name",
    "description": "description goes here",
    "releaseDate": "1/15/99"
  },
  {
    "id": 2,
    "title": "Slack",
    "description": "commnication",
    "releaseDate": "1/15/99"
  },
]
```


Display All Users Info - localhost:3000/api/v1/users

```
[
  {
    "id": 1,
    "name": "john doe"
  },
  {
    "id": 2,
    "name": "jane doe"
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

Display Single User Info - localhost:3000/api/v1/users/1

```
{
  "id": 1,
  "name": "john doe"
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
