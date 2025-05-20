IntlMessageFormat.__addLocaleData({
    locale: 'sv',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = !n[1],
            i = Number(n[0]) == e,
            o = i && n[0].slice(-1),
            a = i && n[0].slice(-2);
        return t ? ((1 == o || 2 == o) && 11 != a && 12 != a ? 'one' : 'other') : 1 == e && r ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'sv-AX',
        parentLocale: 'sv'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'sv-FI',
        parentLocale: 'sv'
    });
