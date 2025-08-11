n.d(t, {
    ES: () => S,
    X6: () => N,
    qH: () => I,
    tk: () => C,
    vH: () => A,
    y8: () => T,
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(296009),
    i = n(224706),
    o = n(594174),
    a = n(621853),
    s = n(592183),
    l = n(224724),
    c = n(247397),
    u = n(925434),
    d = n(570911);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function g(e, t) {
    return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
        n = d.J6.filter((e) => !t.has(e)),
        i = { applicationId: m(n.length > 0 ? n : d.J6) };
    return (
        e === r.l.FAVORITE_GAMES && (i.comment = Math.random() > 0.5 ? m(u.x) : void 0),
        e === r.l.CURRENT_GAMES && (i.tags = Math.random() > 0.3 ? g(u.T, Math.floor(3 * Math.random()) + 1) : void 0),
        i
    );
}
function b(e) {
    return e.sort((e, t) => c.rR.indexOf(e.type) - c.rR.indexOf(t.type));
}
function y(e, t) {
    let n = { id: e };
    return e === r.l.FAVORITE_GAMES
        ? h(_({}, n), {
              type: r.l.FAVORITE_GAMES,
              game: t,
          })
        : h(_({}, n), {
              type: e,
              games: t,
          });
}
function O(e, t) {
    let n = e.filter((e) => e.type !== t.type);
    return b([t, ...n]);
}
function v() {
    var e, t;
    let n;
    if (l.Z.hasPendingChanges()) n = null != (e = l.Z.getPendingWidgets()) ? e : [];
    else {
        let e = o.default.getCurrentUser(),
            r = null != e ? a.Z.getUserProfile(e.id) : null;
        n = null != (t = null == r ? void 0 : r.widgets) ? t : [];
    }
    return n;
}
function I(e) {
    let t,
        n = v(),
        o = n.find((t) => t.type === e);
    if (null != o)
        if (e === r.l.FAVORITE_GAMES) t = E(e);
        else {
            let n = o.games || [];
            if (n.length >= c.Xe[e]) return;
            t = [...n, E(e)];
        }
    else t = e === r.l.FAVORITE_GAMES ? E(e) : [E(e)];
    let a = O(n, y(e, t));
    s.Z.setPendingWidgets(a);
    let l = [];
    e === r.l.FAVORITE_GAMES
        ? l.push(t.applicationId)
        : t.forEach((e) => {
              l.push(e.applicationId);
          }),
        i.Z.getDetectableGamesSupplemental(l);
}
function T(e) {
    let t = v().filter((t) => t.type !== e);
    s.Z.setPendingWidgets(t);
}
function S(e, t) {
    let n,
        o = v(),
        a = o.find((t) => t.type === e),
        l = c.Xe[e];
    if (null != a)
        if (e === r.l.FAVORITE_GAMES);
        else {
            var u;
            if (((null == (u = a.games) ? void 0 : u.length) || 0) >= l) return;
        }
    let d = { applicationId: t };
    n = null != a ? (e === r.l.FAVORITE_GAMES ? d : [...(a.games || []), d]) : e === r.l.FAVORITE_GAMES ? d : [d];
    let f = O(o, y(e, n));
    s.Z.setPendingWidgets(f), i.Z.getDetectableGamesSupplemental([t]);
}
function A(e) {
    let t,
        n = (e) => ({
            game_id: e.applicationId,
            comment: e.comment,
            tags: e.tags,
        });
    return (
        (t = e.type === r.l.FAVORITE_GAMES ? [n(e.game)] : e.games.map(n)),
        {
            data: {
                type: e.type,
                games: t,
            },
        }
    );
}
async function N() {
    let e = l.Z.getPendingWidgets();
    if (null !== e)
        try {
            await s.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function C() {
    try {
        await s.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
