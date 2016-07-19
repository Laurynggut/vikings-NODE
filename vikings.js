// ejercio de los vikingos



var Viking = function(name,health,strength){
	this.name = name,// le digo a la funcion que parametro quiero, en especial
	this.health = health,
	this.strength = strength,

	this.attack = function(){//tenemos que crear varias acciones,para la dinamica de la batalla
		return this.strength;//cuando atacas te devuelve la fuerza,y esta fuerza se guarda 
	},
	this.recieveDamage = function(damage){//cuando recibes el daño,tu tienes que restar tu salud(vida) con el daño
		this.health = this.health - damage;
	}
};

//creamos unos vikingos, con sus parametros y despues creamos una array
var viking1 = new Viking("Hipo", 120, 20)
var viking2 = new Viking("Astrid", 140, 34)
var viking3 = new Viking("Marinator", 160, 60)
var viking4 = new Viking("Raulator", 50, 10)

var vikings = [viking1,viking2,viking3,viking4];

var pit = function(viking1,viking2){
	this.viking1 = viking1,// le digo a la funcion que parametro quiero, en especial
	this.viking2 = viking2, 


	this.training = function(){
		while(viking1.health > viking2.strength && viking2.health > viking1.strength){// aquí nadie muere es un entrenamiento
	     viking1.health = viking1.health - viking2.strength;
	      viking2.health = viking2.health - viking1.strength;
	      console.log("\n");
	      console.log(viking1.name + " recived " + viking2.strength + " points of damage from Asrid");
	      console.log(viking2.name + " recived " + viking1.strength + " points of damage from Hipo");
	      //console.log("\n");
	      console.log(viking1.health +" health of Hipo");
	      console.log(viking2.health +" health of Asrid");
	      console.log("\n");
		}

	}

	training();//llamada,para imprimir resultados

	console.log("@@@@@@@@@@@@@@@@@@@@ TRAINING ENDS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	console.log("\n");
 };		
pit(viking1,viking2);//llamada


//...............................................................................................................................//

// queremos que los vikingos luchen contra los sajones, estos son de fuerza pobre y deben ir muriendo uno a uno,utilizaremos el random.

var Saxon = function(name,health,strength){
	this.name =name,// SIEMPRE CON COMA AL FINAL
	this.health = Math.floor((Math.random() * 60) + 20 ),//hemos puesto cualquier vida, hemos dicho que la vida del cualquier vikingo estamax.60 y min 20
	this.strength = Math.floor((Math.random() * 10) + 1),//hemos asignado cualquier fuerza


	this.attack = function(){//tenemos que crear varias acciones,para la dinamica de la pelea
		return this.strength;//cuando atacas te devuelve la fuerza
	},
	this.recieveDamage = function(damage){//cuando recibes el daño,tu tienes que restar tu salud(vida) con el daño
		this.health = this.health - damage;
	}
};


var s1 = new Saxon("Saxon1");//nombramos a los sajones,les ponemos un nombre determinado
var s2 = new Saxon("Saxon2");
var s3 = new Saxon("Saxon3");
var s4 = new Saxon("Saxon4");
var s5 = new Saxon("Saxon5");
var s6 = new Saxon("Saxon6");
var s7 = new Saxon("Saxon7");


var farmers = [s1,s2,s3,s4,s5,s6,s7];// creamos una array,para que funcione el random,y haga su ruta aleatoria
//console.log(farmers);



var BattlePit = function(vikings,farmers){//lugar de batalla
	
	vikingsR = vikings[Math.floor(Math.random() * vikings.length)];
	sX = farmers[Math.floor(Math.random() * farmers.length)];//sX nos referimos 


var maxRounds = Math.floor((Math.random() * 3) + 5 );//creamos las rondas de combate, como la
var rounds = 0;

	this.TrueBattle = function(){//accion de batalla
			var i = 0;//le digo que empiece de 0, para cuando entre de nuevo al while una vez hecho, vuelva a ser 0


			while(vikings.length > 0 && farmers.length > 0 && rounds <= maxRounds){
				i++;// sumamos uno para pasar el siguiente
				var name = "Saxon";
	     		vikingsR.health = vikingsR.health - sX.strength;
	      		sX.health = sX.health - vikingsR.strength;
	      		console.log("turno: " + (rounds=rounds + 1 ));
	      		console.log("\n");
	      		console.log("PUUUUMMMM!!!! ZASCAAA!!! " + vikingsR.name + " recived " + sX.strength + " points of damage" + ("\n"));
	        	console.log("AAAAHHHHH!!!! NOOOOOO!!! " + sX.name + " recived " + vikingsR.strength + " points of damage" + ("\n"));
	        	
	      		console.log(vikingsR.health + " points" +" health of Viking" + ("\n"));
	      		
	      		console.log(sX.health + " points" + " health of Saxon" + ("\n"));
	      		
	      		if (sX.health <= 0 ){
	      			console.log("\n WE HAVE WON!!! Vikings!!! What is your occupation?!");
	      			console.log ("\n KILLING farmers!!! AUUU AUUU AUU!!!");
	      			console.log( "\n Saxon has died!!! wo wo wooooooo!!! :-( ") + ("\n");
	      			// var find = farmers.indexOf(sX);
						farmers.splice(sX, 1);
						sX = farmers[Math.floor(Math.random() * farmers.length)];

	      		}else if (vikingsR.health <= 0){//
	      			console.log ("\n @@@@@@@@@@@@@@@@@@@@@@@ OMG!!! ONE OF THE WIKINGS HAS DIED @@@@@@@@@@@@@@@@@@@@@@@@@")
	      			//var find = vikingsR.indexOf(vikings);
						vikings.splice(vikingsR, 1);
						vikingsR = vikings[Math.floor(Math.random() * vikings.length)];

	      		}

			}	
	}

};
//........................................................................................................................................//


// estas variables las realizamos antes ya que nos daría error.
var totalVikings = vikings.length; //guardo el numero total de vikingos con los que empiezo la batalla,antes de morir
var totalFarmers = farmers.length;// guardo el numero total de sajones(granjeros)antes de empezr la batalla

var arena = new BattlePit(vikings,farmers);
arena.TrueBattle();


var vivosVikings = vikings.length;//guardo el numero total una vez pasada la batalla
var vivosFarmers = farmers.length;//guardo el numero total una vez pasada la batalla
//percentage(totalV, vivos);// estoy llamando  al porcentage y le paso el total de vikingos antes(totalV) y despues de la batalla(vikings.lenth)



//PERCENTAGE
var percentage = function(total,vivos){//aquí realizamos el porcentaje de numero de vivos 
        	return vivos * 100 / total//guardamos el resultado para posibles funciones futuras,y llamar el resultado

}

console.log(percentage(totalVikings, vivosVikings) + "% of Vikings are alive");
console.log(percentage(totalFarmers, vivosFarmers) + "% of Saxons are alive");









//...........................................................................................................................................//
//BONUS solo lucharan los vikingos que tengan entre 15-45 años y se les incorporara unas armas donde aumentaremos su fuerza






/*
var viking2 = new Viking("Astrid", 140, 34)
var viking3 = new Viking("Marinator", 160, 60)

var age = [viking2, viking3];

var crofter1 = new Saxon("crofter1");
var crofter2 = new Saxon("crofter2");
var crofter3 = new Saxon("crofter3");
var crofter4 = new Saxon("crofter4");
var crofter5 = new Saxon("crofter5");
var crofter6 = new Saxon("crofter6");
var crofter7 = new Saxon("crofter7");

var crofters = [crofter1, crofter2, crofter3, crofter4, crofter5, crofter6, crofter7]

var secondPlainBattle = function( vikings,farmers)*/