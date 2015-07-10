//GET /quizes/question
exports.question=function(req,res){
    res.render("quizes/question",{pregunta: "Capital de Italia"});
};

exports.answer=function(req,res){
    if(req.query.respuesta.match(/roma/i)){
        res.render("quizes/answer",{respuesta: "Correcto!!"});
    }
    else{
        res.render("quizes/answer",{respuesta: "Incorrecto!!"});
    }
}

exports.author=function(req,res){
    res.render("author",{});
}
