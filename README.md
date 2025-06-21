# nekomaths

Un package Node.js simple et convivial, développé par [nekoclem](https://github.com/nekoclem), offrant des fonctions mathématiques de base et des utilitaires pratiques pour vos projets.

## Installation

Pour installer `nekomaths` dans votre projet, utilisez npm :

```bash
npm install nekomaths
```

**Utilisation**

Importez les fonctions de nekomaths dans votre fichier JavaScript :

```
const nekomaths = require('nekomaths');
// Ou en ES Modules (si votre projet supporte) :
// import nekomaths from 'nekomaths';
```

**Fonctionnalités**
nekomaths offre les fonctions suivantes :

1. Calculs Arithmétiques Simples
Ces fonctions effectuent les opérations mathématiques de base et retournent le résultat.
 * nekadd(a, b) : Additionne deux nombres.
 * neksub(a, b) : Soustrait le deuxième nombre du premier.
 * nekmult(a, b) : Multiplie deux nombres.
 * nekdiv(a, b) : Divise le premier nombre par le deuxième. (Gère la division par zéro).
 * 
```
Exemple d'utilisation :
const nekomaths = require('nekomaths');

// Addition
const sum = nekomaths.nekadd(4, 5); // Renvoie 9
console.log("4 + 5 =", sum); // Affiche dans la console : 4 + 5 = 9

// Soustraction
const difference = nekomaths.neksub(10, 3); // Renvoie 7
console.log("10 - 3 =", difference); // Affiche dans la console : 10 - 3 = 7

// Multiplication
const product = nekomaths.nekmult(6, 7); // Renvoie 42
console.log("6 * 7 =", product); // Affiche dans la console : 6 * 7 = 42

// Division
const quotient = nekomaths.nekdiv(20, 4); // Renvoie 5
console.log("20 / 4 =", quotient); // Affiche dans la console : 20 / 4 = 5

// Gestion de la division par zéro
try {
    nekomaths.nekdiv(10, 0);
} catch (error) {
    console.error(error.message); // Affiche : nekdiv: Division par zéro impossible.
}

// Afficher le résultat dans un projet (par exemple, sur une page web)
// Si vous utilisez un framework comme React, Vue, ou Express :
// const resultForWeb = nekomaths.nekadd(15, 2);
// res.send(`Le résultat est : ${resultForWeb}`); // Exemple pour Express
```

2. Détection de Nombre Pair ou Impair
nekIsPairOuImpair(number) : Vérifie si un nombre est pair ou impair et retourne une phrase explicative en français.

```
Exemple d'utilisation :
const nekomaths = require('nekomaths');

const check1 = nekomaths.nekIsPairOuImpair(7); // Renvoie "Le nombre 7 est impair."
console.log(check1);

const check2 = nekomaths.nekIsPairOuImpair(12); // Renvoie "Le nombre 12 est pair."
console.log(check2);
```

3. Génération de Nombre Aléatoire
nekrandom(min, max) : Génère un nombre entier aléatoire entre min et max (inclus).

```
Exemple d'utilisation :
const nekomaths = require('nekomaths');

// Générer un nombre aléatoire entre 5 et 10 (inclus)
const randomNumber = nekomaths.nekrandom(5, 10);
console.log(`Un nombre aléatoire entre 5 et 10 : ${randomNumber}`); // Exemple: "Un nombre aléatoire entre 5 et 10 : 8"

// Vous pouvez utiliser ce nombre dans votre projet comme bon vous semble.
// Par exemple, l'afficher dans une interface utilisateur.
```
Contribution
Les contributions sont les bienvenues ! Si vous avez des idées de nouvelles fonctions, des améliorations ou des corrections de bugs, n'hésitez pas à ouvrir une issue ou à soumettre une pull request sur le dépôt GitHub.
