var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
},{
	id: 2,
	description: 'Go to market',
	completed: false
},{
	id: 3,
	description: 'Feed the cat',
	completed: true
}];

app.get('/', function (req,res){
	res.send('TODO API Root');
});

//GET /todos
app.get('/todos',function (req, res){
	res.json(todos);
});
//GET /todos/id
app.get('/todos/:id',function (req, res){
	var todoid = parseInt(req.params.id, 10);
	var matchedTodo;
	todos.forEach(function (todo){
		console.log(todo.id);
		if(todoid === todo.id) {
			console.log('Matched' + todo.id);
			matchedTodo = todo;
		}

	});
	if(matchedTodo){
			res.json(matchedTodo);
	}else{
	res.status(404).send();
	}
});

app.listen(PORT,function(){
	console.log('express listening on port - ' + PORT);
});