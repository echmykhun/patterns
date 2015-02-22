/**
 * Created by eugene.chmykhun on 12/25/2014.
 */
var ExceptionHandler = function () {
};
ExceptionHandler.prototype = {
    handleException: function () {},
    setSuccessor: function (handler) {
        this.successor = handler;
    }
};

var CommonHandler = function(){};
CommonHandler.prototype = Object.create(ExceptionHandler.prototype);
CommonHandler.prototype.successor = null;
CommonHandler.prototype.handleException = function (e) {
    if (e.type == 'common_exception') {
        console.log('It`s just a common exception');
    } else {
        if (this.successor) {
            this.successor.handleException(e);
        }
    }
};

var ZeroDivisionHandler = function () {
};

ZeroDivisionHandler.prototype = Object.create(ExceptionHandler.prototype);
ZeroDivisionHandler.prototype.successor = null;
ZeroDivisionHandler.prototype.handleException = function (e) {
    if (e.type == 'zero_division') {
        console.log('You should never divide by zero!!, It`s dangerous for Universe!!!!!');
    } else {
        if (this.successor) {
            this.successor.handleException(e);
        }
    }
};


var NullObjectHandler = function () {
};

NullObjectHandler.prototype = Object.create(ExceptionHandler.prototype);
NullObjectHandler.prototype.successor = null;
NullObjectHandler.prototype.handleException = function (e) {
    if (e.type == 'null_object') {
        console.log('You are trying to use null object');
    } else {
        if (this.successor) {
            this.successor.handleException(e);
        }
    }
};


