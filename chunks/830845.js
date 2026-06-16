"use strict";
n.d(t, { AO: () => d, Fu: () => h, TM: () => v, sC: () => O, yJ: () => _, zR: () => I });
var i = n(1139),
    r = n(861193),
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
function c(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function d(e) {
    var t = e.pathname,
        n = e.search,
        i = e.hash,
        r = t || "/";
    return (
        n && "?" !== n && (r += "?" === n.charAt(0) ? n : "?" + n),
        i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i),
        r
    );
}
function _(e, t, n, s) {
    var a, o, l, u, c, d;
    "string" == typeof e
        ? ((l = ""),
          (u = ""),
          -1 !== (c = (o = e || "/").indexOf("#")) && ((u = o.substr(c)), (o = o.substr(0, c))),
          -1 !== (d = o.indexOf("?")) && ((l = o.substr(d)), (o = o.substr(0, d))),
          ((a = { pathname: o, search: "?" === l ? "" : l, hash: "#" === u ? "" : u }).state = t))
        : (void 0 === (a = (0, i.A)({}, e)).pathname && (a.pathname = ""),
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
                ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, r.A)(a.pathname, s.pathname))
                : (a.pathname = s.pathname)
            : a.pathname || (a.pathname = "/"),
        a
    );
}
function h(e, t) {
    return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        (0, s.A)(e.state, t.state)
    );
}
function f() {
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
        confirmTransitionTo: function (t, n, i, r) {
            if (null != e) {
                var s = "function" == typeof e ? e(t, n) : e;
                "string" == typeof s ? ("function" == typeof i ? i(s, r) : r(!0)) : r(!1 !== s);
            } else r(!0);
        },
        appendListener: function (e) {
            var n = !0;
            function i() {
                n && e.apply(void 0, arguments);
            }
            return (
                t.push(i),
                function () {
                    (n = !1),
                        (t = t.filter(function (e) {
                            return e !== i;
                        }));
                }
            );
        },
        notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            t.forEach(function (e) {
                return e.apply(void 0, n);
            });
        },
    };
}
var p = !!("u" > typeof window && window.document && window.document.createElement);
function E(e, t) {
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
    void 0 === e && (e = {}), p || (0, a.A)(!1);
    var t,
        n = window.history,
        r =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
        s = -1 !== window.navigator.userAgent.indexOf("Trident"),
        l = e,
        h = l.forceRefresh,
        I = void 0 !== h && h,
        T = l.getUserConfirmation,
        S = void 0 === T ? E : T,
        y = l.keyLength,
        C = void 0 === y ? 6 : y,
        N = e.basename ? c(o(e.basename)) : "";
    function v(e) {
        var t = e || {},
            n = t.key,
            i = t.state,
            r = window.location,
            s = r.pathname + r.search + r.hash;
        return N && (s = u(s, N)), _(s, i, n);
    }
    function R() {
        return Math.random().toString(36).substr(2, C);
    }
    var O = f();
    function b(e) {
        (0, i.A)(B, e), (B.length = n.length), O.notifyListeners(B.location, B.action);
    }
    function D(e) {
        (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) && M(v(e.state));
    }
    function L() {
        M(v(A()));
    }
    var w = !1;
    function M(e) {
        w
            ? ((w = !1), b())
            : O.confirmTransitionTo(e, "POP", S, function (t) {
                  var n, i, r, s, a;
                  t
                      ? b({ action: "POP", location: e })
                      : ((n = e),
                        (i = B.location),
                        -1 === (r = x.indexOf(i.key)) && (r = 0),
                        -1 === (s = x.indexOf(n.key)) && (s = 0),
                        (a = r - s) && ((w = !0), U(a)));
              });
    }
    var P = v(A()),
        x = [P.key];
    function k(e) {
        return N + d(e);
    }
    function U(e) {
        n.go(e);
    }
    var G = 0;
    function F(e) {
        1 === (G += e) && 1 === e
            ? (window.addEventListener(m, D), s && window.addEventListener(g, L))
            : 0 === G && (window.removeEventListener(m, D), s && window.removeEventListener(g, L));
    }
    var V = !1,
        B = {
            length: n.length,
            action: "POP",
            location: P,
            createHref: k,
            push: function (e, t) {
                var i = "PUSH",
                    s = _(e, t, R(), B.location);
                O.confirmTransitionTo(s, i, S, function (e) {
                    if (e) {
                        var t = k(s),
                            a = s.key,
                            o = s.state;
                        if (r)
                            if ((n.pushState({ key: a, state: o }, null, t), I)) window.location.href = t;
                            else {
                                var l = x.indexOf(B.location.key),
                                    u = x.slice(0, l + 1);
                                u.push(s.key), (x = u), b({ action: i, location: s });
                            }
                        else window.location.href = t;
                    }
                });
            },
            replace: function (e, t) {
                var i = "REPLACE",
                    s = _(e, t, R(), B.location);
                O.confirmTransitionTo(s, i, S, function (e) {
                    if (e) {
                        var t = k(s),
                            a = s.key,
                            o = s.state;
                        if (r)
                            if ((n.replaceState({ key: a, state: o }, null, t), I)) window.location.replace(t);
                            else {
                                var l = x.indexOf(B.location.key);
                                -1 !== l && (x[l] = s.key), b({ action: i, location: s });
                            }
                        else window.location.replace(t);
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
                var t = O.setPrompt(e);
                return (
                    V || (F(1), (V = !0)),
                    function () {
                        return V && ((V = !1), F(-1)), t();
                    }
                );
            },
            listen: function (e) {
                var t = O.appendListener(e);
                return (
                    F(1),
                    function () {
                        F(-1), t();
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
function C() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function N(e) {
    window.location.replace(y(window.location.href) + "#" + e);
}
function v(e) {
    void 0 === e && (e = {}), p || (0, a.A)(!1);
    var t = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    var n = e,
        r = n.getUserConfirmation,
        s = void 0 === r ? E : r,
        l = n.hashType,
        h = e.basename ? c(o(e.basename)) : "",
        m = S[void 0 === l ? "slash" : l],
        g = m.encodePath,
        A = m.decodePath;
    function I() {
        var e = A(C());
        return h && (e = u(e, h)), _(e);
    }
    var v = f();
    function R(e) {
        (0, i.A)(F, e), (F.length = t.length), v.notifyListeners(F.location, F.action);
    }
    var O = !1,
        b = null;
    function D() {
        var e = C(),
            t = g(e);
        if (e !== t) N(t);
        else {
            var n,
                i = I(),
                r = F.location;
            if ((!O && r.pathname === i.pathname && r.search === i.search && r.hash === i.hash) || b === d(i)) return;
            (b = null),
                (n = i),
                O
                    ? ((O = !1), R())
                    : v.confirmTransitionTo(n, "POP", s, function (e) {
                          var t, i, r, s, a;
                          e
                              ? R({ action: "POP", location: n })
                              : ((t = n),
                                (i = F.location),
                                -1 === (r = P.lastIndexOf(d(i))) && (r = 0),
                                -1 === (s = P.lastIndexOf(d(t))) && (s = 0),
                                (a = r - s) && ((O = !0), x(a)));
                      });
        }
    }
    var L = C(),
        w = g(L);
    L !== w && N(w);
    var M = I(),
        P = [d(M)];
    function x(e) {
        t.go(e);
    }
    var k = 0;
    function U(e) {
        1 === (k += e) && 1 === e ? window.addEventListener(T, D) : 0 === k && window.removeEventListener(T, D);
    }
    var G = !1,
        F = {
            length: t.length,
            action: "POP",
            location: M,
            createHref: function (e) {
                var t = document.querySelector("base"),
                    n = "";
                return t && t.getAttribute("href") && (n = y(window.location.href)), n + "#" + g(h + d(e));
            },
            push: function (e, t) {
                var n = "PUSH",
                    i = _(e, void 0, void 0, F.location);
                v.confirmTransitionTo(i, n, s, function (e) {
                    if (e) {
                        var t = d(i),
                            r = g(h + t);
                        if (C() !== r) {
                            (b = t), (window.location.hash = r);
                            var s = P.lastIndexOf(d(F.location)),
                                a = P.slice(0, s + 1);
                            a.push(t), (P = a), R({ action: n, location: i });
                        } else R();
                    }
                });
            },
            replace: function (e, t) {
                var n = "REPLACE",
                    i = _(e, void 0, void 0, F.location);
                v.confirmTransitionTo(i, n, s, function (e) {
                    if (e) {
                        var t = d(i),
                            r = g(h + t);
                        C() !== r && ((b = t), N(r));
                        var s = P.indexOf(d(F.location));
                        -1 !== s && (P[s] = t), R({ action: n, location: i });
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
                var t = v.setPrompt(e);
                return (
                    G || (U(1), (G = !0)),
                    function () {
                        return G && ((G = !1), U(-1)), t();
                    }
                );
            },
            listen: function (e) {
                var t = v.appendListener(e);
                return (
                    U(1),
                    function () {
                        U(-1), t();
                    }
                );
            },
        };
    return F;
}
function R(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function O(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        r = t.initialEntries,
        s = void 0 === r ? ["/"] : r,
        a = t.initialIndex,
        o = t.keyLength,
        l = void 0 === o ? 6 : o,
        u = f();
    function c(e) {
        (0, i.A)(g, e), (g.length = g.entries.length), u.notifyListeners(g.location, g.action);
    }
    function h() {
        return Math.random().toString(36).substr(2, l);
    }
    var p = R(void 0 === a ? 0 : a, 0, s.length - 1),
        E = s.map(function (e) {
            return "string" == typeof e ? _(e, void 0, h()) : _(e, void 0, e.key || h());
        });
    function m(e) {
        var t = R(g.index + e, 0, g.entries.length - 1),
            i = g.entries[t];
        u.confirmTransitionTo(i, "POP", n, function (e) {
            e ? c({ action: "POP", location: i, index: t }) : c();
        });
    }
    var g = {
        length: E.length,
        action: "POP",
        location: E[p],
        index: p,
        entries: E,
        createHref: d,
        push: function (e, t) {
            var i = "PUSH",
                r = _(e, t, h(), g.location);
            u.confirmTransitionTo(r, i, n, function (e) {
                if (e) {
                    var t = g.index + 1,
                        n = g.entries.slice(0);
                    n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                        c({ action: i, location: r, index: t, entries: n });
                }
            });
        },
        replace: function (e, t) {
            var i = "REPLACE",
                r = _(e, t, h(), g.location);
            u.confirmTransitionTo(r, i, n, function (e) {
                e && ((g.entries[g.index] = r), c({ action: i, location: r }));
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
