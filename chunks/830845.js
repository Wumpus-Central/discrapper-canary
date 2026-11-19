var i = n(1139),
    r = n(861193),
    o = n(987701),
    a = n(258635);
function s(t) {
    return "/" === t.charAt(0) ? t : "/" + t;
}
function c(t) {
    return "/" === t.charAt(0) ? t.substr(1) : t;
}
function l(t, e) {
    return 0 === t.toLowerCase().indexOf(e.toLowerCase()) && -1 !== "/?#".indexOf(t.charAt(e.length))
        ? t.substr(e.length)
        : t;
}
function u(t) {
    return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t;
}
function h(t) {
    var e = t || "/",
        n = "",
        i = "",
        r = e.indexOf("#");
    -1 !== r && ((i = e.substr(r)), (e = e.substr(0, r)));
    var o = e.indexOf("?");
    return (
        -1 !== o && ((n = e.substr(o)), (e = e.substr(0, o))),
        { pathname: e, search: "?" === n ? "" : n, hash: "#" === i ? "" : i }
    );
}
function f(t) {
    var e = t.pathname,
        n = t.search,
        i = t.hash,
        r = e || "/";
    return (
        n && "?" !== n && (r += "?" === n.charAt(0) ? n : "?" + n),
        i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i),
        r
    );
}
function d(t, e, n, o) {
    var a;
    "string" == typeof t
        ? ((a = h(t)).state = e)
        : (void 0 === (a = (0, i.A)({}, t)).pathname && (a.pathname = ""),
          a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : (a.search = ""),
          a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : (a.hash = ""),
          void 0 !== e && void 0 === a.state && (a.state = e));
    try {
        a.pathname = decodeURI(a.pathname);
    } catch (t) {
        if (t instanceof URIError)
            throw URIError(
                'Pathname "' +
                    a.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            );
        throw t;
    }
    return (
        n && (a.key = n),
        o
            ? a.pathname
                ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, r.A)(a.pathname, o.pathname))
                : (a.pathname = o.pathname)
            : a.pathname || (a.pathname = "/"),
        a
    );
}
function p() {
    var t = null,
        e = [];
    return {
        setPrompt: function (e) {
            return (
                (t = e),
                function () {
                    t === e && (t = null);
                }
            );
        },
        confirmTransitionTo: function (e, n, i, r) {
            if (null != t) {
                var o = "function" == typeof t ? t(e, n) : t;
                "string" == typeof o ? ("function" == typeof i ? i(o, r) : r(!0)) : r(!1 !== o);
            } else r(!0);
        },
        appendListener: function (t) {
            var n = !0;
            function i() {
                n && t.apply(void 0, arguments);
            }
            return (
                e.push(i),
                function () {
                    ((n = !1),
                        (e = e.filter(function (t) {
                            return t !== i;
                        })));
                }
            );
        },
        notifyListeners: function () {
            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            e.forEach(function (t) {
                return t.apply(void 0, n);
            });
        },
    };
}
var g = !!("u" > typeof window && window.document && window.document.createElement);
function m(t, e) {
    e(window.confirm(t));
}
var _ = "popstate",
    v = "hashchange";
function y() {
    try {
        return window.history.state || {};
    } catch (t) {
        return {};
    }
}
var w = "hashchange",
    b = {
        hashbang: {
            encodePath: function (t) {
                return "!" === t.charAt(0) ? t : "!/" + c(t);
            },
            decodePath: function (t) {
                return "!" === t.charAt(0) ? t.substr(1) : t;
            },
        },
        noslash: { encodePath: c, decodePath: s },
        slash: { encodePath: s, decodePath: s },
    };
function x(t) {
    var e = t.indexOf("#");
    return -1 === e ? t : t.slice(0, e);
}
function E() {
    var t = window.location.href,
        e = t.indexOf("#");
    return -1 === e ? "" : t.substring(e + 1);
}
function T(t) {
    window.location.replace(x(window.location.href) + "#" + t);
}
function A(t, e, n) {
    return Math.min(Math.max(t, e), n);
}
n.d(
    e,
    {},
    {
        AO: f,
        Fu: function (t, e) {
            return (
                t.pathname === e.pathname &&
                t.search === e.search &&
                t.hash === e.hash &&
                t.key === e.key &&
                (0, o.A)(t.state, e.state)
            );
        },
        Rr: h,
        TM: function (t) {
            (void 0 === t && (t = {}), g || (0, a.A)(!1));
            var e = window.history;
            window.navigator.userAgent.indexOf("Firefox");
            var n = t,
                r = n.getUserConfirmation,
                o = void 0 === r ? m : r,
                c = n.hashType,
                h = t.basename ? u(s(t.basename)) : "",
                _ = b[void 0 === c ? "slash" : c],
                v = _.encodePath,
                y = _.decodePath;
            function A() {
                var t = y(E());
                return (h && (t = l(t, h)), d(t));
            }
            var S = p();
            function P(t) {
                ((0, i.A)(j, t), (j.length = e.length), S.notifyListeners(j.location, j.action));
            }
            var R = !1,
                C = null;
            function k() {
                var t = E(),
                    e = v(t);
                if (t !== e) T(e);
                else {
                    var n,
                        i = A(),
                        r = j.location;
                    if ((!R && r.pathname === i.pathname && r.search === i.search && r.hash === i.hash) || C === f(i))
                        return;
                    ((C = null),
                        (n = i),
                        R
                            ? ((R = !1), P())
                            : S.confirmTransitionTo(n, "POP", o, function (t) {
                                  var e, i, r, o, a;
                                  t
                                      ? P({ action: "POP", location: n })
                                      : ((e = n),
                                        (i = j.location),
                                        -1 === (r = O.lastIndexOf(f(i))) && (r = 0),
                                        -1 === (o = O.lastIndexOf(f(e))) && (o = 0),
                                        (a = r - o) && ((R = !0), U(a)));
                              }));
                }
            }
            var M = E(),
                I = v(M);
            M !== I && T(I);
            var L = A(),
                O = [f(L)];
            function U(t) {
                e.go(t);
            }
            var D = 0;
            function V(t) {
                1 === (D += t) && 1 === t ? window.addEventListener(w, k) : 0 === D && window.removeEventListener(w, k);
            }
            var W = !1,
                j = {
                    length: e.length,
                    action: "POP",
                    location: L,
                    createHref: function (t) {
                        var e = document.querySelector("base"),
                            n = "";
                        return (e && e.getAttribute("href") && (n = x(window.location.href)), n + "#" + v(h + f(t)));
                    },
                    push: function (t, e) {
                        var n = "PUSH",
                            i = d(t, void 0, void 0, j.location);
                        S.confirmTransitionTo(i, n, o, function (t) {
                            if (t) {
                                var e = f(i),
                                    r = v(h + e);
                                if (E() !== r) {
                                    ((C = e), (window.location.hash = r));
                                    var o = O.lastIndexOf(f(j.location)),
                                        a = O.slice(0, o + 1);
                                    (a.push(e), (O = a), P({ action: n, location: i }));
                                } else P();
                            }
                        });
                    },
                    replace: function (t, e) {
                        var n = "REPLACE",
                            i = d(t, void 0, void 0, j.location);
                        S.confirmTransitionTo(i, n, o, function (t) {
                            if (t) {
                                var e = f(i),
                                    r = v(h + e);
                                E() !== r && ((C = e), T(r));
                                var o = O.indexOf(f(j.location));
                                (-1 !== o && (O[o] = e), P({ action: n, location: i }));
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
                    block: function (t) {
                        void 0 === t && (t = !1);
                        var e = S.setPrompt(t);
                        return (
                            W || (V(1), (W = !0)),
                            function () {
                                return (W && ((W = !1), V(-1)), e());
                            }
                        );
                    },
                    listen: function (t) {
                        var e = S.appendListener(t);
                        return (
                            V(1),
                            function () {
                                (V(-1), e());
                            }
                        );
                    },
                };
            return j;
        },
        sC: function (t) {
            void 0 === t && (t = {});
            var e = t,
                n = e.getUserConfirmation,
                r = e.initialEntries,
                o = void 0 === r ? ["/"] : r,
                a = e.initialIndex,
                s = e.keyLength,
                c = void 0 === s ? 6 : s,
                l = p();
            function u(t) {
                ((0, i.A)(v, t), (v.length = v.entries.length), l.notifyListeners(v.location, v.action));
            }
            function h() {
                return Math.random().toString(36).substr(2, c);
            }
            var g = A(void 0 === a ? 0 : a, 0, o.length - 1),
                m = o.map(function (t) {
                    return "string" == typeof t ? d(t, void 0, h()) : d(t, void 0, t.key || h());
                });
            function _(t) {
                var e = A(v.index + t, 0, v.entries.length - 1),
                    i = v.entries[e];
                l.confirmTransitionTo(i, "POP", n, function (t) {
                    t ? u({ action: "POP", location: i, index: e }) : u();
                });
            }
            var v = {
                length: m.length,
                action: "POP",
                location: m[g],
                index: g,
                entries: m,
                createHref: f,
                push: function (t, e) {
                    var i = "PUSH",
                        r = d(t, e, h(), v.location);
                    l.confirmTransitionTo(r, i, n, function (t) {
                        if (t) {
                            var e = v.index + 1,
                                n = v.entries.slice(0);
                            (n.length > e ? n.splice(e, n.length - e, r) : n.push(r),
                                u({ action: i, location: r, index: e, entries: n }));
                        }
                    });
                },
                replace: function (t, e) {
                    var i = "REPLACE",
                        r = d(t, e, h(), v.location);
                    l.confirmTransitionTo(r, i, n, function (t) {
                        t && ((v.entries[v.index] = r), u({ action: i, location: r }));
                    });
                },
                go: _,
                goBack: function () {
                    _(-1);
                },
                goForward: function () {
                    _(1);
                },
                canGo: function (t) {
                    var e = v.index + t;
                    return e >= 0 && e < v.entries.length;
                },
                block: function (t) {
                    return (void 0 === t && (t = !1), l.setPrompt(t));
                },
                listen: function (t) {
                    return l.appendListener(t);
                },
            };
            return v;
        },
        yJ: d,
        zR: function (t) {
            (void 0 === t && (t = {}), g || (0, a.A)(!1));
            var e,
                n = window.history,
                r =
                    ((-1 === (e = window.navigator.userAgent).indexOf("Android 2.") &&
                        -1 === e.indexOf("Android 4.0")) ||
                        -1 === e.indexOf("Mobile Safari") ||
                        -1 !== e.indexOf("Chrome") ||
                        -1 !== e.indexOf("Windows Phone")) &&
                    window.history &&
                    "pushState" in window.history,
                o = -1 !== window.navigator.userAgent.indexOf("Trident"),
                c = t,
                h = c.forceRefresh,
                w = void 0 !== h && h,
                b = c.getUserConfirmation,
                x = void 0 === b ? m : b,
                E = c.keyLength,
                T = void 0 === E ? 6 : E,
                A = t.basename ? u(s(t.basename)) : "";
            function S(t) {
                var e = t || {},
                    n = e.key,
                    i = e.state,
                    r = window.location,
                    o = r.pathname + r.search + r.hash;
                return (A && (o = l(o, A)), d(o, i, n));
            }
            function P() {
                return Math.random().toString(36).substr(2, T);
            }
            var R = p();
            function C(t) {
                ((0, i.A)(F, t), (F.length = n.length), R.notifyListeners(F.location, F.action));
            }
            function k(t) {
                (void 0 !== t.state || -1 !== navigator.userAgent.indexOf("CriOS")) && L(S(t.state));
            }
            function M() {
                L(S(y()));
            }
            var I = !1;
            function L(t) {
                I
                    ? ((I = !1), C())
                    : R.confirmTransitionTo(t, "POP", x, function (e) {
                          var n, i, r, o, a;
                          e
                              ? C({ action: "POP", location: t })
                              : ((n = t),
                                (i = F.location),
                                -1 === (r = U.indexOf(i.key)) && (r = 0),
                                -1 === (o = U.indexOf(n.key)) && (o = 0),
                                (a = r - o) && ((I = !0), V(a)));
                      });
            }
            var O = S(y()),
                U = [O.key];
            function D(t) {
                return A + f(t);
            }
            function V(t) {
                n.go(t);
            }
            var W = 0;
            function j(t) {
                1 === (W += t) && 1 === t
                    ? (window.addEventListener(_, k), o && window.addEventListener(v, M))
                    : 0 === W && (window.removeEventListener(_, k), o && window.removeEventListener(v, M));
            }
            var B = !1,
                F = {
                    length: n.length,
                    action: "POP",
                    location: O,
                    createHref: D,
                    push: function (t, e) {
                        var i = "PUSH",
                            o = d(t, e, P(), F.location);
                        R.confirmTransitionTo(o, i, x, function (t) {
                            if (t) {
                                var e = D(o),
                                    a = o.key,
                                    s = o.state;
                                if (r)
                                    if ((n.pushState({ key: a, state: s }, null, e), w)) window.location.href = e;
                                    else {
                                        var c = U.indexOf(F.location.key),
                                            l = U.slice(0, c + 1);
                                        (l.push(o.key), (U = l), C({ action: i, location: o }));
                                    }
                                else window.location.href = e;
                            }
                        });
                    },
                    replace: function (t, e) {
                        var i = "REPLACE",
                            o = d(t, e, P(), F.location);
                        R.confirmTransitionTo(o, i, x, function (t) {
                            if (t) {
                                var e = D(o),
                                    a = o.key,
                                    s = o.state;
                                if (r)
                                    if ((n.replaceState({ key: a, state: s }, null, e), w)) window.location.replace(e);
                                    else {
                                        var c = U.indexOf(F.location.key);
                                        (-1 !== c && (U[c] = o.key), C({ action: i, location: o }));
                                    }
                                else window.location.replace(e);
                            }
                        });
                    },
                    go: V,
                    goBack: function () {
                        V(-1);
                    },
                    goForward: function () {
                        V(1);
                    },
                    block: function (t) {
                        void 0 === t && (t = !1);
                        var e = R.setPrompt(t);
                        return (
                            B || (j(1), (B = !0)),
                            function () {
                                return (B && ((B = !1), j(-1)), e());
                            }
                        );
                    },
                    listen: function (t) {
                        var e = R.appendListener(t);
                        return (
                            j(1),
                            function () {
                                (j(-1), e());
                            }
                        );
                    },
                };
            return F;
        },
    },
);
