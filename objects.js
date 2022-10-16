// objects
// key-value pairs in curly braces
const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vroom!";
    }
};


const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);//inheritance
console.log(truck.engine());
const car =  Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return 'ruuuun';// kind of overwrites the vroom funtion
};
console.log(car.engine());
console.log(truck);

console.log(vehicle);

const array = [1,2,3];
const arraymapped = array.map((element)=> element);
console.log(arraymapped);