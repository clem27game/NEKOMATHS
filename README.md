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
1. Calculs Arithmétiques Simples
Ces fonctions effectuent les opérations mathématiques de base et retournent le résultat.
 * nekadd(a, b) : Additionne deux nombres.
 * neksub(a, b) : Soustrait le deuxième nombre du premier.
 * nekmult(a, b) : Multiplie deux nombres.
 * nekdiv(a, b) : Divise le premier nombre par le deuxième. (Gère la division par zéro).
 * nekodouble(number) : Renvoie le double d'un nombre.
 * nekomoitie(number) : Renvoie la moitié d'un nombre.
 * nekracine(number) : Calcule la racine carrée d'un nombre.
<!-- end list -->
```
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
console.log("La racine carrée de 2 est :", nekomaths.nekracine(2)); // Renvoie 1.414...
```

**2. Fonctions de Vérification et Séquences**
 * nekIsPairOuImpair(number) : Vérifie si un nombre est pair ou impair et retourne une phrase explicative en français.
 * nekofibona(n) : Retourne le n-ième nombre de la séquence de Fibonacci.
 * nekpremier(number) : Vérifie si un nombre entier est premier. Retourne true si le nombre est premier, false sinon.
<!-- end list -->
```
const nekomaths = require('nekomaths');

// Détection de Nombre Pair ou Impair
console.log(nekomaths.nekIsPairOuImpair(7)); // Renvoie "Le nombre 7 est impair."
console.log(nekomaths.nekIsPairOuImpair(12)); // Renvoie "Le nombre 12 est pair."
console.log(nekomaths.nekIsPairOuImpair(7.5)); // Renvoie "Le nombre 7.5 n'est pas un entier. Il n'est ni pair ni impair."

// Calcul du nombre de Fibonacci
console.log("Le 0ème nombre de Fibonacci est :", nekomaths.nekofibona(0));   // Renvoie 0
console.log("Le 1er nombre de Fibonacci est :", nekomaths.nekofibona(1));   // Renvoie 1
console.log("Le 10ème nombre de Fibonacci est :", nekomaths.nekofibona(10)); // Renvoie 55

// Vérification de Nombre Premier
console.log("17 est premier ?", nekomaths.nekpremier(17)); // Renvoie true
console.log("18 est premier ?", nekomaths.nekpremier(18)); // Renvoie false
console.log("2 est premier ?", nekomaths.nekpremier(2));   // Renvoie true
console.log("1 est premier ?", nekomaths.nekpremier(1));   // Renvoie false
```

**3. Génération de Nombre Aléatoire**
 * nekorandom(min, max) : Génère un nombre entier aléatoire entre min et max (inclus).

```
<!-- end list -->
const nekomaths = require('nekomaths');

// Générer un nombre aléatoire entre 5 et 10 (inclus)
const randomNumber = nekomaths.nekorandom(5, 10);
console.log(`Un nombre aléatoire entre 5 et 10 : ${randomNumber}`); // Exemple: "Un nombre aléatoire entre 5 et 10 : 8"
```

**4. Calculs avec Pi (nekopi)**
L'objet nekopi fournit la valeur de Pi et des fonctions pour les calculs géométriques courants.
 * nekopi.valeur : La valeur de Pi (Math.PI).
 * nekopi.circonference(rayon) : Calcule la circonférence d'un cercle.
 * nekopi.aireCercle(rayon) : Calcule l'aire d'un cercle.
 * nekopi.degresEnRadians(degres) : Convertit des degrés en radians.
 * nekopi.radiansEnDegres(radians) : Convertit des radians en degrés.
<!-- end list -->

```
const nekomaths = require('nekomaths');

console.log("La valeur de Pi est :", nekomaths.nekopi.valeur); // Affiche Math.PI

// Calculs de cercle
console.log("Circonférence d'un cercle de rayon 5 :", nekomaths.nekopi.circonference(5));
console.log("Aire d'un cercle de rayon 5 :", nekomaths.nekopi.aireCercle(5));

// Conversions d'angles
console.log("90 degrés en radians :", nekomaths.nekopi.degresEnRadians(90)); // Renvoie 1.57... (Pi/2)
console.log("1.5708 radians en degrés :", nekomaths.nekopi.radiansEnDegres(1.5708)); // Renvoie ~90
```

**5. Calculs Trigonométriques et Angles (nekdegres)**

L'objet nekdegres fournit des fonctions pour manipuler et calculer des angles en degrés.
 * nekdegres.enDegres(radians) : Convertit des radians en degrés.
 * nekdegres.enRadians(degres) : Convertit des degrés en radians.
 * nekdegres.sinus(degres) : Calcule le sinus d'un angle en degrés.
 * nekdegres.cosinus(degres) : Calcule le cosinus d'un angle en degrés.
 * nekdegres.tangente(degres) : Calcule la tangente d'un angle en degrés.
<!-- end list -->
```
const nekomaths = require('nekomaths');

// Conversions
console.log("Pi/2 radians en degrés :", nekomaths.nekdegres.enDegres(Math.PI / 2)); // Renvoie 90
console.log("45 degrés en radians :", nekomaths.nekdegres.enRadians(45)); // Renvoie 0.785... (Pi/4)

// Fonctions trigonométriques
console.log("Sinus de 90 degrés :", nekomaths.nekdegres.sinus(90)); // Renvoie 1
console.log("Cosinus de 0 degré :", nekomaths.nekdegres.cosinus(0)); // Renvoie 1
console.log("Tangente de 45 degrés :", nekomaths.nekdegres.tangente(45)); // Renvoie 1
```

**Contribution**

Les contributions sont les bienvenues ! Si vous avez des idées de nouvelles fonctions, des améliorations ou des corrections de bugs, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur le dépôt GitHub

**Lien de notre documentation officielle**

https://nekocute-math-tools.lovable.app