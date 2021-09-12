
let user = {  //создать пустой объект
    name: 'John', //добавить свойство имя
    surname: 'Smith' // добавить свойство фамилия
};
user.name = 'Pete'; //изменить значения свойства имя
console.log(user);



function isEmpty(obj) {
    for(let prop in Object.keys(obj)) { // написать функцию, которая возвращает  правда если у объекта нет свойств
        return false;
    }
    return true;
}
  
console.log (isEmpty({})); // true
console.log (isEmpty({name:'Dod'}));  // false



let salaries = { // дан объект сотрудники: зарплаты
    Ivan: 1000,
    Dmitriy: 1600,
    Anton: 1300
}

let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
}// найти общую сумму зарплат
console.log (sum); // 3900

console.log (Object.values(salaries).reduce((a, b) => a + b, 0)); //второй способ

let obj = {
    Ivan: 1000,
    Dmitriy: 1600,
}

let double = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(obj).map(([key, value]) => [key, value * 2])
);
console.log (double);

let ob = {
    Ivan: 1000,
    Dmitriy: 1600,
}  

function multiplyNumeric(obj) {
    for(let value in obj) { 
        if(typeof obj[value] == 'number') {
            console.log (obj[value])
            obj[value] *= 2;
        }
    }  
}
 
console.log (multiplyNumeric({ob})); 


class Transport {
    #maxSpeed = 150
    constructor(name, price, manufacturer, count) {
         this.name = name;
         this.price = price;
         this.manufacturer = manufacturer;
         this.count = count;
    }
    get maxSpeed() {
        return this.#maxSpeed;
        }
    set maxSpeed (value) {
        this.#maxSpeed = value <= this.maxSpeed ? value : this.maxSpeed;
        }
    ride() {
        console.log(`driving transport ${this.name} ${this.#maxSpeed}`);
    }
    priceAll() {
        var income = this.price * this.count;
        console.log(`Income ${income}`);
    }
}
let trans = new Transport('fgfg', 565, 'dfdfdfdfdfdf', 4);
trans.ride();
trans.priceAll();

class Car extends Transport {
    constructor(name, price, manufacturer, count, brandCar) {
        super(name, price, manufacturer, count);
        this.brandCar = brandCar;
    }
    ride() {
        super.ride();
        console.log('This is car');
    }
    priceAll() {
        super.priceAll();
        // console.log(`Income ${income}`);
    }
    
}
let car = new Car ('Ford', 20000, 'dfdf', 9, 'dhdhgsdhfsh');
car.maxSpeed = 170;
car.ride();
car.priceAll();

class Motorbike extends Transport {
    constructor(name, price, manufacturer, count) {
        super(name, price, manufacturer, count);
    }
    ride() {
        super.ride();
        console.log('This is motorbike');
    }
}   
let motorbike = new Motorbike ('Spark', 1000, 'hjj', 7);
motorbike.maxSpeed = 151;
console.log (motorbike.maxSpeed);

class Bicycle extends Transport {
    #maxSpeed = 20;
    constructor(name, price, manufacturer, count, wheelType) {
        super(name, price, manufacturer, count);
        this.wheelType = wheelType
    }
    get maxSpeed() {
        return this.#maxSpeed;
        }
    set maxSpeed (vaile) {
        this.#maxSpeed = 20 <= this.maxSpeed ? 20 : this.maxSpeed;
        }
    ride() {
        super.ride();
        console.log('This is bicycle')
    }
}
let bicycle = new Bicycle ('Vel', 700, 'hjj', 55, 2);
bicycle.maxSpeed = 30;
console.log (bicycle.maxSpeed);


// Создать массив из 6 объектов классов car, motorbike, bicycle и
// отсортируйте его от самого быстрого к самому медленному.

let car1 = new Car('Ford', 300000);
let car2 = new Car('BMW', 400000);
let car3 = new Car('BYD', 100000);
let motorbike1 = new Motorbike('Spark', 20000);
let motorbike2 = new Motorbike('Java', 15000);
let bicycle1 = new Bicycle('Bianchi', 3000);
let transport = [
    {name:'car1',maxSpeed: 300000},
    {name:'car2',maxSpeed: 400000},
    {name:'car3',maxSpeed: 100000},
    {name:'bicycle1',maxSpeed: 3000},
    {name:'motorbike1',maxSpeed: 20000},
    {name:'motorbike2',maxSpeed: 15000},   
];
let sortBymaxSpeed = (a, b) => a.maxSpeed > b.maxSpeed ? 1 : -1;
transport.sort(sortBymaxSpeed);
console.log(transport);


//Используя прототип, добавьте метод классу transport.

Transport.prototype.addMethod = function () {
    console.log('new method');
};
let newMethod=new Transport('fgfg', 565, 'dfdfdfdfdfdf', 4);
newMethod.addMethod();



