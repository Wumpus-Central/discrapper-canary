IntlMessageFormat.__addLocaleData({
    locale: "lt",
    pluralRuleFunction: function (e, t) {
        var n = String(e).split("."),
            r = n[1] || "",
            i = Number(n[0]) == e,
            a = i && n[0].slice(-1),
            s = i && n[0].slice(-2);
        return t
            ? "other"
            : 1 == a && (s < 11 || s > 19)
              ? "one"
              : a >= 2 && a <= 9 && (s < 11 || s > 19)
                ? "few"
                : 0 != r
                  ? "many"
                  : "other";
    },
});
