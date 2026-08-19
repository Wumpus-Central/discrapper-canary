IntlMessageFormat.__addLocaleData({
    locale: "lt",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = r[1] || "",
            o = Number(r[0]) == e,
            i = o && r[0].slice(-1),
            a = o && r[0].slice(-2);
        return t
            ? "other"
            : 1 == i && (a < 11 || a > 19)
              ? "one"
              : i >= 2 && i <= 9 && (a < 11 || a > 19)
                ? "few"
                : 0 != n
                  ? "many"
                  : "other";
    },
});
