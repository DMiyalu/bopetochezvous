const express = require('express');
const server = express();
const PORT =  process.env.PORT || 3000;
const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

// Build server
server.listen(PORT, () => {
	console.log(`Server running at localhost: ${PORT}`);
})

// configurations
server.use(express.static('public'));

// set engine
server.set('view engine', 'ejs')

//routes
server.get('/', (request, response) => {
	response.render('accueil');
})


