// nekomaths/index.js

/**
 * Nekomaths - Un package de fonctions mathématiques simples et utiles.
 * Développé par nekoclem.
 */

/**
 * Additionne deux nombres.
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le deuxième nombre.
 * @returns {number} La somme des deux nombres.
 * @throws {Error} Si les arguments ne sont pas des nombres.
 */
function nekadd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('nekadd: Les arguments doivent être des nombres.');
    }
    return a + b;
}

/**
 * Soustrait le deuxième nombre du premier.
 * @param {number} a - Le nombre duquel soustraire.
 * @param {number} b - Le nombre à soustraire.
 * @returns {number} Le résultat de la soustraction.
 * @throws {Error} Si les arguments ne sont pas des nombres.
 */
function neksub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('neksub: Les arguments doivent être des nombres.');
    }
    return a - b;
}

/**
 * Multiplie deux nombres.
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le deuxième nombre.
 * @returns {number} Le produit des deux nombres.
 * @throws {Error} Si les arguments ne sont pas des nombres.
 */
function nekmult(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('nekmult: Les arguments doivent être des nombres.');
    }
    return a * b;
}

/**
 * Divise le premier nombre par le deuxième.
 * @param {number} a - Le nombre à diviser.
 * @param {number} b - Le diviseur.
 * @returns {number} Le résultat de la division.
 * @throws {Error} Si les arguments ne sont pas des nombres ou si le diviseur est zéro.
 */
function nekdiv(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('nekdiv: Les arguments doivent être des nombres.');
    }
    if (b === 0) {
        throw new Error('nekdiv: Division par zéro impossible.');
    }
    return a / b;
}

/**
 * Vérifie si un nombre est pair ou impair et retourne une chaîne de caractères en français.
 * @param {number} number - Le nombre à vérifier.
 * @returns {string} Une chaîne de caractères indiquant si le nombre est pair ou impair.
 * @throws {Error} Si l'argument n'est pas un nombre.
 */
function nekIsPairOuImpair(number) {
    if (typeof number !== 'number') {
        throw new Error('nekIsPairOuImpair: L\'argument doit être un nombre.');
    }
    // Gérer les nombres décimaux qui pourraient avoir un modulo non entier
    if (!Number.isInteger(number)) {
        return `Le nombre ${number} n'est pas un entier. Il n'est ni pair ni impair.`;
    }
    if (number % 2 === 0) {
        return `Le nombre ${number} est pair.`;
    } else {
        return `Le nombre ${number} est impair.`;
    }
}

/**
 * Génère un nombre entier aléatoire entre deux bornes (min et max incluses).
 * @param {number} min - La borne inférieure (incluse).
 * @param {number} max - La borne supérieure (incluse).
 * @returns {number} Un nombre entier aléatoire.
 * @throws {Error} Si les arguments ne sont pas des nombres ou si min est supérieur à max.
 */
function nekorandom(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('nekorandom: Les arguments min et max doivent être des nombres.');
    }
    if (min > max) {
        throw new Error('nekorandom: La valeur min ne peut pas être supérieure à max.');
    }

    const ceilMin = Math.ceil(min);
    const floorMax = Math.floor(max);

    return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
}

// --- NOUVELLES FONCTIONS AJOUTÉES ---

/**
 * Retourne le n-ième nombre de la séquence de Fibonacci.
 * @param {number} n - L'index du nombre de Fibonacci à retourner (n >= 0).
 * @returns {number} Le n-ième nombre de Fibonacci.
 * @throws {Error} Si l'argument n'est pas un entier non négatif.
 */
function nekofibona(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        throw new Error('nekofibona: L\'argument doit être un entier non négatif.');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

/**
 * Vérifie si un nombre entier est premier.
 * @param {number} number - Le nombre à vérifier.
 * @returns {boolean} True si le nombre est premier, false sinon.
 * @throws {Error} Si l'argument n'est pas un entier.
 */
function nekpremier(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error('nekpremier: L\'argument doit être un entier.');
    }
    if (number <= 1) return false;
    if (number <= 3) return true; // 2 et 3 sont premiers
    if (number % 2 === 0 || number % 3 === 0) return false; // Optimisation pour les multiples de 2 et 3

    // Vérifie les diviseurs à partir de 5, en sautant les multiples de 2 et 3
    for (let i = 5; i * i <= number; i = i + 6) {
        if (number % i === 0 || number % (i + 2) === 0)
            return false;
    }
    return true;
}

/**
 * Fournit des constantes mathématiques liées à Pi.
 */
const nekopi = {
    /**
     * La valeur de Pi (Math.PI).
     * @type {number}
     */
    valeur: Math.PI,

    /**
     * Calcule la circonférence d'un cercle.
     * @param {number} rayon - Le rayon du cercle.
     * @returns {number} La circonférence.
     * @throws {Error} Si l'argument n'est pas un nombre positif.
     */
    circonference: function(rayon) {
        if (typeof rayon !== 'number' || rayon < 0) {
            throw new Error('nekopi.circonference: Le rayon doit être un nombre positif.');
        }
        return 2 * Math.PI * rayon;
    },

    /**
     * Calcule l'aire d'un cercle.
     * @param {number} rayon - Le rayon du cercle.
     * @returns {number} L'aire.
     * @throws {Error} Si l'argument n'est pas un nombre positif.
     */
    aireCercle: function(rayon) {
        if (typeof rayon !== 'number' || rayon < 0) {
            throw new Error('nekopi.aireCercle: Le rayon doit être un nombre positif.');
        }
        return Math.PI * rayon * rayon;
    },

    /**
     * Convertit des degrés en radians.
     * @param {number} degres - La valeur en degrés.
     * @returns {number} La valeur en radians.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    degresEnRadians: function(degres) {
        if (typeof degres !== 'number') {
            throw new Error('nekopi.degresEnRadians: L\'argument doit être un nombre.');
        }
        return degres * (Math.PI / 180);
    },

    /**
     * Convertit des radians en degrés.
     * @param {number} radians - La valeur en radians.
     * @returns {number} La valeur en degrés.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    radiansEnDegres: function(radians) {
        if (typeof radians !== 'number') {
            throw new Error('nekopi.radiansEnDegres: L\'argument doit être un nombre.');
        }
        return radians * (180 / Math.PI);
    }
};

/**
 * Calcule la racine carrée d'un nombre.
 * @param {number} number - Le nombre.
 * @returns {number} La racine carrée du nombre.
 * @throws {Error} Si l'argument n'est pas un nombre non négatif.
 */
function nekracine(number) {
    if (typeof number !== 'number' || number < 0) {
        throw new Error('nekracine: L\'argument doit être un nombre non négatif.');
    }
    return Math.sqrt(number);
}

/**
 * Renvoie le double d'un nombre.
 * @param {number} number - Le nombre à doubler.
 * @returns {number} Le double du nombre.
 * @throws {Error} Si l'argument n'est pas un nombre.
 */
function nekodouble(number) {
    if (typeof number !== 'number') {
        throw new Error('nekodouble: L\'argument doit être un nombre.');
    }
    return number * 2;
}

/**
 * Renvoie la moitié d'un nombre.
 * @param {number} number - Le nombre à diviser par deux.
 * @returns {number} La moitié du nombre.
 * @throws {Error} Si l'argument n'est pas un nombre.
 */
function nekomoitie(number) {
    if (typeof number !== 'number') {
        throw new Error('nekomoitie: L\'argument doit être un nombre.');
    }
    return number / 2;
}

/**
 * Fonctions pour les calculs avec des degrés (angles).
 */
const nekdegres = {
    /**
     * Convertit des radians en degrés.
     * (Dupliqué de nekopi pour un accès plus direct si l'utilisateur cherche juste les degrés)
     * @param {number} radians - La valeur en radians.
     * @returns {number} La valeur en degrés.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    enDegres: function(radians) {
        if (typeof radians !== 'number') {
            throw new Error('nekdegres.enDegres: L\'argument doit être un nombre.');
        }
        return radians * (180 / Math.PI);
    },

    /**
     * Convertit des degrés en radians.
     * (Dupliqué de nekopi pour un accès plus direct si l'utilisateur cherche juste les degrés)
     * @param {number} degres - La valeur en degrés.
     * @returns {number} La valeur en radians.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    enRadians: function(degres) {
        if (typeof degres !== 'number') {
            throw new Error('nekdegres.enRadians: L\'argument doit être un nombre.');
        }
        return degres * (Math.PI / 180);
    },

    /**
     * Calcule le sinus d'un angle en degrés.
     * @param {number} degres - L'angle en degrés.
     * @returns {number} Le sinus de l'angle.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    sinus: function(degres) {
        if (typeof degres !== 'number') {
            throw new Error('nekdegres.sinus: L\'argument doit être un nombre.');
        }
        return Math.sin(this.enRadians(degres));
    },

    /**
     * Calcule le cosinus d'un angle en degrés.
     * @param {number} degres - L'angle en degrés.
     * @returns {number} Le cosinus de l'angle.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    cosinus: function(degres) {
        if (typeof degres !== 'number') {
            throw new Error('nekdegres.cosinus: L\'argument doit être un nombre.');
        }
        return Math.cos(this.enRadians(degres));
    },

    /**
     * Calcule la tangente d'un angle en degrés.
     * @param {number} degres - L'angle en degrés.
     * @returns {number} La tangente de l'angle.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    tangente: function(degres) {
        if (typeof degres !== 'number') {
            throw new Error('nekdegres.tangente: L\'argument doit être un nombre.');
        }
        return Math.tan(this.enRadians(degres));
    },

    // Vous pouvez ajouter d'autres fonctions trigonométriques inverses ou spécifiques aux triangles ici
};


// Exportation de toutes les fonctions pour qu'elles soient utilisables par d'autres modules.
module.exports = {
    nekadd,
    neksub,
    nekmult,
    nekdiv,
    nekIsPairOuImpair,
    nekorandom,
    nekofibona,   // Nouvelle fonction
    nekpremier,   // Nouvelle fonction
    nekopi,       // Nouvel objet de constantes et fonctions liées à Pi
    nekracine,    // Nouvelle fonction
    nekodouble,   // Nouvelle fonction
    nekomoitie,   // Nouvelle fonction
    nekdegres,    // Nouvel objet de fonctions liées aux degrés
};
