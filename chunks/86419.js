n.d(t, {
    $b: () => P,
    ES: () => R,
    RZ: () => C,
    X6: () => D,
    kQ: () => x,
    n$: () => N,
    np: () => b,
    ou: () => G,
    qH: () => S,
    tk: () => L,
    vH: () => w,
    y8: () => A,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(624238),
    i = n(296009),
    a = n(224706),
    o = n(594174),
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
    var e;
    let t = o.default.getCurrentUser(),
        n = null != t ? s.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function O() {
    var e;
    return c.Z.hasPendingChanges() ? (null != (e = c.Z.getPendingWidgets()) ? e : []) : y();
}
function v(e) {
    return e.sort((e, t) => u.r.indexOf(e.type) - u.r.indexOf(t.type));
}
function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = y().find((t) => t.type === e);
    return m(p({}, { id: null != (t = null == r ? void 0 : r.id) ? t : e }), {
        type: e,
        games: n,
    });
}
function T(e, t) {
    let n = e.filter((e) => e.id !== t.id);
    return v([t, ...n]);
}
function S(e) {
    let t = O();
    if (null != t.find((t) => t.type === e)) return;
    let n = I(e);
    l.Z.setPendingWidgets(v([n, ...t]));
}
function A(e) {
    let t = O().filter((t) => t.type !== e);
    l.Z.setPendingWidgets(t);
}
function N(e, t, n) {
    let r = O(),
        i = r.find((t) => t.type === e);
    if (null == i) return;
    let a = i.games.find((e) => e.applicationId === t);
    if (null == a) return;
    let o = m(p({}, a), { tags: n }),
        s = i.games.map((e) => (e.applicationId === t ? o : e)),
        c = T(r, m(p({}, i), { games: s }));
    l.Z.setPendingWidgets(c);
}
function C(e, t, n) {
    let r = O().find((t) => t.type === e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    N(e, t, a.length > 0 ? a : []);
}
function R(e, t) {
    let n,
        o = O(),
        s = o.find((t) => t.type === e),
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
    let _ = T(o, I(e, n));
    l.Z.setPendingWidgets(_), a.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function P(e, t) {
    let n = O(),
        r = n.find((t) => t.type === e);
    if (null == r) return;
    let i = T(
        n,
        I(
            e,
            (null != r.games ? r.games : []).filter((e) => e.applicationId !== t),
        ),
    );
    l.Z.setPendingWidgets(i);
}
function w(e) {
    let t = (e) => ({
            game_id: e.applicationId,
            comment: e.comment,
            tags: e.tags,
        }),
        n = e.games.map(t);
    return {
        id: e.id !== e.type ? e.id : void 0,
        data: {
            type: e.type,
            games: n,
        },
    };
}
async function D() {
    let e = c.Z.getPendingWidgets();
    if (null !== e)
        try {
            await l.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function L() {
    try {
        await l.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function x(e) {
    let t = r.k[e.type];
    return e.games.length >= t;
}
function M(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function k(e, t) {
    return e.applicationId === t.applicationId && M(e.comment) === M(t.comment);
}
function j(e, t) {
    if (e.applicationId !== t.applicationId) return !1;
    let n = M(e.tags),
        r = M(t.tags);
    return (
        (null === n && null === r) ||
        (null !== n && null !== r && n.length === r.length && n.every((e, t) => e === r[t]))
    );
}
function U(e, t) {
    return e.applicationId === t.applicationId;
}
function G(e, t, n) {
    let r;
    if (e.length !== t.length) return !1;
    switch (n) {
        case i.l.FAVORITE_GAMES:
            r = k;
            break;
        case i.l.CURRENT_GAMES:
            r = j;
            break;
        case i.l.WANT_TO_PLAY_GAMES:
        case i.l.PLAYED_GAMES:
            r = U;
            break;
        default:
            throw Error("Unknown widget type: ".concat(n));
    }
    return e.every((e, n) => r(e, t[n]));
}
