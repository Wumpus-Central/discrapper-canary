n(185726);
var i = n(67867),
    r = n(668530),
    a = n(570596),
    s = n(96403),
    o = n(447631),
    l = n(502754),
    u = n(691244),
    c = n(942282),
    d = n(151020),
    f = n(414847),
    _ = n(468154),
    p = n(29461),
    h = n(13780),
    m = n(735471),
    g = n(141603),
    E = n(476508),
    v = n(327192),
    y = n(28886),
    I = n(982665),
    b = n(342545),
    T = n(224106),
    S = n(241777),
    A = n(86930),
    N = n(749915),
    C = n(215645),
    R = n(274745),
    O = n(360518),
    D = n(409851),
    x = O('iterator'),
    L = 'URLSearchParams',
    P = L + 'Iterator',
    w = p.set,
    M = p.getterFor(L),
    k = p.getterFor(P),
    U = Object.getOwnPropertyDescriptor,
    G = function (e) {
        if (!o) return r[e];
        var t = U(r, e);
        return t && t.value;
    },
    B = G('fetch'),
    Z = G('Request'),
    F = G('Headers'),
    V = Z && Z.prototype,
    j = F && F.prototype,
    H = r.RegExp,
    Y = r.TypeError,
    W = r.decodeURIComponent,
    K = r.encodeURIComponent,
    z = s(''.charAt),
    q = s([].join),
    Q = s([].push),
    X = s(''.replace),
    J = s([].shift),
    $ = s([].splice),
    ee = s(''.split),
    et = s(''.slice),
    en = /\+/g,
    ei = [, , , ,],
    er = function (e) {
        return ei[e - 1] || (ei[e - 1] = H('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    ea = function (e) {
        try {
            return W(e);
        } catch (t) {
            return e;
        }
    },
    es = function (e) {
        var t = X(e, en, ' '),
            n = 4;
        try {
            return W(t);
        } catch (e) {
            for (; n; ) t = X(t, er(n--), ea);
            return t;
        }
    },
    eo = /[!'()~]|%20/g,
    el = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    eu = function (e) {
        return el[e];
    },
    ec = function (e) {
        return X(K(e), eo, eu);
    },
    ed = _(
        function (e, t) {
            w(this, {
                type: P,
                target: M(e).entries,
                index: 0,
                kind: t
            });
        },
        L,
        function () {
            var e = k(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = void 0), C(void 0, !0);
            var i = t[n];
            switch (e.kind) {
                case 'keys':
                    return C(i.key, !1);
                case 'values':
                    return C(i.value, !1);
            }
            return C([i.key, i.value], !1);
        },
        !0
    ),
    ef = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (I(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === z(e, 0) ? et(e, 1) : e) : b(e)));
    };
ef.prototype = {
    type: L,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            i,
            r,
            s,
            o,
            l,
            u = this.entries,
            c = N(e);
        if (c)
            for (n = (t = A(e, c)).next; !(i = a(n, t)).done; ) {
                if ((o = a((s = (r = A(y(i.value))).next), r)).done || (l = a(s, r)).done || !a(s, r).done) throw new Y('Expected sequence with length 2');
                Q(u, {
                    key: b(o.value),
                    value: b(l.value)
                });
            }
        else
            for (var d in e)
                g(e, d) &&
                    Q(u, {
                        key: d,
                        value: b(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, i = this.entries, r = ee(e, '&'), a = 0; a < r.length; )
                (t = r[a++]).length &&
                    Q(i, {
                        key: es(J((n = ee(t, '=')))),
                        value: es(q(n, '='))
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], i = 0; i < t.length; ) Q(n, ec((e = t[i++]).key) + '=' + ec(e.value));
        return q(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var e_ = function () {
        h(this, ep);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = w(this, new ef(e));
        o || (this.size = t.entries.length);
    },
    ep = e_.prototype;
if (
    (d(
        ep,
        {
            append: function (e, t) {
                var n = M(this);
                R(arguments.length, 2),
                    Q(n.entries, {
                        key: b(e),
                        value: b(t)
                    }),
                    !o && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = M(this), n = R(arguments.length, 1), i = t.entries, r = b(e), a = n < 2 ? void 0 : arguments[1], s = void 0 === a ? a : b(a), l = 0; l < i.length; ) {
                    var u = i[l];
                    if (u.key === r && (void 0 === s || u.value === s)) {
                        if (($(i, l, 1), void 0 !== s)) break;
                    } else l++;
                }
                o || (this.size = i.length), t.updateURL();
            },
            get: function (e) {
                var t = M(this).entries;
                R(arguments.length, 1);
                for (var n = b(e), i = 0; i < t.length; i++) if (t[i].key === n) return t[i].value;
                return null;
            },
            getAll: function (e) {
                var t = M(this).entries;
                R(arguments.length, 1);
                for (var n = b(e), i = [], r = 0; r < t.length; r++) t[r].key === n && Q(i, t[r].value);
                return i;
            },
            has: function (e) {
                for (var t = M(this).entries, n = R(arguments.length, 1), i = b(e), r = n < 2 ? void 0 : arguments[1], a = void 0 === r ? r : b(r), s = 0; s < t.length; ) {
                    var o = t[s++];
                    if (o.key === i && (void 0 === a || o.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    i = M(this);
                R(arguments.length, 1);
                for (var r = i.entries, a = !1, s = b(e), l = b(t), u = 0; u < r.length; u++) (n = r[u]).key === s && (a ? $(r, u--, 1) : ((a = !0), (n.value = l)));
                a ||
                    Q(r, {
                        key: s,
                        value: l
                    }),
                    o || (this.size = r.length),
                    i.updateURL();
            },
            sort: function () {
                var e = M(this);
                D(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = M(this).entries, i = E(e, arguments.length > 1 ? arguments[1] : void 0), r = 0; r < n.length; ) i((t = n[r++]).value, t.key, this);
            },
            keys: function () {
                return new ed(this, 'keys');
            },
            values: function () {
                return new ed(this, 'values');
            },
            entries: function () {
                return new ed(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    u(ep, x, ep.entries, { name: 'entries' }),
    u(
        ep,
        'toString',
        function () {
            return M(this).serialize();
        },
        { enumerable: !0 }
    ),
    o &&
        c(ep, 'size', {
            get: function () {
                return M(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    f(e_, L),
    i(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: e_ }
    ),
    !l && m(F))
) {
    var eh = s(j.has),
        em = s(j.set),
        eg = function (e) {
            if (I(e)) {
                var t,
                    n = e.body;
                if (v(n) === L)
                    return (
                        eh((t = e.headers ? new F(e.headers) : new F()), 'content-type') || em(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        T(e, {
                            body: S(0, b(n)),
                            headers: S(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (m(B) &&
            i(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return B(e, arguments.length > 1 ? eg(arguments[1]) : {});
                    }
                }
            ),
        m(Z))
    ) {
        var eE = function (e) {
            return h(this, V), new Z(e, arguments.length > 1 ? eg(arguments[1]) : {});
        };
        (V.constructor = eE),
            (eE.prototype = V),
            i(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: eE }
            );
    }
}
e.exports = {
    URLSearchParams: e_,
    getState: M
};
