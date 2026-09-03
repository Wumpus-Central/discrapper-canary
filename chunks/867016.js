t.default = {
    locale: "en",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = !r[1],
            i = Number(r[0]) == e,
            o = i && r[0].slice(-1),
            a = i && r[0].slice(-2);
        return t
            ? 1 == o && 11 != a
                ? "one"
                : 2 == o && 12 != a
                  ? "two"
                  : 3 == o && 13 != a
                    ? "few"
                    : "other"
            : 1 == e && n
              ? "one"
              : "other";
    },
};
