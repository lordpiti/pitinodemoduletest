class Vehicle {
    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName){
        if(newName){ 
            this._name = newName;
        }
    }

    toString() {
        console.log(this._name);
    }
}

module.exports = Vehicle;