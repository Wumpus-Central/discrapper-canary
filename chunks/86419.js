n.d(t, {
    $b: () => x,
    Bu: () => w,
    ES: () => D,
    M8: () => b,
    RZ: () => P,
    X6: () => j,
    kQ: () => M,
    n$: () => R,
    np: () => v,
    ou: () => V,
    qH: () => C,
    tk: () => k,
    vH: () => L,
    vI: () => E,
    y8: () => N,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(624238),
    i = n(379405),
    a = n(296009),
    o = n(224706),
    s = n(594174),
    l = n(621853),
    c = n(592183),
    u = n(224724),
    d = n(247397),
    f = n(925434),
    _ = n(570911);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    return d.S5.includes(e);
}
function b(e) {
    return d.uX.includes(e);
}
function y(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function O(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = _.J6.filter((e) => !t.has(e)),
        r = { applicationId: y(n.length > 0 ? n : _.J6) };
    return (
        E(e) && (r.comment = Math.random() > 0.5 ? y(f.x) : void 0),
        b(e) && (r.tags = Math.random() > 0.3 ? O(f.T, f.T.length) : void 0),
        r
    );
}
function I() {
    var e;
    let t = s.default.getCurrentUser(),
        n = null != t ? l.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function T() {
    var e;
    return u.Z.hasPendingChanges() ? (null != (e = u.Z.getPendingWidgets()) ? e : []) : I();
}
function S(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = I().find((t) => t.type === e);
    return g(h({}, { id: null != (t = null == r ? void 0 : r.id) ? t : e }), {
        type: e,
        games: n,
    });
}
function A(e, t) {
    let n = e.findIndex((e) => e.id === t.id);
    if (-1 === n) return [...e, t];
    {
        let r = [...e];
        return (r[n] = t), r;
    }
}
function C(e) {
    let t = T();
    if (null != t.find((t) => t.type === e)) return;
    let n = S(e);
    c.Z.setPendingWidgets([...t, n]);
}
function N(e) {
    let t = T().filter((t) => t.type !== e);
    c.Z.setPendingWidgets(t);
}
function R(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = T(),
        o = a.find((t) => t.type === e);
    if (null == o) return;
    let s = o.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let l = g(h({}, s), { tags: n }),
        u = o.games.map((e) => (e.applicationId === t ? l : e)),
        d = A(a, g(h({}, o), { games: u }));
    c.Z.setPendingWidgets(d);
}
function P(e, t, n) {
    let r = T().find((t) => t.type === e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    R(e, t, a.length > 0 ? a : []);
}
function w(e, t, n) {
    let r = T(),
        i = r.find((t) => t.type === e);
    if (null == i) return;
    let a = i.games.find((e) => e.applicationId === t);
    if (null == a || n === a.comment) return;
    let o = g(h({}, a), { comment: n }),
        s = i.games.map((e) => (e.applicationId === t ? o : e)),
        l = A(r, g(h({}, i), { games: s }));
    c.Z.setPendingWidgets(l);
}
function D(e, t) {
    var n, i, a;
    let s,
        l = T(),
        u = l.find((t) => t.type === e),
        d = r.k[e];
    if (null != u && (null != (i = null == (n = u.games) ? void 0 : n.length) ? i : 0) >= d) return;
    let f = {
            applicationId: t.applicationId,
            comment: t.comment,
            tags: t.tags,
        },
        _ = A(l, S(e, (s = null != u ? [...(null != (a = u.games) ? a : []), f] : [f])));
    c.Z.setPendingWidgets(_), o.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function x(e, t) {
    let n = T(),
        r = n.find((t) => t.type === e);
    if (null == r) return;
    let i = A(
        n,
        S(
            e,
            (null != r.games ? r.games : []).filter((e) => e.applicationId !== t),
        ),
    );
    c.Z.setPendingWidgets(i);
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
    let e = u.Z.getPendingWidgets();
    if (null !== e)
        try {
            await c.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function k() {
    try {
        await c.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function M(e) {
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
        case a.l.FAVORITE_GAMES:
            r = G;
            break;
        case a.l.CURRENT_GAMES:
            r = B;
            break;
        case a.l.WANT_TO_PLAY_GAMES:
        case a.l.PLAYED_GAMES:
            r = Z;
            break;
        default:
            throw Error("Unknown widget type: ".concat(n));
    }
    return e.every((e, n) => r(e, t[n]));
}
