var Vehicle = require('./vehicle');

class Car extends Vehicle {
    constructor(name, brand) {
        super(name);
        this._brand = brand;
    }

    get brand() {
        return this._brand;
    }

    set brand(newName){
        if(newName){ 
            this._brand = newName;
        }
    }

    toString(){
        super.toString();
        console.log(this._brand);
    }

}

module.exports = Car;