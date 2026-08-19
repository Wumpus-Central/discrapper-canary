"use strict";
r.d(t, { AO: () => i, sC: () => u, yJ: () => a });
var n = r(1139),
    o = r(861193);
function i(e) {
    var t = e.pathname,
        r = e.search,
        n = e.hash,
        o = t || "/";
    return (
        r && "?" !== r && (o += "?" === r.charAt(0) ? r : "?" + r),
        n && "#" !== n && (o += "#" === n.charAt(0) ? n : "#" + n),
        o
    );
}
function a(e, t, r, i) {
    var a, s, u, p, l, f;
    "string" == typeof e
        ? ((u = ""),
          (p = ""),
          -1 !== (l = (s = e || "/").indexOf("#")) && ((p = s.substr(l)), (s = s.substr(0, l))),
          -1 !== (f = s.indexOf("?")) && ((u = s.substr(f)), (s = s.substr(0, f))),
          ((a = { pathname: s, search: "?" === u ? "" : u, hash: "#" === p ? "" : p }).state = t))
        : (void 0 === (a = (0, n.A)({}, e)).pathname && (a.pathname = ""),
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
        r && (a.key = r),
        i
            ? a.pathname
                ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, o.A)(a.pathname, i.pathname))
                : (a.pathname = i.pathname)
            : a.pathname || (a.pathname = "/"),
        a
    );
}
function s(e, t, r) {
    return Math.min(Math.max(e, t), r);
}
function u(e) {
    void 0 === e && (e = {});
    var t,
        r,
        o = e,
        u = o.getUserConfirmation,
        p = o.initialEntries,
        l = void 0 === p ? ["/"] : p,
        f = o.initialIndex,
        c = o.keyLength,
        h = void 0 === c ? 6 : c,
        v =
            ((t = null),
            (r = []),
            {
                setPrompt: function (e) {
                    return (
                        (t = e),
                        function () {
                            t === e && (t = null);
                        }
                    );
                },
                confirmTransitionTo: function (e, r, n, o) {
                    if (null != t) {
                        var i = "function" == typeof t ? t(e, r) : t;
                        "string" == typeof i ? ("function" == typeof n ? n(i, o) : o(!0)) : o(!1 !== i);
                    } else o(!0);
                },
                appendListener: function (e) {
                    var t = !0;
                    function n() {
                        t && e.apply(void 0, arguments);
                    }
                    return (
                        r.push(n),
                        function () {
                            (t = !1),
                                (r = r.filter(function (e) {
                                    return e !== n;
                                }));
                        }
                    );
                },
                notifyListeners: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    r.forEach(function (e) {
                        return e.apply(void 0, t);
                    });
                },
            });
    function d(e) {
        (0, n.A)(S, e), (S.length = S.entries.length), v.notifyListeners(S.location, S.action);
    }
    function y() {
        return Math.random().toString(36).substr(2, h);
    }
    var b = s(void 0 === f ? 0 : f, 0, l.length - 1),
        g = l.map(function (e) {
            return "string" == typeof e ? a(e, void 0, y()) : a(e, void 0, e.key || y());
        });
    function m(e) {
        var t = s(S.index + e, 0, S.entries.length - 1),
            r = S.entries[t];
        v.confirmTransitionTo(r, "POP", u, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
        });
    }
    var S = {
        length: g.length,
        action: "POP",
        location: g[b],
        index: b,
        entries: g,
        createHref: i,
        push: function (e, t) {
            var r = "PUSH",
                n = a(e, t, y(), S.location);
            v.confirmTransitionTo(n, r, u, function (e) {
                if (e) {
                    var t = S.index + 1,
                        o = S.entries.slice(0);
                    o.length > t ? o.splice(t, o.length - t, n) : o.push(n),
                        d({ action: r, location: n, index: t, entries: o });
                }
            });
        },
        replace: function (e, t) {
            var r = "REPLACE",
                n = a(e, t, y(), S.location);
            v.confirmTransitionTo(n, r, u, function (e) {
                e && ((S.entries[S.index] = n), d({ action: r, location: n }));
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
            var t = S.index + e;
            return t >= 0 && t < S.entries.length;
        },
        block: function (e) {
            return void 0 === e && (e = !1), v.setPrompt(e);
        },
        listen: function (e) {
            return v.appendListener(e);
        },
    };
    return S;
}
r(987701), r(258635), "u" > typeof window && window.document && window.document.createElement;
