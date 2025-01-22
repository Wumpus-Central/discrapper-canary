r(185726);
var i = r(67867),
    a = r(668530),
    o = r(570596),
    s = r(96403),
    l = r(447631),
    u = r(502754),
    c = r(691244),
    d = r(942282),
    f = r(151020),
    p = r(414847),
    h = r(468154),
    _ = r(29461),
    m = r(13780),
    g = r(735471),
    E = r(141603),
    v = r(476508),
    y = r(327192),
    b = r(28886),
    I = r(982665),
    T = r(342545),
    S = r(224106),
    A = r(241777),
    C = r(86930),
    N = r(749915),
    R = r(215645),
    O = r(274745),
    D = r(360518),
    x = r(409851),
    L = D('iterator'),
    w = 'URLSearchParams',
    P = w + 'Iterator',
    M = _.set,
    k = _.getterFor(w),
    U = _.getterFor(P),
    B = Object.getOwnPropertyDescriptor,
    G = function (e) {
        if (!l) return a[e];
        var n = B(a, e);
        return n && n.value;
    },
    Z = G('fetch'),
    F = G('Request'),
    V = G('Headers'),
    j = F && F.prototype,
    H = V && V.prototype,
    Y = a.RegExp,
    W = a.TypeError,
    K = a.decodeURIComponent,
    z = a.encodeURIComponent,
    q = s(''.charAt),
    Q = s([].join),
    X = s([].push),
    J = s(''.replace),
    $ = s([].shift),
    ee = s([].splice),
    et = s(''.split),
    en = s(''.slice),
    er = /\+/g,
    ei = [, , , ,],
    ea = function (e) {
        return ei[e - 1] || (ei[e - 1] = Y('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    eo = function (e) {
        try {
            return K(e);
        } catch (n) {
            return e;
        }
    },
    es = function (e) {
        var n = J(e, er, ' '),
            r = 4;
        try {
            return K(n);
        } catch (e) {
            for (; r; ) n = J(n, ea(r--), eo);
            return n;
        }
    },
    el = /[!'()~]|%20/g,
    eu = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    ec = function (e) {
        return eu[e];
    },
    ed = function (e) {
        return J(z(e), el, ec);
    },
    ef = h(
        function (e, n) {
            M(this, {
                type: P,
                target: k(e).entries,
                index: 0,
                kind: n
            });
        },
        w,
        function () {
            var e = U(this),
                n = e.target,
                r = e.index++;
            if (!n || r >= n.length) return (e.target = void 0), R(void 0, !0);
            var i = n[r];
            switch (e.kind) {
                case 'keys':
                    return R(i.key, !1);
                case 'values':
                    return R(i.value, !1);
            }
            return R([i.key, i.value], !1);
        },
        !0
    ),
    ep = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (I(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === q(e, 0) ? en(e, 1) : e) : T(e)));
    };
ep.prototype = {
    type: w,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var n,
            r,
            i,
            a,
            s,
            l,
            u,
            c = this.entries,
            d = N(e);
        if (d)
            for (r = (n = C(e, d)).next; !(i = o(r, n)).done; ) {
                if ((l = o((s = (a = C(b(i.value))).next), a)).done || (u = o(s, a)).done || !o(s, a).done) throw new W('Expected sequence with length 2');
                X(c, {
                    key: T(l.value),
                    value: T(u.value)
                });
            }
        else
            for (var f in e)
                E(e, f) &&
                    X(c, {
                        key: f,
                        value: T(e[f])
                    });
    },
    parseQuery: function (e) {
        if (e) {
            for (var n, r, i = this.entries, a = et(e, '&'), o = 0; o < a.length; )
                (n = a[o++]).length &&
                    X(i, {
                        key: es($((r = et(n, '=')))),
                        value: es(Q(r, '='))
                    });
        }
    },
    serialize: function () {
        for (var e, n = this.entries, r = [], i = 0; i < n.length; ) X(r, ed((e = n[i++]).key) + '=' + ed(e.value));
        return Q(r, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var eh = function () {
        m(this, e_);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            n = M(this, new ep(e));
        !l && (this.size = n.entries.length);
    },
    e_ = eh.prototype;
if (
    (f(
        e_,
        {
            append: function (e, n) {
                var r = k(this);
                O(arguments.length, 2),
                    X(r.entries, {
                        key: T(e),
                        value: T(n)
                    }),
                    !l && this.length++,
                    r.updateURL();
            },
            delete: function (e) {
                for (var n = k(this), r = O(arguments.length, 1), i = n.entries, a = T(e), o = r < 2 ? void 0 : arguments[1], s = void 0 === o ? o : T(o), u = 0; u < i.length; ) {
                    var c = i[u];
                    if (c.key === a && (void 0 === s || c.value === s)) {
                        if ((ee(i, u, 1), void 0 !== s)) break;
                    } else u++;
                }
                !l && (this.size = i.length), n.updateURL();
            },
            get: function (e) {
                var n = k(this).entries;
                O(arguments.length, 1);
                for (var r = T(e), i = 0; i < n.length; i++) if (n[i].key === r) return n[i].value;
                return null;
            },
            getAll: function (e) {
                var n = k(this).entries;
                O(arguments.length, 1);
                for (var r = T(e), i = [], a = 0; a < n.length; a++) n[a].key === r && X(i, n[a].value);
                return i;
            },
            has: function (e) {
                for (var n = k(this).entries, r = O(arguments.length, 1), i = T(e), a = r < 2 ? void 0 : arguments[1], o = void 0 === a ? a : T(a), s = 0; s < n.length; ) {
                    var l = n[s++];
                    if (l.key === i && (void 0 === o || l.value === o)) return !0;
                }
                return !1;
            },
            set: function (e, n) {
                var r,
                    i = k(this);
                O(arguments.length, 1);
                for (var a = i.entries, o = !1, s = T(e), u = T(n), c = 0; c < a.length; c++) (r = a[c]).key === s && (o ? ee(a, c--, 1) : ((o = !0), (r.value = u)));
                !o &&
                    X(a, {
                        key: s,
                        value: u
                    }),
                    !l && (this.size = a.length),
                    i.updateURL();
            },
            sort: function () {
                var e = k(this);
                x(e.entries, function (e, n) {
                    return e.key > n.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var n, r = k(this).entries, i = v(e, arguments.length > 1 ? arguments[1] : void 0), a = 0; a < r.length; ) i((n = r[a++]).value, n.key, this);
            },
            keys: function () {
                return new ef(this, 'keys');
            },
            values: function () {
                return new ef(this, 'values');
            },
            entries: function () {
                return new ef(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    c(e_, L, e_.entries, { name: 'entries' }),
    c(
        e_,
        'toString',
        function () {
            return k(this).serialize();
        },
        { enumerable: !0 }
    ),
    l &&
        d(e_, 'size', {
            get: function () {
                return k(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    p(eh, w),
    i(
        {
            global: !0,
            constructor: !0,
            forced: !u
        },
        { URLSearchParams: eh }
    ),
    !u && g(V))
) {
    var em = s(H.has),
        eg = s(H.set),
        eE = function (e) {
            if (I(e)) {
                var n,
                    r = e.body;
                if (y(r) === w)
                    return (
                        !em((n = e.headers ? new V(e.headers) : new V()), 'content-type') && eg(n, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        S(e, {
                            body: A(0, T(r)),
                            headers: A(0, n)
                        })
                    );
            }
            return e;
        };
    if (
        (g(Z) &&
            i(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return Z(e, arguments.length > 1 ? eE(arguments[1]) : {});
                    }
                }
            ),
        g(F))
    ) {
        var ev = function (e) {
            return m(this, j), new F(e, arguments.length > 1 ? eE(arguments[1]) : {});
        };
        (j.constructor = ev),
            (ev.prototype = j),
            i(
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
    URLSearchParams: eh,
    getState: k
};
