n.d(t, {
    $b: () => Z,
    Bu: () => M,
    ES: () => k,
    Eq: () => G,
    Gv: () => I,
    Hy: () => y,
    IM: () => U,
    M8: () => S,
    RZ: () => j,
    X6: () => B,
    kQ: () => V,
    mR: () => b,
    n$: () => L,
    np: () => A,
    ou: () => W,
    qH: () => w,
    tk: () => F,
    vI: () => v,
    ww: () => O,
    y8: () => x,
}),
    n(388685),
    n(642613);
var r = n(624238),
    i = n(379405),
    a = n(224706),
    o = n(594174),
    s = n(836197),
    l = n(621853),
    c = n(592183),
    u = n(224724),
    d = n(247397),
    f = n(925434),
    p = n(570911),
    _ = n(388032);
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = (e) => d.Wk[e.type](e);
function y(e, t) {
    let { isCurrentUser: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === r.kp[e.type]
            ? _.intl.string(_.t.wiXdEa)
            : _.intl.format(_.t["zR1+0/"], { numGames: r.kp[e.type] });
}
function O(e) {
    var t;
    return (null == e || null == (t = e.widgets) ? void 0 : t.some(s.Wc)) === !0;
}
function v(e) {
    return d.S5.includes(e);
}
function S(e) {
    return d.uX.includes(e);
}
function I(e) {
    return e in r.kp ? r.kp[e] : 0;
}
function T(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function C(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = p.J6.filter((e) => !t.has(e)),
        r = { applicationId: T(n.length > 0 ? n : p.J6) };
    return (
        v(e) && (r.comment = Math.random() > 0.5 ? T(f.x) : void 0),
        S(e) && (r.tags = Math.random() > 0.3 ? C(f.T, f.T.length) : void 0),
        r
    );
}
function N() {
    var e;
    let t = o.default.getCurrentUser(),
        n = null != t ? l.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function P() {
    var e;
    return u.Z.hasPendingChanges() ? (null != (e = u.Z.getPendingWidgets()) ? e : []) : N();
}
function R(e) {
    return P().find((t) => t.type === e);
}
function D(e) {
    let t = P(),
        n = t.findIndex((t) => t.type === e.type);
    if (-1 === n) return [...t, e];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = P();
    null == r.find((t) => t.type === e) && (n ? c.Z.setPendingWidgets([t, ...r]) : c.Z.setPendingWidgets([...r, t]));
}
function x(e) {
    let t = P().filter((t) => t.type !== e);
    c.Z.setPendingWidgets(t);
}
function L(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = R(e);
    if (null == a) return;
    let o = a.games.find((e) => e.applicationId === t);
    if (null == o) return;
    let l = E(h({}, o), { tags: n }),
        u = a.games.map((e) => (e.applicationId === t ? l : e)),
        d = D(new s.zy(E(h({}, a), { games: u })));
    c.Z.setPendingWidgets(d);
}
function j(e, t, n) {
    let r = R(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    L(r.type, t, a.length > 0 ? a : []);
}
function M(e, t, n) {
    let r = R(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let a = E(h({}, i), { comment: n }),
        o = r.games.map((e) => (e.applicationId === t ? a : e)),
        l = D(new s.zy(E(h({}, r), { games: o })));
    c.Z.setPendingWidgets(l);
}
function k(e, t) {
    var n, r, i, o;
    let l,
        u = R(e),
        d = I(e);
    if (
        null != u &&
        ((null != (r = null == (n = u.games) ? void 0 : n.length) ? r : 0) >= d ||
            (null != (i = u.games) ? i : []).some((e) => e.applicationId === t.applicationId))
    )
        return;
    let f = {
        applicationId: t.applicationId,
        comment: t.comment,
        tags: t.tags,
    };
    l = null != u ? [...(null != (o = u.games) ? o : []), f] : [f];
    let p = D(new s.zy(E(h({}, null != u ? u : { type: e }), { games: l })));
    c.Z.setPendingWidgets(p), a.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function U(e, t) {
    if (e === t) return;
    let n = P();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let r = [...n],
        [i] = r.splice(e, 1);
    r.splice(t, 0, i), c.Z.setPendingWidgets(r);
}
function G(e, t, n) {
    let r = R(e);
    if (null == r || null == r.games || t === n) return;
    let i = [...r.games];
    if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
    let [a] = i.splice(t, 1);
    i.splice(n, 0, a);
    let o = D(new s.zy(E(h({}, r), { games: i })));
    c.Z.setPendingWidgets(o);
}
function Z(e, t) {
    let n = R(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = D(new s.zy(E(h({}, n), { games: r })));
    c.Z.setPendingWidgets(i);
}
async function B() {
    let e = u.Z.getPendingWidgets();
    if (null !== e)
        try {
            await c.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function F() {
    try {
        await c.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function V(e) {
    let t = I(e.type);
    return e.games.length >= t;
}
function H(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function Y(e, t, n) {
    if (e.applicationId !== t.applicationId || (v(n) && H(e.comment) !== H(t.comment))) return !1;
    if (S(n)) {
        let n = H(e.tags),
            r = H(t.tags);
        if (
            (null === n) != (null === r) ||
            (null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t])))
        )
            return !1;
    }
    return !0;
}
function W(e, t, n) {
    return e.length === t.length && e.every((e, r) => Y(e, t[r], n));
}
