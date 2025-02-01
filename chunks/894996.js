IntlMessageFormat.__addLocaleData({
    locale: 'ru',
    pluralRuleFunction: function (e, t) {
        var n = String(e).split('.'),
            i = n[0],
            r = !n[1],
            a = i.slice(-1),
            s = i.slice(-2);
        return t ? 'other' : r && 1 == a && 11 != s ? 'one' : r && a >= 2 && a <= 4 && (s < 12 || s > 14) ? 'few' : (r && 0 == a) || (r && a >= 5 && a <= 9) || (r && s >= 11 && s <= 14) ? 'many' : 'other';
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
