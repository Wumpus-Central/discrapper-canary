IntlMessageFormat.__addLocaleData({
    locale: "lt",
    pluralRuleFunction: function (e, t) {
        var n = String(e).split("."),
            i = n[1] || "",
            r = Number(n[0]) == e,
            s = r && n[0].slice(-1),
            a = r && n[0].slice(-2);
        return t
            ? "other"
            : 1 == s && (a < 11 || a > 19)
              ? "one"
              : s >= 2 && s <= 9 && (a < 11 || a > 19)
                ? "few"
                : 0 != i
                  ? "many"
                  : "other";
    },
});
