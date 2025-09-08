n.d(t, {
    $b: () => U,
    Bu: () => M,
    ES: () => k,
    Gv: () => T,
    Hy: () => O,
    M8: () => I,
    RZ: () => j,
    X6: () => B,
    kQ: () => F,
    mR: () => y,
    n$: () => L,
    np: () => C,
    ou: () => K,
    qH: () => D,
    tk: () => Z,
    vH: () => G,
    y8: () => x,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(624238),
    i = n(379405),
    a = n(296009),
    o = n(224706),
    s = n(594174),
    l = n(836197),
    c = n(621853),
    u = n(592183),
    d = n(224724),
    f = n(247397),
    _ = n(925434),
    p = n(570911),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = (e) => f.Wk[e.type](e);
function O(e, t) {
    let { isCurrentUser: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === r.kp[e.type]
            ? h.intl.string(h.t.wiXdER)
            : h.intl.format(h.t["zR1+09"], { numGames: r.kp[e.type] });
}
function v(e) {
    return f.S5.includes(e);
}
function I(e) {
    return f.uX.includes(e);
}
function T(e) {
    return e in r.kp ? r.kp[e] : 0;
}
function S(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function A(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = p.J6.filter((e) => !t.has(e)),
        r = { applicationId: S(n.length > 0 ? n : p.J6) };
    return (
        v(e) && (r.comment = Math.random() > 0.5 ? S(_.x) : void 0),
        I(e) && (r.tags = Math.random() > 0.3 ? A(_.T, _.T.length) : void 0),
        r
    );
}
function N() {
    var e;
    let t = s.default.getCurrentUser(),
        n = null != t ? c.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function R() {
    var e;
    return d.Z.hasPendingChanges() ? (null != (e = d.Z.getPendingWidgets()) ? e : []) : N();
}
function P(e, t) {
    var n;
    let r = N().find((t) => t.type === e);
    return b(g({}, t), {
        id: null != (n = null == r ? void 0 : r.id) ? n : e,
        type: e,
    });
}
function w(e, t) {
    let n = e.findIndex((e) => e.id === t.id);
    if (-1 === n) return [...e, t];
    {
        let r = [...e];
        return (r[n] = t), r;
    }
}
function D(e, t) {
    let n = R();
    if (null != n.find((t) => t.type === e)) return;
    let r = P(e, t);
    u.Z.setPendingWidgets([...n, r]);
}
function x(e) {
    let t = R().filter((t) => t.type !== e);
    u.Z.setPendingWidgets(t);
}
function L(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = R(),
        o = a.find((t) => t.type === e);
    if (null == o || !(0, l.W)(o)) return;
    let s = o.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let c = b(g({}, s), { tags: n }),
        d = o.games.map((e) => (e.applicationId === t ? c : e)),
        f = w(a, b(g({}, o), { games: d }));
    u.Z.setPendingWidgets(f);
}
function j(e, t, n) {
    let r = R().find((t) => t.type === e);
    if (null == r || !(0, l.W)(r)) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    L(r.type, t, a.length > 0 ? a : []);
}
function M(e, t, n) {
    let r = R(),
        i = r.find((t) => t.type === e);
    if (null == i || !(0, l.W)(i)) return;
    let a = i.games.find((e) => e.applicationId === t);
    if (null == a || n === a.comment) return;
    let o = b(g({}, a), { comment: n }),
        s = i.games.map((e) => (e.applicationId === t ? o : e)),
        c = w(r, b(g({}, i), { games: s }));
    u.Z.setPendingWidgets(c);
}
function k(e, t) {
    var n, r, i;
    let a,
        s = R(),
        c = s.find((t) => t.type === e),
        d = T(e);
    if (null != c && (0, l.W)(c) && (null != (r = null == (n = c.games) ? void 0 : n.length) ? r : 0) >= d) return;
    let f = {
            applicationId: t.applicationId,
            comment: t.comment,
            tags: t.tags,
        },
        _ = w(
            s,
            P(e, {
                games: (a = null != c && (0, l.W)(c) ? [...(null != (i = c.games) ? i : []), f] : [f]),
            }),
        );
    u.Z.setPendingWidgets(_), o.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function U(e, t) {
    let n = R(),
        r = n.find((t) => t.type === e);
    if (null == r || !(0, l.W)(r)) return;
    let i = w(n, P(e, { games: (null != r.games ? r.games : []).filter((e) => e.applicationId !== t) }));
    u.Z.setPendingWidgets(i);
}
function G(e) {
    let t = e.id !== e.type ? e.id : void 0;
    switch (e.type) {
        case a.l.CURRENT_GAMES:
        case a.l.FAVORITE_GAMES:
        case a.l.PLAYED_GAMES:
        case a.l.WANT_TO_PLAY_GAMES:
            let n = (e) => ({
                game_id: e.applicationId,
                comment: e.comment,
                tags: e.tags,
            });
            return {
                id: t,
                data: {
                    type: e.type,
                    games: e.games.map(n),
                },
            };
        case a.l.APPLICATION:
            return {
                id: t,
                data: {
                    type: e.type,
                    application_id: e.applicationId,
                },
            };
    }
}
async function B() {
    let e = d.Z.getPendingWidgets();
    if (null !== e)
        try {
            await u.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function Z() {
    try {
        await u.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function F(e) {
    let t = T(e.type);
    return e.games.length >= t;
}
function V(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function H(e, t) {
    return e.applicationId === t.applicationId && V(e.comment) === V(t.comment);
}
function Y(e, t) {
    if (e.applicationId !== t.applicationId) return !1;
    let n = V(e.tags),
        r = V(t.tags);
    return (
        (null === n && null === r) ||
        (null !== n && null !== r && n.length === r.length && n.every((e, t) => e === r[t]))
    );
}
function W(e, t) {
    return e.applicationId === t.applicationId;
}
function K(e, t, n) {
    let r;
    if (e.length !== t.length) return !1;
    switch (n) {
        case a.l.FAVORITE_GAMES:
            r = H;
            break;
        case a.l.CURRENT_GAMES:
            r = Y;
            break;
        case a.l.WANT_TO_PLAY_GAMES:
        case a.l.PLAYED_GAMES:
            r = W;
            break;
        default:
            throw Error("Unknown widget type: ".concat(n));
    }
    return e.every((e, n) => r(e, t[n]));
}
