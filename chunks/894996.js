IntlMessageFormat.__addLocaleData({
    locale: 'ru',
    pluralRuleFunction: function (e, n) {
        var r = String(e).split('.'),
            i = r[0],
            a = !r[1],
            o = i.slice(-1),
            s = i.slice(-2);
        return n ? 'other' : a && 1 == o && 11 != s ? 'one' : a && o >= 2 && o <= 4 && (s < 12 || s > 14) ? 'few' : (a && 0 == o) || (a && o >= 5 && o <= 9) || (a && s >= 11 && s <= 14) ? 'many' : 'other';
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
