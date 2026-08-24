IntlMessageFormat.__addLocaleData({
    locale: "ro",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = !r[1],
            i = Number(r[0]) == e && r[0].slice(-2);
        return t
            ? 1 == e
                ? "one"
                : "other"
            : 1 == e && n
              ? "one"
              : !n || 0 == e || (1 != e && i >= 1 && i <= 19)
                ? "few"
                : "other";
    },
}),
    IntlMessageFormat.__addLocaleData({ locale: "ro-MD", parentLocale: "ro" });
