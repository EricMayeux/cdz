  function showMore(link,more){
    //removes the link
    document.getElementById(link).style.display = "none";
    //shows the #more
    document.getElementById(more).style.display = "block";
}

function quiSuisJe()
   {
    var zoopedagogue = false; 
    var zootherapeute = false;
    var formeASonPublic = false;
    var metierCompatible = false;

    if (
        document.getElementById("evenement1").checked || 
        document.getElementById("evenement4").checked || 
        document.getElementById("evenement8").checked || 
        document.getElementById("evenement9").checked 
        )
    {
        metierCompatible = true;
    }
    
     if (
        document.getElementById("evenement0").checked || 
        document.getElementById("evenement5").checked ||     
        document.getElementById("evenement11").checked ||
        document.getElementById("evenement15").checked
        )
     {
      zoopedagogue = true;
     }
     if (
         document.getElementById("evenement2").checked ||
         document.getElementById("evenement6").checked || 
         document.getElementById("evenement7").checked ||
         document.getElementById("evenement14").checked 
         )   
     {
      zootherapeute = true;
     }
     if (
         document.getElementById("evenement3").checked ||
         document.getElementById("evenement13").checked
         )   
     {
      formeASonPublic = false ;
     }
    
    if(zoopedagogue == true)
    {
        if(metierCompatible == true)
        {
         modifModal("Vous êtes tout a fait à même de faire de la zoopédagogie dans votre environnement.");
         return true;
        }
        else
        {
        modifModal("Bien que l'apport de la zoopédagogie dans votre activité ne semble pas forcément aller de soit, nous ne doutons pas du fait que vous puissiez faire des liens entre l'animal et votre public.");
         return true;
        }
    }
    if(metierCompatible == true)
    {
		if (formeASonPublic == false ) {
			modifModal("Pour exercer efficacement en zoopédagogie (et d'une manière générale en médiation animale), il faut bien connaitre/être formé à son public. Il faut être capable de faire des liens avec les nécéssités de notre audimat. La zoopédagogie est un outils qui vient enrichir votre pratique professionnelle. Cette formation s'adresse donc aux personnes connaissant parfaitement leur public.");
			return true;
        } else {
			if(zootherapeute == true) {
				modifModal("L'approche zoopédagogique diffère d'une approche thérapeutique. Bien que les bienfaits de l'animal ainsi que le résultat des 'ateliers' aient des vertus thérapeutiques, ce n'est pas le but recherché. <a href='https://fr.wikipedia.org/wiki/Zoothérapie' target='_blank' >voir définition Wikipédia</a> ");
				return false;	
			}else {
				modifModal("Vous êtes tout a fait à même de faire de la zoopédagogie dans votre environnement.");
				return true;
			}
		}
	}

    else
    {	
		if (formeASonPublic == false ) {
			modifModal("Pour exercer efficacement en zoopédagogie (et d'une manière générale en médiation animale), il faut bien connaitre/être formé à son public. Il faut être capable de faire des liens avec les nécéssités de notre audimat. La zoopédagogie est un outils qui vient enrichir votre pratique professionnelle. Cette formation s'adresse donc aux personnes connaissant parfaitement leur public.");
			return true;
        } else {
			if(zootherapeute == true) {
				modifModal("L'approche zoopédagogique diffère d'une approche thérapeutique. Bien que les bienfaits de l'animal ainsi que le résultat des 'ateliers' aient des vertus thérapeutiques, ce n'est pas le but recherché. <a href='https://fr.wikipedia.org/wiki/Zoothérapie' target='_blank' >voir définition Wikipédia</a> ");
				return false;	
			}else {
        modifModal("Bien que l'apport de la zoopédagogie dans votre activité ne semble pas forcément aller de soit, nous ne doutons pas du fait que vous puissiez faire des liens entre l'animal et votre public.");
				return true;
			}
		}
    }

    
} 

function modifModal(texteResult)
   {
    var span = document.getElementById("spanResultat");
    span.innerHTML = texteResult;
   }   