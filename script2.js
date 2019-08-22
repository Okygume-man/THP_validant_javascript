function positiv(n){
	return n % 1 === 0 && n >= 0;
} /* défini que n est bien supérier ou  égal à 0 et que c'est un integer */

n = prompt("Donne nous un nombre :") /* demande et stock un nombre dans n */
n = Number(n) /* transforme string en integer et considérant faux si c'est un autre qu'un nombre */

while (!positiv(n)) {
	alert ("Veuillez Saisir Un Entier Positif ou null"); /* ouvre une bouche en vérifiant que n<0 ou si n est un float ou string=renvoie le prompt si nombre négatif */
	n = Number(prompt("Donne nous un nombre :"));
}

function factorielle(n)

{
	
	if (n>0)
		{return n*factorielle(n-1);}
			
	else (n === 0)
		{return 1;}

}

console.log(factorielle(n))