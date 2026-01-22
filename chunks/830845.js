n.d(t, {
    AO: () => p,
    Fu: () => h,
    TM: () => x,
    sC: () => j,
    yJ: () => _,
    zR: () => T,
});
var r = n(1139),
    i = n(861193),
    a = n(987701),
    s = n(258635);
function o(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
function l(e) {
    return "/" === e.charAt(0) ? e.substr(1) : e;
}
function c(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length));
}
function u(e, t) {
    return c(e, t) ? e.substr(t.length) : e;
}
function d(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function f(e) {
    var t = e || "/",
        n = "",
        r = "",
        i = t.indexOf("#");
    -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
    var a = t.indexOf("?");
    return (
        -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
        {
            pathname: t,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
        }
    );
}
function p(e) {
    var t = e.pathname,
        n = e.search,
        r = e.hash,
        i = t || "/";
    return (
        n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
        i
    );
}
function _(e, t, n, a) {
    var s;
    "string" == typeof e
        ? ((s = f(e)).state = t)
        : (void 0 === (s = (0, r.A)({}, e)).pathname && (s.pathname = ""),
          s.search ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search) : (s.search = ""),
          s.hash ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash) : (s.hash = ""),
          void 0 !== t && void 0 === s.state && (s.state = t));
    try {
        s.pathname = decodeURI(s.pathname);
    } catch (e) {
        if (e instanceof URIError)
            throw URIError(
                'Pathname "' +
                    s.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            );
        throw e;
    }
    return (
        n && (s.key = n),
        a
            ? s.pathname
                ? "/" !== s.pathname.charAt(0) && (s.pathname = (0, i.A)(s.pathname, a.pathname))
                : (s.pathname = a.pathname)
            : s.pathname || (s.pathname = "/"),
        s
    );
}
function h(e, t) {
    return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        (0, a.A)(e.state, t.state)
    );
}
function m() {
    var e = null,
        t = [];
    return {
        setPrompt: function (t) {
            return (
                (e = t),
                function () {
                    e === t && (e = null);
                }
            );
        },
        confirmTransitionTo: function (t, n, r, i) {
            if (null != e) {
                var a = "function" == typeof e ? e(t, n) : e;
                "string" == typeof a ? ("function" == typeof r ? r(a, i) : i(!0)) : i(!1 !== a);
            } else i(!0);
        },
        appendListener: function (e) {
            var n = !0;
            function r() {
                n && e.apply(void 0, arguments);
            }
            return (
                t.push(r),
                function () {
                    (n = !1),
                        (t = t.filter(function (e) {
                            return e !== r;
                        }));
                }
            );
        },
        notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
                return e.apply(void 0, n);
            });
        },
    };
}
var g = !!("u" > typeof window && window.document && window.document.createElement);
function E(e, t) {
    t(window.confirm(e));
}
function b() {
    var e = window.navigator.userAgent;
    return (
        ((-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0")) ||
            -1 === e.indexOf("Mobile Safari") ||
            -1 !== e.indexOf("Chrome") ||
            -1 !== e.indexOf("Windows Phone")) &&
        window.history &&
        "pushState" in window.history
    );
}
function y() {
    return -1 === window.navigator.userAgent.indexOf("Trident");
}
function O() {
    return -1 === window.navigator.userAgent.indexOf("Firefox");
}
function A(e) {
    return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS");
}
var v = "popstate",
    S = "hashchange";
function I() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function T(e) {
    void 0 === e && (e = {}), g || (0, s.A)(!1);
    var t = window.history,
        n = b(),
        i = !y(),
        a = e,
        l = a.forceRefresh,
        c = void 0 !== l && l,
        f = a.getUserConfirmation,
        h = void 0 === f ? E : f,
        O = a.keyLength,
        T = void 0 === O ? 6 : O,
        C = e.basename ? d(o(e.basename)) : "";
    function N(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
        return C && (a = u(a, C)), _(a, r, n);
    }
    function R() {
        return Math.random().toString(36).substr(2, T);
    }
    var w = m();
    function P(e) {
        (0, r.A)(Z, e), (Z.length = t.length), w.notifyListeners(Z.location, Z.action);
    }
    function D(e) {
        A(e) || j(N(e.state));
    }
    function x() {
        j(N(I()));
    }
    var L = !1;
    function j(e) {
        if (L) (L = !1), P();
        else {
            var t = "POP";
            w.confirmTransitionTo(e, t, h, function (n) {
                n
                    ? P({
                          action: t,
                          location: e,
                      })
                    : M(e);
            });
        }
    }
    function M(e) {
        var t = Z.location,
            n = U.indexOf(t.key);
        -1 === n && (n = 0);
        var r = U.indexOf(e.key);
        -1 === r && (r = 0);
        var i = n - r;
        i && ((L = !0), B(i));
    }
    var k = N(I()),
        U = [k.key];
    function G(e) {
        return C + p(e);
    }
    function V(e, r) {
        var i = "PUSH",
            a = _(e, r, R(), Z.location);
        w.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = G(a),
                    s = a.key,
                    o = a.state;
                if (n)
                    if (
                        (t.pushState(
                            {
                                key: s,
                                state: o,
                            },
                            null,
                            r,
                        ),
                        c)
                    )
                        window.location.href = r;
                    else {
                        var l = U.indexOf(Z.location.key),
                            u = U.slice(0, l + 1);
                        u.push(a.key),
                            (U = u),
                            P({
                                action: i,
                                location: a,
                            });
                    }
                else window.location.href = r;
            }
        });
    }
    function F(e, r) {
        var i = "REPLACE",
            a = _(e, r, R(), Z.location);
        w.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = G(a),
                    s = a.key,
                    o = a.state;
                if (n)
                    if (
                        (t.replaceState(
                            {
                                key: s,
                                state: o,
                            },
                            null,
                            r,
                        ),
                        c)
                    )
                        window.location.replace(r);
                    else {
                        var l = U.indexOf(Z.location.key);
                        -1 !== l && (U[l] = a.key),
                            P({
                                action: i,
                                location: a,
                            });
                    }
                else window.location.replace(r);
            }
        });
    }
    function B(e) {
        t.go(e);
    }
    function H() {
        B(-1);
    }
    function Y() {
        B(1);
    }
    var W = 0;
    function K(e) {
        1 === (W += e) && 1 === e
            ? (window.addEventListener(v, D), i && window.addEventListener(S, x))
            : 0 === W && (window.removeEventListener(v, D), i && window.removeEventListener(S, x));
    }
    var z = !1;
    function q(e) {
        void 0 === e && (e = !1);
        var t = w.setPrompt(e);
        return (
            z || (K(1), (z = !0)),
            function () {
                return z && ((z = !1), K(-1)), t();
            }
        );
    }
    function X(e) {
        var t = w.appendListener(e);
        return (
            K(1),
            function () {
                K(-1), t();
            }
        );
    }
    var Z = {
        length: t.length,
        action: "POP",
        location: k,
        createHref: G,
        push: V,
        replace: F,
        go: B,
        goBack: H,
        goForward: Y,
        block: q,
        listen: X,
    };
    return Z;
}
var C = "hashchange",
    N = {
        hashbang: {
            encodePath: function (e) {
                return "!" === e.charAt(0) ? e : "!/" + l(e);
            },
            decodePath: function (e) {
                return "!" === e.charAt(0) ? e.substr(1) : e;
            },
        },
        noslash: {
            encodePath: l,
            decodePath: o,
        },
        slash: {
            encodePath: o,
            decodePath: o,
        },
    };
function R(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function w() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function P(e) {
    window.location.hash = e;
}
function D(e) {
    window.location.replace(R(window.location.href) + "#" + e);
}
function x(e) {
    void 0 === e && (e = {}), g || (0, s.A)(!1);
    var t = window.history;
    O();
    var n = e,
        i = n.getUserConfirmation,
        a = void 0 === i ? E : i,
        l = n.hashType,
        c = void 0 === l ? "slash" : l,
        f = e.basename ? d(o(e.basename)) : "",
        h = N[c],
        b = h.encodePath,
        y = h.decodePath;
    function A() {
        var e = y(w());
        return f && (e = u(e, f)), _(e);
    }
    var v = m();
    function S(e) {
        (0, r.A)($, e), ($.length = t.length), v.notifyListeners($.location, $.action);
    }
    var I = !1,
        T = null;
    function x(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash;
    }
    function L() {
        var e = w(),
            t = b(e);
        if (e !== t) D(t);
        else {
            var n = A(),
                r = $.location;
            if ((!I && x(r, n)) || T === p(n)) return;
            (T = null), j(n);
        }
    }
    function j(e) {
        if (I) (I = !1), S();
        else {
            var t = "POP";
            v.confirmTransitionTo(e, t, a, function (n) {
                n
                    ? S({
                          action: t,
                          location: e,
                      })
                    : M(e);
            });
        }
    }
    function M(e) {
        var t = $.location,
            n = V.lastIndexOf(p(t));
        -1 === n && (n = 0);
        var r = V.lastIndexOf(p(e));
        -1 === r && (r = 0);
        var i = n - r;
        i && ((I = !0), Y(i));
    }
    var k = w(),
        U = b(k);
    k !== U && D(U);
    var G = A(),
        V = [p(G)];
    function F(e) {
        var t = document.querySelector("base"),
            n = "";
        return t && t.getAttribute("href") && (n = R(window.location.href)), n + "#" + b(f + p(e));
    }
    function B(e, t) {
        var n = "PUSH",
            r = _(e, void 0, void 0, $.location);
        v.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = p(r),
                    i = b(f + t),
                    a = w() !== i;
                if (a) {
                    (T = t), P(i);
                    var s = V.lastIndexOf(p($.location)),
                        o = V.slice(0, s + 1);
                    o.push(t),
                        (V = o),
                        S({
                            action: n,
                            location: r,
                        });
                } else S();
            }
        });
    }
    function H(e, t) {
        var n = "REPLACE",
            r = _(e, void 0, void 0, $.location);
        v.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = p(r),
                    i = b(f + t),
                    a = w() !== i;
                a && ((T = t), D(i));
                var s = V.indexOf(p($.location));
                -1 !== s && (V[s] = t),
                    S({
                        action: n,
                        location: r,
                    });
            }
        });
    }
    function Y(e) {
        t.go(e);
    }
    function W() {
        Y(-1);
    }
    function K() {
        Y(1);
    }
    var z = 0;
    function q(e) {
        1 === (z += e) && 1 === e ? window.addEventListener(C, L) : 0 === z && window.removeEventListener(C, L);
    }
    var X = !1;
    function Z(e) {
        void 0 === e && (e = !1);
        var t = v.setPrompt(e);
        return (
            X || (q(1), (X = !0)),
            function () {
                return X && ((X = !1), q(-1)), t();
            }
        );
    }
    function Q(e) {
        var t = v.appendListener(e);
        return (
            q(1),
            function () {
                q(-1), t();
            }
        );
    }
    var $ = {
        length: t.length,
        action: "POP",
        location: G,
        createHref: F,
        push: B,
        replace: H,
        go: Y,
        goBack: W,
        goForward: K,
        block: Z,
        listen: Q,
    };
    return $;
}
function L(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function j(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        a = void 0 === i ? ["/"] : i,
        s = t.initialIndex,
        o = void 0 === s ? 0 : s,
        l = t.keyLength,
        c = void 0 === l ? 6 : l,
        u = m();
    function d(e) {
        (0, r.A)(C, e), (C.length = C.entries.length), u.notifyListeners(C.location, C.action);
    }
    function f() {
        return Math.random().toString(36).substr(2, c);
    }
    var h = L(o, 0, a.length - 1),
        g = a.map(function (e) {
            return "string" == typeof e ? _(e, void 0, f()) : _(e, void 0, e.key || f());
        }),
        E = p;
    function b(e, t) {
        var r = "PUSH",
            i = _(e, t, f(), C.location);
        u.confirmTransitionTo(i, r, n, function (e) {
            if (e) {
                var t = C.index,
                    n = t + 1,
                    a = C.entries.slice(0);
                a.length > n ? a.splice(n, a.length - n, i) : a.push(i),
                    d({
                        action: r,
                        location: i,
                        index: n,
                        entries: a,
                    });
            }
        });
    }
    function y(e, t) {
        var r = "REPLACE",
            i = _(e, t, f(), C.location);
        u.confirmTransitionTo(i, r, n, function (e) {
            e &&
                ((C.entries[C.index] = i),
                d({
                    action: r,
                    location: i,
                }));
        });
    }
    function O(e) {
        var t = L(C.index + e, 0, C.entries.length - 1),
            r = "POP",
            i = C.entries[t];
        u.confirmTransitionTo(i, r, n, function (e) {
            e
                ? d({
                      action: r,
                      location: i,
                      index: t,
                  })
                : d();
        });
    }
    function A() {
        O(-1);
    }
    function v() {
        O(1);
    }
    function S(e) {
        var t = C.index + e;
        return t >= 0 && t < C.entries.length;
    }
    function I(e) {
        return void 0 === e && (e = !1), u.setPrompt(e);
    }
    function T(e) {
        return u.appendListener(e);
    }
    var C = {
        length: g.length,
        action: "POP",
        location: g[h],
        index: h,
        entries: g,
        createHref: E,
        push: b,
        replace: y,
        go: O,
        goBack: A,
        goForward: v,
        canGo: S,
        block: I,
        listen: T,
    };
    return C;
}
