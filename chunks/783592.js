"use strict";
n.d(t, { A: () => C });
var r = n(311907),
    i = n(73153),
    s = n(294857),
    a = n(21119),
    o = n(290863),
    l = n(287809),
    u = n(652215);
let c = !1,
    d = {},
    _ = {};
function f() {
    (d = {}), (_ = {});
}
function p(e) {
    let { guilds: t, presences: n } = e,
        r = !1;
    return (
        t.forEach((e) => {
            E(e.presences) && (r = !0);
        }),
        E(n) && (r = !0),
        r
    );
}
function h() {
    (d = {}), (_ = {});
}
function m(e) {
    let { presences: t } = e;
    return E(t);
}
function E(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== T(e) || t;
        }),
        t
    );
}
function g(e) {
    let { updates: t } = e;
    return t.map((e) => T(e)).some((e) => e);
}
function A(e) {
    let t = _[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != d[n] && ((d = { ...d }), delete d[n][e], 0 === Object.values(d[n]).length && delete d[n]),
        (_ = { ..._ }),
        delete _[e],
        !0
    );
}
function I(e, t) {
    (d = { ...d, [e]: { ...d[e], [t.userId]: t } }),
        (_ = { ..._, [t.userId]: { gameId: e, startedPlaying: t.startedPlaying } });
}
function T(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let r = n.filter((e) => e.type !== u.$pd.CUSTOM_STATUS);
    if (0 === r.length) return A(t.id);
    let i = !1;
    return (
        r.forEach((e) => {
            S(e, t) && (i = !0);
        }),
        i
    );
}
function S(e, t) {
    let n = (0, s.A)(e);
    if (null == n) return A(t.id);
    let r = _[t.id];
    null != r && r.gameId !== n && A(t.id);
    let i = e.timestamps?.start ?? Date.now();
    return I(n, { userId: t.id, activity: e, startedPlaying: i }), !0;
}
function y() {
    (d = {}), (_ = {});
    let e = !1;
    return (
        o.A.getUserIds().forEach((t) => {
            let n = l.default.getUser(t);
            null != n && (e = T({ user: n, activities: o.A.getActivities(t) }) || e);
        }),
        e
    );
}
function v() {
    let e = !1;
    return a.A.shouldFetch() || c || (e = y()), (c = !a.A.shouldFetch()), e;
}
class N extends r.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(o.A, a.A, l.default), this.syncWith([a.A], v);
    }
    get games() {
        return d;
    }
    get usersPlaying() {
        return _;
    }
    get gameIds() {
        return Object.keys(d);
    }
    getNowPlaying(e) {
        return d[e];
    }
    getUserGame(e) {
        return _[e];
    }
}
let C = new N(i.h, {
    CONNECTION_OPEN: f,
    CONNECTION_OPEN_SUPPLEMENTAL: p,
    LOGOUT: h,
    PRESENCE_UPDATES: g,
    PRESENCES_REPLACE: m,
});
