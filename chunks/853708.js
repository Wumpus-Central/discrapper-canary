n(185726);
var r = n(67867),
    o = n(668530),
    a = n(570596),
    i = n(96403),
    s = n(447631),
    c = n(502754),
    l = n(691244),
    u = n(942282),
    d = n(151020),
    p = n(414847),
    h = n(468154),
    f = n(29461),
    m = n(13780),
    y = n(735471),
    v = n(141603),
    g = n(476508),
    b = n(174525),
    _ = n(28886),
    k = n(982665),
    C = n(342545),
    Z = n(224106),
    w = n(241777),
    S = n(86930),
    N = n(749915),
    x = n(215645),
    P = n(274745),
    A = n(360518),
    R = n(409851),
    F = A('iterator'),
    O = 'URLSearchParams',
    E = O + 'Iterator',
    I = f.set,
    M = f.getterFor(O),
    T = f.getterFor(E),
    B = Object.getOwnPropertyDescriptor,
    D = function (e) {
        if (!s) return o[e];
        var t = B(o, e);
        return t && t.value;
    },
    L = D('fetch'),
    V = D('Request'),
    j = D('Headers'),
    U = V && V.prototype,
    q = j && j.prototype,
    H = o.RegExp,
    K = o.TypeError,
    z = o.decodeURIComponent,
    W = o.encodeURIComponent,
    Y = i(''.charAt),
    G = i([].join),
    $ = i([].push),
    Q = i(''.replace),
    J = i([].shift),
    X = i([].splice),
    ee = i(''.split),
    et = i(''.slice),
    en = /\+/g,
    er = [, , , ,],
    eo = function (e) {
        try {
            return z(e);
        } catch (t) {
            return e;
        }
    },
    ea = function (e) {
        var t,
            n = Q(e, en, ' '),
            r = 4;
        try {
            return z(n);
        } catch (e) {
            for (; r; ) n = Q(n, er[(t = r--) - 1] || (er[t - 1] = H('((?:%[\\da-f]{2}){' + t + '})', 'gi')), eo);
            return n;
        }
    },
    ei = /[!'()~]|%20/g,
    es = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    ec = function (e) {
        return es[e];
    },
    el = function (e) {
        return Q(W(e), ei, ec);
    },
    eu = h(
        function (e, t) {
            I(this, {
                type: E,
                target: M(e).entries,
                index: 0,
                kind: t
            });
        },
        O,
        function () {
            var e = T(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = void 0), x(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case 'keys':
                    return x(r.key, !1);
                case 'values':
                    return x(r.value, !1);
            }
            return x([r.key, r.value], !1);
        },
        !0
    ),
    ed = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (k(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === Y(e, 0) ? et(e, 1) : e) : C(e)));
    };
ed.prototype = {
    type: O,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            o,
            i,
            s,
            c,
            l = this.entries,
            u = N(e);
        if (u)
            for (n = (t = S(e, u)).next; !(r = a(n, t)).done; ) {
                if ((s = a((i = (o = S(_(r.value))).next), o)).done || (c = a(i, o)).done || !a(i, o).done) throw new K('Expected sequence with length 2');
                $(l, {
                    key: C(s.value),
                    value: C(c.value)
                });
            }
        else
            for (var d in e)
                v(e, d) &&
                    $(l, {
                        key: d,
                        value: C(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, o = ee(e, '&'), a = 0; a < o.length; )
                (t = o[a++]).length &&
                    $(r, {
                        key: ea(J((n = ee(t, '=')))),
                        value: ea(G(n, '='))
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) $(n, el((e = t[r++]).key) + '=' + el(e.value));
        return G(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ep = function () {
        m(this, eh);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = I(this, new ed(e));
        s || (this.size = t.entries.length);
    },
    eh = ep.prototype;
if (
    (d(
        eh,
        {
            append: function (e, t) {
                var n = M(this);
                P(arguments.length, 2),
                    $(n.entries, {
                        key: C(e),
                        value: C(t)
                    }),
                    !s && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = M(this), n = P(arguments.length, 1), r = t.entries, o = C(e), a = n < 2 ? void 0 : arguments[1], i = void 0 === a ? a : C(a), c = 0; c < r.length; ) {
                    var l = r[c];
                    if (l.key === o && (void 0 === i || l.value === i)) {
                        if ((X(r, c, 1), void 0 !== i)) break;
                    } else c++;
                }
                s || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = M(this).entries;
                P(arguments.length, 1);
                for (var n = C(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = M(this).entries;
                P(arguments.length, 1);
                for (var n = C(e), r = [], o = 0; o < t.length; o++) t[o].key === n && $(r, t[o].value);
                return r;
            },
            has: function (e) {
                for (var t = M(this).entries, n = P(arguments.length, 1), r = C(e), o = n < 2 ? void 0 : arguments[1], a = void 0 === o ? o : C(o), i = 0; i < t.length; ) {
                    var s = t[i++];
                    if (s.key === r && (void 0 === a || s.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = M(this);
                P(arguments.length, 1);
                for (var o = r.entries, a = !1, i = C(e), c = C(t), l = 0; l < o.length; l++) (n = o[l]).key === i && (a ? X(o, l--, 1) : ((a = !0), (n.value = c)));
                a ||
                    $(o, {
                        key: i,
                        value: c
                    }),
                    s || (this.size = o.length),
                    r.updateURL();
            },
            sort: function () {
                var e = M(this);
                R(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = M(this).entries, r = g(e, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < n.length; ) r((t = n[o++]).value, t.key, this);
            },
            keys: function () {
                return new eu(this, 'keys');
            },
            values: function () {
                return new eu(this, 'values');
            },
            entries: function () {
                return new eu(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    l(eh, F, eh.entries, { name: 'entries' }),
    l(
        eh,
        'toString',
        function () {
            return M(this).serialize();
        },
        { enumerable: !0 }
    ),
    s &&
        u(eh, 'size', {
            get: function () {
                return M(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    p(ep, O),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !c
        },
        { URLSearchParams: ep }
    ),
    !c && y(j))
) {
    var ef = i(q.has),
        em = i(q.set),
        ey = function (e) {
            if (k(e)) {
                var t,
                    n = e.body;
                if (b(n) === O)
                    return (
                        ef((t = e.headers ? new j(e.headers) : new j()), 'content-type') || em(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        Z(e, {
                            body: w(0, C(n)),
                            headers: w(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (y(L) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return L(e, arguments.length > 1 ? ey(arguments[1]) : {});
                    }
                }
            ),
        y(V))
    ) {
        var ev = function (e) {
            return m(this, U), new V(e, arguments.length > 1 ? ey(arguments[1]) : {});
        };
        (U.constructor = ev),
            (ev.prototype = U),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: ev }
            );
    }
}
e.exports = {
    URLSearchParams: ep,
    getState: M
};
