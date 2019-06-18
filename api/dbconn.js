var mysql = require('mysql');
var connection = mysql.createConnection({
    supportBigNumbers: true,
    bigNumberStrings: true,
    host: '10.194.69.15',
    user: 'A6',
    password: 'nm6ofcCAJ7OrlVhD',
    database: 'A6'
});

//Choisi d'enlever le console.log de connection pour s'assurer que c'est bien connecté via un if 
//Et que ça n'affiche pas par défaut le console.log
//console.log('Connected to database');
connection.connect(function (err) {
    if (err) {
        if (err.errno = 'ETIMEDOUT') { console.log('Check connection au vpn!') };
        console.log('');
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected to database A6');
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
