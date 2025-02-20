n(185726);
var r = n(67867),
    i = n(668530),
    o = n(570596),
    a = n(96403),
    s = n(447631),
    l = n(502754),
    c = n(691244),
    u = n(942282),
    d = n(151020),
    f = n(414847),
    p = n(468154),
    _ = n(29461),
    h = n(13780),
    m = n(735471),
    g = n(141603),
    E = n(476508),
    v = n(327192),
    b = n(28886),
    y = n(982665),
    O = n(342545),
    S = n(224106),
    I = n(241777),
    T = n(86930),
    N = n(749915),
    A = n(215645),
    C = n(274745),
    R = n(360518),
    P = n(409851),
    w = R('iterator'),
    D = 'URLSearchParams',
    x = D + 'Iterator',
    L = _.set,
    M = _.getterFor(D),
    k = _.getterFor(x),
    j = Object.getOwnPropertyDescriptor,
    U = function (e) {
        if (!s) return i[e];
        var t = j(i, e);
        return t && t.value;
    },
    G = U('fetch'),
    B = U('Request'),
    Z = U('Headers'),
    F = B && B.prototype,
    V = Z && Z.prototype,
    H = i.RegExp,
    W = i.TypeError,
    Y = i.decodeURIComponent,
    K = i.encodeURIComponent,
    z = a(''.charAt),
    q = a([].join),
    Q = a([].push),
    X = a(''.replace),
    J = a([].shift),
    $ = a([].splice),
    ee = a(''.split),
    et = a(''.slice),
    en = /\+/g,
    er = [, , , ,],
    ei = function (e) {
        return er[e - 1] || (er[e - 1] = H('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    eo = function (e) {
        try {
            return Y(e);
        } catch (t) {
            return e;
        }
    },
    ea = function (e) {
        var t = X(e, en, ' '),
            n = 4;
        try {
            return Y(t);
        } catch (e) {
            for (; n; ) t = X(t, ei(n--), eo);
            return t;
        }
    },
    es = /[!'()~]|%20/g,
    el = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    ec = function (e) {
        return el[e];
    },
    eu = function (e) {
        return X(K(e), es, ec);
    },
    ed = p(
        function (e, t) {
            L(this, {
                type: x,
                target: M(e).entries,
                index: 0,
                kind: t
            });
        },
        D,
        function () {
            var e = k(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = void 0), A(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case 'keys':
                    return A(r.key, !1);
                case 'values':
                    return A(r.value, !1);
            }
            return A([r.key, r.value], !1);
        },
        !0
    ),
    ef = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (y(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === z(e, 0) ? et(e, 1) : e) : O(e)));
    };
ef.prototype = {
    type: D,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            a,
            s,
            l,
            c = this.entries,
            u = N(e);
        if (u)
            for (n = (t = T(e, u)).next; !(r = o(n, t)).done; ) {
                if ((s = o((a = (i = T(b(r.value))).next), i)).done || (l = o(a, i)).done || !o(a, i).done) throw new W('Expected sequence with length 2');
                Q(c, {
                    key: O(s.value),
                    value: O(l.value)
                });
            }
        else
            for (var d in e)
                g(e, d) &&
                    Q(c, {
                        key: d,
                        value: O(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, i = ee(e, '&'), o = 0; o < i.length; )
                (t = i[o++]).length &&
                    Q(r, {
                        key: ea(J((n = ee(t, '=')))),
                        value: ea(q(n, '='))
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) Q(n, eu((e = t[r++]).key) + '=' + eu(e.value));
        return q(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ep = function () {
        h(this, e_);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = L(this, new ef(e));
        s || (this.size = t.entries.length);
    },
    e_ = ep.prototype;
if (
    (d(
        e_,
        {
            append: function (e, t) {
                var n = M(this);
                C(arguments.length, 2),
                    Q(n.entries, {
                        key: O(e),
                        value: O(t)
                    }),
                    !s && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = M(this), n = C(arguments.length, 1), r = t.entries, i = O(e), o = n < 2 ? void 0 : arguments[1], a = void 0 === o ? o : O(o), l = 0; l < r.length; ) {
                    var c = r[l];
                    if (c.key === i && (void 0 === a || c.value === a)) {
                        if (($(r, l, 1), void 0 !== a)) break;
                    } else l++;
                }
                s || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = M(this).entries;
                C(arguments.length, 1);
                for (var n = O(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = M(this).entries;
                C(arguments.length, 1);
                for (var n = O(e), r = [], i = 0; i < t.length; i++) t[i].key === n && Q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = M(this).entries, n = C(arguments.length, 1), r = O(e), i = n < 2 ? void 0 : arguments[1], o = void 0 === i ? i : O(i), a = 0; a < t.length; ) {
                    var s = t[a++];
                    if (s.key === r && (void 0 === o || s.value === o)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = M(this);
                C(arguments.length, 1);
                for (var i = r.entries, o = !1, a = O(e), l = O(t), c = 0; c < i.length; c++) (n = i[c]).key === a && (o ? $(i, c--, 1) : ((o = !0), (n.value = l)));
                o ||
                    Q(i, {
                        key: a,
                        value: l
                    }),
                    s || (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = M(this);
                P(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = M(this).entries, r = E(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
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
    c(e_, w, e_.entries, { name: 'entries' }),
    c(
        e_,
        'toString',
        function () {
            return M(this).serialize();
        },
        { enumerable: !0 }
    ),
    s &&
        u(e_, 'size', {
            get: function () {
                return M(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    f(ep, D),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: ep }
    ),
    !l && m(Z))
) {
    var eh = a(V.has),
        em = a(V.set),
        eg = function (e) {
            if (y(e)) {
                var t,
                    n = e.body;
                if (v(n) === D)
                    return (
                        eh((t = e.headers ? new Z(e.headers) : new Z()), 'content-type') || em(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        S(e, {
                            body: I(0, O(n)),
                            headers: I(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (m(G) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return G(e, arguments.length > 1 ? eg(arguments[1]) : {});
                    }
                }
            ),
        m(B))
    ) {
        var eE = function (e) {
            return h(this, F), new B(e, arguments.length > 1 ? eg(arguments[1]) : {});
        };
        (F.constructor = eE),
            (eE.prototype = F),
            r(
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
    URLSearchParams: ep,
    getState: M
};
