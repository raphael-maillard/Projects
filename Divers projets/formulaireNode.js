


let functionRacine = function (req, res)
{
      res.send("Hello World!' <br> j'ai oublié mon reveil");
}


let functionCave  = function (req, res)  
{
      res.send('Hello je suis dans la cave!');
}


let functionBonjour  = function (req, res)  
{
      res.send('<h1> Hello World</h1>' );
}


let functionDamier  = function (req, res)  
{
	let css = "<style>\n";
		
	css += ".damierBlack\n";
	css += "{ 	background-color:black;\n";
	css += "width:100px;\n"; 
	css += "height:100px;\n"; 
	css += "}\n";
	css += ".damierWhite\n"; 
	css += "{ \n";
	css += "background-color:red ;\n";
	css += "width:100px; \n";
	css += "	height:100px; \n";
	css += "}\n";
	css += "</style>";
	console.log('CSS = ' + css );
	console.log( "\n" );


	let damier = "<table>";
	for ( var ligne = 0 ; ligne < 5 ; ligne ++)
	{
		damier += "<tr>\n";
		for ( var colonne=0 ; colonne < 5 ;  colonne++ )
		{
			if  ( (colonne+ligne)%2==1)
				damier +=  "<td class=\"damierBlack\"></td>\n";
			else 
				damier +=  "<td class=\"damierWhite\"></td>\n";
		}
	
		damier += "</tr>\n";
	}
	damier += "</table>";
	console.log('damier = ' + damier );




    res.send( css + damier );
}

let functionFormulaire = function (req, res)
{
	let form  = '<form action="/traitement" method="post"';
		form += '<div>';
		form += '<label for="name"Enter your name: /label>';
		form += '<input type="text" name="name" id="name" required>';
		form += '</div>';
		form += '<div>';
		form += '<label for="email"Enter your email:/label>';
		form += '<input type="text" name="email" id="email" required>';
		form += '</div>';
		form += '<div>';
		form += '<input type="submit" value="OK" !>';
		form += '</div>';
		form += '</form>';
		 

res.send( form );
}

let functionTraitement = function (req, res)
{
let n = req.param("name")
let e = req.param("email")
res.send( "<h1> Hello " + n + " </h1><br>" + e);


}

// ///////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////


var express 	= require("express");
var bodyParser 	= require ('body-parser')


var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get(  '/', 				functionRacine );
app.get(  '/cave', 			functionCave );
app.get(  '/damier', 		functionDamier );
app.get(  '/bonjour', 		functionBonjour );
app.get(  '/formulaire', 	functionFormulaire );
app.post( '/traitement', 	functionTraitement );

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});