IntlMessageFormat.__addLocaleData({
    locale: 'tr',
    pluralRuleFunction: function (e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
    }
}),
    IntlMessageFormat.__addLocaleData({
        locale: 'tr-CY',
        parentLocale: 'tr'
    });
