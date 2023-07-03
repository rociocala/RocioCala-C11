let importar = require('./collectibles');

const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars]

const collectibles = {
     figura : unifiedCollectibles,
     listFigures:function(){
        this.figura.forEach(function(array){
            console.log(array);
        })
    },

    figuresByBrand:function(marca){
     let buscarFigura = this.figura.filter(function(buscando){
         return  marca === buscando.marca;  
        }); 
        return buscarFigura;
    }
}
console.log(collectibles.listFigures());
console.log("-------------------------------")
console.log(collectibles.figuresByBrand('Star Wars'))




