var models=require('../models/models.js')

//GET /quizes/question
exports.question=function(req,res){
      	models.Quiz.findAll().success(function(quiz){
		res.render("quizes/question",{pregunta:quiz[0].pregunta})
	});
};

exports.answer=function(req,res){
    	var resp=req.query.respuesta.trim();
	models.Quiz.findAll().success(function(quiz){
		if(resp===quiz[0].respuesta){
		        res.render("quizes/answer",{respuesta: "Correcto!!"});
		}
    		else{
        		res.render("quizes/answer",{respuesta: "Incorrecto!!"});
    		}
	});
}

exports.author=function(req,res){
    res.render("author",{});
}
