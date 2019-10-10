<?PHP

include "log.php"

	$nom = $_POST[ "name" ] ;
	$email = $_POST[ "email" ] ;
	$message = $_POST[ "message" ] ;

	

	$requete = "INSERT INTO utilisateurs (nom, email, message ) VALUES ( \"".$nom."\", \"".$email."\", ".$message.");";


	print ( $requete );

	$connexion = new PDO('mysql:host='.$PARAM_hote.';port='.$PARAM_port.';dbname='.$PARAM_nom_bd, $PARAM_utilisateur, $PARAM_mot_passe);


	$resultats=$connexion->query( $requete ); 
?>