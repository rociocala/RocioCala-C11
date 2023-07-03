function importar(marca) {
  let figura
    if (marca == 'Hot Toys') {
    figura = require('./datos/figuras1.json')
    } else if (marca == 'Bandai') {
     figura =  require('./datos/figuras2.json')
    } else if (marca == 'Star Wars') {
       figura= require('./datos/figuras3.json')
    }
    return figura;
}

module.exports= importar;

