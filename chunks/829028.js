IntlMessageFormat.__addLocaleData({
    locale: 'sv',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = !n[1],
            i = Number(n[0]) == e,
            a = i && n[0].slice(-1),
            o = i && n[0].slice(-2);
        return t ? ((1 == a || 2 == a) && 11 != o && 12 != o ? 'one' : 'other') : 1 == e && r ? 'one' : 'other';
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
