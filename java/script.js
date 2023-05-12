//ejercicio 1 para
function ejercicio() {
var numero1=prompt("ingresa primer numero");
var numero2=prompt("ingresa segundo umero");
var resultado=parseInt(numero1) + parseInt(numero2);
console.log(resultado);
alert(resultado);
}
//ejercicio1()
//para declarar objeto{}
var usuario= {
nombre:"pepe",
apellido:"pepito",
edad:17,
aniosdeExperiencia:0,
aniosEstudiando:2,
localidad:"buenos aires",
sigueEstudiando:true,
colores:["negro","amarillo","verde",],//siempre poner , para los numeros no hay q poner las comillas 
};
if(usuario.edad >=18){
    alert("cumple con los requisitos de edad");
}else{
    alert("no cumle con los requisitos de edad");
};
if(usuario.aniosdeExperiencia>=1){
    alert("cumple con los años de experiencia requeridos");}
    else{
        alert("no cumple con los años de experiencia requeridos");
    };
if(usuario.localidad == "buenos aires"){
    alert("vive en buenos aires");}
    else{
    alert("no vive en buenos aires");
    };
//if(usuario.sigueEstudiando == true){

function obtenerSumatoria(limite){
    var resultado = 0;
    for(i = 0; i<= limite; i++ ){
        resultado = resultado + i;
        console.log("mi resultado es"+ resultado)
    };
}
obtenerSumatoria (5) ;
function suma a + b 