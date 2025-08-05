t.d(r, { E: () => f });
var e = t(178163),
    o = t(74463),
    i = t(541568),
    u = t(537703),
    a = t(375154);
function c(n, r) {
    (null == r || r > n.length) && (r = n.length);
    for (var t = 0, e = Array(r); t < r; t++) e[t] = n[t];
    return e;
}
function f(n, r, t) {
    var f = (0, o.N)(),
        l = (0, a.W)(n, r),
        s = (0, u.b)(n);
    (0, i.L)(
        function () {
            var n,
                o =
                    (function (n) {
                        if (Array.isArray(n)) return n;
                    })((n = (0, e.n)(s, l, f))) ||
                    (function (n, r) {
                        var t,
                            e,
                            o = null == n ? null : ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
                        if (null != o) {
                            var i = [],
                                u = !0,
                                a = !1;
                            try {
                                for (o = o.call(n); !(u = (t = o.next()).done) && (i.push(t.value), i.length !== r); u = !0);
                            } catch (n) {
                                ((a = !0), (e = n));
                            } finally {
                                try {
                                    u || null == o.return || o.return();
                                } finally {
                                    if (a) throw e;
                                }
                            }
                            return i;
                        }
                    })(n, 2) ||
                    (function (n, r) {
                        if (n) {
                            if ('string' == typeof n) return c(n, 2);
                            var t = Object.prototype.toString.call(n).slice(8, -1);
                            if (('Object' === t && n.constructor && (t = n.constructor.name), 'Map' === t || 'Set' === t)) return Array.from(n);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(n, r);
                        }
                    })(n, 2) ||
                    (function () {
                        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    })(),
                i = o[0],
                u = o[1];
            return (r.receiveHandlerId(i), t.receiveHandlerId(i), u);
        },
        [
            f,
            r,
            l,
            t,
            s
                .map(function (n) {
                    return n.toString();
                })
                .join('|')
        ]
    );
}
