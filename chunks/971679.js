"use strict";
var n = e(834647),
    o = e(675879),
    s = e(999843),
    i = e(693755),
    u = e(554987),
    c = e(463843),
    a = e(780940),
    f = e(486816),
    p = c.Map,
    l = c.has,
    v = c.get,
    y = c.set,
    h = o([].push),
    x =
        a ||
        f(function () {
            return (
                1 !==
                p
                    .groupBy("ab", function (t) {
                        return t;
                    })
                    .get("a").length
            );
        });
n(
    { target: "Map", stat: !0, forced: a || x },
    {
        groupBy: function (t, r) {
            i(t), s(r);
            var e = new p(),
                n = 0;
            return (
                u(t, function (t) {
                    var o = r(t, n++);
                    l(e, o) ? h(v(e, o), t) : y(e, o, [t]);
                }),
                e
            );
        },
    },
);
