var Settings = (function () {
    var instance;

    return function initSettings () {

        this.db_host = '127.0.0.1';
        this.db_port = '3306';
        this.db_user = 'root';
        this.db_pass = 'qwerty';

        if (instance) {
            return instance;
        }
        if (this && this.constructor === initSettings) {
            instance = this;
        } else {
            return new initSettings();
        }
    }

}());