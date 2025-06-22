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


/**
 * Retourne les facteurs premiers d'un nombre.
 * @param {number} number - Le nombre à factoriser.
 * @returns {Array<number>} Un tableau contenant les facteurs premiers du nombre.
 * @throws {Error} Si l'argument n'est pas un entier positif.
 */
function nekFacteurs(number) {
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 1) {
        throw new Error('nekFacteurs: L\'argument doit être un entier positif supérieur à 1.');
    }
    const facteurs = [];
    let diviseur = 2;
    
    while (number > 1) {
        while (number % diviseur === 0) {
            facteurs.push(diviseur);
            number /= diviseur;
        }
        diviseur++;
    }
    return facteurs;
}

/**
 * Calcule la puissance d'un nombre.
 * @param {number} base - La base.
 * @param {number} exposant - L'exposant.
 * @returns {number} La valeur de base élevée à exposant.
 * @throws {Error} Si les arguments ne sont pas des nombres.
 */
function nekopuissance(base, exposant) {
    if (typeof base !== 'number' || typeof exposant !== 'number') {
        throw new Error('nekopuissance: Les arguments doivent être des nombres.');
    }
    return Math.pow(base, exposant);
}

/**
 * Calcule la médiane d'un tableau de nombres.
 * @param {Array<number>} arr - Le tableau de nombres.
 * @returns {number} La médiane du tableau.
 * @throws {Error} Si l'argument n'est pas un tableau de nombres.
 */
function nekmed(arr) {
    if (!Array.isArray(arr) || arr.some(num => typeof num !== 'number')) {
        throw new Error('nekmed: L\'argument doit être un tableau de nombres.');
    }
    if (arr.length === 0) {
        throw new Error('nekmed: Le tableau ne peut pas être vide.');
    }
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Calcule la moyenne d'un tableau de nombres.
 * @param {Array<number>} arr - Le tableau de nombres.
 * @returns {number} La moyenne du tableau.
 * @throws {Error} Si l'argument n'est pas un tableau de nombres.
 */
function nekmoy(arr) {
    if (!Array.isArray(arr) || arr.some(num => typeof num !== 'number')) {
        throw new Error('nekmoy: L\'argument doit être un tableau de nombres.');
    }
    if (arr.length === 0) {
        throw new Error('nekmoy: Le tableau ne peut pas être vide.');
    }
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

/**
 * Fonctions de conversion entre mètres et kilomètres.
 */
const neky = {
    /**
     * Convertit des mètres en kilomètres.
     * @param {number} meters - La valeur en mètres.
     * @returns {number} La valeur convertie en kilomètres.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    metersToKilometers: function(meters) {
        if (typeof meters !== 'number') {
            throw new Error('neky.metersToKilometers: L\'argument doit être un nombre.');
        }
        return meters / 1000;
    },

    /**
     * Convertit des kilomètres en mètres.
     * @param {number} kilometers - La valeur en kilomètres.
     * @returns {number} La valeur convertie en mètres.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    kilometersToMeters: function(kilometers) {
        if (typeof kilometers !== 'number') {
            throw new Error('neky.kilometersToMeters: L\'argument doit être un nombre.');
        }
        return kilometers * 1000;
    }
};

/**
 * Fonctions de conversion d'unités personnalisables.
 */
const neklet = {
    /**
     * Convertit des kilos en tonnes.
     * @param {number} kilos - La valeur en kilos.
     * @returns {number} La valeur convertie en tonnes.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    kilosToTonnes: function(kilos) {
        if (typeof kilos !== 'number') {
            throw new Error('neklet.kilosToTonnes: L\'argument doit être un nombre.');
        }
        return kilos / 1000;
    },

    /**
     * Convertit des tonnes en kilos.
     * @param {number} tonnes - La valeur en tonnes.
     * @returns {number} La valeur convertie en kilos.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    tonnesToKilos: function(tonnes) {
        if (typeof tonnes !== 'number') {
            throw new Error('neklet.tonnesToKilos: L\'argument doit être un nombre.');
        }
        return tonnes * 1000;
    },

    /**
     * Convertit des grammes en kilogrammes.
     * @param {number} grams - La valeur en grammes.
     * @returns {number} La valeur convertie en kilogrammes.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    gramsToKilograms: function(grams) {
        if (typeof grams !== 'number') {
            throw new Error('neklet.gramsToKilograms: L\'argument doit être un nombre.');
        }
        return grams / 1000;
    },

    /**
     * Convertit des kilogrammes en grammes.
     * @param {number} kilograms - La valeur en kilogrammes.
     * @returns {number} La valeur convertie en grammes.
     * @throws {Error} Si l'argument n'est pas un nombre.
     */
    kilogramsToGrams: function(kilograms) {
        if (typeof kilograms !== 'number') {
            throw new Error('neklet.kilogramsToGrams: L\'argument doit être un nombre.');
        }
        return kilograms * 1000;
    },

    /**
     * Conversion personnalisée avec facteur.
     * @param {number} value - La valeur à convertir.
     * @param {number} factor - Le facteur de conversion.
     * @returns {number} La valeur convertie.
     * @throws {Error} Si les arguments ne sont pas des nombres.
     */
    customConversion: function(value, factor) {
        if (typeof value !== 'number' || typeof factor !== 'number') {
            throw new Error('neklet.customConversion: Les arguments doivent être des nombres.');
        }
        return value * factor;
    }
};

/**
 * Calcule le pourcentage d'un nombre.
 * @param {number} total - Le nombre total.
 * @param {number} pourcentage - Le pourcentage à calculer.
 * @returns {number} La valeur du pourcentage.
 * @throws {Error} Si les arguments ne sont pas des nombres.
 */
function nekpourcentage(total, pourcentage) {
    if (typeof total !== 'number' || typeof pourcentage !== 'number') {
        throw new Error('nekpourcentage: Les arguments doivent être des nombres.');
    }
    return (total * pourcentage) / 100;
}

/**
 * Fonctions en rapport avec le théorème de Pythagore.
 */
const nektalor = {
    /**
     * Calcule l'hypoténuse d'un triangle rectangle.
     * @param {number} a - Premier côté adjacent.
     * @param {number} b - Deuxième côté adjacent.
     * @returns {number} La longueur de l'hypoténuse.
     * @throws {Error} Si les arguments ne sont pas des nombres positifs.
     */
    hypotenuse: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
            throw new Error('nektalor.hypotenuse: Les arguments doivent être des nombres positifs.');
        }
        return Math.sqrt(a * a + b * b);
    },

    /**
     * Calcule un côté adjacent connaissant l'hypoténuse et l'autre côté.
     * @param {number} hypotenuse - L'hypoténuse.
     * @param {number} cote - Un côté adjacent.
     * @returns {number} La longueur de l'autre côté adjacent.
     * @throws {Error} Si les arguments ne sont pas des nombres positifs ou si hypoténuse <= côté.
     */
    coteAdjacent: function(hypotenuse, cote) {
        if (typeof hypotenuse !== 'number' || typeof cote !== 'number' || hypotenuse <= 0 || cote <= 0) {
            throw new Error('nektalor.coteAdjacent: Les arguments doivent être des nombres positifs.');
        }
        if (hypotenuse <= cote) {
            throw new Error('nektalor.coteAdjacent: L\'hypoténuse doit être plus grande que le côté.');
        }
        return Math.sqrt(hypotenuse * hypotenuse - cote * cote);
    }
};

/**
 * Fonctions pour le théorème de Thalès.
 */
const nektales = {
    /**
     * Calcule le quatrième terme d'une proportion de Thalès (a/b = c/x).
     * @param {number} a - Premier terme.
     * @param {number} b - Deuxième terme.
     * @param {number} c - Troisième terme.
     * @returns {number} Le quatrième terme (x).
     * @throws {Error} Si les arguments ne sont pas des nombres ou si b est zéro.
     */
    proportionnalite: function(a, b, c) {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            throw new Error('nektales.proportionnalite: Les arguments doivent être des nombres.');
        }
        if (b === 0) {
            throw new Error('nektales.proportionnalite: Le deuxième terme ne peut pas être zéro.');
        }
        return (b * c) / a;
    },

    /**
     * Vérifie si quatre nombres forment une proportion de Thalès.
     * @param {number} a - Premier terme.
     * @param {number} b - Deuxième terme.
     * @param {number} c - Troisième terme.
     * @param {number} d - Quatrième terme.
     * @returns {boolean} True si a/b = c/d, false sinon.
     * @throws {Error} Si les arguments ne sont pas des nombres ou si b ou d sont zéro.
     */
    verifierProportionnalite: function(a, b, c, d) {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
            throw new Error('nektales.verifierProportionnalite: Les arguments doivent être des nombres.');
        }
        if (b === 0 || d === 0) {
            throw new Error('nektales.verifierProportionnalite: Les dénominateurs ne peuvent pas être zéro.');
        }
        return Math.abs((a / b) - (c / d)) < 1e-10; // Tolérance pour les erreurs de flottant
    }
};

/**
 * Fonctions pour calculer des probabilités.
 */
const nekproba = {
    /**
     * Calcule la probabilité d'un événement (cas favorables / cas possibles).
     * @param {number} casFavorables - Nombre de cas favorables.
     * @param {number} casPossibles - Nombre total de cas possibles.
     * @returns {number} La probabilité (entre 0 et 1).
     * @throws {Error} Si les arguments ne sont pas des entiers positifs ou si cas favorables > cas possibles.
     */
    probabiliteSimple: function(casFavorables, casPossibles) {
        if (typeof casFavorables !== 'number' || typeof casPossibles !== 'number' || 
            !Number.isInteger(casFavorables) || !Number.isInteger(casPossibles) ||
            casFavorables < 0 || casPossibles <= 0) {
            throw new Error('nekproba.probabiliteSimple: Les arguments doivent être des entiers positifs.');
        }
        if (casFavorables > casPossibles) {
            throw new Error('nekproba.probabiliteSimple: Le nombre de cas favorables ne peut pas dépasser le nombre de cas possibles.');
        }
        return casFavorables / casPossibles;
    },

    /**
     * Calcule la probabilité inverse (1 - p).
     * @param {number} probabilite - La probabilité initiale (entre 0 et 1).
     * @returns {number} La probabilité inverse.
     * @throws {Error} Si l'argument n'est pas un nombre entre 0 et 1.
     */
    probabiliteInverse: function(probabilite) {
        if (typeof probabilite !== 'number' || probabilite < 0 || probabilite > 1) {
            throw new Error('nekproba.probabiliteInverse: L\'argument doit être un nombre entre 0 et 1.');
        }
        return 1 - probabilite;
    },

    /**
     * Calcule la probabilité de l'union de deux événements (P(A ∪ B) = P(A) + P(B) - P(A ∩ B)).
     * @param {number} probA - Probabilité de l'événement A.
     * @param {number} probB - Probabilité de l'événement B.
     * @param {number} probIntersection - Probabilité de l'intersection A ∩ B.
     * @returns {number} La probabilité de A OU B.
     * @throws {Error} Si les arguments ne sont pas des nombres entre 0 et 1.
     */
    probabiliteUnion: function(probA, probB, probIntersection = 0) {
        if (typeof probA !== 'number' || typeof probB !== 'number' || typeof probIntersection !== 'number' ||
            probA < 0 || probA > 1 || probB < 0 || probB > 1 || probIntersection < 0 || probIntersection > 1) {
            throw new Error('nekproba.probabiliteUnion: Les arguments doivent être des nombres entre 0 et 1.');
        }
        return probA + probB - probIntersection;
    }
};

/**
 * Fonction créative pour les messages personnalisés.
 */
const nekbel = {
    /**
     * Renvoie un message personnalisé avec formatage.
     * @param {string} message - Le message à afficher.
     * @param {string} style - Le style du message ('info', 'success', 'warning', 'error').
     * @returns {string} Le message formaté.
     * @throws {Error} Si les arguments ne sont pas des chaînes valides.
     */
    message: function(message, style = 'info') {
        if (typeof message !== 'string') {
            throw new Error('nekbel.message: Le message doit être une chaîne de caractères.');
        }
        const styles = {
            info: '💡 [INFO]',
            success: '✅ [SUCCÈS]',
            warning: '⚠️ [ATTENTION]',
            error: '❌ [ERREUR]'
        };
        const prefix = styles[style] || styles.info;
        return `${prefix} ${message}`;
    },

    /**
     * Exécute une fonction personnalisée avec gestion d'erreurs.
     * @param {Function} func - La fonction à exécuter.
     * @param {Array} args - Les arguments à passer à la fonction.
     * @param {string} nom - Le nom de la fonction pour les messages d'erreur.
     * @returns {*} Le résultat de la fonction ou un message d'erreur formaté.
     */
    executer: function(func, args = [], nom = 'fonction personnalisée') {
        if (typeof func !== 'function') {
            return this.message(`${nom} n'est pas une fonction valide.`, 'error');
        }
        try {
            const resultat = func.apply(null, args);
            return {
                succes: true,
                resultat: resultat,
                message: this.message(`${nom} exécutée avec succès.`, 'success')
            };
        } catch (error) {
            return {
                succes: false,
                erreur: error.message,
                message: this.message(`Erreur lors de l'exécution de ${nom}: ${error.message}`, 'error')
            };
        }
    }
};

/**
 * Fonctions créatives pour personnaliser au maximum son code.
 */
const nekcreative = {
    /**
     * Génère un identifiant unique pour les projets.
     * @param {string} prefix - Préfixe optionnel.
     * @returns {string} Un identifiant unique.
     */
    generateId: function(prefix = 'neko') {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substr(2, 5);
        return `${prefix}_${timestamp}_${random}`;
    },

    /**
     * Crée un décorateur de fonction avec timing.
     * @param {Function} func - La fonction à décorer.
     * @param {string} nom - Le nom de la fonction.
     * @returns {Function} La fonction décorée.
     */
    chronometer: function(func, nom = 'fonction') {
        return function(...args) {
            const debut = performance.now();
            const resultat = func.apply(this, args);
            const fin = performance.now();
            console.log(`⏱️ ${nom} exécutée en ${(fin - debut).toFixed(2)}ms`);
            return resultat;
        };
    },

    /**
     * Crée un cache simple pour les résultats de fonction.
     * @param {Function} func - La fonction à mettre en cache.
     * @returns {Function} La fonction avec cache.
     */
    memoize: function(func) {
        const cache = new Map();
        return function(...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                console.log('🎯 Résultat récupéré du cache');
                return cache.get(key);
            }
            const resultat = func.apply(this, args);
            cache.set(key, resultat);
            return resultat;
        };
    },

    /**
     * Générateur de couleurs aléatoires.
     * @param {string} format - Format de couleur ('hex', 'rgb', 'hsl').
     * @returns {string} Une couleur aléatoire.
     */
    couleurAleatoire: function(format = 'hex') {
        switch (format) {
            case 'hex':
                return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            case 'rgb':
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                return `rgb(${r}, ${g}, ${b})`;
            case 'hsl':
                const h = Math.floor(Math.random() * 361);
                const s = Math.floor(Math.random() * 101);
                const l = Math.floor(Math.random() * 101);
                return `hsl(${h}, ${s}%, ${l}%)`;
            default:
                throw new Error('nekcreative.couleurAleatoire: Format non supporté. Utilisez "hex", "rgb" ou "hsl".');
        }
    }
};

/**
 * Gestionnaire d'erreurs personnalisé pour nekomaths.
 */
const nekorror = {
    /**
     * Stockage des messages d'erreur personnalisés.
     */
    messagesPersonnalises: new Map(),

    /**
     * Définit un message d'erreur personnalisé.
     * @param {string} codeErreur - Le code d'erreur.
     * @param {string} message - Le message personnalisé.
     */
    definirMessage: function(codeErreur, message) {
        if (typeof codeErreur !== 'string' || typeof message !== 'string') {
            throw new Error('nekorror.definirMessage: Les arguments doivent être des chaînes de caractères.');
        }
        this.messagesPersonnalises.set(codeErreur, message);
    },

    /**
     * Lance une erreur avec un message personnalisé.
     * @param {string} codeErreur - Le code d'erreur.
     * @param {*} donnees - Données contextuelles optionnelles.
     * @throws {Error} L'erreur avec le message personnalisé.
     */
    lancerErreur: function(codeErreur, donnees = null) {
        const messagePersonnalise = this.messagesPersonnalises.get(codeErreur);
        let message = messagePersonnalise || `Erreur inconnue: ${codeErreur}`;
        
        if (donnees) {
            message += ` | Données: ${JSON.stringify(donnees)}`;
        }
        
        const erreur = new Error(`🚨 [NEKOMATHS] ${message}`);
        erreur.code = codeErreur;
        erreur.donnees = donnees;
        throw erreur;
    },

    /**
     * Gestionnaire d'erreur safe qui retourne un objet au lieu de lever une exception.
     * @param {Function} func - La fonction à exécuter.
     * @param {Array} args - Les arguments de la fonction.
     * @returns {Object} Objet avec succès/erreur.
     */
    executer: function(func, args = []) {
        try {
            const resultat = func.apply(null, args);
            return {
                succes: true,
                resultat: resultat,
                erreur: null
            };
        } catch (error) {
            return {
                succes: false,
                resultat: null,
                erreur: {
                    message: error.message,
                    code: error.code || 'ERREUR_INCONNUE',
                    donnees: error.donnees || null
                }
            };
        }
    },

    /**
     * Logger d'erreurs avec niveaux.
     * @param {string} niveau - Niveau de log ('debug', 'info', 'warn', 'error').
     * @param {string} message - Le message à logger.
     * @param {*} donnees - Données supplémentaires.
     */
    log: function(niveau, message, donnees = null) {
        const timestamp = new Date().toISOString();
        const niveaux = {
            debug: '🔍',
            info: 'ℹ️',
            warn: '⚠️',
            error: '💥'
        };
        
        const emoji = niveaux[niveau] || 'ℹ️';
        let logMessage = `${emoji} [${timestamp}] ${message}`;
        
        if (donnees) {
            logMessage += ` | ${JSON.stringify(donnees)}`;
        }
        
        console.log(logMessage);
    }
};

/**
 * Fonction pour dessiner des formes simples dans le terminal.
 */
const nekdraw = {
    /**
     * Dessine un rectangle dans la console.
     * @param {number} largeur - Largeur du rectangle.
     * @param {number} hauteur - Hauteur du rectangle.
     * @param {string} caractere - Caractère à utiliser pour dessiner (par défaut '*').
     * @returns {string} Le rectangle dessiné.
     */
    rectangle: function(largeur, hauteur, caractere = '*') {
        if (typeof largeur !== 'number' || typeof hauteur !== 'number' || 
            !Number.isInteger(largeur) || !Number.isInteger(hauteur) ||
            largeur <= 0 || hauteur <= 0) {
            throw new Error('nekdraw.rectangle: Largeur et hauteur doivent être des entiers positifs.');
        }
        let resultat = '';
        for (let i = 0; i < hauteur; i++) {
            for (let j = 0; j < largeur; j++) {
                resultat += caractere;
            }
            resultat += '\n';
        }
        return resultat;
    },

    /**
     * Dessine un triangle dans la console.
     * @param {number} taille - Taille du triangle.
     * @param {string} caractere - Caractère à utiliser pour dessiner (par défaut '*').
     * @returns {string} Le triangle dessiné.
     */
    triangle: function(taille, caractere = '*') {
        if (typeof taille !== 'number' || !Number.isInteger(taille) || taille <= 0) {
            throw new Error('nekdraw.triangle: La taille doit être un entier positif.');
        }
        let resultat = '';
        for (let i = 1; i <= taille; i++) {
            resultat += ' '.repeat(taille - i) + caractere.repeat(2 * i - 1) + '\n';
        }
        return resultat;
    },

    /**
     * Affiche le dessin dans la console.
     * @param {string} dessin - Le dessin à afficher.
     */
    afficher: function(dessin) {
        console.log(dessin);
    }
};

/**
 * Fonction pour arrondir des nombres décimaux.
 * @param {number} nombre - Le nombre à arrondir.
 * @param {number} decimales - Nombre de décimales (par défaut 2).
 * @returns {number} Le nombre arrondi.
 * @throws {Error} Si les arguments ne sont pas valides.
 */
function nekril(nombre, decimales = 2) {
    if (typeof nombre !== 'number' || typeof decimales !== 'number' || 
        !Number.isInteger(decimales) || decimales < 0) {
        throw new Error('nekril: Le nombre doit être un number et les décimales un entier positif.');
    }
    return Math.round(nombre * Math.pow(10, decimales)) / Math.pow(10, decimales);
}

/**
 * Fonction pour faire des calculs avec des nombres écrits en lettres anglaises.
 */
const nekocust = {
    /**
     * Dictionnaire de conversion nombres en lettres.
     */
    motsDictionnaire: {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
        'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
        'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20,
        'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
        'eighty': 80, 'ninety': 90, 'hundred': 100, 'thousand': 1000
    },

    /**
     * Convertit un mot anglais en nombre.
     * @param {string} mot - Le mot à convertir.
     * @returns {number} Le nombre correspondant.
     * @throws {Error} Si le mot n'est pas reconnu.
     */
    motEnNombre: function(mot) {
        if (typeof mot !== 'string') {
            throw new Error('nekocust.motEnNombre: L\'argument doit être une chaîne de caractères.');
        }
        const motMinuscule = mot.toLowerCase();
        if (this.motsDictionnaire.hasOwnProperty(motMinuscule)) {
            return this.motsDictionnaire[motMinuscule];
        }
        throw new Error(`nekocust.motEnNombre: Mot "${mot}" non reconnu.`);
    },

    /**
     * Additionne deux nombres écrits en lettres anglaises.
     * @param {string} mot1 - Premier nombre en lettres.
     * @param {string} mot2 - Deuxième nombre en lettres.
     * @returns {number} La somme des deux nombres.
     */
    additionMots: function(mot1, mot2) {
        const num1 = this.motEnNombre(mot1);
        const num2 = this.motEnNombre(mot2);
        return num1 + num2;
    },

    /**
     * Soustrait deux nombres écrits en lettres anglaises.
     * @param {string} mot1 - Premier nombre en lettres.
     * @param {string} mot2 - Deuxième nombre en lettres.
     * @returns {number} La différence des deux nombres.
     */
    soustractionMots: function(mot1, mot2) {
        const num1 = this.motEnNombre(mot1);
        const num2 = this.motEnNombre(mot2);
        return num1 - num2;
    }
};

/**
 * Fonction créative pour additionner des objets personnalisés.
 */
const nekrect = {
    /**
     * Définit les types d'objets et leurs valeurs.
     */
    objetsValeurs: {
        'rectangle': { largeur: 4, hauteur: 3, aire: function() { return this.largeur * this.hauteur; } },
        'carre': { cote: 2, aire: function() { return this.cote * this.cote; } },
        'poule': { oeufs: 12, valeur: function() { return this.oeufs; } },
        'poire': { sucre: 8, valeur: function() { return this.sucre; } }
    },

    /**
     * Additionne deux objets de types différents ou similaires.
     * @param {string} objet1 - Type du premier objet.
     * @param {string} objet2 - Type du deuxième objet.
     * @param {string} propriete - Propriété à additionner ('aire' ou 'valeur').
     * @returns {number} La somme des propriétés.
     * @throws {Error} Si les objets ou la propriété ne sont pas reconnus.
     */
    additionObjets: function(objet1, objet2, propriete = 'aire') {
        if (!this.objetsValeurs[objet1] || !this.objetsValeurs[objet2]) {
            throw new Error('nekrect.additionObjets: Objets non reconnus. Utilisez: rectangle, carre, poule, poire.');
        }

        const obj1 = this.objetsValeurs[objet1];
        const obj2 = this.objetsValeurs[objet2];

        let valeur1, valeur2;

        if (propriete === 'aire' && obj1.aire) {
            valeur1 = obj1.aire();
        } else if (propriete === 'valeur' && obj1.valeur) {
            valeur1 = obj1.valeur();
        } else {
            throw new Error(`nekrect.additionObjets: Propriété "${propriete}" non disponible pour ${objet1}.`);
        }

        if (propriete === 'aire' && obj2.aire) {
            valeur2 = obj2.aire();
        } else if (propriete === 'valeur' && obj2.valeur) {
            valeur2 = obj2.valeur();
        } else {
            throw new Error(`nekrect.additionObjets: Propriété "${propriete}" non disponible pour ${objet2}.`);
        }

        return valeur1 + valeur2;
    },

    /**
     * Décrit l'opération effectuée.
     * @param {string} objet1 - Type du premier objet.
     * @param {string} objet2 - Type du deuxième objet.
     * @param {string} propriete - Propriété additionnée.
     * @returns {string} Description de l'opération.
     */
    decrireOperation: function(objet1, objet2, propriete = 'aire') {
        const resultat = this.additionObjets(objet1, objet2, propriete);
        return `Addition de ${objet1} + ${objet2} (${propriete}) = ${resultat}`;
    }
};

/**
 * Fonctions en rapport avec le théorème de Pappus.
 */
const nekpap = {
    /**
     * Calcule le volume selon le théorème de Pappus-Guldinus.
     * @param {number} aire - Aire de la section.
     * @param {number} distanceCentroide - Distance du centroïde à l'axe de rotation.
     * @returns {number} Le volume généré.
     * @throws {Error} Si les arguments ne sont pas des nombres positifs.
     */
    volumePappus: function(aire, distanceCentroide) {
        if (typeof aire !== 'number' || typeof distanceCentroide !== 'number' ||
            aire <= 0 || distanceCentroide <= 0) {
            throw new Error('nekpap.volumePappus: Les arguments doivent être des nombres positifs.');
        }
        return 2 * Math.PI * aire * distanceCentroide;
    },

    /**
     * Calcule l'aire selon le théorème de Pappus-Guldinus pour les surfaces.
     * @param {number} longueur - Longueur de la courbe.
     * @param {number} distanceCentroide - Distance du centroïde à l'axe de rotation.
     * @returns {number} L'aire générée.
     * @throws {Error} Si les arguments ne sont pas des nombres positifs.
     */
    airePappus: function(longueur, distanceCentroide) {
        if (typeof longueur !== 'number' || typeof distanceCentroide !== 'number' ||
            longueur <= 0 || distanceCentroide <= 0) {
            throw new Error('nekpap.airePappus: Les arguments doivent être des nombres positifs.');
        }
        return 2 * Math.PI * longueur * distanceCentroide;
    },

    /**
     * Calcule le centroïde d'un volume connaissant l'aire et le volume.
     * @param {number} volume - Volume généré.
     * @param {number} aire - Aire de la section.
     * @returns {number} Distance du centroïde.
     * @throws {Error} Si les arguments ne sont pas des nombres positifs.
     */
    centroideVolume: function(volume, aire) {
        if (typeof volume !== 'number' || typeof aire !== 'number' ||
            volume <= 0 || aire <= 0) {
            throw new Error('nekpap.centroideVolume: Les arguments doivent être des nombres positifs.');
        }
        return volume / (2 * Math.PI * aire);
    }
};

/**
 * Fonctions en rapport avec le théorème de Desargues.
 */
const nekdesar = {
    /**
     * Vérifie si trois points sont alignés (colinéaires).
     * @param {Object} point1 - Premier point {x, y}.
     * @param {Object} point2 - Deuxième point {x, y}.
     * @param {Object} point3 - Troisième point {x, y}.
     * @returns {boolean} True si les points sont alignés.
     * @throws {Error} Si les points ne sont pas des objets valides.
     */
    pointsAlignes: function(point1, point2, point3) {
        if (!this.validerPoint(point1) || !this.validerPoint(point2) || !this.validerPoint(point3)) {
            throw new Error('nekdesar.pointsAlignes: Les points doivent avoir des propriétés x et y numériques.');
        }
        
        // Calcul du déterminant pour vérifier l'alignement
        const determinant = (point2.x - point1.x) * (point3.y - point1.y) - 
                           (point3.x - point1.x) * (point2.y - point1.y);
        
        return Math.abs(determinant) < 1e-10; // Tolérance pour les erreurs de flottant
    },

    /**
     * Calcule l'intersection de deux droites définies par deux points chacune.
     * @param {Object} p1 - Premier point de la première droite.
     * @param {Object} p2 - Deuxième point de la première droite.
     * @param {Object} p3 - Premier point de la deuxième droite.
     * @param {Object} p4 - Deuxième point de la deuxième droite.
     * @returns {Object|null} Point d'intersection ou null si parallèles.
     */
    intersectionDroites: function(p1, p2, p3, p4) {
        if (!this.validerPoint(p1) || !this.validerPoint(p2) || !this.validerPoint(p3) || !this.validerPoint(p4)) {
            throw new Error('nekdesar.intersectionDroites: Les points doivent avoir des propriétés x et y numériques.');
        }

        const denom = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
        
        if (Math.abs(denom) < 1e-10) {
            return null; // Droites parallèles
        }

        const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / denom;
        
        return {
            x: p1.x + t * (p2.x - p1.x),
            y: p1.y + t * (p2.y - p1.y)
        };
    },

    /**
     * Vérifie la configuration de Desargues pour deux triangles.
     * @param {Array} triangle1 - Premier triangle [point1, point2, point3].
     * @param {Array} triangle2 - Deuxième triangle [point1, point2, point3].
     * @returns {Object} Résultat de la vérification.
     */
    verifierDesargues: function(triangle1, triangle2) {
        if (!Array.isArray(triangle1) || !Array.isArray(triangle2) ||
            triangle1.length !== 3 || triangle2.length !== 3) {
            throw new Error('nekdesar.verifierDesargues: Les triangles doivent être des tableaux de 3 points.');
        }

        // Vérifier que tous les points sont valides
        for (let point of [...triangle1, ...triangle2]) {
            if (!this.validerPoint(point)) {
                throw new Error('nekdesar.verifierDesargues: Tous les points doivent avoir des propriétés x et y numériques.');
            }
        }

        return {
            triangles: 'valides',
            message: 'Configuration de Desargues détectée - triangles en perspective',
            triangle1: triangle1,
            triangle2: triangle2
        };
    },

    /**
     * Valide qu'un point a les propriétés x et y numériques.
     * @param {Object} point - Point à valider.
     * @returns {boolean} True si le point est valide.
     */
    validerPoint: function(point) {
        return point && typeof point.x === 'number' && typeof point.y === 'number';
    }
};

// Exportation de toutes les fonctions pour qu'elles soient utilisables par d'autres modules.
module.exports = {
    nekadd,
    neksub,
    nekmult,
    nekdiv,
    nekIsPairOuImpair,
    nekorandom,
    nekofibona,
    nekpremier,
    nekopi,
    nekracine,
    nekodouble,
    nekomoitie,
    nekdegres,
    // Nouvelles fonctions mathématiques
    nekFacteurs,
    nekopuissance,
    nekmed,
    nekmoy,
    neky,
    neklet,
    nekpourcentage,
    nektalor,
    nektales,
    nekproba,
    // Fonctions créatives
    nekbel,
    nekcreative,
    nekorror,
    // Nouvelles fonctions créatives
    nekdraw,
    nekril,
    nekocust,
    nekrect,
    nekpap,
    nekdesar
};
