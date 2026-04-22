"use strict";
n.d(t, { AO: () => c, Fu: () => f, TM: () => R, sC: () => C, yJ: () => _, zR: () => I });
var r = n(1139),
    i = n(861193),
    s = n(987701),
    a = n(258635);
function o(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
function l(e) {
    return "/" === e.charAt(0) ? e.substr(1) : e;
}
function u(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
        ? e.substr(t.length)
        : e;
}
function d(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function c(e) {
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
function _(e, t, n, s) {
    var a, o, l, u, d, c;
    "string" == typeof e
        ? ((l = ""),
          (u = ""),
          -1 !== (d = (o = e || "/").indexOf("#")) && ((u = o.substr(d)), (o = o.substr(0, d))),
          -1 !== (c = o.indexOf("?")) && ((l = o.substr(c)), (o = o.substr(0, c))),
          ((a = { pathname: o, search: "?" === l ? "" : l, hash: "#" === u ? "" : u }).state = t))
        : (void 0 === (a = (0, r.A)({}, e)).pathname && (a.pathname = ""),
          a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : (a.search = ""),
          a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : (a.hash = ""),
          void 0 !== t && void 0 === a.state && (a.state = t));
    try {
        a.pathname = decodeURI(a.pathname);
    } catch (e) {
        if (e instanceof URIError)
            throw URIError(
                'Pathname "' +
                    a.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            );
        throw e;
    }
    return (
        n && (a.key = n),
        s
            ? a.pathname
                ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, i.A)(a.pathname, s.pathname))
                : (a.pathname = s.pathname)
            : a.pathname || (a.pathname = "/"),
        a
    );
}
function f(e, t) {
    return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        (0, s.A)(e.state, t.state)
    );
}
function E() {
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
                var s = "function" == typeof e ? e(t, n) : e;
                "string" == typeof s ? ("function" == typeof r ? r(s, i) : i(!0)) : i(!1 !== s);
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
var h = !!("u" > typeof window && window.document && window.document.createElement);
function p(e, t) {
    t(window.confirm(e));
}
var m = "popstate",
    g = "hashchange";
function A() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function I(e) {
    void 0 === e && (e = {}), h || (0, a.A)(!1);
    var t,
        n = window.history,
        i =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
        s = -1 !== window.navigator.userAgent.indexOf("Trident"),
        l = e,
        f = l.forceRefresh,
        I = void 0 !== f && f,
        T = l.getUserConfirmation,
        S = void 0 === T ? p : T,
        y = l.keyLength,
        N = void 0 === y ? 6 : y,
        O = e.basename ? d(o(e.basename)) : "";
    function R(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            s = i.pathname + i.search + i.hash;
        return O && (s = u(s, O)), _(s, r, n);
    }
    function v() {
        return Math.random().toString(36).substr(2, N);
    }
    var C = E();
    function b(e) {
        (0, r.A)(B, e), (B.length = n.length), C.notifyListeners(B.location, B.action);
    }
    function D(e) {
        (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) && M(R(e.state));
    }
    function L() {
        M(R(A()));
    }
    var w = !1;
    function M(e) {
        w
            ? ((w = !1), b())
            : C.confirmTransitionTo(e, "POP", S, function (t) {
                  var n, r, i, s, a;
                  t
                      ? b({ action: "POP", location: e })
                      : ((n = e),
                        (r = B.location),
                        -1 === (i = U.indexOf(r.key)) && (i = 0),
                        -1 === (s = U.indexOf(n.key)) && (s = 0),
                        (a = i - s) && ((w = !0), x(a)));
              });
    }
    var P = R(A()),
        U = [P.key];
    function k(e) {
        return O + c(e);
    }
    function x(e) {
        n.go(e);
    }
    var G = 0;
    function V(e) {
        1 === (G += e) && 1 === e
            ? (window.addEventListener(m, D), s && window.addEventListener(g, L))
            : 0 === G && (window.removeEventListener(m, D), s && window.removeEventListener(g, L));
    }
    var F = !1,
        B = {
            length: n.length,
            action: "POP",
            location: P,
            createHref: k,
            push: function (e, t) {
                var r = "PUSH",
                    s = _(e, t, v(), B.location);
                C.confirmTransitionTo(s, r, S, function (e) {
                    if (e) {
                        var t = k(s),
                            a = s.key,
                            o = s.state;
                        if (i)
                            if ((n.pushState({ key: a, state: o }, null, t), I)) window.location.href = t;
                            else {
                                var l = U.indexOf(B.location.key),
                                    u = U.slice(0, l + 1);
                                u.push(s.key), (U = u), b({ action: r, location: s });
                            }
                        else window.location.href = t;
                    }
                });
            },
            replace: function (e, t) {
                var r = "REPLACE",
                    s = _(e, t, v(), B.location);
                C.confirmTransitionTo(s, r, S, function (e) {
                    if (e) {
                        var t = k(s),
                            a = s.key,
                            o = s.state;
                        if (i)
                            if ((n.replaceState({ key: a, state: o }, null, t), I)) window.location.replace(t);
                            else {
                                var l = U.indexOf(B.location.key);
                                -1 !== l && (U[l] = s.key), b({ action: r, location: s });
                            }
                        else window.location.replace(t);
                    }
                });
            },
            go: x,
            goBack: function () {
                x(-1);
            },
            goForward: function () {
                x(1);
            },
            block: function (e) {
                void 0 === e && (e = !1);
                var t = C.setPrompt(e);
                return (
                    F || (V(1), (F = !0)),
                    function () {
                        return F && ((F = !1), V(-1)), t();
                    }
                );
            },
            listen: function (e) {
                var t = C.appendListener(e);
                return (
                    V(1),
                    function () {
                        V(-1), t();
                    }
                );
            },
        };
    return B;
}
var T = "hashchange",
    S = {
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
function y(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function N() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function O(e) {
    window.location.replace(y(window.location.href) + "#" + e);
}
function R(e) {
    void 0 === e && (e = {}), h || (0, a.A)(!1);
    var t = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    var n = e,
        i = n.getUserConfirmation,
        s = void 0 === i ? p : i,
        l = n.hashType,
        f = e.basename ? d(o(e.basename)) : "",
        m = S[void 0 === l ? "slash" : l],
        g = m.encodePath,
        A = m.decodePath;
    function I() {
        var e = A(N());
        return f && (e = u(e, f)), _(e);
    }
    var R = E();
    function v(e) {
        (0, r.A)(V, e), (V.length = t.length), R.notifyListeners(V.location, V.action);
    }
    var C = !1,
        b = null;
    function D() {
        var e = N(),
            t = g(e);
        if (e !== t) O(t);
        else {
            var n,
                r = I(),
                i = V.location;
            if ((!C && i.pathname === r.pathname && i.search === r.search && i.hash === r.hash) || b === c(r)) return;
            (b = null),
                (n = r),
                C
                    ? ((C = !1), v())
                    : R.confirmTransitionTo(n, "POP", s, function (e) {
                          var t, r, i, s, a;
                          e
                              ? v({ action: "POP", location: n })
                              : ((t = n),
                                (r = V.location),
                                -1 === (i = P.lastIndexOf(c(r))) && (i = 0),
                                -1 === (s = P.lastIndexOf(c(t))) && (s = 0),
                                (a = i - s) && ((C = !0), U(a)));
                      });
        }
    }
    var L = N(),
        w = g(L);
    L !== w && O(w);
    var M = I(),
        P = [c(M)];
    function U(e) {
        t.go(e);
    }
    var k = 0;
    function x(e) {
        1 === (k += e) && 1 === e ? window.addEventListener(T, D) : 0 === k && window.removeEventListener(T, D);
    }
    var G = !1,
        V = {
            length: t.length,
            action: "POP",
            location: M,
            createHref: function (e) {
                var t = document.querySelector("base"),
                    n = "";
                return t && t.getAttribute("href") && (n = y(window.location.href)), n + "#" + g(f + c(e));
            },
            push: function (e, t) {
                var n = "PUSH",
                    r = _(e, void 0, void 0, V.location);
                R.confirmTransitionTo(r, n, s, function (e) {
                    if (e) {
                        var t = c(r),
                            i = g(f + t);
                        if (N() !== i) {
                            (b = t), (window.location.hash = i);
                            var s = P.lastIndexOf(c(V.location)),
                                a = P.slice(0, s + 1);
                            a.push(t), (P = a), v({ action: n, location: r });
                        } else v();
                    }
                });
            },
            replace: function (e, t) {
                var n = "REPLACE",
                    r = _(e, void 0, void 0, V.location);
                R.confirmTransitionTo(r, n, s, function (e) {
                    if (e) {
                        var t = c(r),
                            i = g(f + t);
                        N() !== i && ((b = t), O(i));
                        var s = P.indexOf(c(V.location));
                        -1 !== s && (P[s] = t), v({ action: n, location: r });
                    }
                });
            },
            go: U,
            goBack: function () {
                U(-1);
            },
            goForward: function () {
                U(1);
            },
            block: function (e) {
                void 0 === e && (e = !1);
                var t = R.setPrompt(e);
                return (
                    G || (x(1), (G = !0)),
                    function () {
                        return G && ((G = !1), x(-1)), t();
                    }
                );
            },
            listen: function (e) {
                var t = R.appendListener(e);
                return (
                    x(1),
                    function () {
                        x(-1), t();
                    }
                );
            },
        };
    return V;
}
function v(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function C(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        s = void 0 === i ? ["/"] : i,
        a = t.initialIndex,
        o = t.keyLength,
        l = void 0 === o ? 6 : o,
        u = E();
    function d(e) {
        (0, r.A)(g, e), (g.length = g.entries.length), u.notifyListeners(g.location, g.action);
    }
    function f() {
        return Math.random().toString(36).substr(2, l);
    }
    var h = v(void 0 === a ? 0 : a, 0, s.length - 1),
        p = s.map(function (e) {
            return "string" == typeof e ? _(e, void 0, f()) : _(e, void 0, e.key || f());
        });
    function m(e) {
        var t = v(g.index + e, 0, g.entries.length - 1),
            r = g.entries[t];
        u.confirmTransitionTo(r, "POP", n, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
        });
    }
    var g = {
        length: p.length,
        action: "POP",
        location: p[h],
        index: h,
        entries: p,
        createHref: c,
        push: function (e, t) {
            var r = "PUSH",
                i = _(e, t, f(), g.location);
            u.confirmTransitionTo(i, r, n, function (e) {
                if (e) {
                    var t = g.index + 1,
                        n = g.entries.slice(0);
                    n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
                        d({ action: r, location: i, index: t, entries: n });
                }
            });
        },
        replace: function (e, t) {
            var r = "REPLACE",
                i = _(e, t, f(), g.location);
            u.confirmTransitionTo(i, r, n, function (e) {
                e && ((g.entries[g.index] = i), d({ action: r, location: i }));
            });
        },
        go: m,
        goBack: function () {
            m(-1);
        },
        goForward: function () {
            m(1);
        },
        canGo: function (e) {
            var t = g.index + e;
            return t >= 0 && t < g.entries.length;
        },
        block: function (e) {
            return void 0 === e && (e = !1), u.setPrompt(e);
        },
        listen: function (e) {
            return u.appendListener(e);
        },
    };
    return g;
}
