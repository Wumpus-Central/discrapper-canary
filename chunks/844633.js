a.d(i, { Z: () => n });
var t = a(475637);
let n = {
    ordinalNumber: (0, a(925300).Z)({
        matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
            return parseInt(e);
        }
    }),
    era: (0, t.Z)({
        matchPatterns: {
            narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
            abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
            wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^av/i, /^ap/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, t.Z)({
        matchPatterns: {
            narrow: /^T?[1234]/i,
            abbreviated: /^[1234](er|ème|e)? trim\.?/i,
            wide: /^[1234](er|ème|e)? trimestre/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (e) {
            return e + 1;
        }
    }),
    month: (0, t.Z)({
        matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
            wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, t.Z)({
        matchPatterns: {
            narrow: /^[lmjvsd]/i,
            short: /^(di|lu|ma|me|je|ve|sa)/i,
            abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
            wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
            any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, t.Z)({
        matchPatterns: {
            narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
            any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
        },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^min/i,
                noon: /^mid/i,
                morning: /mat/i,
                afternoon: /ap/i,
                evening: /soir/i,
                night: /nuit/i
            }
        },
        defaultParseWidth: 'any'
    })
};
