const menu = {
  _meal: '',
  _price: 0,
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price}`
    }
  },
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck
    }
  }
}

/* testing
menu._meal = "plm"
menu._price = 1031
console.log(menu)
*/

menu.meal = 'pizza',
menu.price = 1031

console.log(menu.todaysSpecial)