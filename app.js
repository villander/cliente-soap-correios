var express = require('express');
var app = express();
var Correios = require('node-correios');
var correios = new Correios();

app.get('/', function (req, res) {

  var args = {
    nCdServico: '40010',
    sCepOrigem: '74937230',
    sCepDestino: '74937600',
    nVlPeso: '5',
    nCdFormato: '1',
    nVlComprimento: '100',
    nVlAltura: '30',
    nVlLargura: '50'
  };
  // Calcular frete de envio
  correios.calcPreco(args, function (err, result) {
      res.send(result);
  });
});

app.get('/:cep', function(req, res) {
  // Busca endereço por CEP
  correios.consultaCEP({ cep: req.params.cep  }, function(err, result) {
    console.log(err, result);
    res.send(result);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});