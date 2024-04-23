const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuItemSchema = new Schema({
    name: {type: String},
    description: {type: String},
    ingridients:{type: Array},
    restaurantId: {type: Schema.Types.ObjectId},
    image: {type: String},
    qty: {type: Number},
    price: {type: Number}
  })

const MenuItemModel = mongoose.model('menu_item', MenuItemSchema, 'menu items')

module.exports = MenuItemModel