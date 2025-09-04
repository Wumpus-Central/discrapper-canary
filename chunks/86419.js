n.d(t, {
    $b: () => k,
    A5: () => b,
    Bu: () => j,
    ES: () => M,
    Gv: () => I,
    Hy: () => y,
    M8: () => v,
    RZ: () => L,
    X6: () => G,
    kQ: () => Z,
    n$: () => x,
    np: () => A,
    ou: () => W,
    qH: () => w,
    tk: () => B,
    vH: () => U,
    vI: () => O,
    y8: () => D,
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
    d = n(286957),
    f = n(925434),
    _ = n(570911),
    p = n(388032);
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
function m(e) {
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
let b = (e) => d.Wk[e]();
function y(e, t) {
    let { isCurrentUser: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === r.k[e.type] ? p.intl.string(p.t.wiXdER) : p.intl.format(p.t["zR1+09"], { numGames: r.k[e.type] });
}
function O(e) {
    return d.S5.includes(e);
}
function v(e) {
    return d.uX.includes(e);
}
function I(e) {
    return e in r.k ? r.k[e] : 0;
}
function T(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function S(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = _.J6.filter((e) => !t.has(e)),
        r = { applicationId: T(n.length > 0 ? n : _.J6) };
    return (
        O(e) && (r.comment = Math.random() > 0.5 ? T(f.x) : void 0),
        v(e) && (r.tags = Math.random() > 0.3 ? S(f.T, f.T.length) : void 0),
        r
    );
}
function C() {
    var e;
    let t = s.default.getCurrentUser(),
        n = null != t ? l.Z.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}
function N() {
    var e;
    return u.Z.hasPendingChanges() ? (null != (e = u.Z.getPendingWidgets()) ? e : []) : C();
}
function R(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = C().find((t) => t.type === e);
    return E(m({}, { id: null != (t = null == r ? void 0 : r.id) ? t : e }), {
        type: e,
        games: n,
    });
}
function P(e, t) {
    let n = e.findIndex((e) => e.id === t.id);
    if (-1 === n) return [...e, t];
    {
        let r = [...e];
        return (r[n] = t), r;
    }
}
function w(e) {
    let t = N();
    if (null != t.find((t) => t.type === e)) return;
    let n = R(e);
    c.Z.setPendingWidgets([...t, n]);
}
function D(e) {
    let t = N().filter((t) => t.type !== e);
    c.Z.setPendingWidgets(t);
}
function x(e, t, n) {
    let r = Object.values(i._).length;
    if (n.length > r) return;
    let a = N(),
        o = a.find((t) => t.type === e);
    if (null == o) return;
    let s = o.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let l = E(m({}, s), { tags: n }),
        u = o.games.map((e) => (e.applicationId === t ? l : e)),
        d = P(a, E(m({}, o), { games: u }));
    c.Z.setPendingWidgets(d);
}
function L(e, t, n) {
    let r = N().find((t) => t.type === e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    x(e, t, a.length > 0 ? a : []);
}
function j(e, t, n) {
    let r = N(),
        i = r.find((t) => t.type === e);
    if (null == i) return;
    let a = i.games.find((e) => e.applicationId === t);
    if (null == a || n === a.comment) return;
    let o = E(m({}, a), { comment: n }),
        s = i.games.map((e) => (e.applicationId === t ? o : e)),
        l = P(r, E(m({}, i), { games: s }));
    c.Z.setPendingWidgets(l);
}
function M(e, t) {
    var n, r, i;
    let a,
        s = N(),
        l = s.find((t) => t.type === e),
        u = I(e);
    if (null != l && (null != (r = null == (n = l.games) ? void 0 : n.length) ? r : 0) >= u) return;
    let d = {
            applicationId: t.applicationId,
            comment: t.comment,
            tags: t.tags,
        },
        f = P(s, R(e, (a = null != l ? [...(null != (i = l.games) ? i : []), d] : [d])));
    c.Z.setPendingWidgets(f), o.Z.getDetectableGamesSupplemental([t.applicationId]);
}
function k(e, t) {
    let n = N(),
        r = n.find((t) => t.type === e);
    if (null == r) return;
    let i = P(
        n,
        R(
            e,
            (null != r.games ? r.games : []).filter((e) => e.applicationId !== t),
        ),
    );
    c.Z.setPendingWidgets(i);
}
function U(e) {
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
async function G() {
    let e = u.Z.getPendingWidgets();
    if (null !== e)
        try {
            await c.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function B() {
    try {
        await c.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
function Z(e) {
    let t = r.k[e.type];
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
