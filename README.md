
**Nekomaths**

Un package Node.js simple et convivial, développé par nekoclem, offrant des fonctions mathématiques de base, des utilitaires pratiques et des outils plus spécifiques pour vos projets.

**Installation**

Pour installer nekomaths dans votre projet, utilisez npm :

```
npm install nekomaths
```

**Utilisation**

Importez les fonctions de nekomaths dans votre fichier JavaScript. Vous pouvez importer l'objet complet ou déstructurer pour n'importer que les fonctions spécifiques dont vous avez besoin.

```
const nekomaths = require('nekomaths');
// Ou en ES Modules (si votre projet supporte) :
// import nekomaths from 'nekomaths';

// Exemple de déstructuration pour n'importer que certaines fonctions :
// const { nekadd, nekpremier } = require('nekomaths');
```

**Fonctionnalités**

nekomaths offre les fonctions et modules suivants :

## 1. Calculs Arithmétiques Simples
Ces fonctions effectuent les opérations mathématiques de base et retournent le résultat.
 * `nekadd(a, b)` : Additionne deux nombres.
 * `neksub(a, b)` : Soustrait le deuxième nombre du premier.
 * `nekmult(a, b)` : Multiplie deux nombres.
 * `nekdiv(a, b)` : Divise le premier nombre par le deuxième. (Gère la division par zéro).
 * `nekodouble(number)` : Renvoie le double d'un nombre.
 * `nekomoitie(number)` : Renvoie la moitié d'un nombre.
 * `nekracine(number)` : Calcule la racine carrée d'un nombre.
 * `nekopuissance(base, exposant)` : Calcule la puissance d'un nombre.

```javascript
const nekomaths = require('nekomaths');

// Addition
console.log("4 + 5 =", nekomaths.nekadd(4, 5)); // Renvoie 9

// Soustraction
console.log("10 - 3 =", nekomaths.neksub(10, 3)); // Renvoie 7

// Multiplication
console.log("6 * 7 =", nekomaths.nekmult(6, 7)); // Renvoie 42

// Division
console.log("20 / 4 =", nekomaths.nekdiv(20, 4)); // Renvoie 5

// Gestion de la division par zéro
try {
    nekomaths.nekdiv(10, 0);
} catch (error) {
    console.error(error.message); // Affiche : nekdiv: Division par zéro impossible.
}

// Doubler un nombre
console.log("Le double de 7 est :", nekomaths.nekodouble(7)); // Renvoie 14

// Moitié d'un nombre
console.log("La moitié de 15 est :", nekomaths.nekomoitie(15)); // Renvoie 7.5

// Racine carrée
console.log("La racine carrée de 25 est :", nekomaths.nekracine(25)); // Renvoie 5

// Puissance
console.log("2 à la puissance 3 :", nekomaths.nekopuissance(2, 3)); // Renvoie 8
```

## 2. Fonctions de Vérification et Séquences
 * `nekIsPairOuImpair(number)` : Vérifie si un nombre est pair ou impair et retourne une phrase explicative en français.
 * `nekofibona(n)` : Retourne le n-ième nombre de la séquence de Fibonacci.
 * `nekpremier(number)` : Vérifie si un nombre entier est premier. Retourne true si le nombre est premier, false sinon.
 * `nekFacteurs(number)` : Retourne un tableau des facteurs premiers d'un nombre.

```javascript
const nekomaths = require('nekomaths');

// Détection de Nombre Pair ou Impair
console.log(nekomaths.nekIsPairOuImpair(7)); // Renvoie "Le nombre 7 est impair."
console.log(nekomaths.nekIsPairOuImpair(12)); // Renvoie "Le nombre 12 est pair."

// Calcul du nombre de Fibonacci
console.log("Le 10ème nombre de Fibonacci est :", nekomaths.nekofibona(10)); // Renvoie 55

// Vérification de Nombre Premier
console.log("17 est premier ?", nekomaths.nekpremier(17)); // Renvoie true
console.log("18 est premier ?", nekomaths.nekpremier(18)); // Renvoie false

// Facteurs premiers
console.log("Facteurs premiers de 12 :", nekomaths.nekFacteurs(12)); // Renvoie [2, 2, 3]
```

## 3. Statistiques et Calculs sur Tableaux
 * `nekmed(arr)` : Calcule la médiane d'un tableau de nombres.
 * `nekmoy(arr)` : Calcule la moyenne d'un tableau de nombres.

```javascript
const nekomaths = require('nekomaths');

const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Médiane
console.log("Médiane :", nekomaths.nekmed(nombres)); // Renvoie 5.5

// Moyenne
console.log("Moyenne :", nekomaths.nekmoy(nombres)); // Renvoie 5.5
```

## 4. Génération de Nombre Aléatoire
 * `nekorandom(min, max)` : Génère un nombre entier aléatoire entre min et max (inclus).

```javascript
const nekomaths = require('nekomaths');

// Générer un nombre aléatoire entre 5 et 10 (inclus)
const randomNumber = nekomaths.nekorandom(5, 10);
console.log(`Un nombre aléatoire entre 5 et 10 : ${randomNumber}`);
```

## 5. Calculs avec Pi (nekopi)
L'objet nekopi fournit la valeur de Pi et des fonctions pour les calculs géométriques courants.
 * `nekopi.valeur` : La valeur de Pi (Math.PI).
 * `nekopi.circonference(rayon)` : Calcule la circonférence d'un cercle.
 * `nekopi.aireCercle(rayon)` : Calcule l'aire d'un cercle.
 * `nekopi.degresEnRadians(degres)` : Convertit des degrés en radians.
 * `nekopi.radiansEnDegres(radians)` : Convertit des radians en degrés.

```javascript
const nekomaths = require('nekomaths');

console.log("La valeur de Pi est :", nekomaths.nekopi.valeur); // Affiche Math.PI

// Calculs de cercle
console.log("Circonférence d'un cercle de rayon 5 :", nekomaths.nekopi.circonference(5));
console.log("Aire d'un cercle de rayon 5 :", nekomaths.nekopi.aireCercle(5));

// Conversions d'angles
console.log("90 degrés en radians :", nekomaths.nekopi.degresEnRadians(90)); // Renvoie 1.57... (Pi/2)
console.log("1.5708 radians en degrés :", nekomaths.nekopi.radiansEnDegres(1.5708)); // Renvoie ~90
```

## 6. Calculs Trigonométriques et Angles (nekdegres)
L'objet nekdegres fournit des fonctions pour manipuler et calculer des angles en degrés.
 * `nekdegres.enDegres(radians)` : Convertit des radians en degrés.
 * `nekdegres.enRadians(degres)` : Convertit des degrés en radians.
 * `nekdegres.sinus(degres)` : Calcule le sinus d'un angle en degrés.
 * `nekdegres.cosinus(degres)` : Calcule le cosinus d'un angle en degrés.
 * `nekdegres.tangente(degres)` : Calcule la tangente d'un angle en degrés.

```javascript
const nekomaths = require('nekomaths');

// Conversions
console.log("Pi/2 radians en degrés :", nekomaths.nekdegres.enDegres(Math.PI / 2)); // Renvoie 90
console.log("45 degrés en radians :", nekomaths.nekdegres.enRadians(45)); // Renvoie 0.785... (Pi/4)

// Fonctions trigonométriques
console.log("Sinus de 90 degrés :", nekomaths.nekdegres.sinus(90)); // Renvoie 1
console.log("Cosinus de 0 degré :", nekomaths.nekdegres.cosinus(0)); // Renvoie 1
console.log("Tangente de 45 degrés :", nekomaths.nekdegres.tangente(45)); // Renvoie 1
```

## 7. Conversions d'Unités

### 7.1 Conversions Métriques (neky)
 * `neky.metersToKilometers(meters)` : Convertit des mètres en kilomètres.
 * `neky.kilometersToMeters(kilometers)` : Convertit des kilomètres en mètres.

```javascript
const nekomaths = require('nekomaths');

console.log("1000 mètres =", nekomaths.neky.metersToKilometers(1000), "kilomètres"); // Renvoie 1
console.log("2.5 kilomètres =", nekomaths.neky.kilometersToMeters(2.5), "mètres"); // Renvoie 2500
```

### 7.2 Conversions de Poids (neklet)
 * `neklet.kilosToTonnes(kilos)` : Convertit des kilos en tonnes.
 * `neklet.tonnesToKilos(tonnes)` : Convertit des tonnes en kilos.
 * `neklet.gramsToKilograms(grams)` : Convertit des grammes en kilogrammes.
 * `neklet.kilogramsToGrams(kilograms)` : Convertit des kilogrammes en grammes.

```javascript
const nekomaths = require('nekomaths');

console.log("1500 kilos =", nekomaths.neklet.kilosToTonnes(1500), "tonnes"); // Renvoie 1.5
console.log("2.5 tonnes =", nekomaths.neklet.tonnesToKilos(2.5), "kilos"); // Renvoie 2500
console.log("1500 grammes =", nekomaths.neklet.gramsToKilograms(1500), "kg"); // Renvoie 1.5
```

## 8. Calculs de Pourcentage
 * `nekpourcentage(total, pourcentage)` : Calcule le pourcentage d'un nombre.

```javascript
const nekomaths = require('nekomaths');

console.log("20% de 150 =", nekomaths.nekpourcentage(150, 20)); // Renvoie 30
```

## 9. Théorèmes Géométriques

### 9.1 Théorème de Pythagore (nektalor)
 * `nektalor.hypotenuse(a, b)` : Calcule l'hypoténuse d'un triangle rectangle.
 * `nektalor.coteAdjacent(hypotenuse, cote)` : Calcule un côté adjacent.

```javascript
const nekomaths = require('nekomaths');

console.log("Hypoténuse d'un triangle 3-4 :", nekomaths.nektalor.hypotenuse(3, 4)); // Renvoie 5
console.log("Côté adjacent (hyp=5, côté=3) :", nekomaths.nektalor.coteAdjacent(5, 3)); // Renvoie 4
```

### 9.2 Théorème de Thalès (nektales)
 * `nektales.proportionnalite(a, b, c)` : Calcule la quatrième proportionnelle selon Thalès.
 * `nektales.verifierProportionnalite(a, b, c, d)` : Vérifie si quatre segments sont proportionnels.

```javascript
const nekomaths = require('nekomaths');

console.log("Quatrième proportionnelle (2,3,4) :", nekomaths.nektales.proportionnalite(2, 3, 4)); // Renvoie 6
console.log("Proportionnalité (2,3,4,6) :", nekomaths.nektales.verifierProportionnalite(2, 3, 4, 6)); // Renvoie true
```

## 10. Calculs de Probabilité (nekproba)
 * `nekproba.probabiliteSimple(evenementsFavorables, evenementsPossibles)` : Calcule une probabilité simple.
 * `nekproba.probabiliteInverse(probabilite)` : Calcule la probabilité inverse.
 * `nekproba.probabiliteUnion(probA, probB, probIntersection)` : Calcule P(A ∪ B).

```javascript
const nekomaths = require('nekomaths');

console.log("Probabilité (2 sur 6) :", nekomaths.nekproba.probabiliteSimple(2, 6)); // Renvoie 0.333...
console.log("Probabilité inverse (0.25) :", nekomaths.nekproba.probabiliteInverse(0.25)); // Renvoie 0.75
console.log("Probabilité union :", nekomaths.nekproba.probabiliteUnion(0.3, 0.4, 0.1)); // Renvoie 0.6
```

## 11. Fonctionnalités Créatives et Personnalisation

### 11.1 Messages Personnalisés (nekbel)
 * `nekbel.message(contenu, type, options)` : Affiche des messages personnalisés.
 * `nekbel.executer(nom, fonction, ...args)` : Exécute des fonctions avec gestion d'erreurs.

```javascript
const nekomaths = require('nekomaths');

// Message personnalisé
nekomaths.nekbel.message("Calcul terminé avec succès!", "success", {prefix: "🎉"});

// Exécution sécurisée
const resultat = nekomaths.nekbel.executer("addition", nekomaths.nekadd, 5, 3);
console.log(resultat);
```

### 11.2 Outils Créatifs (nekcreative)
 * `nekcreative.generateId(prefix)` : Génère des identifiants uniques.
 * `nekcreative.chronometer(func, nom)` : Mesure le temps d'exécution des fonctions.
 * `nekcreative.memoize(func)` : Met en cache les résultats des fonctions.
 * `nekcreative.couleurAleatoire(format)` : Génère des couleurs aléatoires.

```javascript
const nekomaths = require('nekomaths');

// Génération d'ID
console.log(nekomaths.nekcreative.generateId("projet")); // "projet_abc123_xyz789"

// Couleur aléatoire
console.log(nekomaths.nekcreative.couleurAleatoire("hex")); // "#a1b2c3"
console.log(nekomaths.nekcreative.couleurAleatoire("rgb")); // "rgb(123, 45, 67)"
```

### 11.3 Gestion d'Erreurs Personnalisée (nekorror)
 * `nekorror.definirMessage(codeErreur, message)` : Définit des messages d'erreur personnalisés.
 * `nekorror.lancerErreur(codeErreur, donnees)` : Lance des erreurs avec messages personnalisés.
 * `nekorror.executer(fonction, gestionErreur)` : Exécute des fonctions avec gestion d'erreurs.
 * `nekorror.log(niveau, message, donnees)` : Logger avec différents niveaux.

```javascript
const nekomaths = require('nekomaths');

// Définir un message d'erreur personnalisé
nekomaths.nekorror.definirMessage("DIVISION_ZERO", "Impossible de diviser par zéro !");

// Logger des informations
nekomaths.nekorror.log("info", "Calcul en cours...");
nekomaths.nekorror.log("error", "Une erreur est survenue", {valeur: 42});
```

## 12. Nouvelles Fonctionnalités Créatives

### 12.1 Dessin ASCII (nekdraw)
 * `nekdraw.rectangle(largeur, hauteur, caractere)` : Dessine un rectangle dans la console.
 * `nekdraw.triangle(taille, caractere)` : Dessine un triangle dans la console.
 * `nekdraw.afficher(dessin)` : Affiche le dessin dans la console.

```javascript
const nekomaths = require('nekomaths');

// Dessiner un rectangle
const rect = nekomaths.nekdraw.rectangle(5, 3, '#');
nekomaths.nekdraw.afficher(rect);
// Affiche:
// #####
// #####
// #####

// Dessiner un triangle
const triangle = nekomaths.nekdraw.triangle(4, '*');
nekomaths.nekdraw.afficher(triangle);
// Affiche:
//    *
//   ***
//  *****
// *******
```

### 12.2 Arrondi Personnalisé (nekril)
 * `nekril(nombre, decimales)` : Arrondit un nombre décimal au nombre de décimales spécifié.

```javascript
const nekomaths = require('nekomaths');

console.log(nekomaths.nekril(3.14159, 2)); // Renvoie 3.14
console.log(nekomaths.nekril(2.7777777, 4)); // Renvoie 2.7778
console.log(nekomaths.nekril(10.555, 1)); // Renvoie 10.6
```

### 12.3 Calculs avec Mots Anglais (nekocust)
 * `nekocust.motEnNombre(mot)` : Convertit un mot anglais en nombre.
 * `nekocust.additionMots(mot1, mot2)` : Additionne deux nombres écrits en lettres.
 * `nekocust.soustractionMots(mot1, mot2)` : Soustrait deux nombres écrits en lettres.

```javascript
const nekomaths = require('nekomaths');

console.log(nekomaths.nekocust.motEnNombre("four")); // Renvoie 4
console.log(nekomaths.nekocust.additionMots("three", "seven")); // Renvoie 10
console.log(nekomaths.nekocust.soustractionMots("ten", "four")); // Renvoie 6
```

### 12.4 Addition d'Objets Créatifs (nekrect)
 * `nekrect.additionObjets(objet1, objet2, propriete)` : Additionne deux objets selon une propriété.
 * `nekrect.decrireOperation(objet1, objet2, propriete)` : Décrit l'opération effectuée.

```javascript
const nekomaths = require('nekomaths');

// Addition d'aires
console.log(nekomaths.nekrect.additionObjets("rectangle", "carre", "aire")); // Renvoie 16
console.log(nekomaths.nekrect.additionObjets("poule", "poire", "valeur")); // Renvoie 20

// Description de l'opération
console.log(nekomaths.nekrect.decrireOperation("rectangle", "carre", "aire"));
// Renvoie: "Addition de rectangle + carre (aire) = 16"
```

## 13. Théorèmes Géométriques Avancés

### 13.1 Théorème de Pappus (nekpap)
 * `nekpap.volumePappus(aire, distanceCentroide)` : Calcule le volume selon Pappus-Guldinus.
 * `nekpap.airePappus(longueur, distanceCentroide)` : Calcule l'aire selon Pappus-Guldinus.
 * `nekpap.centroideVolume(volume, aire)` : Calcule la distance du centroïde.

```javascript
const nekomaths = require('nekomaths');

console.log("Volume Pappus :", nekomaths.nekpap.volumePappus(10, 5)); // Volume généré
console.log("Aire Pappus :", nekomaths.nekpap.airePappus(8, 3)); // Aire générée
console.log("Centroïde :", nekomaths.nekpap.centroideVolume(100, 4)); // Distance centroïde
```

### 13.2 Théorème de Desargues (nekdesar)
 * `nekdesar.pointsAlignes(point1, point2, point3)` : Vérifie si trois points sont alignés.
 * `nekdesar.intersectionDroites(p1, p2, p3, p4)` : Calcule l'intersection de deux droites.
 * `nekdesar.verifierDesargues(triangle1, triangle2)` : Vérifie la configuration de Desargues.

```javascript
const nekomaths = require('nekomaths');

// Vérifier l'alignement
const p1 = {x: 0, y: 0};
const p2 = {x: 1, y: 1};
const p3 = {x: 2, y: 2};
console.log(nekomaths.nekdesar.pointsAlignes(p1, p2, p3)); // Renvoie true

// Intersection de droites
const intersection = nekomaths.nekdesar.intersectionDroites(
    {x: 0, y: 0}, {x: 2, y: 2},
    {x: 0, y: 2}, {x: 2, y: 0}
);
console.log(intersection); // {x: 1, y: 1}

// Configuration de Desargues
const triangle1 = [{x: 0, y: 0}, {x: 2, y: 0}, {x: 1, y: 2}];
const triangle2 = [{x: 1, y: 1}, {x: 3, y: 1}, {x: 2, y: 3}];
console.log(nekomaths.nekdesar.verifierDesargues(triangle1, triangle2));
```

## 14. Nouvelles Fonctionnalités v1.4.0

### 14.1 Résolution d'Équations avec Variable (nekident)
 * `nekident.resoudreLineaire(a, b, resultat)` : Résout ax + b = resultat pour trouver x.
 * `nekident.verifierSolution(x, operation, operande, resultatAttendu)` : Vérifie une solution.
 * `nekident.trouverX(operation, operande, resultatAttendu)` : Trouve x pour une opération donnée.

```javascript
const nekomaths = require('nekomaths');

// Résoudre 2x + 5 = 15 (x = 5)
console.log("Solution de 2x + 5 = 15 :", nekomaths.nekident.resoudreLineaire(2, 5, 15)); // Renvoie 5

// Vérifier si x = 4 est solution de x + 3 = 7
console.log("Vérification :", nekomaths.nekident.verifierSolution(4, 'add', 3, 7)); // Renvoie true

// Trouver x pour x * 3 = 12
console.log("x pour x * 3 = 12 :", nekomaths.nekident.trouverX('mult', 3, 12)); // Renvoie 4
```

### 14.2 Équations Complexes (nekaqua)
 * `nekaqua.quadratique(a, b, c)` : Résout ax² + bx + c = 0.
 * `nekaqua.systeme2x2(a1, b1, c1, a2, b2, c2)` : Résout un système 2x2.
 * `nekaqua.evaluerPolynome(coefficients, x)` : Évalue un polynôme.

```javascript
const nekomaths = require('nekomaths');

// Résoudre x² - 5x + 6 = 0
const equation = nekomaths.nekaqua.quadratique(1, -5, 6);
console.log("Solutions quadratique :", equation); // x1 = 3, x2 = 2

// Système d'équations 2x + 3y = 7, x - y = 1
const systeme = nekomaths.nekaqua.systeme2x2(2, 3, 7, 1, -1, 1);
console.log("Solution système :", systeme); // x = 2, y = 1

// Évaluer P(x) = 2x² + 3x + 1 pour x = 2
console.log("P(2) =", nekomaths.nekaqua.evaluerPolynome([2, 3, 1], 2)); // Renvoie 15
```

### 14.3 Calculs de Fractions (nekfrac)
 * `nekfrac.simplifier(numerateur, denominateur)` : Simplifie une fraction.
 * `nekfrac.additionner(num1, den1, num2, den2)` : Additionne deux fractions.
 * `nekfrac.multiplier(num1, den1, num2, den2)` : Multiplie deux fractions.
 * `nekfrac.pgcd(a, b)` : Calcule le PGCD.

```javascript
const nekomaths = require('nekomaths');

// Simplifier 12/18
console.log("12/18 simplifié :", nekomaths.nekfrac.simplifier(12, 18)); // 2/3

// Additionner 1/3 + 1/4
const addition = nekomaths.nekfrac.additionner(1, 3, 1, 4);
console.log("1/3 + 1/4 =", addition); // 7/12

// Multiplier 2/3 * 3/4
const multiplication = nekomaths.nekfrac.multiplier(2, 3, 3, 4);
console.log("2/3 * 3/4 =", multiplication); // 1/2
```

### 14.4 Calculs avec Puissances (nektin)
 * `nektin.resoudreCarree(a, b)` : Résout ax² = b.
 * `nektin.resoudreCube(a, b)` : Résout ax³ = b.
 * `nektin.fractionPuissance(num, den, exposant)` : Calcule (num/den)^exposant.

```javascript
const nekomaths = require('nekomaths');

// Résoudre 2x² = 8 (x = ±2)
console.log("Solutions de 2x² = 8 :", nekomaths.nektin.resoudreCarree(2, 8));

// Résoudre x³ = 27 (x = 3)
console.log("Solution de x³ = 27 :", nekomaths.nektin.resoudreCube(1, 27));

// Calculer (3/4)²
console.log("(3/4)² =", nekomaths.nektin.fractionPuissance(3, 4, 2));
```

### 14.5 Nombre Alpha (nekalpha)
 * `nekalpha.valeur` : Constante alpha de Feigenbaum.
 * `nekalpha.serie(n)` : Calcule une série basée sur alpha.
 * `nekalpha.transformation(x)` : Transformation alpha.

```javascript
const nekomaths = require('nekomaths');

console.log("Constante alpha :", nekomaths.nekalpha.valeur);
console.log("Série alpha (10 termes) :", nekomaths.nekalpha.serie(10));
console.log("Transformation alpha(0.5) :", nekomaths.nekalpha.transformation(0.5));
```

### 14.6 Nombre Beta (nekbeta)
 * `nekbeta.fonction(a, b)` : Fonction beta d'Euler.
 * `nekbeta.gamma(x)` : Approximation de la fonction gamma.
 * `nekbeta.distribution(x, alpha, beta)` : Distribution beta.

```javascript
const nekomaths = require('nekomaths');

console.log("Beta(2, 3) :", nekomaths.nekbeta.fonction(2, 3));
console.log("Gamma(4) :", nekomaths.nekbeta.gamma(4));
console.log("Distribution beta :", nekomaths.nekbeta.distribution(0.5, 2, 3));
```

### 14.7 Nombre Omega (nekomega)
 * `nekomega.spirale(t)` : Calcule la spirale d'or.
 * `nekomega.fibonacciOmega(n)` : Fibonacci modifié avec omega.
 * `nekomega.convergence(iterations)` : Calcul de convergence.

```javascript
const nekomaths = require('nekomaths');

console.log("Spirale omega :", nekomaths.nekomega.spirale(1));
console.log("Fibonacci omega(10) :", nekomaths.nekomega.fibonacciOmega(10));
console.log("Convergence omega :", nekomega.convergence(5));
```

### 14.8 Comparaison de Nombres (nekcopare)
 * `nekcopare.comparer(a, b)` : Compare deux nombres.
 * `nekcopare.maximum(nombres)` : Trouve le maximum dans un tableau.
 * `nekcopare.minimum(nombres)` : Trouve le minimum dans un tableau.

```javascript
const nekomaths = require('nekomaths');

// Comparer 5 et 8
const comparaison = nekomaths.nekcopare.comparer(5, 8);
console.log("Comparaison :", comparaison); // 5 < 8

// Trouver le maximum
const nombres = [3, 7, 2, 9, 1];
console.log("Maximum :", nekomaths.nekcopare.maximum(nombres)); // 9

// Trouver le minimum
console.log("Minimum :", nekomaths.nekcopare.minimum(nombres)); // 1
```

### 14.9 Base de Données Personnalisée (nekdone)
 * `nekdone.creerBase(nom, structure)` : Crée une base de données.
 * `nekdone.ajouterDonnee(nomBase, donnee)` : Ajoute des données.
 * `nekdone.calculer(nomBase, propriete, operation)` : Effectue des calculs.
 * `nekdone.obtenirBase(nomBase)` : Obtient les informations d'une base.

```javascript
const nekomaths = require('nekomaths');

// Créer une base de données
nekomaths.nekdone.creerBase("ventes", ["produit", "prix", "quantite"]);

// Ajouter des données
nekomaths.nekdone.ajouterDonnee("ventes", {produit: "ordinateur", prix: 800, quantite: 2});
nekomaths.nekdone.ajouterDonnee("ventes", {produit: "souris", prix: 25, quantite: 5});

// Calculer la somme des prix
const sommePrix = nekomaths.nekdone.calculer("ventes", "prix", "somme");
console.log("Somme des prix :", sommePrix);

// Obtenir toute la base
const base = nekomaths.nekdone.obtenirBase("ventes");
console.log("Base de données :", base);
```

### 14.10 Arithmétique Personnalisée (nekarin)
 * `nekarin.enregistrerFonction(nom, fonction, description)` : Enregistre une fonction.
 * `nekarin.executer(nom, ...args)` : Exécute une fonction personnalisée.
 * `nekarin.combiner(nom1, nom2, operation, ...args)` : Combine deux fonctions.
 * `nekarin.listerFonctions()` : Liste toutes les fonctions enregistrées.

```javascript
const nekomaths = require('nekomaths');

// Enregistrer une fonction personnalisée
nekomaths.nekarin.enregistrerFonction("double", (x) => x * 2, "Multiplie par 2");
nekomaths.nekarin.enregistrerFonction("carre", (x) => x * x, "Met au carré");

// Exécuter les fonctions
console.log("Double de 5 :", nekomaths.nekarin.executer("double", 5)); // 10
console.log("Carré de 4 :", nekomaths.nekarin.executer("carre", 4)); // 16

// Combiner les fonctions (double + carré pour x=3)
const resultat = nekomaths.nekarin.combiner("double", "carre", "add", 3);
console.log("Double(3) + Carré(3) =", resultat); // 6 + 9 = 15

// Lister toutes les fonctions
console.log("Fonctions enregistrées :", nekomaths.nekarin.listerFonctions());
```

**Contribution**

Les contributions sont les bienvenues ! Si vous avez des idées de nouvelles fonctions, des améliorations ou des corrections de bugs, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur le dépôt GitHub.

**Lien de notre documentation officielle**

https://nekocute-math-tools.lovable.app
