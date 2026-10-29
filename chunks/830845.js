r.d(t, { AO: () => d, Fu: () => h, TM: () => E, sC: () => k, yJ: () => f, zR: () => y });
var i = r(1139),
    n = r(861193),
    o = r(987701),
    s = r(258635);
function a(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
function u(e) {
    return "/" === e.charAt(0) ? e.substr(1) : e;
}
function c(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
        ? e.substr(t.length)
        : e;
}
function l(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function d(e) {
    var t = e.pathname,
        r = e.search,
        i = e.hash,
        n = t || "/";
    return (
        r && "?" !== r && (n += "?" === r.charAt(0) ? r : "?" + r),
        i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
        n
    );
}
function f(e, t, r, o) {
    var s, a, u, c, l, d;
    "string" == typeof e
        ? ((u = ""),
          (c = ""),
          -1 !== (l = (a = e || "/").indexOf("#")) && ((c = a.substr(l)), (a = a.substr(0, l))),
          -1 !== (d = a.indexOf("?")) && ((u = a.substr(d)), (a = a.substr(0, d))),
          ((s = { pathname: a, search: "?" === u ? "" : u, hash: "#" === c ? "" : c }).state = t))
        : (void 0 === (s = (0, i.A)({}, e)).pathname && (s.pathname = ""),
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
        r && (s.key = r),
        o
            ? s.pathname
                ? "/" !== s.pathname.charAt(0) && (s.pathname = (0, n.A)(s.pathname, o.pathname))
                : (s.pathname = o.pathname)
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
        (0, o.A)(e.state, t.state)
    );
}
function p() {
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
        confirmTransitionTo: function (t, r, i, n) {
            if (null != e) {
                var o = "function" == typeof e ? e(t, r) : e;
                "string" == typeof o ? ("function" == typeof i ? i(o, n) : n(!0)) : n(!1 !== o);
            } else n(!0);
        },
        appendListener: function (e) {
            var r = !0;
            function i() {
                r && e.apply(void 0, arguments);
            }
            return (
                t.push(i),
                function () {
                    ((r = !1),
                        (t = t.filter(function (e) {
                            return e !== i;
                        })));
                }
            );
        },
        notifyListeners: function () {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
            t.forEach(function (e) {
                return e.apply(void 0, r);
            });
        },
    };
}
var _ = !!("u" > typeof window && window.document && window.document.createElement);
function g(e, t) {
    t(window.confirm(e));
}
var m = "popstate",
    b = "hashchange";
function v() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function y(e) {
    (void 0 === e && (e = {}), _ || (0, s.A)(!1));
    var t,
        r = window.history,
        n =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
        o = -1 !== window.navigator.userAgent.indexOf("Trident"),
        u = e,
        h = u.forceRefresh,
        y = void 0 !== h && h,
        w = u.getUserConfirmation,
        V = void 0 === w ? g : w,
        x = u.keyLength,
        T = void 0 === x ? 6 : x,
        R = e.basename ? l(a(e.basename)) : "";
    function E(e) {
        var t = e || {},
            r = t.key,
            i = t.state,
            n = window.location,
            o = n.pathname + n.search + n.hash;
        return (R && (o = c(o, R)), f(o, i, r));
    }
    function A() {
        return Math.random().toString(36).substr(2, T);
    }
    var k = p();
    function S(e) {
        ((0, i.A)(W, e), (W.length = r.length), k.notifyListeners(W.location, W.action));
    }
    function O(e) {
        (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) && I(E(e.state));
    }
    function P() {
        I(E(v()));
    }
    var L = !1;
    function I(e) {
        L
            ? ((L = !1), S())
            : k.confirmTransitionTo(e, "POP", V, function (t) {
                  var r, i, n, o, s;
                  t
                      ? S({ action: "POP", location: e })
                      : ((r = e),
                        (i = W.location),
                        -1 === (n = U.indexOf(i.key)) && (n = 0),
                        -1 === (o = U.indexOf(r.key)) && (o = 0),
                        (s = n - o) && ((L = !0), M(s)));
              });
    }
    var D = E(v()),
        U = [D.key];
    function C(e) {
        return R + d(e);
    }
    function M(e) {
        r.go(e);
    }
    var F = 0;
    function j(e) {
        1 === (F += e) && 1 === e
            ? (window.addEventListener(m, O), o && window.addEventListener(b, P))
            : 0 === F && (window.removeEventListener(m, O), o && window.removeEventListener(b, P));
    }
    var B = !1,
        W = {
            length: r.length,
            action: "POP",
            location: D,
            createHref: C,
            push: function (e, t) {
                var i = "PUSH",
                    o = f(e, t, A(), W.location);
                k.confirmTransitionTo(o, i, V, function (e) {
                    if (e) {
                        var t = C(o),
                            s = o.key,
                            a = o.state;
                        if (n)
                            if ((r.pushState({ key: s, state: a }, null, t), y)) window.location.href = t;
                            else {
                                var u = U.indexOf(W.location.key),
                                    c = U.slice(0, u + 1);
                                (c.push(o.key), (U = c), S({ action: i, location: o }));
                            }
                        else window.location.href = t;
                    }
                });
            },
            replace: function (e, t) {
                var i = "REPLACE",
                    o = f(e, t, A(), W.location);
                k.confirmTransitionTo(o, i, V, function (e) {
                    if (e) {
                        var t = C(o),
                            s = o.key,
                            a = o.state;
                        if (n)
                            if ((r.replaceState({ key: s, state: a }, null, t), y)) window.location.replace(t);
                            else {
                                var u = U.indexOf(W.location.key);
                                (-1 !== u && (U[u] = o.key), S({ action: i, location: o }));
                            }
                        else window.location.replace(t);
                    }
                });
            },
            go: M,
            goBack: function () {
                M(-1);
            },
            goForward: function () {
                M(1);
            },
            block: function (e) {
                void 0 === e && (e = !1);
                var t = k.setPrompt(e);
                return (
                    B || (j(1), (B = !0)),
                    function () {
                        return (B && ((B = !1), j(-1)), t());
                    }
                );
            },
            listen: function (e) {
                var t = k.appendListener(e);
                return (
                    j(1),
                    function () {
                        (j(-1), t());
                    }
                );
            },
        };
    return W;
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
        noslash: { encodePath: u, decodePath: a },
        slash: { encodePath: a, decodePath: a },
    };
function x(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function T() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function R(e) {
    window.location.replace(x(window.location.href) + "#" + e);
}
function E(e) {
    (void 0 === e && (e = {}), _ || (0, s.A)(!1));
    var t = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    var r = e,
        n = r.getUserConfirmation,
        o = void 0 === n ? g : n,
        u = r.hashType,
        h = e.basename ? l(a(e.basename)) : "",
        m = V[void 0 === u ? "slash" : u],
        b = m.encodePath,
        v = m.decodePath;
    function y() {
        var e = v(T());
        return (h && (e = c(e, h)), f(e));
    }
    var E = p();
    function A(e) {
        ((0, i.A)(j, e), (j.length = t.length), E.notifyListeners(j.location, j.action));
    }
    var k = !1,
        S = null;
    function O() {
        var e = T(),
            t = b(e);
        if (e !== t) R(t);
        else {
            var r,
                i = y(),
                n = j.location;
            if ((!k && n.pathname === i.pathname && n.search === i.search && n.hash === i.hash) || S === d(i)) return;
            ((S = null),
                (r = i),
                k
                    ? ((k = !1), A())
                    : E.confirmTransitionTo(r, "POP", o, function (e) {
                          var t, i, n, o, s;
                          e
                              ? A({ action: "POP", location: r })
                              : ((t = r),
                                (i = j.location),
                                -1 === (n = D.lastIndexOf(d(i))) && (n = 0),
                                -1 === (o = D.lastIndexOf(d(t))) && (o = 0),
                                (s = n - o) && ((k = !0), U(s)));
                      }));
        }
    }
    var P = T(),
        L = b(P);
    P !== L && R(L);
    var I = y(),
        D = [d(I)];
    function U(e) {
        t.go(e);
    }
    var C = 0;
    function M(e) {
        1 === (C += e) && 1 === e ? window.addEventListener(w, O) : 0 === C && window.removeEventListener(w, O);
    }
    var F = !1,
        j = {
            length: t.length,
            action: "POP",
            location: I,
            createHref: function (e) {
                var t = document.querySelector("base"),
                    r = "";
                return (t && t.getAttribute("href") && (r = x(window.location.href)), r + "#" + b(h + d(e)));
            },
            push: function (e, t) {
                var r = "PUSH",
                    i = f(e, void 0, void 0, j.location);
                E.confirmTransitionTo(i, r, o, function (e) {
                    if (e) {
                        var t = d(i),
                            n = b(h + t);
                        if (T() !== n) {
                            ((S = t), (window.location.hash = n));
                            var o = D.lastIndexOf(d(j.location)),
                                s = D.slice(0, o + 1);
                            (s.push(t), (D = s), A({ action: r, location: i }));
                        } else A();
                    }
                });
            },
            replace: function (e, t) {
                var r = "REPLACE",
                    i = f(e, void 0, void 0, j.location);
                E.confirmTransitionTo(i, r, o, function (e) {
                    if (e) {
                        var t = d(i),
                            n = b(h + t);
                        T() !== n && ((S = t), R(n));
                        var o = D.indexOf(d(j.location));
                        (-1 !== o && (D[o] = t), A({ action: r, location: i }));
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
                var t = E.setPrompt(e);
                return (
                    F || (M(1), (F = !0)),
                    function () {
                        return (F && ((F = !1), M(-1)), t());
                    }
                );
            },
            listen: function (e) {
                var t = E.appendListener(e);
                return (
                    M(1),
                    function () {
                        (M(-1), t());
                    }
                );
            },
        };
    return j;
}
function A(e, t, r) {
    return Math.min(Math.max(e, t), r);
}
function k(e) {
    void 0 === e && (e = {});
    var t = e,
        r = t.getUserConfirmation,
        n = t.initialEntries,
        o = void 0 === n ? ["/"] : n,
        s = t.initialIndex,
        a = t.keyLength,
        u = void 0 === a ? 6 : a,
        c = p();
    function l(e) {
        ((0, i.A)(b, e), (b.length = b.entries.length), c.notifyListeners(b.location, b.action));
    }
    function h() {
        return Math.random().toString(36).substr(2, u);
    }
    var _ = A(void 0 === s ? 0 : s, 0, o.length - 1),
        g = o.map(function (e) {
            return "string" == typeof e ? f(e, void 0, h()) : f(e, void 0, e.key || h());
        });
    function m(e) {
        var t = A(b.index + e, 0, b.entries.length - 1),
            i = b.entries[t];
        c.confirmTransitionTo(i, "POP", r, function (e) {
            e ? l({ action: "POP", location: i, index: t }) : l();
        });
    }
    var b = {
        length: g.length,
        action: "POP",
        location: g[_],
        index: _,
        entries: g,
        createHref: d,
        push: function (e, t) {
            var i = "PUSH",
                n = f(e, t, h(), b.location);
            c.confirmTransitionTo(n, i, r, function (e) {
                if (e) {
                    var t = b.index + 1,
                        r = b.entries.slice(0);
                    (r.length > t ? r.splice(t, r.length - t, n) : r.push(n),
                        l({ action: i, location: n, index: t, entries: r }));
                }
            });
        },
        replace: function (e, t) {
            var i = "REPLACE",
                n = f(e, t, h(), b.location);
            c.confirmTransitionTo(n, i, r, function (e) {
                e && ((b.entries[b.index] = n), l({ action: i, location: n }));
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
            var t = b.index + e;
            return t >= 0 && t < b.entries.length;
        },
        block: function (e) {
            return (void 0 === e && (e = !1), c.setPrompt(e));
        },
        listen: function (e) {
            return c.appendListener(e);
        },
    };
    return b;
}
