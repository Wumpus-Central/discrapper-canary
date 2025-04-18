IntlMessageFormat.__addLocaleData({
    locale: 'ru',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            r = n[0],
            i = !n[1],
            a = r.slice(-1),
            o = r.slice(-2);
        return t ? 'other' : i && 1 == a && 11 != o ? 'one' : i && a >= 2 && a <= 4 && (o < 12 || o > 14) ? 'few' : (i && 0 == a) || (i && a >= 5 && a <= 9) || (i && o >= 11 && o <= 14) ? 'many' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-BY',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-KG',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-KZ',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-MD',
        parentLocale: 'ru'
    }),
    IntlMessageFormat.__addLocaleData({
        locale: 'ru-UA',
        parentLocale: 'ru'
    });
