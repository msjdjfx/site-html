alert("Salut Matys");

console.log("Coucou");

let maSuperVariable = "Hello";
let unChiffre = 19;

var unTexte = "Hola";

const prenom = "Matys";

console.log(unChiffre);

unChiffre = 17;
let chaine = " Je suis l'une des chaines de caractères";
let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenue"; // C'est de la concaténation !!

console.log(nouvelleChaine);

// ** Types de données : **

let String = "Je suis une chaine de caractère";
let number = 19;
let boolean = false;

// Tableau : il ya des crochets []
// Def : C'est une collection de données (primitives ou objets selon le langage). Sert a stocker plusieur valeur en une seule variable
// !!!!!! Toujours le définir par un const !!!!!!
const array = ["Je", "Suis", 19, false];

// Object : Accolades {}
let object = {
  prenom: "Matys",
  age: 19,
  ville: "Varades",
};

let arbre;

arbre = "Sapin";

// ** Les opérateurs : **
console.log(4 + 5);

console.log(4 - 5);

console.log(4 * 5);

console.log(4 / 5);

// Puissance d'un nombre
console.log(4 ** 5);

// ** Les opérateurs d'afféctation : **
let total = 0;

total = total + 1; // Version plus longue
total++; // Version plus simplifié

total += 5; // Cela permet d'ajouter plus que 1 a notre variable
total -= 4; // Cela permet de soustraire plus que 1 a notre variable
total *= 2; // Cela permet de multiplier par plus qu'un notre variabe

console.log(total);

// ** tructure de contrôle : **
let x = 5;
let y = 5;

if (x > y) {
  alert("YES X plus grand que Y");
} else if (y > x) {
  alert("Y plus grand que x");
} else if ((x = y)) {
  alert("ILS SONT EGAUX");
}

// On test si la variable est true (vrai) soit si x existe vraiment
if (x) {
  console.log("x existe");
}

// Le triple égal test l'égalité stricte il renvoie toujours vers un false lorsque les deux variable sont différente !
// Le double égal test l'égalité faible il fais une conversion des deux elements avant d'effectuer la comparaison !
if (x === y) {
  console.log("X et Y sont égaux");
} else {
  console.log("X et Y ne sont pas égaux");
}
let a = 2;
let b = 2;
if (a == b) {
  console.log("Ils sont égaux");
} else {
  console.log("Ils ne sont pas égaux");
}
// || = OU
// && = ET
if (x < y || x > 1) {
  console.log("UI");
}
if (x < y && x > 1) {
  console.log("Oui");
}

// ** Les fonctions : **
// Voici les fonctions classiques faites à l'ancienne
function faireQuelquesChoses() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("Calcul terminé");
}
// Pour que la fonction se joue il faut imperativement l"appeler
// Appeld e la focntion : faireQuelquesChoses();

// ** Fonction fléchée : **
const addittion = (a, b) => {
  console.log(a + b);
};

addittion(4, 3);
// C'est la bonne methode il faut mettre une virgule sinon la fonction ne marchera pas vu que la condition dis (a, b)et pas (a + b)

addittion(432 + 685);
// Cela ne marche pas comme dis juste au dessus !!

// ** La porté des variables : **
function add2() {
  let a = 4;
  return a + 2;
}
// On ne peut pas console log la variable crée dans la fonction en dehors de cette derniere
