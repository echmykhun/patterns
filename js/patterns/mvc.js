/**
 * Created by Евгений on 22.02.2015.
 */
var $_GET = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

var UNKNOWN_ID = 'The id is unknown',
    UNSET_ID = 'The id is not setted';

var userCount = 0;


var ATemplate = function () {
    this.data = '';
    this.render = function () {
    };
    this.setData = function (data) {
        this.data = data;
        return this;
    };
};
var TemplateFactory = function () {
    this._templates = {};
    this.getTemplate = function (name) {
        if (this._templates[name] === undefined || this._templates[name] === null) {
            this._templates[name] = this._createTemplte(name);
        }
        return this._templates[name];
    };
    this._createTemplte = function (name) {
        var template;
        switch (name) {
            case 'index':
                template = new userIndexTemplate();
                break;
            case 'details':
                template = new userDetailTemplate();
                break;
            default:
                template = null;
        }
        return template;
    }
};


var userIndexTemplate = function () {
    this.data = '';
    this.render = function () {
        console.log('Template render index');
        console.log('-----------------------');
        //console.log(this.data)
        for (var i in this.data) {
            console.log('| id ' + i + '| name = ' + this.data[i].getName() + '|');
        }
        console.log('-----------------------');
    }
};
userIndexTemplate.prototype = new ATemplate();

var userDetailTemplate = function () {
    this.data = '';
    this.render = function () {
        console.log('Template render detail');
        console.log('-----------------------');
        console.log("| id: " + this.data.getId());
        console.log("| name: " + this.data.getName());
        console.log("| surname: " + this.data.getSurName());
        console.log('-----------------------');
    }
};
userDetailTemplate.prototype = new ATemplate();


var User = function(name, surname) {
    this._id = userCount++;
    this._name = name;
    this._surName = surname;
    this.constructor = User;

    this.getId = function(){
        return this._id;
    };
    this.getName = function () {
        return this._name
    };
    this.setName = function (n) {
        this._name = n
    };
    this.getSurName = function () {
        return this._surName
    };
    this.setSurName = function (n) {
        this._surName = n
    };
}

var UserStorage = function () {
    this.users = [];
    this.getUsers = function () {
        return this.users;
    };
    this.getUserById = function (id) {
        return this.users[id];
    };
};

var userAction = function () {
    this.currentRoute = '';
    this.get = function (route) {
        console.log('action get');
        this.currentRoute = route;
        return this[route]($_GET);
    };
    this.index = function (request) {
        console.log('action index');
        var data = userStorage.getUsers();
        return this._render(data);
    };
    this.details = function (request) {
        var data;
        try {
            if (request.id === undefined || request.id === null) {
                throw UNSET_ID;
            } else if (userStorage.getUserById(request.id) !== undefined && userStorage.getUserById(request.id) !== null) {
                data = userStorage.getUserById(request.id);
            }
            else {
                throw UNKNOWN_ID
            }
            return this._render(data);
        } catch (e) {
            console.log(e)
        }
    };
    this._render = function (data) {
        console.log('action render');
        return templateFactory.getTemplate(this.currentRoute).setData(data).render();
    };
};

var templateFactory = new TemplateFactory();
var userStorage = new UserStorage();
userStorage.users.push(new User('Oleg', 'Petrovich'));
userStorage.users.push(new User('Mikhail', 'Yakovlev'));
userStorage.users.push(new User('Genadiy', 'Lampochkin'));