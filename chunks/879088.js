var r = n(436167);

function i() {
    var t,
        n,
        a = "function" == typeof Symbol ? Symbol : {},
        s = a.iterator || "@@iterator",
        o = a.toStringTag || "@@toStringTag";

    function l(e, i, a, s) {
        var o = Object.create((i && i.prototype instanceof u ? i : u).prototype);
        return (
            r(
                o,
                "_invoke",
                (function (e, r, i) {
                    var a,
                        s,
                        o,
                        l = 0,
                        u = i || [],
                        d = !1,
                        f = {
                            p: 0,
                            n: 0,
                            v: t,
                            a: p,
                            f: p.bind(t, 4),
                            d: function (e, n) {
                                return (a = e), (s = 0), (o = t), (f.n = n), c;
                            },
                        };

                    function p(e, r) {
                        for (s = e, o = r, n = 0; !d && l && !i && n < u.length; n++) {
                            var i,
                                a = u[n],
                                p = f.p,
                                _ = a[2];
                            e > 3
                                ? (i = _ === r) && ((o = a[(s = a[4]) ? 5 : ((s = 3), 3)]), (a[4] = a[5] = t))
                                : a[0] <= p &&
                                  ((i = e < 2 && p < a[1])
                                      ? ((s = 0), (f.v = r), (f.n = a[1]))
                                      : p < _ &&
                                        (i = e < 3 || a[0] > r || r > _) &&
                                        ((a[4] = e), (a[5] = r), (f.n = _), (s = 0)));
                        }
                        if (i || e > 1) return c;
                        throw ((d = !0), r);
                    }
                    return function (i, u, _) {
                        if (l > 1) throw TypeError("Generator is already running");
                        for (d && 1 === u && p(u, _), s = u, o = _; (n = s < 2 ? t : o) || !d; ) {
                            a || (s ? (s < 3 ? (s > 1 && (f.n = -1), p(s, o)) : (f.n = o)) : (f.v = o));
                            try {
                                if (((l = 2), a)) {
                                    if ((s || (i = "next"), (n = a[i]))) {
                                        if (!(n = n.call(a, o))) throw TypeError("iterator result is not an object");
                                        if (!n.done) return n;
                                        (o = n.value), s < 2 && (s = 0);
                                    } else
                                        1 === s && (n = a.return) && n.call(a),
                                            s < 2 &&
                                                ((o = TypeError("The iterator does not provide a '" + i + "' method")),
                                                (s = 1));
                                    a = t;
                                } else if ((n = (d = f.n < 0) ? o : e.call(r, f)) !== c) break;
                            } catch (e) {
                                (a = t), (s = 1), (o = e);
                            } finally {
                                l = 1;
                            }
                        }
                        return {
                            value: n,
                            done: d,
                        };
                    };
                })(e, a, s),
                !0,
            ),
            o
        );
    }
    var c = {};

    function u() {}

    function d() {}

    function f() {}
    n = Object.getPrototypeOf;
    var p =
        (f.prototype =
        u.prototype =
            Object.create(
                [][s]
                    ? n(n([][s]()))
                    : (r((n = {}), s, function () {
                          return this;
                      }),
                      n),
            ));

    function _(e) {
        return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), r(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(p)),
            e
        );
    }
    return (
        (d.prototype = f),
        r(p, "constructor", f),
        r(f, "constructor", d),
        (d.displayName = "GeneratorFunction"),
        r(f, o, "GeneratorFunction"),
        r(p),
        r(p, o, "Generator"),
        r(p, s, function () {
            return this;
        }),
        r(p, "toString", function () {
            return "[object Generator]";
        }),
        ((e.exports = i =
            function () {
                return {
                    w: l,
                    m: _,
                };
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))()
    );
}
(e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
