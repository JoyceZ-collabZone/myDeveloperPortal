Project 2 plan / Data Holder Portal

Client side

Frontend technologies:

- jquery
- bootstrap
- page path
- web components
- live server to connect to proxies in front of web server

queries with

- ajax/fetch api
- async wait

routes:

- home
- user onboarding (type: developer vs adr admin)
- ADR onboarding / self service portal (CRUD operations, for admin user)
- user login (type: developer vs adr admin)
- API catalogs (search, get all, get by scope)

Server side

Express Server Backend required packages:
-express JS
-mongoose JS
-cors JS
-bcryptjs
-express Sessions

index.js
-key functions:
-initiate express server backend (variable), on local host (entry point to express server backend)
-initiate the sessions (variable)
-require mongo database
-connect index.js to middleware routes as per Routes

mongo.js
-database connection and db on connectivity checks

models (database schema) / user models

models / user models

- username
- password
- profile (developer vs admin )

user Routes

- create new users
- user login
- user logout

models / ADR onboarding

- username
- password
- profile (developer vs admin )
- and more

user preferences routes

- add api preference (scope + type) <-> user
- update preference

API schema:
name
catagory
scope
endpoint
version
authN profile

api permissions
api name <-> user profile

Mongo database
