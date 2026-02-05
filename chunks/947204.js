"use strict";
var r = n(557939),
    i = n(410323),
    a = n(321727),
    s = n(120394),
    o = n(304880),
    l = n(503628),
    u = i("".charAt);
r(
    {
        target: "String",
        proto: !0,
        forced: l(function () {
            return "\uD842" !== "\uD842\uDFB7".at(-2);
        }),
    },
    {
        at: function (e) {
            var t = o(a(this)),
                n = t.length,
                r = s(e),
                i = r >= 0 ? r : n + r;
            return i < 0 || i >= n ? void 0 : u(t, i);
        },
    },
);
