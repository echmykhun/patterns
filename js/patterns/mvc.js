/**
 * Created by Евгений on 22.02.2015.
 */
function User(name, surname){
    this.name = name;
    this.surName = surname;
    this.constructor = User;
}
User.prototype = {
    name:'',
    surName: '',
    getName: function(){ return this.name },
    setName: function(n){ this.name = n },
    getSurName: function(){ return this.name },
    setSurName: function(n){ this.surName = n }

};

var userStorage = {
    users: [],
    getUsers: function(){
        return this.users;
    }
};

userStorage.users.push(new User('Oleg', 'Petrovich'));
userStorage.users.push(new User('Mikhail', 'Yakovlev'));
userStorage.users.push(new User('Genadiy', 'Lampochkin'));

function Template(data){
    this.data = data;
}
Template.prototype = {
    render: function(){
        console.log('Template render');
        console.log(this.data)
    }
};

function userAction(){}
userAction.prototype = {

    get: function(route){
        console.log('action get');
        return this[route]();
    },
    index: function(){
        console.log('action index');
        var data = userStorage.getUsers();

        return this.render(data);

    },
    render: function(data){
        console.log('action render');
        return new Template(data)
    }

};