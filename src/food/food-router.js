const express = require("express");
const FoodService = require("./food-service");


const foodRouter = express.Router();

foodRouter.route('/').get((req, res, next) => {
    FoodService.getAllFood(req.app.get('db'))
    .then((food) => {
        if (food.length != 0) {
           food = food.map((f) => {
                return {
                    id: f.id,
                    name: f.name,
                    category: f.category
                }
            })
        }
        return food
    })
    .then((food) => res.status(200).json(food))
    .catch(next)
})
foodRouter
    .route('/item/:id')
    .all((req, res, next) => {
        const kenxInstance = req.app.get('db')
        FoodService.getFoodById(kenxInstance, req.params.id)
        .then(item => {
            if (!item) {
                return res.status(404).json({
                    error: {message: `item doesn't exist`},
                });
            }

            res.item = item;
            next();
        })
        .catch(next)
    })
    .get((req, res, next) => {
        res.json((res.item))
    })

foodRouter
    .route('/type/:category')
    .all((req, res, next) => {
        FoodService.getFoodByCategory(req.app.get('db'), req.params.category)
        .then(item => {
            if (!item) {
                return res.status(404).json({
                    error: {message: `category doesn't exist`}
                });
            }
            res.item = item;
            next();
        })
        .catch(next)
    })
    .get((req, res, next) => {
        res.json((res.item))
    })



module.exports = foodRouter