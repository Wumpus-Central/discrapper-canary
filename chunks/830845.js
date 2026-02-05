"use strict";
n.d(t, { AO: () => f, Fu: () => h, TM: () => x, sC: () => M, yJ: () => p, zR: () => b });
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
function u(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length));
}
function c(e, t) {
    return u(e, t) ? e.substr(t.length) : e;
}
function d(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function _(e) {
    var t = e || "/",
        n = "",
        r = "",
        i = t.indexOf("#");
    -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
    var a = t.indexOf("?");
    return (
        -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
        { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
    );
}
function f(e) {
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
function p(e, t, n, a) {
    var s;
    "string" == typeof e
        ? ((s = _(e)).state = t)
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
function A() {
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
function I() {
    return -1 === window.navigator.userAgent.indexOf("Trident");
}
function T() {
    return -1 === window.navigator.userAgent.indexOf("Firefox");
}
function y(e) {
    return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS");
}
var S = "popstate",
    v = "hashchange";
function C() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function b(e) {
    void 0 === e && (e = {}), g || (0, s.A)(!1);
    var t = window.history,
        n = A(),
        i = !I(),
        a = e,
        l = a.forceRefresh,
        u = void 0 !== l && l,
        _ = a.getUserConfirmation,
        h = void 0 === _ ? E : _,
        T = a.keyLength,
        b = void 0 === T ? 6 : T,
        N = e.basename ? d(o(e.basename)) : "";
    function R(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
        return N && (a = c(a, N)), p(a, r, n);
    }
    function O() {
        return Math.random().toString(36).substr(2, b);
    }
    var D = m();
    function L(e) {
        (0, r.A)(Z, e), (Z.length = t.length), D.notifyListeners(Z.location, Z.action);
    }
    function w(e) {
        y(e) || M(R(e.state));
    }
    function x() {
        M(R(C()));
    }
    var P = !1;
    function M(e) {
        if (P) (P = !1), L();
        else {
            var t = "POP";
            D.confirmTransitionTo(e, t, h, function (n) {
                n ? L({ action: t, location: e }) : k(e);
            });
        }
    }
    function k(e) {
        var t = Z.location,
            n = G.indexOf(t.key);
        -1 === n && (n = 0);
        var r = G.indexOf(e.key);
        -1 === r && (r = 0);
        var i = n - r;
        i && ((P = !0), j(i));
    }
    var U = R(C()),
        G = [U.key];
    function V(e) {
        return N + f(e);
    }
    function F(e, r) {
        var i = "PUSH",
            a = p(e, r, O(), Z.location);
        D.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = V(a),
                    s = a.key,
                    o = a.state;
                if (n)
                    if ((t.pushState({ key: s, state: o }, null, r), u)) window.location.href = r;
                    else {
                        var l = G.indexOf(Z.location.key),
                            c = G.slice(0, l + 1);
                        c.push(a.key), (G = c), L({ action: i, location: a });
                    }
                else window.location.href = r;
            }
        });
    }
    function B(e, r) {
        var i = "REPLACE",
            a = p(e, r, O(), Z.location);
        D.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = V(a),
                    s = a.key,
                    o = a.state;
                if (n)
                    if ((t.replaceState({ key: s, state: o }, null, r), u)) window.location.replace(r);
                    else {
                        var l = G.indexOf(Z.location.key);
                        -1 !== l && (G[l] = a.key), L({ action: i, location: a });
                    }
                else window.location.replace(r);
            }
        });
    }
    function j(e) {
        t.go(e);
    }
    function H() {
        j(-1);
    }
    function Y() {
        j(1);
    }
    var W = 0;
    function K(e) {
        1 === (W += e) && 1 === e
            ? (window.addEventListener(S, w), i && window.addEventListener(v, x))
            : 0 === W && (window.removeEventListener(S, w), i && window.removeEventListener(v, x));
    }
    var z = !1;
    function $(e) {
        void 0 === e && (e = !1);
        var t = D.setPrompt(e);
        return (
            z || (K(1), (z = !0)),
            function () {
                return z && ((z = !1), K(-1)), t();
            }
        );
    }
    function q(e) {
        var t = D.appendListener(e);
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
        location: U,
        createHref: V,
        push: F,
        replace: B,
        go: j,
        goBack: H,
        goForward: Y,
        block: $,
        listen: q,
    };
    return Z;
}
var N = "hashchange",
    R = {
        hashbang: {
            encodePath: function (e) {
                return "!" === e.charAt(0) ? e : "!/" + l(e);
            },
            decodePath: function (e) {
                return "!" === e.charAt(0) ? e.substr(1) : e;
            },
        },
        noslash: { encodePath: l, decodePath: o },
        slash: { encodePath: o, decodePath: o },
    };
function O(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function D() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function L(e) {
    window.location.hash = e;
}
function w(e) {
    window.location.replace(O(window.location.href) + "#" + e);
}
function x(e) {
    void 0 === e && (e = {}), g || (0, s.A)(!1);
    var t = window.history;
    T();
    var n = e,
        i = n.getUserConfirmation,
        a = void 0 === i ? E : i,
        l = n.hashType,
        u = void 0 === l ? "slash" : l,
        _ = e.basename ? d(o(e.basename)) : "",
        h = R[u],
        A = h.encodePath,
        I = h.decodePath;
    function y() {
        var e = I(D());
        return _ && (e = c(e, _)), p(e);
    }
    var S = m();
    function v(e) {
        (0, r.A)(X, e), (X.length = t.length), S.notifyListeners(X.location, X.action);
    }
    var C = !1,
        b = null;
    function x(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash;
    }
    function P() {
        var e = D(),
            t = A(e);
        if (e !== t) w(t);
        else {
            var n = y(),
                r = X.location;
            if ((!C && x(r, n)) || b === f(n)) return;
            (b = null), M(n);
        }
    }
    function M(e) {
        if (C) (C = !1), v();
        else {
            var t = "POP";
            S.confirmTransitionTo(e, t, a, function (n) {
                n ? v({ action: t, location: e }) : k(e);
            });
        }
    }
    function k(e) {
        var t = X.location,
            n = F.lastIndexOf(f(t));
        -1 === n && (n = 0);
        var r = F.lastIndexOf(f(e));
        -1 === r && (r = 0);
        var i = n - r;
        i && ((C = !0), Y(i));
    }
    var U = D(),
        G = A(U);
    U !== G && w(G);
    var V = y(),
        F = [f(V)];
    function B(e) {
        var t = document.querySelector("base"),
            n = "";
        return t && t.getAttribute("href") && (n = O(window.location.href)), n + "#" + A(_ + f(e));
    }
    function j(e, t) {
        var n = "PUSH",
            r = p(e, void 0, void 0, X.location);
        S.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = f(r),
                    i = A(_ + t),
                    a = D() !== i;
                if (a) {
                    (b = t), L(i);
                    var s = F.lastIndexOf(f(X.location)),
                        o = F.slice(0, s + 1);
                    o.push(t), (F = o), v({ action: n, location: r });
                } else v();
            }
        });
    }
    function H(e, t) {
        var n = "REPLACE",
            r = p(e, void 0, void 0, X.location);
        S.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = f(r),
                    i = A(_ + t),
                    a = D() !== i;
                a && ((b = t), w(i));
                var s = F.indexOf(f(X.location));
                -1 !== s && (F[s] = t), v({ action: n, location: r });
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
    function $(e) {
        1 === (z += e) && 1 === e ? window.addEventListener(N, P) : 0 === z && window.removeEventListener(N, P);
    }
    var q = !1;
    function Z(e) {
        void 0 === e && (e = !1);
        var t = S.setPrompt(e);
        return (
            q || ($(1), (q = !0)),
            function () {
                return q && ((q = !1), $(-1)), t();
            }
        );
    }
    function Q(e) {
        var t = S.appendListener(e);
        return (
            $(1),
            function () {
                $(-1), t();
            }
        );
    }
    var X = {
        length: t.length,
        action: "POP",
        location: V,
        createHref: B,
        push: j,
        replace: H,
        go: Y,
        goBack: W,
        goForward: K,
        block: Z,
        listen: Q,
    };
    return X;
}
function P(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function M(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        a = void 0 === i ? ["/"] : i,
        s = t.initialIndex,
        o = void 0 === s ? 0 : s,
        l = t.keyLength,
        u = void 0 === l ? 6 : l,
        c = m();
    function d(e) {
        (0, r.A)(N, e), (N.length = N.entries.length), c.notifyListeners(N.location, N.action);
    }
    function _() {
        return Math.random().toString(36).substr(2, u);
    }
    var h = P(o, 0, a.length - 1),
        g = a.map(function (e) {
            return "string" == typeof e ? p(e, void 0, _()) : p(e, void 0, e.key || _());
        }),
        E = f;
    function A(e, t) {
        var r = "PUSH",
            i = p(e, t, _(), N.location);
        c.confirmTransitionTo(i, r, n, function (e) {
            if (e) {
                var t = N.index,
                    n = t + 1,
                    a = N.entries.slice(0);
                a.length > n ? a.splice(n, a.length - n, i) : a.push(i),
                    d({ action: r, location: i, index: n, entries: a });
            }
        });
    }
    function I(e, t) {
        var r = "REPLACE",
            i = p(e, t, _(), N.location);
        c.confirmTransitionTo(i, r, n, function (e) {
            e && ((N.entries[N.index] = i), d({ action: r, location: i }));
        });
    }
    function T(e) {
        var t = P(N.index + e, 0, N.entries.length - 1),
            r = "POP",
            i = N.entries[t];
        c.confirmTransitionTo(i, r, n, function (e) {
            e ? d({ action: r, location: i, index: t }) : d();
        });
    }
    function y() {
        T(-1);
    }
    function S() {
        T(1);
    }
    function v(e) {
        var t = N.index + e;
        return t >= 0 && t < N.entries.length;
    }
    function C(e) {
        return void 0 === e && (e = !1), c.setPrompt(e);
    }
    function b(e) {
        return c.appendListener(e);
    }
    var N = {
        length: g.length,
        action: "POP",
        location: g[h],
        index: h,
        entries: g,
        createHref: E,
        push: A,
        replace: I,
        go: T,
        goBack: y,
        goForward: S,
        canGo: v,
        block: C,
        listen: b,
    };
    return N;
}
