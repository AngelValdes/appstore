# Appstore

full sail  student app store

## Package dependencies

To install all dependencies in command line run.

```
npm i

npm i mocha nodemon -g

```

### Server

To start sever in command line run.

```
nodemon src/server.js
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

```
localhost:3000/api/v1/apps

Display All Apps Info

[
  {
    "id": 1,
    "title": "pokemon go",
    "description": "catch em all",
    "releaseDate": "6/15/16"
  },
  {
    "id": 2,
    "title": "Slack",
    "description": "commnication",
    "releaseDate": "6/18/2015"
  },
  {
    "id": 3,
    "title": "snapchat",
    "description": "social media",
    "releaseDate": "9/07/16"
  }
]
```

GET /api/v1/users

```
localhost:3000/api/v1/users

Display All Users Info

[
  {
    "id": 1,
    "name": "sean edwards"
  },
  {
    "id": 2,
    "name": "micheal jackson"
  },
  {
    "id": 3,
    "name": "steve coral"
  }
]
```

GET /api/v1/apps/:id

```
localhost:3000/api/v1/apps/1

Display Single App Info

{
  "id": 1,
  "title": "pokemon go",
  "description": "catch em all",
  "releaseDate": "6/15/16"
}
```


GET /api/v1/users/:id

```
localhost:3000/api/v1/users/1

Display Single User Info

{
  "id": 1,
  "name": "sean edwards"
}
```

##### Contributors
- [View Contributors](https://github.com/seanedw1/appstore/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
