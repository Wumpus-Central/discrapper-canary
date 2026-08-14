"use strict";
n.d(t, { AO: () => l, Fu: () => f, TM: () => A, sC: () => R, yJ: () => h, zR: () => v });
var r = n(1139),
    i = n(861193),
    a = n(987701),
    s = n(258635);
function o(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
function u(e) {
    return "/" === e.charAt(0) ? e.substr(1) : e;
}
function d(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
        ? e.substr(t.length)
        : e;
}
function c(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function l(e) {
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
function h(e, t, n, a) {
    var s, o, u, d, c, l;
    "string" == typeof e
        ? ((u = ""),
          (d = ""),
          -1 !== (c = (o = e || "/").indexOf("#")) && ((d = o.substr(c)), (o = o.substr(0, c))),
          -1 !== (l = o.indexOf("?")) && ((u = o.substr(l)), (o = o.substr(0, l))),
          ((s = { pathname: o, search: "?" === u ? "" : u, hash: "#" === d ? "" : d }).state = t))
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
function f(e, t) {
    return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        (0, a.A)(e.state, t.state)
    );
}
function _() {
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
var p = !!("u" > typeof window && window.document && window.document.createElement);
function m(e, t) {
    t(window.confirm(e));
}
var g = "popstate",
    b = "hashchange";
function y() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function v(e) {
    void 0 === e && (e = {}), p || (0, s.A)(!1);
    var t,
        n = window.history,
        i =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
        a = -1 !== window.navigator.userAgent.indexOf("Trident"),
        u = e,
        f = u.forceRefresh,
        v = void 0 !== f && f,
        w = u.getUserConfirmation,
        V = void 0 === w ? m : w,
        T = u.keyLength,
        x = void 0 === T ? 6 : T,
        E = e.basename ? c(o(e.basename)) : "";
    function A(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
        return E && (a = d(a, E)), h(a, r, n);
    }
    function k() {
        return Math.random().toString(36).substr(2, x);
    }
    var R = _();
    function P(e) {
        (0, r.A)(G, e), (G.length = n.length), R.notifyListeners(G.location, G.action);
    }
    function L(e) {
        (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) && M(A(e.state));
    }
    function S() {
        M(A(y()));
    }
    var O = !1;
    function M(e) {
        O
            ? ((O = !1), P())
            : R.confirmTransitionTo(e, "POP", V, function (t) {
                  var n, r, i, a, s;
                  t
                      ? P({ action: "POP", location: e })
                      : ((n = e),
                        (r = G.location),
                        -1 === (i = U.indexOf(r.key)) && (i = 0),
                        -1 === (a = U.indexOf(n.key)) && (a = 0),
                        (s = i - a) && ((O = !0), F(s)));
              });
    }
    var I = A(y()),
        U = [I.key];
    function C(e) {
        return E + l(e);
    }
    function F(e) {
        n.go(e);
    }
    var B = 0;
    function D(e) {
        1 === (B += e) && 1 === e
            ? (window.addEventListener(g, L), a && window.addEventListener(b, S))
            : 0 === B && (window.removeEventListener(g, L), a && window.removeEventListener(b, S));
    }
    var j = !1,
        G = {
            length: n.length,
            action: "POP",
            location: I,
            createHref: C,
            push: function (e, t) {
                var r = "PUSH",
                    a = h(e, t, k(), G.location);
                R.confirmTransitionTo(a, r, V, function (e) {
                    if (e) {
                        var t = C(a),
                            s = a.key,
                            o = a.state;
                        if (i)
                            if ((n.pushState({ key: s, state: o }, null, t), v)) window.location.href = t;
                            else {
                                var u = U.indexOf(G.location.key),
                                    d = U.slice(0, u + 1);
                                d.push(a.key), (U = d), P({ action: r, location: a });
                            }
                        else window.location.href = t;
                    }
                });
            },
            replace: function (e, t) {
                var r = "REPLACE",
                    a = h(e, t, k(), G.location);
                R.confirmTransitionTo(a, r, V, function (e) {
                    if (e) {
                        var t = C(a),
                            s = a.key,
                            o = a.state;
                        if (i)
                            if ((n.replaceState({ key: s, state: o }, null, t), v)) window.location.replace(t);
                            else {
                                var u = U.indexOf(G.location.key);
                                -1 !== u && (U[u] = a.key), P({ action: r, location: a });
                            }
                        else window.location.replace(t);
                    }
                });
            },
            go: F,
            goBack: function () {
                F(-1);
            },
            goForward: function () {
                F(1);
            },
            block: function (e) {
                void 0 === e && (e = !1);
                var t = R.setPrompt(e);
                return (
                    j || (D(1), (j = !0)),
                    function () {
                        return j && ((j = !1), D(-1)), t();
                    }
                );
            },
            listen: function (e) {
                var t = R.appendListener(e);
                return (
                    D(1),
                    function () {
                        D(-1), t();
                    }
                );
            },
        };
    return G;
}
var w = "hashchange",
    V = {
        hashbang: {
            encodePath: function (e) {
                return "!" === e.charAt(0) ? e : "!/" + u(e);
            },
            decodePath: function (e) {
                return "!" === e.charAt(0) ? e.substr(1) : e;
            },
        },
        noslash: { encodePath: u, decodePath: o },
        slash: { encodePath: o, decodePath: o },
    };
function T(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function x() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function E(e) {
    window.location.replace(T(window.location.href) + "#" + e);
}
function A(e) {
    void 0 === e && (e = {}), p || (0, s.A)(!1);
    var t = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    var n = e,
        i = n.getUserConfirmation,
        a = void 0 === i ? m : i,
        u = n.hashType,
        f = e.basename ? c(o(e.basename)) : "",
        g = V[void 0 === u ? "slash" : u],
        b = g.encodePath,
        y = g.decodePath;
    function v() {
        var e = y(x());
        return f && (e = d(e, f)), h(e);
    }
    var A = _();
    function k(e) {
        (0, r.A)(D, e), (D.length = t.length), A.notifyListeners(D.location, D.action);
    }
    var R = !1,
        P = null;
    function L() {
        var e = x(),
            t = b(e);
        if (e !== t) E(t);
        else {
            var n,
                r = v(),
                i = D.location;
            if ((!R && i.pathname === r.pathname && i.search === r.search && i.hash === r.hash) || P === l(r)) return;
            (P = null),
                (n = r),
                R
                    ? ((R = !1), k())
                    : A.confirmTransitionTo(n, "POP", a, function (e) {
                          var t, r, i, a, s;
                          e
                              ? k({ action: "POP", location: n })
                              : ((t = n),
                                (r = D.location),
                                -1 === (i = I.lastIndexOf(l(r))) && (i = 0),
                                -1 === (a = I.lastIndexOf(l(t))) && (a = 0),
                                (s = i - a) && ((R = !0), U(s)));
                      });
        }
    }
    var S = x(),
        O = b(S);
    S !== O && E(O);
    var M = v(),
        I = [l(M)];
    function U(e) {
        t.go(e);
    }
    var C = 0;
    function F(e) {
        1 === (C += e) && 1 === e ? window.addEventListener(w, L) : 0 === C && window.removeEventListener(w, L);
    }
    var B = !1,
        D = {
            length: t.length,
            action: "POP",
            location: M,
            createHref: function (e) {
                var t = document.querySelector("base"),
                    n = "";
                return t && t.getAttribute("href") && (n = T(window.location.href)), n + "#" + b(f + l(e));
            },
            push: function (e, t) {
                var n = "PUSH",
                    r = h(e, void 0, void 0, D.location);
                A.confirmTransitionTo(r, n, a, function (e) {
                    if (e) {
                        var t = l(r),
                            i = b(f + t);
                        if (x() !== i) {
                            (P = t), (window.location.hash = i);
                            var a = I.lastIndexOf(l(D.location)),
                                s = I.slice(0, a + 1);
                            s.push(t), (I = s), k({ action: n, location: r });
                        } else k();
                    }
                });
            },
            replace: function (e, t) {
                var n = "REPLACE",
                    r = h(e, void 0, void 0, D.location);
                A.confirmTransitionTo(r, n, a, function (e) {
                    if (e) {
                        var t = l(r),
                            i = b(f + t);
                        x() !== i && ((P = t), E(i));
                        var a = I.indexOf(l(D.location));
                        -1 !== a && (I[a] = t), k({ action: n, location: r });
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
                var t = A.setPrompt(e);
                return (
                    B || (F(1), (B = !0)),
                    function () {
                        return B && ((B = !1), F(-1)), t();
                    }
                );
            },
            listen: function (e) {
                var t = A.appendListener(e);
                return (
                    F(1),
                    function () {
                        F(-1), t();
                    }
                );
            },
        };
    return D;
}
function k(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function R(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        a = void 0 === i ? ["/"] : i,
        s = t.initialIndex,
        o = t.keyLength,
        u = void 0 === o ? 6 : o,
        d = _();
    function c(e) {
        (0, r.A)(b, e), (b.length = b.entries.length), d.notifyListeners(b.location, b.action);
    }
    function f() {
        return Math.random().toString(36).substr(2, u);
    }
    var p = k(void 0 === s ? 0 : s, 0, a.length - 1),
        m = a.map(function (e) {
            return "string" == typeof e ? h(e, void 0, f()) : h(e, void 0, e.key || f());
        });
    function g(e) {
        var t = k(b.index + e, 0, b.entries.length - 1),
            r = b.entries[t];
        d.confirmTransitionTo(r, "POP", n, function (e) {
            e ? c({ action: "POP", location: r, index: t }) : c();
        });
    }
    var b = {
        length: m.length,
        action: "POP",
        location: m[p],
        index: p,
        entries: m,
        createHref: l,
        push: function (e, t) {
            var r = "PUSH",
                i = h(e, t, f(), b.location);
            d.confirmTransitionTo(i, r, n, function (e) {
                if (e) {
                    var t = b.index + 1,
                        n = b.entries.slice(0);
                    n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
                        c({ action: r, location: i, index: t, entries: n });
                }
            });
        },
        replace: function (e, t) {
            var r = "REPLACE",
                i = h(e, t, f(), b.location);
            d.confirmTransitionTo(i, r, n, function (e) {
                e && ((b.entries[b.index] = i), c({ action: r, location: i }));
            });
        },
        go: g,
        goBack: function () {
            g(-1);
        },
        goForward: function () {
            g(1);
        },
        canGo: function (e) {
            var t = b.index + e;
            return t >= 0 && t < b.entries.length;
        },
        block: function (e) {
            return void 0 === e && (e = !1), d.setPrompt(e);
        },
        listen: function (e) {
            return d.appendListener(e);
        },
    };
    return b;
}
