"use strict";
n.d(t, { A: () => p });
var i = n(17928),
    r = n(228366),
    a = n(294857),
    s = n(427358),
    l = n(290863),
    o = n(287809),
    d = n(652215);
let c = !1,
    u = {},
    _ = {};
function E(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== h(e) || t;
        }),
        t
    );
}
function A(e) {
    let t = _[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != u[n] && ((u = { ...u }), delete u[n][e], 0 === Object.values(u[n]).length && delete u[n]),
        (_ = { ..._ }),
        delete _[e],
        !0
    );
}
function h(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== d.$pd.CUSTOM_STATUS);
    if (0 === i.length) return A(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                let n = (0, a.A)(e);
                if (null == n) return A(t.id);
                let i = _[t.id];
                null != i && i.gameId !== n && A(t.id);
                let r = e.timestamps?.start ?? Date.now(),
                    s = { userId: t.id, activity: e, startedPlaying: r };
                return (
                    (u = { ...u, [n]: { ...u[n], [s.userId]: s } }),
                    (_ = { ..._, [s.userId]: { gameId: n, startedPlaying: s.startedPlaying } }),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function I() {
    let e,
        t = !1;
    return (
        s.A.shouldFetch() ||
            c ||
            ((u = {}),
            (_ = {}),
            (e = !1),
            l.A.getUserIds().forEach((t) => {
                let n = o.default.getUser(t);
                null != n && (e = h({ user: n, activities: l.A.getActivities(t) }) || e);
            }),
            (t = e)),
        (c = !s.A.shouldFetch()),
        t
    );
}
class f extends i.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(l.A, s.A, o.default), this.syncWith([s.A], I);
    }
    get games() {
        return u;
    }
    get usersPlaying() {
        return _;
    }
    get gameIds() {
        return Object.keys(u);
    }
    getNowPlaying(e) {
        return u[e];
    }
    getUserGame(e) {
        return _[e];
    }
}
let p = new f(r.h, {
    CONNECTION_OPEN: function () {
        (u = {}), (_ = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                E(e.presences) && (i = !0);
            }),
            E(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (u = {}), (_ = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => h(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return E(t);
    },
});
