var models=require('../models/models.js')

//GET /quizes/question


exports.show=function(req,res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render("quizes/show",{quiz:quiz});
	});	
}

exports.question=function(req,res){
      	models.Quiz.findAll().success(function(quiz){
		res.render("quizes/question",{pregunta:quiz[0].pregunta})
	});
};

exports.answer=function(req,res){
    	models.Quiz.find(req.params.quizId).then(function(quiz){
		if(req.query.respuesta===quiz.respuesta){
		        res.render("quizes/answer",{quiz:quiz,respuesta: "Correcto!!"});
		}
    		else{
        		res.render("quizes/answer",{quiz:quiz, respuesta: "Incorrecto!!"});
    		}
	});
}

exports.index=function(req,res){
	models.Quiz.findAll().then(function(quizes){
		res.render("quizes/index.ejs",{quizes:quizes});
	});
};

exports.author=function(req,res){
    res.render("author",{});
}
