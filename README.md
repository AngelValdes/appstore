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

GET /api/v1/apps

Display All Apps Info - localhost:3000/api/v1/apps

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

GET /api/v1/users

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

GET /api/v1/apps/:id

Display Single App Info - localhost:3000/api/v1/apps/1

```
{
  "id": 1,
  "title": "app name",
  "description": "description goes here",
  "releaseDate": "1/15/99"
}
```


GET /api/v1/users/:id

Display Single User Info - localhost:3000/api/v1/users/1

```
{
  "id": 1,
  "name": "john doe"
}
```

##### Contributors
[View Contributors](https://github.com/seanedw1/appstore/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
