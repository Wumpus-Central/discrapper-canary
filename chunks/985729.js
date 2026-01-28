n(39139), n(916354);
var r = n(557939),
    i = n(860511),
    a = n(745730),
    o = n(230606),
    s = n(446474),
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
    y = n(210140),
    b = n(221015),
    O = n(324988),
    v = n(101968),
    A = n(598349),
    I = n(304880),
    S = n(482779),
    T = n(231977),
    C = n(327036),
    N = n(331336),
    w = n(503902),
    R = n(627),
    P = n(380744),
    D = n(953937),
    L = P("iterator"),
    x = "URLSearchParams",
    M = x + "Iterator",
    j = m.set,
    k = m.getterFor(x),
    U = m.getterFor(M),
    G = a("fetch"),
    F = a("Request"),
    V = a("Headers"),
    B = F && F.prototype,
    H = V && V.prototype,
    Y = i.TypeError,
    W = i.encodeURIComponent,
    K = String.fromCharCode,
    z = o("String", "fromCodePoint"),
    q = parseInt,
    Z = l("".charAt),
    Q = l([].join),
    X = l([].push),
    J = l("".replace),
    $ = l([].shift),
    ee = l([].splice),
    et = l("".split),
    en = l("".slice),
    er = l(/./.exec),
    ei = /\+/g,
    ea = "�",
    eo = /^[0-9a-f]+$/i,
    es = function (e, t) {
        var n = en(e, t, t + 2);
        return er(eo, n) ? q(n, 16) : NaN;
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
        for (var t = (e = J(e, ei, " ")).length, n = "", r = 0; r < t; ) {
            var i = Z(e, r);
            if ("%" === i) {
                if ("%" === Z(e, r + 1) || r + 3 > t) {
                    (n += "%"), r++;
                    continue;
                }
                var a = es(e, r + 1);
                if (a != a) {
                    (n += i), r++;
                    continue;
                }
                r += 2;
                var o = el(a);
                if (0 === o) i = K(a);
                else {
                    if (1 === o || o > 4) {
                        (n += ea), r++;
                        continue;
                    }
                    for (var s = [a], l = 1; l < o && !(++r + 3 > t) && "%" === Z(e, r); ) {
                        var c = es(e, r + 1);
                        if (c != c) {
                            r += 3;
                            break;
                        }
                        if (c > 191 || c < 128) break;
                        X(s, c), (r += 2), l++;
                    }
                    if (s.length !== o) {
                        n += ea;
                        continue;
                    }
                    var u = ec(s);
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
        return J(W(e), ed, ep);
    },
    eh = h(
        function (e, t) {
            j(this, {
                type: M,
                target: k(e).entries,
                index: 0,
                kind: t,
            });
        },
        x,
        function () {
            var e = U(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = null), w(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case "keys":
                    return w(r.key, !1);
                case "values":
                    return w(r.value, !1);
            }
            return w([r.key, r.value], !1);
        },
        !0,
    ),
    em = function (e) {
        (this.entries = []),
            (this.url = null),
            void 0 !== e &&
                (A(e)
                    ? this.parseObject(e)
                    : this.parseQuery("string" == typeof e ? ("?" === Z(e, 0) ? en(e, 1) : e) : I(e)));
    };
em.prototype = {
    type: x,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            l,
            c = this.entries,
            u = N(e);
        if (u)
            for (n = (t = C(e, u)).next; !(r = s(n, t)).done; ) {
                if ((o = s((a = (i = C(v(r.value))).next), i)).done || (l = s(a, i)).done || !s(a, i).done)
                    throw new Y("Expected sequence with length 2");
                X(c, {
                    key: I(o.value),
                    value: I(l.value),
                });
            }
        else
            for (var d in e)
                y(e, d) &&
                    X(c, {
                        key: d,
                        value: I(e[d]),
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, n, r = this.entries, i = et(e, "&"), a = 0; a < i.length; )
                (t = i[a++]).length &&
                    X(r, {
                        key: eu($((n = et(t, "=")))),
                        value: eu(Q(n, "=")),
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) X(n, e_((e = t[r++]).key) + "=" + e_(e.value));
        return Q(n, "&");
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
            t = j(this, new em(e));
        c || (this.size = t.entries.length);
    },
    eE = eg.prototype;
if (
    (p(
        eE,
        {
            append: function (e, t) {
                var n = k(this);
                R(arguments.length, 2),
                    X(n.entries, {
                        key: I(e),
                        value: I(t),
                    }),
                    !c && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (
                    var t = k(this),
                        n = R(arguments.length, 1),
                        r = t.entries,
                        i = I(e),
                        a = n < 2 ? void 0 : arguments[1],
                        o = void 0 === a ? a : I(a),
                        s = 0;
                    s < r.length;
                ) {
                    var l = r[s];
                    if (l.key === i && (void 0 === o || l.value === o)) {
                        if ((ee(r, s, 1), void 0 !== o)) break;
                    } else s++;
                }
                c || (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = k(this).entries;
                R(arguments.length, 1);
                for (var n = I(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = k(this).entries;
                R(arguments.length, 1);
                for (var n = I(e), r = [], i = 0; i < t.length; i++) t[i].key === n && X(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (
                    var t = k(this).entries,
                        n = R(arguments.length, 1),
                        r = I(e),
                        i = n < 2 ? void 0 : arguments[1],
                        a = void 0 === i ? i : I(i),
                        o = 0;
                    o < t.length;
                ) {
                    var s = t[o++];
                    if (s.key === r && (void 0 === a || s.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = k(this);
                R(arguments.length, 1);
                for (var i = r.entries, a = !1, o = I(e), s = I(t), l = 0; l < i.length; l++)
                    (n = i[l]).key === o && (a ? ee(i, l--, 1) : ((a = !0), (n.value = s)));
                a ||
                    X(i, {
                        key: o,
                        value: s,
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
                    var t, n = k(this).entries, r = b(e, arguments.length > 1 ? arguments[1] : void 0), i = 0;
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
    d(eE, L, eE.entries, {
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
    _(eg, x),
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
    !u && E(V))
) {
    var ey = l(H.has),
        eb = l(H.set),
        eO = function (e) {
            if (A(e)) {
                var t,
                    n = e.body;
                if (O(n) === x)
                    return (
                        ey((t = e.headers ? new V(e.headers) : new V()), "content-type") ||
                            eb(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        S(e, {
                            body: T(0, I(n)),
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
        E(F))
    ) {
        var ev = function (e) {
            return g(this, B), new F(e, arguments.length > 1 ? eO(arguments[1]) : {});
        };
        (B.constructor = ev),
            (ev.prototype = B),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    Request: ev,
                },
            );
    }
}
e.exports = {
    URLSearchParams: eg,
    getState: k,
};
