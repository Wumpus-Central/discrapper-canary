n.d(t, {
    $b: () => C,
    ES: () => N,
    X6: () => P,
    kQ: () => D,
    n$: () => A,
    np: () => b,
    qH: () => T,
    tk: () => w,
    vH: () => R,
    y8: () => S,
}),
    n(388685),
    n(642613);
var r = n(624238),
    i = n(296009),
    o = n(224706),
    a = n(594174),
    s = n(621853),
    l = n(592183),
    c = n(224724),
    u = n(247397),
    d = n(925434),
    f = n(570911);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function E(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = f.J6.filter((e) => !t.has(e)),
        r = { applicationId: g(n.length > 0 ? n : f.J6) };
    return (
        e === i.l.FAVORITE_GAMES && (r.comment = Math.random() > 0.5 ? g(d.x) : void 0),
        e === i.l.CURRENT_GAMES && (r.tags = Math.random() > 0.3 ? E(d.T, d.T.length) : void 0),
        r
    );
}
function y() {
    var e, t;
    if (c.Z.hasPendingChanges()) return null != (e = c.Z.getPendingWidgets()) ? e : [];
    {
        let e = a.default.getCurrentUser(),
            n = null != e ? s.Z.getUserProfile(e.id) : null;
        return null != (t = null == n ? void 0 : n.widgets) ? t : [];
    }
}
function O(e) {
    return e.sort((e, t) => u.r.indexOf(e.type) - u.r.indexOf(t.type));
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return m(p({}, { id: e }), {
        type: e,
        games: t,
    });
}
function I(e, t) {
    let n = e.filter((e) => e.type !== t.type);
    return O([t, ...n]);
}
function T(e) {
    let t = y();
    if (null != t.find((t) => t.type === e)) return;
    let n = v(e);
    l.Z.setPendingWidgets(O([n, ...t]));
}
function S(e) {
    let t = y().filter((t) => t.type !== e);
    l.Z.setPendingWidgets(t);
}
function A(e, t, n) {
    let r = y(),
        i = r.find((t) => t.type === e);
    if (null == i) return;
    let o = i.games.find((e) => e.applicationId === t);
    if (null == o) return;
    let a = m(p({}, o), { tags: n }),
        s = i.games.map((e) => (e.applicationId === t ? a : e)),
        c = I(r, m(p({}, i), { games: s }));
    l.Z.setPendingWidgets(c);
}
function N(e, t) {
    let n,
        a = y(),
        s = a.find((t) => t.type === e),
        c = r.k[e];
    if (null != s) {
        var u, d;
        if ((null != (d = null == (u = s.games) ? void 0 : u.length) ? d : 0) >= c) return;
    }
    let f = {
        applicationId: t.applicationId,
        comment: t.comment,
        tags: t.tags,
    };
    n = null != s ? (e === i.l.FAVORITE_GAMES ? [f] : [...(s.games || []), f]) : [f];
    let _ = I(a, v(e, n));
    l.Z.setPendingWidgets(_), o.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function C(e, t) {
    let n = y(),
        r = n.find((t) => t.type === e);
    if (null == r) return;
    let i = I(
        n,
        v(
            e,
            (null != r.games ? r.games : []).filter((e) => e.applicationId !== t),
        ),
    );
    l.Z.setPendingWidgets(i);
}
function R(e) {
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
async function P() {
    let e = c.Z.getPendingWidgets();
    if (null !== e)
        try {
            await l.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function w() {
    try {
        await l.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function D(e) {
    let t = r.k[e.type];
    return e.games.length >= t;
}
