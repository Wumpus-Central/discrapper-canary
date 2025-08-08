n.d(t, {
    ES: () => I,
    X6: () => S,
    qH: () => v,
    tk: () => A,
    vH: () => T,
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
function v(e) {
    var t, n;
    let u, d;
    if (l.Z.hasPendingChanges()) u = null != (t = l.Z.getPendingWidgets()) ? t : [];
    else {
        let e = o.default.getCurrentUser(),
            t = null != e ? a.Z.getUserProfile(e.id) : null;
        u = null != (n = null == t ? void 0 : t.widgets) ? n : [];
    }
    let f = u.find((t) => t.type === e);
    if (null != f)
        if (e === r.l.FAVORITE_GAMES) d = E(e);
        else {
            let t = f.games || [];
            if (t.length >= c.Xe[e]) return;
            d = [...t, E(e)];
        }
    else d = e === r.l.FAVORITE_GAMES ? E(e) : [E(e)];
    let _ = O(u, y(e, d));
    s.Z.setPendingWidgets(_);
    let p = [];
    e === r.l.FAVORITE_GAMES
        ? p.push(d.applicationId)
        : d.forEach((e) => {
              p.push(e.applicationId);
          }),
        i.Z.getDetectableGamesSupplemental(p);
}
function I(e, t) {
    var n, u, d;
    let f, _;
    if (l.Z.hasPendingChanges()) f = null != (n = l.Z.getPendingWidgets()) ? n : [];
    else {
        let e = o.default.getCurrentUser(),
            t = null != e ? a.Z.getUserProfile(e.id) : null;
        f = null != (u = null == t ? void 0 : t.widgets) ? u : [];
    }
    let p = f.find((t) => t.type === e),
        h = c.Xe[e];
    if (null != p) {
        if (e === r.l.FAVORITE_GAMES);
        else if (((null == (d = p.games) ? void 0 : d.length) || 0) >= h) return;
    }
    let m = { applicationId: t };
    _ = null != p ? (e === r.l.FAVORITE_GAMES ? m : [...(p.games || []), m]) : e === r.l.FAVORITE_GAMES ? m : [m];
    let g = O(f, y(e, _));
    s.Z.setPendingWidgets(g), i.Z.getDetectableGamesSupplemental([t]);
}
function T(e) {
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
async function S() {
    let e = l.Z.getPendingWidgets();
    if (null !== e)
        try {
            await s.Z.savePendingWidgets(e);
        } catch (e) {
            console.error("Failed to save sample widgets:", e);
        }
}
async function A() {
    try {
        await s.Z.savePendingWidgets([]);
    } catch (e) {
        console.error("Failed to clear saved widgets", e);
    }
}
