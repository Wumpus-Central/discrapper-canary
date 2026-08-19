IntlMessageFormat.__addLocaleData({
    locale: "fi",
    pluralRuleFunction: function (e, t) {
        var r = !String(e).split(".")[1];
        return t ? "other" : 1 == e && r ? "one" : "other";
    },
});
