const FridgeService = {
    getFood(db) {
      return db
        .from('food')
        .select(
          'food.id',
          'food.name',
          'food.category',
        )
    },
    getFoodById(db) {
        return db
        .from('food')
        .where('id', id)
        .select(
            'food.id',
            'food.name',
            'food.category'
        )
    }
}

    module.exports = FridgeService