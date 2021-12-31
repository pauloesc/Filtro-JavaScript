// Creamos el JSON
var informacionEnBruto = [
    {iii:1, nombre: 'Fernando', num: 89875, sexo: 'masculino', inst: "telon", categoria: ["natacion","kemal",], fecha: "10-11-2021"},
    {iii:2, nombre: 'Octavio', num: 76867, sexo: 'masculino', inst: "olimp", categoria: "boxeo", fecha: "10-11-2021"},
    {iii:50, nombre: 'Sandra', num: 45345, sexo: 'femenino', inst: "olimp", categoria: "voley", fecha: "08-07-2018"},
    {iii:20, nombre: 'Alvaro', num: 23, sexo: 'masculino', inst: "fuerza", categoria: "tenis", fecha: "04-03-2025"},
    {iii:22, nombre: 'Roxana', num: 4545, sexo: 'femenino', inst: "fuerza", categoria: "boxeo", fecha: "01-11-2021"},
    {iii:15, nombre: 'Benito', num: 234, sexo: 'masculino' , inst: "telon", categoria: "boxeo", fecha: "10-12-2021"},
    {iii:7, nombre: 'Alejandra', num: 8900, sexo: 'femenino', inst: "telon", categoria: "voley", fecha: "10-11-2071"},
    {iii:4, nombre: 'Carlos', num: 5654, sexo: 'masculino', inst: "telon", categoria: "natacion", fecha: "5-5-2020"},
];

informacionTodaProcesada = [];

odenarAlfab = false;
ordenarFecha = false;

instituciones = [];
categoria = [];

for (x of informacionEnBruto) {
    if ( !instituciones.includes(x.inst) )  {
        instituciones.push(x.inst);
    }
  }


for (x of informacionEnBruto) {

    if(Object.prototype.toString.call(x.categoria) === '[object Array]'){

        sublist = x.categoria;
        for( y of sublist){
            if ( !categoria.includes(y) )  {
                categoria.push(y);
            }
        }

    }

    else{

        if ( !categoria.includes(x.categoria) )  {
            categoria.push(x.categoria);
        }

    }

    }

    console.log(categoria);


for( x of instituciones ){
    crearCheckDentroDeInstituciones(x);
}
for( x2 of categoria ){
    crearCheckDentroDeCategorias(x2);
}
    

function crearCheckDentroDeInstituciones(nom){
    var myDiv = document.getElementById("nomm");
             
    // creating checkbox element
    var checkbox = document.createElement('input');
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = ""+nom+"";
    checkbox.value = ""+nom+"";
    checkbox.id = ""+nom+"";
    checkbox.className = "nombress";
     
    // creating label for checkbox
    var label = document.createElement('label');
     
    // assigning attributes for
    // the created label tag
    label.htmlFor = ""+nom+"";
     
    // appending the created text to
    // the created label tag
    label.appendChild(document.createTextNode(''+nom+''));
     
    // appending the checkbox
    // and label to div
    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
 
    var salto = document.createElement('br');
    myDiv.appendChild(salto)
}


function crearCheckDentroDeCategorias(lex){
    var myDiv2 = document.getElementById("lexx");
             
    // creating checkbox element
    var checkbox = document.createElement('input');
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = ""+lex+"";
    checkbox.value = ""+lex+"";
    checkbox.id = ""+lex+"";
    checkbox.className = "lexss"
     
    // creating label for checkbox
    var label = document.createElement('label');
     
    // assigning attributes for
    // the created label tag
    label.htmlFor = ""+lex+"";
     
    // appending the created text to
    // the created label tag
    label.appendChild(document.createTextNode(''+lex+''));
     
    // appending the checkbox
    // and label to div
    myDiv2.appendChild(checkbox);
    myDiv2.appendChild(label);

    var salto = document.createElement('br');
    myDiv2.appendChild(salto)
}


institucionesSelecionadas = [];
categoriasSelecionadas = [];


function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


function ordenarAlfabeticamente(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
    }


function mostrarInfo( infoAMostrar ){

    var myDiv = document.getElementById("infof");

    for (x of infoAMostrar) {
        
        var Xnombre = document.createElement('p');
        var XNombreText = document.createTextNode("Nombre: "+x.nombre);
        Xnombre.appendChild(XNombreText);
        myDiv.appendChild(Xnombre);

        var XNumero = document.createElement('p');
        var XNumeroText = document.createTextNode("Numero: "+x.num);
        XNumero.appendChild(XNombreText);
        myDiv.appendChild(XNumero);

        var Xsexo = document.createElement('p');
        var XSexoText = document.createTextNode("Sexo: "+x.sexo);
        Xsexo.appendChild(XSexoText);
        myDiv.appendChild(Xsexo);

        var Xinst = document.createElement('p');
        var XinstText = document.createTextNode("Instituto: "+x.inst);
        Xinst.appendChild(XinstText);
        myDiv.appendChild(Xinst);

        var Xcategoria = document.createElement('p');
        var XcategoriaText = document.createTextNode("Categoria: "+x.categoria);
        Xcategoria.appendChild(XcategoriaText);
        myDiv.appendChild(Xcategoria);

        var Xfecha = document.createElement('p');
        var XfechaText = document.createTextNode("Categoria: "+x.fecha);
        Xfecha.appendChild(XfechaText);
        myDiv.appendChild(Xfecha);

        var salto = document.createElement('br');
        myDiv.appendChild(salto)

        var salto2 = document.createElement('br');
        myDiv.appendChild(salto2)

      }
}


function procesarFiltrosInstitucionesCategorias(){

    //inicio aplicacion de filtros
    infoProcesadaLista = [];

    for ( tupla of informacionEnBruto ){

        tieneLaInstitucion = true;
        tieneLaCateogira = true;

        if ( institucionesSelecionadas.length >= 1 ){
            nombreDeInstitucionDeInfo = tupla.inst;
            tieneLaInstitucion = institucionesSelecionadas.includes(nombreDeInstitucionDeInfo);
        }
        
        if ( categoriasSelecionadas.length >= 1 ){
            nombreDeCategoriasDeInfo = tupla.categoria;

            if(Object.prototype.toString.call(nombreDeCategoriasDeInfo) === '[object Array]'){

                tiene = false;
                for( tt of nombreDeCategoriasDeInfo ){

                    tiene = tiene || categoriasSelecionadas.includes(tt);

                }

                tieneLaCateogira = tiene;

            }
            else{
                tieneLaCateogira = categoriasSelecionadas.includes(nombreDeCategoriasDeInfo);
            }

        }

        if ( tieneLaInstitucion && tieneLaCateogira  ){
            infoProcesadaLista.push( tupla );
        }


    }
    //fin alplicacion de filtros

    console.log(infoProcesadaLista);
    return infoProcesadaLista;

}

function procesarFiltros(){

    //aplico los filtros
    informacion  = procesarFiltrosInstitucionesCategorias();

    limpiarInfo();
    
    if ( odenarAlfab ){
        informacion2 = ordenarAlfabeticamente(informacion, 'nombre', 'asc');
        mostrarInfo( informacion2 );
    }
    

    if ( ordenarFecha ){
        ordenadaPorFecha = ordenarPorFecha(informacion);
        mostrarInfo( ordenadaPorFecha );
    }
    


}

function limpiarInfo(){

    const myNode = document.getElementById("infof");
    myNode.innerHTML = '';

}

function fechaMayorAFecha(a,b){

    var f1 = a+'';
    var f2 = b+'';
    var f1L = f1.split('-').map(Number);
    var f2L = f2.split('-').map(Number);

    //f1 mayor a f2
    mayor = true;

    difAnios = f1L[2] - f2L[2];

    difMeses = f1L[1] - f2L[1];

    difDias = f1L[0] - f2L[0];


    if( difAnios > 0 ){
        mayor =  true;
    }

    else if ( difAnios < 0 ){
        mayor = false;
    } 

    else{

        if( difMeses > 0 ){
            mayor =  true;
        }

        else if( difMeses < 0 ){
            mayor =  false;
        }

        else{

            if ( difDias > 0 ){
                mayor =  true;
            }

            else if ( difDias < 0 ){
                mayor =  false;
            }

            else{
                mayor =  false;
            }

        }

    }

    return mayor;

}

function ordenarPorFecha(data){

hola = data;

hola.sort(function(a, b) {
    var x = a["fecha"],
    y = b["fecha"];

  return fechaMayorAFecha(x,y);

});

return hola;

}