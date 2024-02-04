// Задание про склад товаров

const phone = {
  id: 1,
  name: 'phone',
  weight: {
    kg: 0.25,
  },
  brand: 'Apple',
};

const laptop = {
  id: 2,
  name: 'laptop',
  weight: {
    kg: 1.6,
  },
  brand: 'Apple',
};

const chair = {
  id: 3,
  name: 'chair',
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 4,
  name: 'paper',
  color: 'white',
};

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((g) => g.id === id);
  },
  addGood: function (good) {
    if (this.findGoodById(good.id)) {
      return 'Товар уже на складе';
    }
    this.goods.push({ ...good });
  },
  getAllWeightKg: function () {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
      0
    );
  },
};

warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(phone);
warehouse.addGood(laptop);

console.log(warehouse.goods);
console.log(warehouse.findGoodById(1));
console.log(warehouse.getAllWeightKg());
