var mongoose = require( 'mongoose' );
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
 dbURI =  process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI); 

mongoose.connection.on('connected', function () {
 console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
 console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('Mongoose disconnected');
}); 

var gracefulShutdown = function (msg, callback) {
 mongoose.connection.close(function () {
 console.log('Mongoose disconnected through ' + msg);
 callback();
 });
};