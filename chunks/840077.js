"use strict";
var n = e(834647),
    o = e(308227),
    s = e(740456),
    i = e(486816),
    u = e(180734),
    c = e(554987),
    a = e(443216),
    f = e(309270),
    p = e(407057),
    l = e(421212),
    v = e(469516),
    y = e(164336).f,
    h = e(673162).forEach,
    x = e(414123),
    d = e(605944),
    g = d.set,
    b = d.getterFor;
t.exports = function (t, r, e) {
    var d,
        m = -1 !== t.indexOf("Map"),
        S = -1 !== t.indexOf("Weak"),
        w = m ? "set" : "add",
        O = o[t],
        j = O && O.prototype,
        A = {};
    if (
        x &&
        f(O) &&
        (S ||
            (j.forEach &&
                !i(function () {
                    new O().entries().next();
                })))
    ) {
        var E = (d = r(function (r, e) {
                g(a(r, E), { type: t, collection: new O() }), l(e) || c(e, r[w], { that: r, AS_ENTRIES: m });
            })).prototype,
            T = b(t);
        h(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (t) {
            var r = "add" === t || "set" === t;
            t in j &&
                !(S && "clear" === t) &&
                u(E, t, function (e, n) {
                    var o = T(this).collection;
                    if (!r && S && !p(e)) return "get" === t && void 0;
                    var s = o[t](0 === e ? 0 : e, n);
                    return r ? this : s;
                });
        }),
            S ||
                y(E, "size", {
                    configurable: !0,
                    get: function () {
                        return T(this).collection.size;
                    },
                });
    } else (d = e.getConstructor(r, t, m, w)), s.enable();
    return v(d, t, !1, !0), (A[t] = d), n({ global: !0, forced: !0 }, A), S || e.setStrong(d, t, m), d;
};
