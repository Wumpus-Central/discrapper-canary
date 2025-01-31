function e(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var t = n % 10,
        e = n % 100;
    return 1 === t && 11 !== e ? i.singularNominative.replace('{{count}}', String(n)) : t >= 2 && t <= 4 && (e < 10 || e > 20) ? i.singularGenitive.replace('{{count}}', String(n)) : i.pluralGenitive.replace('{{count}}', String(n));
}
function a(i) {
    return function (n, t) {
        return t && t.addSuffix ? (t.comparison && t.comparison > 0 ? (i.future ? e(i.future, n) : 'за ' + e(i.regular, n)) : i.past ? e(i.past, n) : e(i.regular, n) + ' тому') : e(i.regular, n);
    };
}
t.d(n, { Z: () => u });
var r = {
    lessThanXSeconds: a({
        regular: {
            one: 'менше секунди',
            singularNominative: 'менше {{count}} секунди',
            singularGenitive: 'менше {{count}} секунд',
            pluralGenitive: 'менше {{count}} секунд'
        },
        future: {
            one: 'менше, ніж за секунду',
            singularNominative: 'менше, ніж за {{count}} секунду',
            singularGenitive: 'менше, ніж за {{count}} секунди',
            pluralGenitive: 'менше, ніж за {{count}} секунд'
        }
    }),
    xSeconds: a({
        regular: {
            singularNominative: '{{count}} секунда',
            singularGenitive: '{{count}} секунди',
            pluralGenitive: '{{count}} секунд'
        },
        past: {
            singularNominative: '{{count}} секунду тому',
            singularGenitive: '{{count}} секунди тому',
            pluralGenitive: '{{count}} секунд тому'
        },
        future: {
            singularNominative: 'за {{count}} секунду',
            singularGenitive: 'за {{count}} секунди',
            pluralGenitive: 'за {{count}} секунд'
        }
    }),
    halfAMinute: function (i, n) {
        return n && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'за півхвилини' : 'півхвилини тому') : 'півхвилини';
    },
    lessThanXMinutes: a({
        regular: {
            one: 'менше хвилини',
            singularNominative: 'менше {{count}} хвилини',
            singularGenitive: 'менше {{count}} хвилин',
            pluralGenitive: 'менше {{count}} хвилин'
        },
        future: {
            one: 'менше, ніж за хвилину',
            singularNominative: 'менше, ніж за {{count}} хвилину',
            singularGenitive: 'менше, ніж за {{count}} хвилини',
            pluralGenitive: 'менше, ніж за {{count}} хвилин'
        }
    }),
    xMinutes: a({
        regular: {
            singularNominative: '{{count}} хвилина',
            singularGenitive: '{{count}} хвилини',
            pluralGenitive: '{{count}} хвилин'
        },
        past: {
            singularNominative: '{{count}} хвилину тому',
            singularGenitive: '{{count}} хвилини тому',
            pluralGenitive: '{{count}} хвилин тому'
        },
        future: {
            singularNominative: 'за {{count}} хвилину',
            singularGenitive: 'за {{count}} хвилини',
            pluralGenitive: 'за {{count}} хвилин'
        }
    }),
    aboutXHours: a({
        regular: {
            singularNominative: 'близько {{count}} години',
            singularGenitive: 'близько {{count}} годин',
            pluralGenitive: 'близько {{count}} годин'
        },
        future: {
            singularNominative: 'приблизно за {{count}} годину',
            singularGenitive: 'приблизно за {{count}} години',
            pluralGenitive: 'приблизно за {{count}} годин'
        }
    }),
    xHours: a({
        regular: {
            singularNominative: '{{count}} годину',
            singularGenitive: '{{count}} години',
            pluralGenitive: '{{count}} годин'
        }
    }),
    xDays: a({
        regular: {
            singularNominative: '{{count}} день',
            singularGenitive: '{{count}} днi',
            pluralGenitive: '{{count}} днів'
        }
    }),
    aboutXWeeks: a({
        regular: {
            singularNominative: 'близько {{count}} тижня',
            singularGenitive: 'близько {{count}} тижнів',
            pluralGenitive: 'близько {{count}} тижнів'
        },
        future: {
            singularNominative: 'приблизно за {{count}} тиждень',
            singularGenitive: 'приблизно за {{count}} тижні',
            pluralGenitive: 'приблизно за {{count}} тижнів'
        }
    }),
    xWeeks: a({
        regular: {
            singularNominative: '{{count}} тиждень',
            singularGenitive: '{{count}} тижні',
            pluralGenitive: '{{count}} тижнів'
        }
    }),
    aboutXMonths: a({
        regular: {
            singularNominative: 'близько {{count}} місяця',
            singularGenitive: 'близько {{count}} місяців',
            pluralGenitive: 'близько {{count}} місяців'
        },
        future: {
            singularNominative: 'приблизно за {{count}} місяць',
            singularGenitive: 'приблизно за {{count}} місяці',
            pluralGenitive: 'приблизно за {{count}} місяців'
        }
    }),
    xMonths: a({
        regular: {
            singularNominative: '{{count}} місяць',
            singularGenitive: '{{count}} місяці',
            pluralGenitive: '{{count}} місяців'
        }
    }),
    aboutXYears: a({
        regular: {
            singularNominative: 'близько {{count}} року',
            singularGenitive: 'близько {{count}} років',
            pluralGenitive: 'близько {{count}} років'
        },
        future: {
            singularNominative: 'приблизно за {{count}} рік',
            singularGenitive: 'приблизно за {{count}} роки',
            pluralGenitive: 'приблизно за {{count}} років'
        }
    }),
    xYears: a({
        regular: {
            singularNominative: '{{count}} рік',
            singularGenitive: '{{count}} роки',
            pluralGenitive: '{{count}} років'
        }
    }),
    overXYears: a({
        regular: {
            singularNominative: 'більше {{count}} року',
            singularGenitive: 'більше {{count}} років',
            pluralGenitive: 'більше {{count}} років'
        },
        future: {
            singularNominative: 'більше, ніж за {{count}} рік',
            singularGenitive: 'більше, ніж за {{count}} роки',
            pluralGenitive: 'більше, ніж за {{count}} років'
        }
    }),
    almostXYears: a({
        regular: {
            singularNominative: 'майже {{count}} рік',
            singularGenitive: 'майже {{count}} роки',
            pluralGenitive: 'майже {{count}} років'
        },
        future: {
            singularNominative: 'майже за {{count}} рік',
            singularGenitive: 'майже за {{count}} роки',
            pluralGenitive: 'майже за {{count}} років'
        }
    })
};
let u = function (i, n, t) {
    return (t = t || {}), r[i](n, t);
};
