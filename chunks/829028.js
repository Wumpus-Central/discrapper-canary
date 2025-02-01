IntlMessageFormat.__addLocaleData({
    locale: 'sv',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = !n[1],
            r = Number(n[0]) == e,
            a = r && n[0].slice(-1),
            s = r && n[0].slice(-2);
        return t ? ((1 == a || 2 == a) && 11 != s && 12 != s ? 'one' : 'other') : 1 == e && i ? 'one' : 'other';
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
