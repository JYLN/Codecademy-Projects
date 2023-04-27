const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    return this._meal && this._price
      ? `Today's Special: ${this._meal} for $${this._price}`
      : 'Meal or price was not set correctly!';
  },
};

menu.meal = 'Spaghetti';
menu.price = 7;

console.log(menu);
console.log(menu.todaysSpecial);
