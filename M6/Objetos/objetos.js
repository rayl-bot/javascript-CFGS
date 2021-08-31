window.onload = function() {

function persona(nombre, apellido, edad, fechanacimiento, direccion, intereses){
   this.nombre=nombre;
   this.apellido=apellido;
   this.edad = edad;
   this.fechanacimiento = fechanacimiento;
   this.direccion = direccion;
   this.intereses = intereses;
   this.imprimir=function(){
      console.log("Hola, el meu nom és "+nombre+" "+apellido+", tinc "+edad+" anys, vaig neixer el "+fechanacimiento+", visc al "+direccion+" i m’agrada "+intereses);
   }
}
var Persona1 = new persona("Raul","Gonzalez", 18, "21/11/2000", "calle bolivia nº42", "hacer cosas");
Persona1.imprimir();
}