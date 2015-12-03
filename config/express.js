var express = require('express'),
//home = require('../app/routes/home');
load = require('express-load'),
bodyParser = require('body-parser');



module.exports = function() {
  var app = express();
  //variavel de ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./public'));
  //view engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  //home(app);

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  //express-load
  load('models', {cwd: 'app'})
  .then('controllers')
  .then('routes')
  .into(app);

  return app;
}
