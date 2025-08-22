n.d(t, {
    $b: () => x,
    Bu: () => w,
    ES: () => D,
    M8: () => E,
    RZ: () => P,
    X6: () => j,
    kQ: () => k,
    n$: () => R,
    np: () => O,
    ou: () => V,
    qH: () => C,
    tk: () => M,
    vH: () => L,
    vI: () => g,
    y8: () => N,
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
    return u.S5.includes(e);
}
function E(e) {
    return u.uX.includes(e);
}
function b(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function y(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = f.J6.filter((e) => !t.has(e)),
        r = { applicationId: b(n.length > 0 ? n : f.J6) };
    return (
        g(e) && (r.comment = Math.random() > 0.5 ? b(d.x) : void 0),
        E(e) && (r.tags = Math.random() > 0.3 ? y(d.T, d.T.length) : void 0),
        r
    );
}
function v() {
    var e;
    let t = o.default.getCurrentUser(),
        n = null != t ? s.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function I() {
    var e;
    return c.Z.hasPendingChanges() ? (null != (e = c.Z.getPendingWidgets()) ? e : []) : v();
}
function T(e) {
    return e.sort((e, t) => u.rR.indexOf(e.type) - u.rR.indexOf(t.type));
}
function S(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = v().find((t) => t.type === e);
    return m(p({}, { id: null != (t = null == r ? void 0 : r.id) ? t : e }), {
        type: e,
        games: n,
    });
}
function A(e, t) {
    let n = e.filter((e) => e.id !== t.id);
    return T([t, ...n]);
}
function C(e) {
    let t = I();
    if (null != t.find((t) => t.type === e)) return;
    let n = S(e);
    l.Z.setPendingWidgets(T([n, ...t]));
}
function N(e) {
    let t = I().filter((t) => t.type !== e);
    l.Z.setPendingWidgets(t);
}
function R(e, t, n) {
    let r = I(),
        i = r.find((t) => t.type === e);
    if (null == i) return;
    let a = i.games.find((e) => e.applicationId === t);
    if (null == a) return;
    let o = m(p({}, a), { tags: n }),
        s = i.games.map((e) => (e.applicationId === t ? o : e)),
        c = A(r, m(p({}, i), { games: s }));
    l.Z.setPendingWidgets(c);
}
function P(e, t, n) {
    let r = I().find((t) => t.type === e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    R(e, t, a.length > 0 ? a : []);
}
function w(e, t, n) {
    let r = I(),
        i = r.find((t) => t.type === e);
    if (null == i) return;
    let a = i.games.find((e) => e.applicationId === t);
    if (null == a || n === a.comment) return;
    let o = m(p({}, a), { comment: n }),
        s = i.games.map((e) => (e.applicationId === t ? o : e)),
        c = A(r, m(p({}, i), { games: s }));
    l.Z.setPendingWidgets(c);
}
function D(e, t) {
    var n, i, o;
    let s,
        c = I(),
        u = c.find((t) => t.type === e),
        d = r.k[e];
    if (null != u && (null != (i = null == (n = u.games) ? void 0 : n.length) ? i : 0) >= d) return;
    let f = {
            applicationId: t.applicationId,
            comment: t.comment,
            tags: t.tags,
        },
        _ = A(c, S(e, (s = null != u ? [...(null != (o = u.games) ? o : []), f] : [f])));
    l.Z.setPendingWidgets(_), a.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function x(e, t) {
    let n = I(),
        r = n.find((t) => t.type === e);
    if (null == r) return;
    let i = A(
        n,
        S(
            e,
            (null != r.games ? r.games : []).filter((e) => e.applicationId !== t),
        ),
    );
    l.Z.setPendingWidgets(i);
}
function L(e) {
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
async function j() {
    let e = c.Z.getPendingWidgets();
    if (null !== e)
        try {
            await l.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function M() {
    try {
        await l.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function k(e) {
    let t = r.k[e.type];
    return e.games.length >= t;
}
function U(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function G(e, t) {
    return e.applicationId === t.applicationId && U(e.comment) === U(t.comment);
}
function B(e, t) {
    if (e.applicationId !== t.applicationId) return !1;
    let n = U(e.tags),
        r = U(t.tags);
    return (
        (null === n && null === r) ||
        (null !== n && null !== r && n.length === r.length && n.every((e, t) => e === r[t]))
    );
}
function Z(e, t) {
    return e.applicationId === t.applicationId;
}
function V(e, t, n) {
    let r;
    if (e.length !== t.length) return !1;
    switch (n) {
        case i.l.FAVORITE_GAMES:
            r = G;
            break;
        case i.l.CURRENT_GAMES:
            r = B;
            break;
        case i.l.WANT_TO_PLAY_GAMES:
        case i.l.PLAYED_GAMES:
            r = Z;
            break;
        default:
            throw Error("Unknown widget type: ".concat(n));
    }
    return e.every((e, n) => r(e, t[n]));
}
