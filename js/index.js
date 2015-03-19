/**
 * Created by eugen on 2/4/15.
 */
console.log('==========SINGLETON===========');
var settings = new Settings();
console.log('var settings = new Settings();');
console.log('host ' + settings.db_host);
console.log('port ' + settings.db_port);
console.log('user '+ settings.db_user);
console.log('pass '+ settings.db_pass);
settings.db_host = 'localhost';
console.log('');
console.log('host = ' + settings.db_host);
console.log('==============================');

console.log('');
var sets = Settings();
console.log('var sets = Settings();');
console.log('host '+ sets.db_host);
console.log('port ' + sets.db_port);
console.log('user ' + sets.db_user);
console.log('pass ' + sets.db_pass);
sets.db_port = '1234';
console.log('');
console.log('port = ' + settings.db_port);
console.log('==============================');

console.log('');
console.log('Settings()');
console.log('host ' + Settings().db_host);
console.log('port ' + Settings().db_port);
console.log('user ' + Settings().db_user);
console.log('pass ' + Settings().db_pass);
settings.db_user = 'admin';
console.log('');
console.log('user = ' + settings.db_user);
console.log('==============================');

console.log('');
var settings2 = new Settings();
console.log('var settings2 = new Settings();');
console.log('host ' + settings2.db_host);
console.log('port ' + settings2.db_port);
console.log('user '+ settings2.db_user);
console.log('pass '+ settings2.db_pass);
console.log('==============================');


console.log('============CHAIN=============');
var commonHandler = new CommonHandler();
var zeroHandler = new ZeroDivisionHandler();
var nullHandler = new NullObjectHandler();
commonHandler.setSuccessor(zeroHandler);
zeroHandler.setSuccessor(nullHandler);

var commonExc = {type: 'common_exception'};
var zeroExc = {type: 'zero_division'};
var nullExc = {type: 'null_object'};

commonHandler.handleException(commonExc);
commonHandler.handleException(zeroExc);
commonHandler.handleException(nullExc);
console.log('==============================');

console.log('===========Prototype==========');
var winderwaffeBluePrint = new BluePrint('super-puper-duper secret Wunderwaffe');
var stolenCopy = winderwaffeBluePrint.clone();

console.log(1, winderwaffeBluePrint);
console.log(2, stolenCopy);
stolenCopy.name = 'nothing suspicious here!';
console.log(3, winderwaffeBluePrint);
console.log(4, stolenCopy);
console.log(5, stolenCopy.clone(), winderwaffeBluePrint);
console.log('==============================');
console.log('===============MVC============');
var action = new userAction();
action.get('index');
action.get('details');