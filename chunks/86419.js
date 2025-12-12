n.d(t, {
    $b: () => F,
    Bu: () => k,
    ES: () => U,
    Eq: () => Z,
    Gv: () => T,
    Hy: () => O,
    IM: () => G,
    M8: () => I,
    NY: () => z,
    RZ: () => M,
    X6: () => B,
    kQ: () => H,
    mR: () => y,
    n$: () => j,
    np: () => N,
    ou: () => K,
    pZ: () => q,
    qH: () => x,
    tk: () => V,
    vI: () => S,
    ww: () => v,
    y8: () => L,
}),
    n(388685),
    n(642613);
var r = n(624238),
    i = n(379405),
    a = n(224706),
    o = n(189451),
    s = n(594174),
    l = n(836197),
    c = n(621853),
    u = n(592183),
    d = n(224724),
    f = n(247397),
    p = n(925434),
    _ = n(570911),
    m = n(388032);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
            ? m.intl.string(m.t.wiXdEa)
            : m.intl.format(m.t["zR1+0/"], { numGames: r.kp[e.type] });
}
function v(e) {
    var t;
    return (null == e || null == (t = e.widgets) ? void 0 : t.some(l.Wc)) === !0;
}
function S(e) {
    return f.S5.includes(e);
}
function I(e) {
    return f.uX.includes(e);
}
function T(e) {
    return e in r.kp ? r.kp[e] : 0;
}
function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function A(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = _.J6.filter((e) => !t.has(e)),
        r = { applicationId: C(n.length > 0 ? n : _.J6) };
    return (
        S(e) && (r.comment = Math.random() > 0.5 ? C(p.x) : void 0),
        I(e) && (r.tags = Math.random() > 0.3 ? A(p.T, p.T.length) : void 0),
        r
    );
}
function P() {
    var e;
    let t = s.default.getCurrentUser(),
        n = null != t ? c.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function R() {
    var e;
    return d.Z.hasPendingChanges() ? (null != (e = d.Z.getPendingWidgets()) ? e : []) : P();
}
function w(e) {
    return R().find((t) => t.type === e);
}
function D(e) {
    let t = R(),
        n = t.findIndex((t) => t.type === e.type);
    if (-1 === n) return [e, ...t];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}
function x(e, t) {
    let n = R();
    null == n.find((t) => t.type === e) && u.Z.setPendingWidgets([t, ...n]);
}
function L(e) {
    let t = R().filter((t) => t.type !== e);
    u.Z.setPendingWidgets(t);
}
function j(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = w(e);
    if (null == a) return;
    let o = a.games.find((e) => e.applicationId === t);
    if (null == o) return;
    let s = b(g({}, o), { tags: n }),
        c = a.games.map((e) => (e.applicationId === t ? s : e)),
        d = D(new l.zy(b(g({}, a), { games: c })));
    u.Z.setPendingWidgets(d);
}
function M(e, t, n) {
    let r = w(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    j(r.type, t, a.length > 0 ? a : []);
}
function k(e, t, n) {
    let r = w(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let a = b(g({}, i), { comment: n }),
        o = r.games.map((e) => (e.applicationId === t ? a : e)),
        s = D(new l.zy(b(g({}, r), { games: o })));
    u.Z.setPendingWidgets(s);
}
function U(e) {
    var t, n, r, i;
    let o,
        { widgetType: s, game: c, ignoreMaxGames: d = !1 } = e,
        f = w(s),
        p = T(s);
    if (null != f) {
        let e = null != (n = null == (t = f.games) ? void 0 : t.length) ? n : 0;
        if ((!d && e >= p) || (null != (r = f.games) ? r : []).some((e) => e.applicationId === c.applicationId)) return;
    }
    let _ = {
        applicationId: c.applicationId,
        comment: c.comment,
        tags: c.tags,
    };
    o = null != f ? [_, ...(null != (i = f.games) ? i : [])] : [_];
    let m = D(new l.zy(b(g({}, null != f ? f : { type: s }), { games: o })));
    u.Z.setPendingWidgets(m), a.Z.getDetectableGamesSupplemental([c.applicationId]);
}
function G(e, t) {
    if (e === t) return;
    let n = R();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let r = [...n],
        [i] = r.splice(e, 1);
    r.splice(t, 0, i), u.Z.setPendingWidgets(r);
}
function Z(e, t, n) {
    let r = w(e);
    if (null == r || null == r.games || t === n) return;
    let i = [...r.games];
    if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
    let [a] = i.splice(t, 1);
    i.splice(n, 0, a);
    let o = D(new l.zy(b(g({}, r), { games: i })));
    u.Z.setPendingWidgets(o);
}
function F(e, t) {
    let n = w(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = D(new l.zy(b(g({}, n), { games: r })));
    u.Z.setPendingWidgets(i);
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
async function V() {
    try {
        await u.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function H(e) {
    let t = T(e.type);
    return e.games.length >= t;
}
function Y(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function W(e, t, n) {
    if (e.applicationId !== t.applicationId || (S(n) && Y(e.comment) !== Y(t.comment))) return !1;
    if (I(n)) {
        let n = Y(e.tags),
            r = Y(t.tags);
        if (
            (null === n) != (null === r) ||
            (null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t])))
        )
            return !1;
    }
    return !0;
}
function K(e, t, n) {
    return e.length === t.length && e.every((e, r) => W(e, t[r], n));
}
function z(e) {
    return (null == e ? void 0 : e.themes) != null && e.themes.includes(o.J8.EROTIC);
}
function q(e) {
    return !z(e) && !r.Fb.has(e.id);
}
