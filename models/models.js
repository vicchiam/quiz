var path=require('path');
try{
	var url=process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
	var DB_name=(url[6]|| null);
	var user=(url[2] || null);
	var pwd=(url[3] || null);
	var protocol=(url[1] || null);
	var dialect=(url[5] || null);
	var port=(url[5] || null);
	var host=(url[4] || null);
	var storage=process.env.DATABASE_STORAGE;
	
	var Sequelize=require('sequelize');

	var sequelize=new Sequelize(DB_name,user,pwd,{
        	dialect:protocol,
        	protocol: protocol,
        	port:port,
       		host:host,
        	storage:storage,
        	omitNull: true
	});

}
catch(err){
	var url="sqlite://:@:/";
	storage="quiz.sqlite";
	
	var Sequelize=require('sequelize');

	var sequelize= new Sequelize(null,null,null,
		{dialect: "sqlite",storage: storage}
	);
}


//Importar definicion de la tabla
var Quiz=sequelize.import(path.join(__dirname,"quiz"));
exports.Quiz=Quiz;

//sequelize.sync() crea e inicializa la tabla
sequelize.sync().success(function(){
	Quiz.count().success(function(count){
		if(count===0){
			Quiz.create(
				{
				pregunta:"Capital de Italia",
				respuesta: "Roma",
				indice: "humanidades"
				});
			Quiz.create(
				{
				pregunta: "Capital de Portugal",
				respuesta: "Lisboa",
				indice: "humanidades"
				}
			)
			.then(function(){console.log("BBDD inicializada")});
		};
	});
});


