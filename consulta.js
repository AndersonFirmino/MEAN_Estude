var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

//Object Id de algum contato existente

var _idProcurado = new ObjectId('565b4c306bcead4532d37000');

MongoCliente.connect('mongodb://127.0.0.1:27017/contatooh', function(erro, db){
  if (erro) throw err;
  db.collection('contato').findOne({_id : _idProcurado}), function(erro, contato) {
    if (erro) throw err;
    console.log(contato);
  }
});