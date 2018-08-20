/** TP Gestion de stock
 * @fileoverview Interface back office de gestion de stock
 * @author Maxime Chagnon, Aminata Sy, Nicolas Jouenne
 */


/** @function globale */
/** Cette fonction lance l'application.
*/
(function globale() {
	var stock = [];
	console.log(stock);

	
/** @function Article */
/** Cette fonction créee un constructeur d'objet.
* @param article {string}
* @param prix {number}
* @param description {string}
* @param reference {string}
*/
	function Article(article, prix, description, reference) {
		this.article = article;
		this.prix = prix;
		this.description = description;
		this.reference = reference;
	};

/** @function ajouterStock */

/** Cette fonction crée les nouveaux articles et les insère dans un tableau au click sur le bouton "Ajouter au stock".
* @returns stock
*/

	function ajouterStock() {
		var bouton = document.getElementById("btn");
		bouton.addEventListener("click", function(){
		var article = document.getElementById("article").value;
		var prix = document.getElementById("prix").value;
		var description = document.getElementById("description").value;
		var reference = (0|Math.random()*9e6).toString(36);
		if ((!article || !prix || !description) || isNaN(prix)){
			alert("Formulaire mal rempli :(");
		}else{
		stock.push(new Article(article, prix, description, reference));
		var tbody = document.getElementById("tbody");
		var ligne = tbody.insertRow();
		var colonne1 = ligne.insertCell(0);
		colonne1.innerHTML = article;
		var colonne2 = ligne.insertCell(1);
		colonne2.innerHTML = reference;
		var colonne3 = ligne.insertCell(2);
		colonne3.innerHTML = description;
		var colonne4 = ligne.insertCell(3);
		colonne4.innerHTML = prix;
		var colonne5 =ligne.insertCell(4);
		var bouton2 =document.createElement("button");
		bouton2.innerHTML = "Modifier";
		colonne5.appendChild(bouton2);
		var colonne6 = ligne.insertCell(5);
		colonne6.innerHTML = "❌";
		console.log(stock);
		listenSuppr();
		listenModif();
		return stock;
		};

		});
	};

/** @function supprimerProd */
/** Cette fonction supprime les produits du stock
*/
	function supprimerProd() {
	    this.parentNode.remove();
	    console.log(stock);
	};

/** @function listenSuppr */
/** Cette fonction récupère les lignes du tableau et y applique la fonction supprimerProd.
*/	
	function listenSuppr() {
	    lastTd = document.querySelectorAll('#tbody td:last-child');
	    lastTd.forEach(function (td) {
	        td.addEventListener("click", supprimerProd)
	    });

	};

/** @function modif */
/** Cette fonction permet de odifier les articles du stock.
*/
	function modif() {
        var row = this.parentNode;
        
        console.log(row.children[1].innerText);
        console.log(Object.values(stock[0]));
        
        for(let y = 0; y<stock.length; y++){
            var itObjet = Object.values(stock[y]);
            for(let i = 0; i<itObjet.length; i++){
                if (itObjet[i] == row.children[1].innerText){
                    console.log("toto");    
            var article = document.getElementById("article").value;
            var prix = document.getElementById("prix").value;
            var description = document.getElementById("description").value;
            var colonne1 = row.children[0];
            colonne1.innerHTML = article;
            var colonne3 = row.children[2];
            colonne3.innerHTML = description;
            var colonne4 = row.children[3];
            colonne4.innerHTML = prix;
                }
              };
        };
    };

/** @function listenModif */
/** Cette fonction récupère les éléments du tableau et y applique la fonction modif au click sur le bouton "Modifier".
*/

	function listenModif() {
		btnModif = document.querySelectorAll('#tbody td:nth-child(5)');
		btnModif.forEach(function (elm) {
			elm.addEventListener("click", modif);
		});
	};
		
/** @function start */
/** Cette fonction exécute les fonctions de l'application.
*/
	function start() {
		ajouterStock();
	};
window.addEventListener("DOMContentLoaded", start);

}());