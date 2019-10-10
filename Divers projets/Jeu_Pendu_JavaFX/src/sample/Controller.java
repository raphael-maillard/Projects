package sample;

import java.net.URL;
import java.util.ArrayList;
import java.util.ResourceBundle;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;


public class Controller implements Initializable
{
    @FXML
    public TextField saisie;

    @FXML
    private Label l1;
    @FXML
    private Label l2;
    @FXML
    private Label l3;
    @FXML
    private Label l4;
    @FXML
    private Label l5;
    @FXML
    private Label l6;
    @FXML
    private Label l7;
    @FXML
    private Label res;
    @FXML
    private Label score;

    public ArrayList<String> motsSecrets = new  ArrayList<String>();
    public String motSecret;
    int indexNumeroDuMot=0;

    int total = -5 ;
    // parce que la première fois le nbr est == à 0
    int nbrEssai = 0;
    int nbrLettreTrouvée = 0;

    void afficheInLabel( char lalettre, int leLabel)
    {
        //System.out.println(  "PL : " + lalettre + " " + leLabel );
        if ( leLabel == 0 ) l1.setText( ""+lalettre);
        else if ( leLabel == 1 ) l2.setText( ""+lalettre);
        else if ( leLabel == 2 ) l3.setText( ""+lalettre);
        else if ( leLabel == 3 ) l4.setText( ""+lalettre);
        else if ( leLabel == 4 ) l5.setText( ""+lalettre);
        else if ( leLabel == 5 ) l6.setText( ""+lalettre);
        else if ( leLabel == 6 ) l7.setText( ""+lalettre);
    }

    String readInLabel(  int leLabel)
    {
        if ( leLabel == 0 ) return l1.getText();
        else if ( leLabel == 1 ) return l2.getText();
        else if ( leLabel == 2 ) return l3.getText();
        else if ( leLabel == 3 ) return l4.getText();
        else if ( leLabel == 4 ) return l5.getText();
        else if ( leLabel == 5 ) return l6.getText();
        else if ( leLabel == 6 ) return l7.getText();
        return "";
    }




    void affichePendu( )
    {
        if ( nbrEssai >= 4 )
            res.setText("X");
        else
            res.setText("" + (5 - nbrEssai));
    }

    void afficheLettre( char lettre )
    {
        if ( lettreDejaTirée( lettre) == false)
        {
            char[] ch = motSecret.toCharArray();
            int positionLabel = 0;

            for (char c : ch) {
                //System.out.println(  "VL lettre : " + c );
                if (c == lettre) {
                    nbrLettreTrouvée++;
                    afficheInLabel(c, positionLabel);
                }
                positionLabel++;
            }
        }
    }


    void init( )
    {
        motSecret = motsSecrets.get( indexNumeroDuMot++ );
        total += ( 5-nbrEssai);
        affichePendu();
        nbrEssai = 0;
        nbrLettreTrouvée = 0;
        char premiereLettre =  motSecret.charAt(0);
        int nbrLettre = motSecret.length();
        char dernièreLettre =  motSecret.charAt(nbrLettre-1);

        for ( int i =0 ; i<7 ; i++ )
            afficheInLabel( ' ', i);
        for ( int i =0 ; i<nbrLettre ; i++ )
            afficheInLabel( '_', i);

        afficheInLabel( premiereLettre, 0);
        afficheInLabel( dernièreLettre, nbrLettre-1);


        score.setText("" + total );
    }


    boolean lettreDejaTirée( char lettre )
    {
        int nbrLettre = motSecret.length();

        for ( int i = 1 ; i<nbrLettre-1; i++ )
            if (  readInLabel( i ).charAt(0) == lettre )
                return true;
        return false;
    }


    boolean motTrouvé( )
    {
        System.out.println(""+nbrLettreTrouvée + " " + motSecret.length());
        return nbrLettreTrouvée == motSecret.length()-1;
        // -1 parce que les 2 premiere lettre sont déjà donné
    }

    boolean isPerdu( )
    {
       return  nbrEssai >= 5;
    }




    boolean verifLettre( char lettre )
    {
        char[] ch  = motSecret.toCharArray();
        //System.out.println(  "VL tab : " + ch );
        int positionLabel = 0;

        for(char c : ch)
        {
            //System.out.println(  "VL lettre : " + c );
            if (c == lettre)
                return true;
            positionLabel++;
        }
        return false;
        //affichePendu();
    }


    @Override
    public void initialize(URL location, ResourceBundle resources)
    {
        motsSecrets.add( "cocotte"  );
        motsSecrets.add( "papier"   );
        motsSecrets.add( "boulogn" );
        motsSecrets.add( "fleur" );
        motsSecrets.add( "lapin" );
        init( );
    }

    public void change()
    {
      String txt = saisie.getText().toLowerCase();
      System.out.println(  "CString : " + txt );
      char lettre = txt.charAt(0);
      //System.out.println(  "Clettre : " + lettre );


      if ( verifLettre( lettre ) )
      {
          afficheLettre( lettre );
          if ( motTrouvé() )
          {
              init();
          }

      }
      else
      {
          nbrEssai++;
          if ( isPerdu() )
          {
              init();
          }


      };
      affichePendu();
      saisie.setText("");
    }
}
