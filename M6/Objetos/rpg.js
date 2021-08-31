window.onload = function() {

function personaje(nombre, apellido, raza, strong, perception,endurance, charisma, agility, inteligence,lucky, trasfondo){
   this.nombre=nombre;
   this.apellido=apellido;
   this.raza = raza;
   this.strong = strong;
   this.perception = perception;
   this.endurance = endurance;
   this.charisma = charisma;
   this.inteligence = inteligence;
   this.agility = agility;
   this.lucky = lucky;
   this.trasfondo = trasfondo;
   this.imprimir=function(){
      console.log("Nombre: "+nombre+"\nApellido: "+apellido+"\nRaza: "+raza+"\nStrong: "+strong+"\nPerception: "+perception+"\nEndurance: "+endurance+"\nCharisma: "+charisma+"\Inteligence: "+inteligence+"\nAgility: "+agility+"\nLucky: "+lucky+"\Trasfondo: "+trasfondo);
   }
}
var Personaje1 = new personaje("caca","caca","caquita",10,10,10,10,10,10,10,"trasfondo.");
Personaje1.imprimir();
var Personaje2 = new personaje("Jesús","Salud","me da igual",23,21,20,12,10,42,12"Esta es la historia de un hombre, que no tenia sueños.");
Personaje2.imprimir();
}