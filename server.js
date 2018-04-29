const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request,response) => {
		response.send({
		name: 'Steven Andrews',
		likes: ['Toya', 'Z']
	});
	//response.send("<h1>Hello from Express JS</h1>");
});

app.get('/about', (request, response) => {
	let year = new Date().getFullYear();
	response.render('about.hbs',{
		pageTitle: "New Dynamic About Title",
		year: year
	});
});

app.get('/contact', (request, response) => {
	response.render('contact.hbs');
});



app.listen(3000, () => {
	console.log("Server is up and running!");
});

