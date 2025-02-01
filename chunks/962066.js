IntlMessageFormat.__addLocaleData({
    locale: 'vi',
    pluralRuleFunction: function (e, t) {
        return t && 1 == e ? 'one' : 'other';
    }
});
