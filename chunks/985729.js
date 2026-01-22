n(39139), n(916354);
var r = n(557939),
    i = n(860511),
    a = n(745730),
    s = n(230606),
    o = n(446474),
    l = n(410323),
    c = n(257943),
    u = n(39911),
    d = n(693655),
    f = n(485155),
    p = n(673570),
    _ = n(174168),
    h = n(23277),
    m = n(883972),
    g = n(61132),
    E = n(339626),
    b = n(210140),
    y = n(221015),
    O = n(324988),
    A = n(101968),
    v = n(598349),
    S = n(304880),
    I = n(482779),
    T = n(231977),
    C = n(327036),
    N = n(331336),
    R = n(503902),
    w = n(627),
    P = n(380744),
    D = n(953937),
    x = P("iterator"),
    L = "URLSearchParams",
    j = L + "Iterator",
    M = m.set,
    k = m.getterFor(L),
    U = m.getterFor(j),
    G = a("fetch"),
    V = a("Request"),
    F = a("Headers"),
    B = V && V.prototype,
    H = F && F.prototype,
    Y = i.TypeError,
    W = i.encodeURIComponent,
    K = String.fromCharCode,
    z = s("String", "fromCodePoint"),
    q = parseInt,
    X = l("".charAt),
    Z = l([].join),
    Q = l([].push),
    $ = l("".replace),
    J = l([].shift),
    ee = l([].splice),
    et = l("".split),
    en = l("".slice),
    er = l(/./.exec),
    ei = /\+/g,
    ea = "�",
    es = /^[0-9a-f]+$/i,
    eo = function (e, t) {
        var n = en(e, t, t + 2);
        return er(es, n) ? q(n, 16) : NaN;
    },
    el = function (e) {
        for (var t = 0, n = 128; n > 0 && (e & n) != 0; n >>= 1) t++;
        return t;
    },
    ec = function (e) {
        var t = null;
        switch (e.length) {
            case 1:
                t = e[0];
                break;
            case 2:
                t = ((31 & e[0]) << 6) | (63 & e[1]);
                break;
            case 3:
                t = ((15 & e[0]) << 12) | ((63 & e[1]) << 6) | (63 & e[2]);
                break;
            case 4:
                t = ((7 & e[0]) << 18) | ((63 & e[1]) << 12) | ((63 & e[2]) << 6) | (63 & e[3]);
        }
        return t > 1114111 ? null : t;
    },
    eu = function (e) {
        for (var t = (e = $(e, ei, " ")).length, n = "", r = 0; r < t; ) {
            var i = X(e, r);
            if ("%" === i) {
                if ("%" === X(e, r + 1) || r + 3 > t) {
                    (n += "%"), r++;
                    continue;
                }
                var a = eo(e, r + 1);
                if (a != a) {
                    (n += i), r++;
                    continue;
                }
                r += 2;
                var s = el(a);
                if (0 === s) i = K(a);
                else {
                    if (1 === s || s > 4) {
                        (n += ea), r++;
                        continue;
                    }
                    for (var o = [a], l = 1; l < s && !(++r + 3 > t) && "%" === X(e, r); ) {
                        var c = eo(e, r + 1);
                        if (c != c) {
                            r += 3;
                            break;
                        }
                        if (c > 191 || c < 128) break;
                        Q(o, c), (r += 2), l++;
                    }
                    if (o.length !== s) {
                        n += ea;
                        continue;
                    }
                    var u = ec(o);
                    null === u ? (n += ea) : (i = z(u));
                }
            }
            (n += i), r++;
        }
        return n;
    },
    ed = /[!'()~]|%20/g,
    ef = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
    },
    ep = function (e) {
        return ef[e];
    },
    e_ = function (e) {
        return $(W(e), ed, ep);
    },
    eh = h(
        function (e, t) {
            M(this, {
                type: j,
                target: k(e).entries,
                index: 0,
                kind: t,
            });
        },
        L,
        function () {
            var e = U(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = null), R(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case "keys":
                    return R(r.key, !1);
                case "values":
                    return R(r.value, !1);
            }
            return R([r.key, r.value], !1);
        },
        !0,
    ),
    em = function (e) {
        (this.entries = []),
            (this.url = null),
            void 0 !== e &&
                (v(e)
                    ? this.parseObject(e)
                    : this.parseQuery("string" == typeof e ? ("?" === X(e, 0) ? en(e, 1) : e) : S(e)));
    };
em.prototype = {
    type: L,
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
            for (n = (t = C(e, u)).next; !(r = o(n, t)).done; ) {
                if ((s = o((a = (i = C(A(r.value))).next), i)).done || (l = o(a, i)).done || !o(a, i).done)
                    throw new Y("Expected sequence with length 2");
                Q(c, {
                    key: S(s.value),
                    value: S(l.value),
                });
            }
        else
            for (var d in e)
                b(e, d) &&
                    Q(c, {
                        key: d,
                        value: S(e[d]),
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, i = et(e, "&"), a = 0; a < i.length; )
                (t = i[a++]).length &&
                    Q(r, {
                        key: eu(J((n = et(t, "=")))),
                        value: eu(Z(n, "=")),
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) Q(n, e_((e = t[r++]).key) + "=" + e_(e.value));
        return Z(n, "&");
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    },
};
var eg = function () {
        g(this, eE);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = M(this, new em(e));
        c || (this.size = t.entries.length);
    },
    eE = eg.prototype;
if (
    (p(
        eE,
        {
            append: function (e, t) {
                var n = k(this);
                w(arguments.length, 2),
                    Q(n.entries, {
                        key: S(e),
                        value: S(t),
                    }),
                    !c && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (
                    var t = k(this),
                        n = w(arguments.length, 1),
                        r = t.entries,
                        i = S(e),
                        a = n < 2 ? void 0 : arguments[1],
                        s = void 0 === a ? a : S(a),
                        o = 0;
                    o < r.length;
                ) {
                    var l = r[o];
                    if (l.key === i && (void 0 === s || l.value === s)) {
                        if ((ee(r, o, 1), void 0 !== s)) break;
                    } else o++;
                }
                c || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = k(this).entries;
                w(arguments.length, 1);
                for (var n = S(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = k(this).entries;
                w(arguments.length, 1);
                for (var n = S(e), r = [], i = 0; i < t.length; i++) t[i].key === n && Q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (
                    var t = k(this).entries,
                        n = w(arguments.length, 1),
                        r = S(e),
                        i = n < 2 ? void 0 : arguments[1],
                        a = void 0 === i ? i : S(i),
                        s = 0;
                    s < t.length;
                ) {
                    var o = t[s++];
                    if (o.key === r && (void 0 === a || o.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = k(this);
                w(arguments.length, 1);
                for (var i = r.entries, a = !1, s = S(e), o = S(t), l = 0; l < i.length; l++)
                    (n = i[l]).key === s && (a ? ee(i, l--, 1) : ((a = !0), (n.value = o)));
                a ||
                    Q(i, {
                        key: s,
                        value: o,
                    }),
                    c || (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = k(this);
                D(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (
                    var t, n = k(this).entries, r = y(e, arguments.length > 1 ? arguments[1] : void 0), i = 0;
                    i < n.length;
                )
                    r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new eh(this, "keys");
            },
            values: function () {
                return new eh(this, "values");
            },
            entries: function () {
                return new eh(this, "entries");
            },
        },
        {
            enumerable: !0,
        },
    ),
    d(eE, x, eE.entries, {
        name: "entries",
    }),
    d(
        eE,
        "toString",
        function () {
            return k(this).serialize();
        },
        {
            enumerable: !0,
        },
    ),
    c &&
        f(eE, "size", {
            get: function () {
                return k(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
        }),
    _(eg, L),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !u,
        },
        {
            URLSearchParams: eg,
        },
    ),
    !u && E(F))
) {
    var eb = l(H.has),
        ey = l(H.set),
        eO = function (e) {
            if (v(e)) {
                var t,
                    n = e.body;
                if (O(n) === L)
                    return (
                        eb((t = e.headers ? new F(e.headers) : new F()), "content-type") ||
                            ey(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        I(e, {
                            body: T(0, S(n)),
                            headers: T(0, t),
                        })
                    );
            }
            return e;
        };
    if (
        (E(G) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    fetch: function (e) {
                        return G(e, arguments.length > 1 ? eO(arguments[1]) : {});
                    },
                },
            ),
        E(V))
    ) {
        var eA = function (e) {
            return g(this, B), new V(e, arguments.length > 1 ? eO(arguments[1]) : {});
        };
        (B.constructor = eA),
            (eA.prototype = B),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    Request: eA,
                },
            );
    }
}
e.exports = {
    URLSearchParams: eg,
    getState: k,
};
