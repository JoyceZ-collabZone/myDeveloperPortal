Project 2 plan / Product Comparator App

Client side


- java script function to standardise data into single object schema
 -cba -> standard object
 -nab -> standard object
 -anz -> standard object
 -wbc -> standard object
- push to Mongo database


Server side


Express Server Backend required packages:
-express JS
-mongoose JS
-cors JS
-bcryptJS
-express Sessions



index.js
-key functions:
 -initiate express server backend (variable), on local host (entry point to express server backend)
 -initiate the sessions (variable)
 -require mongo database
 -connect index.js to middleware routes as per Routes


mongo.js
 -database connection and db on connectivity checks


models (database schema) / product listing models
 - product id
 - product description
 - product category
 - brand
 - lastUpdated
 - name

product listing Routes
  - search list of brands
  - search all products by brand
  - get by product id (render the details page)


models / user models
 - username
 - password
 - role (admin can see everything)

user Routes
   - create new users
   - user login
   - user logout


models / additional information (database associations)
  - eligibilityUri
  - feesAndPricingUri
  - overviewUri
  - termsUri

additional information routes
  - get additional information links

models / user preference
  - username
  - user id
  - preference brand
  - preference reference product id

user preferences routes
  - add product preference (brand + id)
  - update preference


Mongo database



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
 - login
 - list per product per brand
 - add user preference
