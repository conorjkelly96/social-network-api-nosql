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

**`/api/thoughts`**

- `GET` to get all thoughts
- `GET` to get a single thought by its `_id`
- `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

- `PUT` to update a thought by its `_id`
- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction stored in a single thought's `reactions` array field
- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

```

```
