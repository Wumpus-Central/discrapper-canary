n.d(t, {
    $b: () => M,
    Bu: () => D,
    ES: () => x,
    Eq: () => j,
    Gv: () => S,
    Hy: () => b,
    IM: () => L,
    M8: () => v,
    NY: () => F,
    RZ: () => R,
    kQ: () => k,
    mR: () => E,
    n$: () => w,
    ou: () => Z,
    pZ: () => B,
    qH: () => N,
    vI: () => O,
    ww: () => y,
    y8: () => P,
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
    p = n(388032);
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
                _(e, t, n[t]);
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
let E = (e) => f.Wk[e.type](e);
function b(e, t) {
    let { isCurrentUser: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === r.kp[e.type]
            ? p.intl.string(p.t.wiXdEa)
            : p.intl.format(p.t["zR1+0/"], { numGames: r.kp[e.type] });
}
function y(e) {
    var t;
    return (null == e || null == (t = e.widgets) ? void 0 : t.some(l.Wc)) === !0;
}
function O(e) {
    return f.S5.includes(e);
}
function v(e) {
    return f.uX.includes(e);
}
function S(e) {
    return e in r.kp ? r.kp[e] : 0;
}
function I() {
    var e;
    let t = s.default.getCurrentUser(),
        n = null != t ? c.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function T() {
    var e;
    return d.Z.hasPendingChanges() ? (null != (e = d.Z.getPendingWidgets()) ? e : []) : I();
}
function C(e) {
    var t;
    return null !=
        (t = T()
            .filter(l.Wc)
            .find((t) => t.type === e))
        ? t
        : null;
}
function A(e) {
    let t = T(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}
function N(e) {
    let t = T();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && u.Z.setPendingWidgets([e, ...t]);
}
function P(e) {
    let t = T().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    u.Z.setPendingWidgets(t);
}
function w(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = C(e);
    if (null == a) return;
    let o = a.games.find((e) => e.applicationId === t);
    if (null == o) return;
    let s = g(h({}, o), { tags: n }),
        c = a.games.map((e) => (e.applicationId === t ? s : e)),
        d = A(new l.zy(g(h({}, a), { games: c })));
    u.Z.setPendingWidgets(d);
}
function R(e, t, n) {
    let r = C(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    w(r.type, t, a.length > 0 ? a : []);
}
function D(e, t, n) {
    let r = C(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let a = g(h({}, i), { comment: n }),
        o = r.games.map((e) => (e.applicationId === t ? a : e)),
        s = A(new l.zy(g(h({}, r), { games: o })));
    u.Z.setPendingWidgets(s);
}
function x(e) {
    var t, n, r, i;
    let o,
        { widgetType: s, game: c, ignoreMaxGames: d = !1 } = e,
        f = C(s),
        p = S(s);
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
    let m = A(new l.zy(g(h({}, null != f ? f : { type: s }), { games: o })));
    u.Z.setPendingWidgets(m), a.Z.getDetectableGamesSupplemental([c.applicationId]);
}
function L(e, t) {
    if (e === t) return;
    let n = T();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let r = [...n],
        [i] = r.splice(e, 1);
    r.splice(t, 0, i), u.Z.setPendingWidgets(r);
}
function j(e, t, n) {
    let r = C(e);
    if (null == r || null == r.games || t === n) return;
    let i = [...r.games];
    if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
    let [a] = i.splice(t, 1);
    i.splice(n, 0, a);
    let o = A(new l.zy(g(h({}, r), { games: i })));
    u.Z.setPendingWidgets(o);
}
function M(e, t) {
    let n = C(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = A(new l.zy(g(h({}, n), { games: r })));
    u.Z.setPendingWidgets(i);
}
function k(e) {
    let t = S(e.type);
    return e.games.length >= t;
}
function U(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function G(e, t, n) {
    if (e.applicationId !== t.applicationId || (O(n) && U(e.comment) !== U(t.comment))) return !1;
    if (v(n)) {
        let n = U(e.tags),
            r = U(t.tags);
        if (
            (null === n) != (null === r) ||
            (null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t])))
        )
            return !1;
    }
    return !0;
}
function Z(e, t, n) {
    return e.length === t.length && e.every((e, r) => G(e, t[r], n));
}
function F(e) {
    return (null == e ? void 0 : e.themes) != null && e.themes.includes(o.J8.EROTIC);
}
function B(e) {
    return !F(e) && !r.Fb.has(e.id);
}
