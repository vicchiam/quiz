var path=require('path');

//Cargando modelo
var Sequelize=require('sequelize')

//BDD SQLite
var sequelize= new Sequelize(null,null,null,
	{dialect: "sqlite",storage: "quiz.sqlite"}
	);

//Importar definicion de la tabla
var Quiz=sequelize.import(path.join(__dirname,"quiz"));
exports.Quiz=Quiz;

//sequelize.sync() crea e inicializa la tabla
sequelize.sync().success(function(){
	Quiz.count().success(function(count){
		if(count===0){
			Quiz.create(
				{pregunta:"Capital de Italia",
				respuesta: "Roma"
				})
			.success(function(){console.log("BBDD inicializada")});
		};
	});
});


