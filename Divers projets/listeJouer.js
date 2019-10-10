
class Joueur
{

	constructor(  n,  a,  p)
	{
		this.nom = n;
		this.age = a;
		this.position = p;
	}

	get toString( )
	{
		return this.nom + " " + this.age + " " + this.position;
	}

	get toRow( )
	{
		return "<tr><td>" + this.nom + "</td><td>" + this.age + "</td><td>" + this.position+"</td></tr>";
	}
}

let functionFormulaire = function (req, res)
{
	let form = '<h1>Joueurs</h1>';
		form += '<table>';
		equipe.forEach(function(item, index, array) 
		{
		  form += item.toRow;
		});

		form += '</table>';
		
		form += '<br>';
		form += '<br>';
		
		form += '<form action="http://localhost:3000/traitement" method="post"> ';
		form += '<div>';
		form += '<label for="name">nom : </label>';
		form += '<input type="text" name="name" id="name" required>';
		form += '</div>';
		form += '<div>';
		form += '<label for="age">age: </label>';
		form += '<input type="text" name="age" id="age" required>';
		form += '</div>';
		form += '<div>';
		form += '<label for="position">position: </label>';
		form += '<input type="text" name="position" id="position" required>';
		form += '</div>';
		form += '<div>';
		form += '<input type="submit" value="OK !">';
		form += '</div>';
		form += '</form>';
		 

	res.send( form );
}

let functionTraitement = function (req, res)
{
let n = req.param("name");
let e = req.param("age");
let p = req.param("position");

equipe.push( new Joueur( n,e,p ) );

//res.send( "<h1> Hello " + n + " </h1><br>" + e);

//http://localhost:3000/formulaire
res.writeHead(302, {
  'Location': 'http://localhost:3000/formulaire'
});
res.end();

}

// ///////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

var equipe =[];

equipe.push( new Joueur( "vincent", "18", "goal") );
equipe.push( new Joueur( "JeanPierre", "21", "avant") );
equipe.push( new Joueur( "Ludo", "17", "ailier") );
equipe.push( new Joueur( "marc", "22", "ailier") );
equipe.push( new Joueur ( "jean", "18", "arbitre") );

equipe.forEach(function(item, index, array) 
{
  console.log(item.toString, index);
});



var express 	= require("express");
var bodyParser 	= require ('body-parser')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get(  '/formulaire', 	functionFormulaire );
app.post( '/traitement', 	functionTraitement );

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});