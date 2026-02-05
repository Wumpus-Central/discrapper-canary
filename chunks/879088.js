var r = n(436167);
function i() {
    var t,
        n,
        a = "function" == typeof Symbol ? Symbol : {},
        s = a.iterator || "@@iterator",
        o = a.toStringTag || "@@toStringTag";
    function l(e, i, a, s) {
        var o = Object.create((i && i.prototype instanceof c ? i : c).prototype);
        return (
            r(
                o,
                "_invoke",
                (function (e, r, i) {
                    var a,
                        s,
                        o,
                        l = 0,
                        c = i || [],
                        d = !1,
                        _ = {
                            p: 0,
                            n: 0,
                            v: t,
                            a: f,
                            f: f.bind(t, 4),
                            d: function (e, n) {
                                return (a = e), (s = 0), (o = t), (_.n = n), u;
                            },
                        };
                    function f(e, r) {
                        for (s = e, o = r, n = 0; !d && l && !i && n < c.length; n++) {
                            var i,
                                a = c[n],
                                f = _.p,
                                p = a[2];
                            e > 3
                                ? (i = p === r) && ((o = a[(s = a[4]) ? 5 : ((s = 3), 3)]), (a[4] = a[5] = t))
                                : a[0] <= f &&
                                  ((i = e < 2 && f < a[1])
                                      ? ((s = 0), (_.v = r), (_.n = a[1]))
                                      : f < p &&
                                        (i = e < 3 || a[0] > r || r > p) &&
                                        ((a[4] = e), (a[5] = r), (_.n = p), (s = 0)));
                        }
                        if (i || e > 1) return u;
                        throw ((d = !0), r);
                    }
                    return function (i, c, p) {
                        if (l > 1) throw TypeError("Generator is already running");
                        for (d && 1 === c && f(c, p), s = c, o = p; (n = s < 2 ? t : o) || !d; ) {
                            a || (s ? (s < 3 ? (s > 1 && (_.n = -1), f(s, o)) : (_.n = o)) : (_.v = o));
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
                                } else if ((n = (d = _.n < 0) ? o : e.call(r, _)) !== u) break;
                            } catch (e) {
                                (a = t), (s = 1), (o = e);
                            } finally {
                                l = 1;
                            }
                        }
                        return { value: n, done: d };
                    };
                })(e, a, s),
                !0,
            ),
            o
        );
    }
    var u = {};
    function c() {}
    function d() {}
    function _() {}
    n = Object.getPrototypeOf;
    var f =
        (_.prototype =
        c.prototype =
            Object.create(
                [][s]
                    ? n(n([][s]()))
                    : (r((n = {}), s, function () {
                          return this;
                      }),
                      n),
            ));
    function p(e) {
        return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : ((e.__proto__ = _), r(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
        );
    }
    return (
        (d.prototype = _),
        r(f, "constructor", _),
        r(_, "constructor", d),
        (d.displayName = "GeneratorFunction"),
        r(_, o, "GeneratorFunction"),
        r(f),
        r(f, o, "Generator"),
        r(f, s, function () {
            return this;
        }),
        r(f, "toString", function () {
            return "[object Generator]";
        }),
        ((e.exports = i =
            function () {
                return { w: l, m: p };
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))()
    );
}
(e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
