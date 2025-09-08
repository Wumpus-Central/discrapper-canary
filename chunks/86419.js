n.d(t, {
    $b: () => U,
    Bu: () => M,
    ES: () => k,
    Gv: () => T,
    Hy: () => O,
    M8: () => I,
    RZ: () => j,
    X6: () => G,
    kQ: () => Z,
    mR: () => y,
    n$: () => L,
    np: () => C,
    ou: () => W,
    qH: () => D,
    tk: () => B,
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
function P(e) {
    return R().find((t) => t.type === e);
}
function w(e) {
    let t = R(),
        n = t.findIndex((t) => t.id === e.id);
    if (-1 === n) return [...t, e];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}
function D(e, t) {
    let n = R();
    null == n.find((t) => t.type === e) && u.Z.setPendingWidgets([...n, t]);
}
function x(e) {
    let t = R().filter((t) => t.type !== e);
    u.Z.setPendingWidgets(t);
}
function L(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = P(e);
    if (null == a) return;
    let o = a.games.find((e) => e.applicationId === t);
    if (null == o) return;
    let s = b(g({}, o), { tags: n }),
        c = a.games.map((e) => (e.applicationId === t ? s : e)),
        d = w(new l.zy(b(g({}, a), { games: c })));
    u.Z.setPendingWidgets(d);
}
function j(e, t, n) {
    let r = P(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    L(r.type, t, a.length > 0 ? a : []);
}
function M(e, t, n) {
    let r = P(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let a = b(g({}, i), { comment: n }),
        o = r.games.map((e) => (e.applicationId === t ? a : e)),
        s = w(new l.zy(b(g({}, r), { games: o })));
    u.Z.setPendingWidgets(s);
}
function k(e, t) {
    var n, r, i;
    let a,
        s = P(e),
        c = T(e);
    if (null != s && (null != (r = null == (n = s.games) ? void 0 : n.length) ? r : 0) >= c) return;
    let d = {
        applicationId: t.applicationId,
        comment: t.comment,
        tags: t.tags,
    };
    a = null != s ? [...(null != (i = s.games) ? i : []), d] : [d];
    let f = w(new l.zy(b(g({}, null != s ? s : { type: e }), { games: a })));
    u.Z.setPendingWidgets(f), o.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function U(e, t) {
    let n = P(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = w(new l.zy(b(g({}, n), { games: r })));
    u.Z.setPendingWidgets(i);
}
async function G() {
    let e = d.Z.getPendingWidgets();
    if (null !== e)
        try {
            await u.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function B() {
    try {
        await u.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function Z(e) {
    let t = T(e.type);
    return e.games.length >= t;
}
function F(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function V(e, t) {
    return e.applicationId === t.applicationId && F(e.comment) === F(t.comment);
}
function H(e, t) {
    if (e.applicationId !== t.applicationId) return !1;
    let n = F(e.tags),
        r = F(t.tags);
    return (
        (null === n && null === r) ||
        (null !== n && null !== r && n.length === r.length && n.every((e, t) => e === r[t]))
    );
}
function Y(e, t) {
    return e.applicationId === t.applicationId;
}
function W(e, t, n) {
    let r;
    if (e.length !== t.length) return !1;
    switch (n) {
        case a.l.FAVORITE_GAMES:
            r = V;
            break;
        case a.l.CURRENT_GAMES:
            r = H;
            break;
        case a.l.WANT_TO_PLAY_GAMES:
        case a.l.PLAYED_GAMES:
            r = Y;
            break;
        default:
            throw Error("Unknown widget type: ".concat(n));
    }
    return e.every((e, n) => r(e, t[n]));
}
