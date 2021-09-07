# Frigo REST API
 
Made with Nodejs, Express, Knex, and deployed with Heroku.

## Get all items

### Request

`GET /`

    https://thawing-cove-72278.herokuapp.com/api

### Response   

    HTTP/1.1 200 OK
    Status Code: 200
    Content-Type: application/json; charset=utf-8
    Content-Length: 6246

    [{"id":101,"name":"Apple","category":"Fruits"}, {}...]


## Get all items in a category

### Request

`GET /type/:category`

    https://thawing-cove-72278.herokuapp.com/api/type/Vegetables

### Response

    HTTP/1.1 200 OK
    Status Code: 200
    Content-Type: application/json; charset=utf-8
    Content-Length: 1517

    [{"id":201,"name":"Broccoli","category":"Vegetables"}, {}...]


## Get an item by it's id

### Request

`GET /item/:id`

    https://thawing-cove-72278.herokuapp.com/api/item/101

### Response

    HTTP/1.1 200 OK
    Status Code: 200
    Content-Type: application/json; charset=utf-8
    Content-Length: 48

    {"id":101,"name":"Apple","category":"Fruits"}



## Frigo (*free-goh*)

[Live App](https://frigo-food.vercel.app) || [Client Repo](https://github.com/acheckler/frigo)

Frigo is application built to help reduce food waste by keeping track of what perishables are currently in the users fridge, and when they were purchased. 
A recipe search function is also included for users that need inspriation to use what they currently have.

