/**
 * Created by Евгений on 22.02.2015.
 */
function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var temp = new obj.constructor(); // give temp the original obj's constructor
    for (var key in obj) {
        temp[key] = cloneObject(obj[key]);
    }

    return temp;
}

var IPrototype = function () {
    this.name = '';
    this.clone = function () {
        console.log('rrr')
    };
};

var BluePrint = function (name) {
    this.name = name;
    this.clone = function () {
        return cloneObject(this);
    };
    this.constructor = BluePrint;

};


BluePrint.prototype = new IPrototype();


var winderwaffeBluePrint = new BluePrint('super-puper-duper secret Wunderwaffe');
var stolenCopy = winderwaffeBluePrint.clone();

console.log(1, winderwaffeBluePrint);
console.log(2, stolenCopy);
stolenCopy.name = 'nothing suspicious here!';
console.log(3, winderwaffeBluePrint);
console.log(4, stolenCopy);

console.log(5, stolenCopy.clone(), winderwaffeBluePrint);