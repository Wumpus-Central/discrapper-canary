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
function d(e) {
    return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function l(e) {
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
function h(e, t, r, o) {
    var s, a, u, c, d, l;
    "string" == typeof e
        ? ((u = ""),
          (c = ""),
          -1 !== (d = (a = e || "/").indexOf("#")) && ((c = a.substr(d)), (a = a.substr(0, d))),
          -1 !== (l = a.indexOf("?")) && ((u = a.substr(l)), (a = a.substr(0, l))),
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
var p = !!("u" > typeof window && window.document && window.document.createElement);
function m(e, t) {
    t(window.confirm(e));
}
var g = "popstate",
    _ = "hashchange";
function b() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
var v = "hashchange",
    y = {
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
function w(e) {
    var t = e.indexOf("#");
    return -1 === t ? e : e.slice(0, t);
}
function V() {
    var e = window.location.href,
        t = e.indexOf("#");
    return -1 === t ? "" : e.substring(t + 1);
}
function x(e) {
    window.location.replace(w(window.location.href) + "#" + e);
}
function T(e, t, r) {
    return Math.min(Math.max(e, t), r);
}
r.d(
    t,
    {},
    {
        AO: l,
        Fu: function (e, t) {
            return (
                e.pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash &&
                e.key === t.key &&
                (0, o.A)(e.state, t.state)
            );
        },
        TM: function (e) {
            (void 0 === e && (e = {}), p || (0, s.A)(!1));
            var t = window.history;
            window.navigator.userAgent.indexOf("Firefox");
            var r = e,
                n = r.getUserConfirmation,
                o = void 0 === n ? m : n,
                u = r.hashType,
                g = e.basename ? d(a(e.basename)) : "",
                _ = y[void 0 === u ? "slash" : u],
                b = _.encodePath,
                T = _.decodePath;
            function E() {
                var e = T(V());
                return (g && (e = c(e, g)), h(e));
            }
            var k = f();
            function A(e) {
                ((0, i.A)(j, e), (j.length = t.length), k.notifyListeners(j.location, j.action));
            }
            var R = !1,
                P = null;
            function O() {
                var e = V(),
                    t = b(e);
                if (e !== t) x(t);
                else {
                    var r,
                        i = E(),
                        n = j.location;
                    if ((!R && n.pathname === i.pathname && n.search === i.search && n.hash === i.hash) || P === l(i))
                        return;
                    ((P = null),
                        (r = i),
                        R
                            ? ((R = !1), A())
                            : k.confirmTransitionTo(r, "POP", o, function (e) {
                                  var t, i, n, o, s;
                                  e
                                      ? A({ action: "POP", location: r })
                                      : ((t = r),
                                        (i = j.location),
                                        -1 === (n = U.lastIndexOf(l(i))) && (n = 0),
                                        -1 === (o = U.lastIndexOf(l(t))) && (o = 0),
                                        (s = n - o) && ((R = !0), C(s)));
                              }));
                }
            }
            var I = V(),
                S = b(I);
            I !== S && x(S);
            var L = E(),
                U = [l(L)];
            function C(e) {
                t.go(e);
            }
            var D = 0;
            function M(e) {
                1 === (D += e) && 1 === e ? window.addEventListener(v, O) : 0 === D && window.removeEventListener(v, O);
            }
            var F = !1,
                j = {
                    length: t.length,
                    action: "POP",
                    location: L,
                    createHref: function (e) {
                        var t = document.querySelector("base"),
                            r = "";
                        return (t && t.getAttribute("href") && (r = w(window.location.href)), r + "#" + b(g + l(e)));
                    },
                    push: function (e, t) {
                        var r = "PUSH",
                            i = h(e, void 0, void 0, j.location);
                        k.confirmTransitionTo(i, r, o, function (e) {
                            if (e) {
                                var t = l(i),
                                    n = b(g + t);
                                if (V() !== n) {
                                    ((P = t), (window.location.hash = n));
                                    var o = U.lastIndexOf(l(j.location)),
                                        s = U.slice(0, o + 1);
                                    (s.push(t), (U = s), A({ action: r, location: i }));
                                } else A();
                            }
                        });
                    },
                    replace: function (e, t) {
                        var r = "REPLACE",
                            i = h(e, void 0, void 0, j.location);
                        k.confirmTransitionTo(i, r, o, function (e) {
                            if (e) {
                                var t = l(i),
                                    n = b(g + t);
                                V() !== n && ((P = t), x(n));
                                var o = U.indexOf(l(j.location));
                                (-1 !== o && (U[o] = t), A({ action: r, location: i }));
                            }
                        });
                    },
                    go: C,
                    goBack: function () {
                        C(-1);
                    },
                    goForward: function () {
                        C(1);
                    },
                    block: function (e) {
                        void 0 === e && (e = !1);
                        var t = k.setPrompt(e);
                        return (
                            F || (M(1), (F = !0)),
                            function () {
                                return (F && ((F = !1), M(-1)), t());
                            }
                        );
                    },
                    listen: function (e) {
                        var t = k.appendListener(e);
                        return (
                            M(1),
                            function () {
                                (M(-1), t());
                            }
                        );
                    },
                };
            return j;
        },
        sC: function (e) {
            void 0 === e && (e = {});
            var t = e,
                r = t.getUserConfirmation,
                n = t.initialEntries,
                o = void 0 === n ? ["/"] : n,
                s = t.initialIndex,
                a = t.keyLength,
                u = void 0 === a ? 6 : a,
                c = f();
            function d(e) {
                ((0, i.A)(b, e), (b.length = b.entries.length), c.notifyListeners(b.location, b.action));
            }
            function p() {
                return Math.random().toString(36).substr(2, u);
            }
            var m = T(void 0 === s ? 0 : s, 0, o.length - 1),
                g = o.map(function (e) {
                    return "string" == typeof e ? h(e, void 0, p()) : h(e, void 0, e.key || p());
                });
            function _(e) {
                var t = T(b.index + e, 0, b.entries.length - 1),
                    i = b.entries[t];
                c.confirmTransitionTo(i, "POP", r, function (e) {
                    e ? d({ action: "POP", location: i, index: t }) : d();
                });
            }
            var b = {
                length: g.length,
                action: "POP",
                location: g[m],
                index: m,
                entries: g,
                createHref: l,
                push: function (e, t) {
                    var i = "PUSH",
                        n = h(e, t, p(), b.location);
                    c.confirmTransitionTo(n, i, r, function (e) {
                        if (e) {
                            var t = b.index + 1,
                                r = b.entries.slice(0);
                            (r.length > t ? r.splice(t, r.length - t, n) : r.push(n),
                                d({ action: i, location: n, index: t, entries: r }));
                        }
                    });
                },
                replace: function (e, t) {
                    var i = "REPLACE",
                        n = h(e, t, p(), b.location);
                    c.confirmTransitionTo(n, i, r, function (e) {
                        e && ((b.entries[b.index] = n), d({ action: i, location: n }));
                    });
                },
                go: _,
                goBack: function () {
                    _(-1);
                },
                goForward: function () {
                    _(1);
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
        },
        yJ: h,
        zR: function (e) {
            (void 0 === e && (e = {}), p || (0, s.A)(!1));
            var t,
                r = window.history,
                n =
                    ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
                        -1 === t.indexOf("Android 4.0")) ||
                        -1 === t.indexOf("Mobile Safari") ||
                        -1 !== t.indexOf("Chrome") ||
                        -1 !== t.indexOf("Windows Phone")) &&
                    window.history &&
                    "pushState" in window.history,
                o = -1 !== window.navigator.userAgent.indexOf("Trident"),
                u = e,
                v = u.forceRefresh,
                y = void 0 !== v && v,
                w = u.getUserConfirmation,
                V = void 0 === w ? m : w,
                x = u.keyLength,
                T = void 0 === x ? 6 : x,
                E = e.basename ? d(a(e.basename)) : "";
            function k(e) {
                var t = e || {},
                    r = t.key,
                    i = t.state,
                    n = window.location,
                    o = n.pathname + n.search + n.hash;
                return (E && (o = c(o, E)), h(o, i, r));
            }
            function A() {
                return Math.random().toString(36).substr(2, T);
            }
            var R = f();
            function P(e) {
                ((0, i.A)(N, e), (N.length = r.length), R.notifyListeners(N.location, N.action));
            }
            function O(e) {
                (void 0 !== e.state || -1 !== navigator.userAgent.indexOf("CriOS")) && L(k(e.state));
            }
            function I() {
                L(k(b()));
            }
            var S = !1;
            function L(e) {
                S
                    ? ((S = !1), P())
                    : R.confirmTransitionTo(e, "POP", V, function (t) {
                          var r, i, n, o, s;
                          t
                              ? P({ action: "POP", location: e })
                              : ((r = e),
                                (i = N.location),
                                -1 === (n = C.indexOf(i.key)) && (n = 0),
                                -1 === (o = C.indexOf(r.key)) && (o = 0),
                                (s = n - o) && ((S = !0), M(s)));
                      });
            }
            var U = k(b()),
                C = [U.key];
            function D(e) {
                return E + l(e);
            }
            function M(e) {
                r.go(e);
            }
            var F = 0;
            function j(e) {
                1 === (F += e) && 1 === e
                    ? (window.addEventListener(g, O), o && window.addEventListener(_, I))
                    : 0 === F && (window.removeEventListener(g, O), o && window.removeEventListener(_, I));
            }
            var B = !1,
                N = {
                    length: r.length,
                    action: "POP",
                    location: U,
                    createHref: D,
                    push: function (e, t) {
                        var i = "PUSH",
                            o = h(e, t, A(), N.location);
                        R.confirmTransitionTo(o, i, V, function (e) {
                            if (e) {
                                var t = D(o),
                                    s = o.key,
                                    a = o.state;
                                if (n)
                                    if ((r.pushState({ key: s, state: a }, null, t), y)) window.location.href = t;
                                    else {
                                        var u = C.indexOf(N.location.key),
                                            c = C.slice(0, u + 1);
                                        (c.push(o.key), (C = c), P({ action: i, location: o }));
                                    }
                                else window.location.href = t;
                            }
                        });
                    },
                    replace: function (e, t) {
                        var i = "REPLACE",
                            o = h(e, t, A(), N.location);
                        R.confirmTransitionTo(o, i, V, function (e) {
                            if (e) {
                                var t = D(o),
                                    s = o.key,
                                    a = o.state;
                                if (n)
                                    if ((r.replaceState({ key: s, state: a }, null, t), y)) window.location.replace(t);
                                    else {
                                        var u = C.indexOf(N.location.key);
                                        (-1 !== u && (C[u] = o.key), P({ action: i, location: o }));
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
                        var t = R.setPrompt(e);
                        return (
                            B || (j(1), (B = !0)),
                            function () {
                                return (B && ((B = !1), j(-1)), t());
                            }
                        );
                    },
                    listen: function (e) {
                        var t = R.appendListener(e);
                        return (
                            j(1),
                            function () {
                                (j(-1), t());
                            }
                        );
                    },
                };
            return N;
        },
    },
);
