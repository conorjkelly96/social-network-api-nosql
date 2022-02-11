# Social Network API (NoSQL)

## Description

A RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list, leveraging Express.js for routing, a MongoDB database, and the Mongoose ODM.

# Links

[Application Walkthrough](https://drive.google.com/drive/folders/1gKsgNqtfZqtUcg9pN6_animwjBovwP1f?usp=sharing)

## Technologies

- JavaScript
  - node.js
  - express.js
- MongoDB
  - Mongoose ODM

## Getting Started

Run the following commands to start the application.

```
npm i
npm run seed
npm run start
```

## Endpoints

When using the application, please see example responses on the GET, POST, PUT and DELETE requests.

### API Routes

### `GET` all users

**`/api/users`**

```json
// sample response
{
  "success": true,
  "data": [
    {
      "_id": "62058930fcfeb163d2ce7c7c",
      "username": "DonaldTrump",
      "email": "donaldtrump@gmail.com",
      "thoughts": ["62058930fcfeb163d2ce7c82"],
      "friends": [],
      "__v": 0
    },
    {
      "_id": "62058930fcfeb163d2ce7c7d",
      "username": "TheNotoriousMMA",
      "email": "thenotoriousmma@gmail.com",
      "thoughts": ["62058930fcfeb163d2ce7c87"],
      "friends": [
        "62058930fcfeb163d2ce7c7f",
        "62058930fcfeb163d2ce7c7e",
        "62058930fcfeb163d2ce7c7c"
      ],
      "__v": 0
    },
    {
      "_id": "62058930fcfeb163d2ce7c7e",
      "username": "joerogan",
      "email": "joerogan@gmail.com",
      "thoughts": ["62058930fcfeb163d2ce7c8c"],
      "friends": [
        "62058930fcfeb163d2ce7c7f",
        "62058930fcfeb163d2ce7c7d",
        "62058930fcfeb163d2ce7c7c"
      ],
      "__v": 0
    },
    {
      "_id": "62058930fcfeb163d2ce7c7f",
      "username": "TimJDillon",
      "email": "timjdillon@gmail.com",
      "thoughts": ["62058930fcfeb163d2ce7c91"],
      "friends": ["62058930fcfeb163d2ce7c7d"],
      "__v": 0
    }
  ]
}
```

### `GET` a single user by its `_id` and populated thought and friend data

**`/api/users/:userId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c7c",
    "username": "DonaldTrump",
    "email": "donaldtrump@gmail.com",
    "thoughts": ["62058930fcfeb163d2ce7c82"],
    "friends": [],
    "__v": 0
  }
}
```

### `POST` a new user:

**`/api/users`**

```json
// example data
{
  "username": "stevengerrard",
  "email": "stevengerrard@hotmail.com"
}
```

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "6206070c9232637098b593ec",
    "username": "stevengerrard",
    "email": "stevengerrard@hotmail.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
  }
}
```

### `PUT` to update a user by its `_id`

**`/api/users/:userId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c7c",
    "username": "DonaldTrump",
    "email": "donaldtrump@gmail.com",
    "thoughts": ["62058930fcfeb163d2ce7c82"],
    "friends": [],
    "__v": 0
  }
}
```

### `DELETE` to remove user by its `_id`

**`/api/users/:userId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c7c",
    "username": "usernameUpdate123",
    "email": "updateemail@gmail.com",
    "thoughts": ["62058930fcfeb163d2ce7c82"],
    "friends": [],
    "__v": 0
  }
}
```

---

**`/api/users/:userId/friends/:friendId`**

### `POST` to add a new friend to a user's friend list

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c7d",
    "username": "TheNotoriousMMA",
    "email": "thenotoriousmma@gmail.com",
    "thoughts": ["62058930fcfeb163d2ce7c87"],
    "friends": [
      "62058930fcfeb163d2ce7c7f",
      "62058930fcfeb163d2ce7c7e",
      "62058930fcfeb163d2ce7c7c"
    ],
    "__v": 0
  }
}
```

### `DELETE` to remove a friend from a user's friend list

```json
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c7d",
    "username": "TheNotoriousMMA",
    "email": "thenotoriousmma@gmail.com",
    "thoughts": ["62058930fcfeb163d2ce7c87"],
    "friends": ["62058930fcfeb163d2ce7c7f", "62058930fcfeb163d2ce7c7c"],
    "__v": 0
  }
}
```

### `GET` to get all thoughts

**`/api/thoughts`**

```json
// sample response
{
  "success": true,
  "data": [
    {
      "_id": "62058930fcfeb163d2ce7c82",
      "thoughtText": "There is always light. If only we're brave enough to see it. If only we're brave enough to be it",
      "username": "DonaldTrump",
      "reactions": [
        {
          "reactionId": "62058930fcfeb163d2ce7c83",
          "reactionBody": "Woooooooooow!",
          "username": "TheNotoriousMMA",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c84"
        }
      ],
      "__v": 0,
      "reactionCount": 1
    },
    {
      "_id": "62058930fcfeb163d2ce7c87",
      "thoughtText": "I have learned not to allow rejection to move me.",
      "username": "TheNotoriousMMA",
      "reactions": [
        {
          "reactionId": "62058930fcfeb163d2ce7c88",
          "reactionBody": "So cool!",
          "username": "joerogan",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c89"
        },
        {
          "reactionId": "62058930fcfeb163d2ce7c8a",
          "reactionBody": "Nice!",
          "username": "DonaldTrump",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c8b"
        }
      ],
      "__v": 0,
      "reactionCount": 2
    },
    {
      "_id": "62058930fcfeb163d2ce7c8c",
      "thoughtText": "Don't save your best for when you think the material calls for it.",
      "username": "joerogan",
      "reactions": [
        {
          "reactionId": "62058930fcfeb163d2ce7c8d",
          "reactionBody": "Urm, nah",
          "username": "TimJDillon",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c8e"
        },
        {
          "reactionId": "62058930fcfeb163d2ce7c8f",
          "reactionBody": "THIS.",
          "username": "DonaldTrump",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c90"
        }
      ],
      "__v": 0,
      "reactionCount": 2
    },
    {
      "_id": "62058930fcfeb163d2ce7c91",
      "thoughtText": "You can't rely on how you look to sustain you.",
      "username": "TimJDillon",
      "reactions": [
        {
          "reactionId": "62058930fcfeb163d2ce7c92",
          "reactionBody": "Woooooooooow!",
          "username": "joerogan",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c93"
        },
        {
          "reactionId": "62058930fcfeb163d2ce7c94",
          "reactionBody": "Love it hunny!",
          "username": "TheNotoriousMMA",
          "createdAt": "2022-02-10T21:52:48.033Z",
          "_id": "62058930fcfeb163d2ce7c95"
        }
      ],
      "__v": 0,
      "reactionCount": 2
    }
  ]
}
```

### `GET` to get a single thought by its `_id`

**`/api/thoughts/:thoughtId`**

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c91",
    "thoughtText": "You can't rely on how you look to sustain you.",
    "username": "TimJDillon",
    "reactions": [
      {
        "reactionId": "62058930fcfeb163d2ce7c92",
        "reactionBody": "Woooooooooow!",
        "username": "joerogan",
        "createdAt": "2022-02-10T21:52:48.033Z",
        "_id": "62058930fcfeb163d2ce7c93"
      },
      {
        "reactionId": "62058930fcfeb163d2ce7c94",
        "reactionBody": "Love it hunny!",
        "username": "TheNotoriousMMA",
        "createdAt": "2022-02-10T21:52:48.033Z",
        "_id": "62058930fcfeb163d2ce7c95"
      }
    ],
    "__v": 0,
    "reactionCount": 2
  }
}
```

### `POST` to create a new thought

**`/api/thoughts/:thoughtId`**

```json
// example data
{
  "thoughtText": "Walk through fire for you, just let me adore you, like it's last thing that I'll ever do",
  "username": "TheNotoriousMMA"
}
```

```json
// sample response
{
  "success": true,
  "data": {
    "thoughtText": "Walk through fire for you, just let me adore you, like it's last thing that I'll ever do",
    "username": "TheNotoriousMMA",
    "_id": "62060bb69232637098b59408",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0
  }
}
```

### `PUT` to update a thought by its `_id`

**`/api/thoughts/:thoughtId`**

```json
// sample request
{
  "thoughtText": "Ahhhhhh, walk through fire for you, just let me adore you. "
}
```

```json
// sample response
{
  "success": true,
  "data": {
    "_id": "62060bb69232637098b59408",
    "thoughtText": "Ahhhhhh, walk through fire for you, just let me adore you.",
    "username": "TheNotoriousMMA",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0
  }
}
```

- `DELETE` to remove a thought by its `_id`

```json
{
  "success": true,
  "data": {
    "_id": "62060bb69232637098b59408",
    "thoughtText": "Ahhhhhh, walk through fire for you, just let me adore you.",
    "username": "TheNotoriousMMA",
    "reactions": [],
    "__v": 0,
    "reactionCount": 0
  }
}
```

---

### `POST` to create a reaction stored in a single thought's `reactions` array field

**`/api/thoughts/:thoughtId/reactions`**

```json
// sample response
{
  "reactionBody": "Yes mate!",
  "username": "TheNotoriousMMA"
}
```

### `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

```json
{
  "success": true,
  "data": {
    "_id": "62058930fcfeb163d2ce7c8c",
    "thoughtText": "Don't save your best for when you think the material calls for it.",
    "username": "joerogan",
    "reactions": [
      {
        "reactionId": "62058930fcfeb163d2ce7c8d",
        "reactionBody": "Urm, nah",
        "username": "TimJDillon",
        "createdAt": "2022-02-10T21:52:48.033Z",
        "_id": "62058930fcfeb163d2ce7c8e"
      },
      {
        "reactionId": "62058930fcfeb163d2ce7c8f",
        "reactionBody": "THIS.",
        "username": "DonaldTrump",
        "createdAt": "2022-02-10T21:52:48.033Z",
        "_id": "62058930fcfeb163d2ce7c90"
      },
      {
        "reactionId": "62060d309232637098b5940f",
        "reactionBody": "Yes mate!",
        "username": "TheNotoriousMMA",
        "createdAt": "2022-02-11T06:46:57.323Z",
        "_id": "62060d309232637098b59410"
      }
    ],
    "__v": 0,
    "reactionCount": 3
  }
}
```
