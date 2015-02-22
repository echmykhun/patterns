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