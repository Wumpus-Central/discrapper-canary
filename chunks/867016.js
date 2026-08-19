"use strict";
t.default = {
    locale: "en",
    pluralRuleFunction: function (e, t) {
        var r = String(e).split("."),
            n = !r[1],
            o = Number(r[0]) == e,
            i = o && r[0].slice(-1),
            a = o && r[0].slice(-2);
        return t
            ? 1 == i && 11 != a
                ? "one"
                : 2 == i && 12 != a
                  ? "two"
                  : 3 == i && 13 != a
                    ? "few"
                    : "other"
            : 1 == e && n
              ? "one"
              : "other";
    },
};
