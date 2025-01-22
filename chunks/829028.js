IntlMessageFormat.__addLocaleData({
    locale: 'sv',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = !r[1],
            a = Number(r[0]) == e,
            o = a && r[0].slice(-1),
            s = a && r[0].slice(-2);
        return n ? ((1 == o || 2 == o) && 11 != s && 12 != s ? 'one' : 'other') : 1 == e && i ? 'one' : 'other';
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
