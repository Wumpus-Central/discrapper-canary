r(39139), r(916354);
var n = r(557939),
    s = r(860511),
    i = r(745730),
    a = r(230606),
    h = r(446474),
    o = r(410323),
    u = r(257943),
    f = r(39911),
    l = r(693655),
    c = r(485155),
    p = r(673570),
    g = r(174168),
    v = r(23277),
    d = r(883972),
    m = r(61132),
    w = r(339626),
    b = r(210140),
    y = r(221015),
    k = r(324988),
    S = r(101968),
    P = r(598349),
    U = r(304880),
    R = r(482779),
    L = r(231977),
    x = r(327036),
    q = r(331336),
    H = r(503902),
    A = r(627),
    B = r(380744),
    C = r(953937),
    z = B("iterator"),
    O = "URLSearchParams",
    j = O + "Iterator",
    E = d.set,
    I = d.getterFor(O),
    F = d.getterFor(j),
    N = i("fetch"),
    $ = i("Request"),
    T = i("Headers"),
    J = $ && $.prototype,
    M = T && T.prototype,
    Q = s.TypeError,
    D = s.encodeURIComponent,
    G = String.fromCharCode,
    _ = a("String", "fromCodePoint"),
    K = parseInt,
    V = o("".charAt),
    W = o([].join),
    X = o([].push),
    Y = o("".replace),
    Z = o([].shift),
    ee = o([].splice),
    et = o("".split),
    er = o("".slice),
    en = o(/./.exec),
    es = /\+/g,
    ei = /^[0-9a-f]+$/i,
    ea = function (e, t) {
        var r = er(e, t, t + 2);
        return en(ei, r) ? K(r, 16) : NaN;
    },
    eh = function (e) {
        for (var t = 0, r = 128; r > 0 && (e & r) != 0; r >>= 1) t++;
        return t;
    },
    eo = function (e) {
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
        for (var t = (e = Y(e, es, " ")).length, r = "", n = 0; n < t; ) {
            var s = V(e, n);
            if ("%" === s) {
                if ("%" === V(e, n + 1) || n + 3 > t) {
                    (r += "%"), n++;
                    continue;
                }
                var i = ea(e, n + 1);
                if (i != i) {
                    (r += s), n++;
                    continue;
                }
                n += 2;
                var a = eh(i);
                if (0 === a) s = G(i);
                else {
                    if (1 === a || a > 4) {
                        (r += "�"), n++;
                        continue;
                    }
                    for (var h = [i], o = 1; o < a && !(++n + 3 > t) && "%" === V(e, n); ) {
                        var u = ea(e, n + 1);
                        if (u != u) {
                            n += 3;
                            break;
                        }
                        if (u > 191 || u < 128) break;
                        X(h, u), (n += 2), o++;
                    }
                    if (h.length !== a) {
                        r += "�";
                        continue;
                    }
                    var f = eo(h);
                    null === f ? (r += "�") : (s = _(f));
                }
            }
            (r += s), n++;
        }
        return r;
    },
    ef = /[!'()~]|%20/g,
    el = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
    },
    ec = function (e) {
        return el[e];
    },
    ep = function (e) {
        return Y(D(e), ef, ec);
    },
    eg = v(
        function (e, t) {
            E(this, {
                type: j,
                target: I(e).entries,
                index: 0,
                kind: t,
            });
        },
        O,
        function () {
            var e = F(this),
                t = e.target,
                r = e.index++;
            if (!t || r >= t.length) return (e.target = null), H(void 0, !0);
            var n = t[r];
            switch (e.kind) {
                case "keys":
                    return H(n.key, !1);
                case "values":
                    return H(n.value, !1);
            }
            return H([n.key, n.value], !1);
        },
        !0,
    ),
    ev = function (e) {
        (this.entries = []),
            (this.url = null),
            void 0 !== e &&
                (P(e)
                    ? this.parseObject(e)
                    : this.parseQuery("string" == typeof e ? ("?" === V(e, 0) ? er(e, 1) : e) : U(e)));
    };
ev.prototype = {
    type: O,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            r,
            n,
            s,
            i,
            a,
            o,
            u = this.entries,
            f = q(e);
        if (f)
            for (r = (t = x(e, f)).next; !(n = h(r, t)).done; ) {
                if ((a = h((i = (s = x(S(n.value))).next), s)).done || (o = h(i, s)).done || !h(i, s).done)
                    throw new Q("Expected sequence with length 2");
                X(u, {
                    key: U(a.value),
                    value: U(o.value),
                });
            }
        else
            for (var l in e)
                b(e, l) &&
                    X(u, {
                        key: l,
                        value: U(e[l]),
                    });
    },
    parseQuery: function (e) {
        if (e)
            for (var t, r, n = this.entries, s = et(e, "&"), i = 0; i < s.length; )
                (t = s[i++]).length &&
                    X(n, {
                        key: eu(Z((r = et(t, "=")))),
                        value: eu(W(r, "=")),
                    });
    },
    serialize: function () {
        for (var e, t = this.entries, r = [], n = 0; n < t.length; ) X(r, ep((e = t[n++]).key) + "=" + ep(e.value));
        return W(r, "&");
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    },
};
var ed = function () {
        m(this, em);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = E(this, new ev(e));
        u || (this.size = t.entries.length);
    },
    em = ed.prototype;
if (
    (p(
        em,
        {
            append: function (e, t) {
                var r = I(this);
                A(arguments.length, 2),
                    X(r.entries, {
                        key: U(e),
                        value: U(t),
                    }),
                    !u && this.length++,
                    r.updateURL();
            },
            delete: function (e) {
                for (
                    var t = I(this),
                        r = A(arguments.length, 1),
                        n = t.entries,
                        s = U(e),
                        i = r < 2 ? void 0 : arguments[1],
                        a = void 0 === i ? i : U(i),
                        h = 0;
                    h < n.length;
                ) {
                    var o = n[h];
                    if (o.key === s && (void 0 === a || o.value === a)) {
                        if ((ee(n, h, 1), void 0 !== a)) break;
                    } else h++;
                }
                u || (this.size = n.length), t.updateURL();
            },
            get: function (e) {
                var t = I(this).entries;
                A(arguments.length, 1);
                for (var r = U(e), n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;
                return null;
            },
            getAll: function (e) {
                var t = I(this).entries;
                A(arguments.length, 1);
                for (var r = U(e), n = [], s = 0; s < t.length; s++) t[s].key === r && X(n, t[s].value);
                return n;
            },
            has: function (e) {
                for (
                    var t = I(this).entries,
                        r = A(arguments.length, 1),
                        n = U(e),
                        s = r < 2 ? void 0 : arguments[1],
                        i = void 0 === s ? s : U(s),
                        a = 0;
                    a < t.length;
                ) {
                    var h = t[a++];
                    if (h.key === n && (void 0 === i || h.value === i)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var r,
                    n = I(this);
                A(arguments.length, 1);
                for (var s = n.entries, i = !1, a = U(e), h = U(t), o = 0; o < s.length; o++)
                    (r = s[o]).key === a && (i ? ee(s, o--, 1) : ((i = !0), (r.value = h)));
                i ||
                    X(s, {
                        key: a,
                        value: h,
                    }),
                    u || (this.size = s.length),
                    n.updateURL();
            },
            sort: function () {
                var e = I(this);
                C(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (
                    var t, r = I(this).entries, n = y(e, arguments.length > 1 ? arguments[1] : void 0), s = 0;
                    s < r.length;
                )
                    n((t = r[s++]).value, t.key, this);
            },
            keys: function () {
                return new eg(this, "keys");
            },
            values: function () {
                return new eg(this, "values");
            },
            entries: function () {
                return new eg(this, "entries");
            },
        },
        {
            enumerable: !0,
        },
    ),
    l(em, z, em.entries, {
        name: "entries",
    }),
    l(
        em,
        "toString",
        function () {
            return I(this).serialize();
        },
        {
            enumerable: !0,
        },
    ),
    u &&
        c(em, "size", {
            get: function () {
                return I(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
        }),
    g(ed, O),
    n(
        {
            global: !0,
            constructor: !0,
            forced: !f,
        },
        {
            URLSearchParams: ed,
        },
    ),
    !f && w(T))
) {
    var ew = o(M.has),
        eb = o(M.set),
        ey = function (e) {
            if (P(e)) {
                var t,
                    r = e.body;
                if (k(r) === O)
                    return (
                        ew((t = e.headers ? new T(e.headers) : new T()), "content-type") ||
                            eb(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        R(e, {
                            body: L(0, U(r)),
                            headers: L(0, t),
                        })
                    );
            }
            return e;
        };
    if (
        (w(N) &&
            n(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    fetch: function (e) {
                        return N(e, arguments.length > 1 ? ey(arguments[1]) : {});
                    },
                },
            ),
        w($))
    ) {
        var ek = function (e) {
            return m(this, J), new $(e, arguments.length > 1 ? ey(arguments[1]) : {});
        };
        (J.constructor = ek),
            (ek.prototype = J),
            n(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                },
                {
                    Request: ek,
                },
            );
    }
}
e.exports = {
    URLSearchParams: ed,
    getState: I,
};
