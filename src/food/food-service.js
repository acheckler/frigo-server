const FoodService = {
    getAllFood(knex) {
        return knex
        .select('*')
        .from('food')
    },
    getFoodById(knex, id) {
        return knex
        .from('food')
        .select('*')
        .where('id', id)
    },
    getFoodByCategory(knex, category) {
        return knex('food').where('category', category)
        
    },
}


module.exports = FoodService