n.d(t, {
    ES: () => S,
    X6: () => N,
    np: () => E,
    qH: () => I,
    tk: () => C,
    vH: () => A,
    y8: () => T,
}),
    n(388685),
    n(642613);
var r = n(296009),
    i = n(224706),
    o = n(594174),
    a = n(621853),
    s = n(592183),
    l = n(224724),
    c = n(247397),
    u = n(925434),
    d = n(570911);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function g(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = d.J6.filter((e) => !t.has(e)),
        i = { applicationId: m(n.length > 0 ? n : d.J6) };
    return (
        e === r.l.FAVORITE_GAMES && (i.comment = Math.random() > 0.5 ? m(u.x) : void 0),
        e === r.l.CURRENT_GAMES && (i.tags = Math.random() > 0.3 ? g(u.T, Math.floor(3 * Math.random()) + 1) : void 0),
        i
    );
}
function b() {
    var e, t;
    if (l.Z.hasPendingChanges()) return null != (e = l.Z.getPendingWidgets()) ? e : [];
    {
        let e = o.default.getCurrentUser(),
            n = null != e ? a.Z.getUserProfile(e.id) : null;
        return null != (t = null == n ? void 0 : n.widgets) ? t : [];
    }
}
function y(e) {
    return e.sort((e, t) => c.rR.indexOf(e.type) - c.rR.indexOf(t.type));
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return h(_({}, { id: e }), {
        type: e,
        games: t,
    });
}
function v(e, t) {
    let n = e.filter((e) => e.type !== t.type);
    return y([t, ...n]);
}
function I(e) {
    let t = b();
    if (null != t.find((t) => t.type === e)) return;
    let n = O(e);
    s.Z.setPendingWidgets(y([n, ...t]));
}
function T(e) {
    let t = b().filter((t) => t.type !== e);
    s.Z.setPendingWidgets(t);
}
function S(e, t) {
    let n,
        o = b(),
        a = o.find((t) => t.type === e),
        l = c.Xe[e];
    if (null != a) {
        var u, d;
        if ((null != (d = null == (u = a.games) ? void 0 : u.length) ? d : 0) >= l) return;
    }
    let f = { applicationId: t };
    n = null != a ? (e === r.l.FAVORITE_GAMES ? [f] : [...(a.games || []), f]) : [f];
    let _ = v(o, O(e, n));
    s.Z.setPendingWidgets(_), i.Z.getDetectableGamesSupplemental([t]);
}
function A(e) {
    let t = (e) => ({
            game_id: e.applicationId,
            comment: e.comment,
            tags: e.tags,
        }),
        n = e.games.map(t);
    return {
        data: {
            type: e.type,
            games: n,
        },
    };
}
async function N() {
    let e = l.Z.getPendingWidgets();
    if (null !== e)
        try {
            await s.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function C() {
    try {
        await s.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
