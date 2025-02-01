IntlMessageFormat.__addLocaleData({
    locale: 'hu',
    pluralRuleFunction: function (e, t) {
        return t ? (1 == e || 5 == e ? 'one' : 'other') : 1 == e ? 'one' : 'other';
    }
});
