# nodejs-homework

Homework of NodeJS Mentoring program

To start of app, need to download all node modules by
```npm install```
and then start application
```npm start```

On <http://localhost:8080/api/products> you will find list of products

On <http://localhost:8080/api/products/1> you will find info about specific product

On <http://localhost:8080/api/products/1/reviews> you will find review fort specific product

On <http://localhost:8080/api/users> you will find list of users

In [models/products.js](models/products.js) described currently list of products in js

In [models/users.js](models/users.js) described currently list of users in js

## CI

In this repo added next CI processes:

- [travis-ci](https://travis-ci.com/) in [.travis.yml](.travis.yml)
- [github actions](https://github.com/features/actions) in [.github\workflows\node.js.yml](.github/workflows/node.js.yml)
- [dependabot](https://dependabot.com/) in [.github/dependabot.yml](.github\dependabot.yml)
