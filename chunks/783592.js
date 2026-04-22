"use strict";
n.d(t, { A: () => g });
var i = n(311907),
    r = n(73153),
    l = n(294857),
    a = n(21119),
    s = n(290863),
    o = n(287809),
    c = n(652215);
let u = !1,
    d = {},
    h = {};
function _(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== A(e) || t;
        }),
        t
    );
}
function p(e) {
    let t = h[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != d[n] && ((d = { ...d }), delete d[n][e], 0 === Object.values(d[n]).length && delete d[n]),
        (h = { ...h }),
        delete h[e],
        !0
    );
}
function A(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== c.$pd.CUSTOM_STATUS);
    if (0 === i.length) return p(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                let n = (0, l.A)(e);
                if (null == n) return p(t.id);
                let i = h[t.id];
                null != i && i.gameId !== n && p(t.id);
                let r = e.timestamps?.start ?? Date.now(),
                    a = { userId: t.id, activity: e, startedPlaying: r };
                return (
                    (d = { ...d, [n]: { ...d[n], [a.userId]: a } }),
                    (h = { ...h, [a.userId]: { gameId: n, startedPlaying: a.startedPlaying } }),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function f() {
    let e,
        t = !1;
    return (
        a.A.shouldFetch() ||
            u ||
            ((d = {}),
            (h = {}),
            (e = !1),
            s.A.getUserIds().forEach((t) => {
                let n = o.default.getUser(t);
                null != n && (e = A({ user: n, activities: s.A.getActivities(t) }) || e);
            }),
            (t = e)),
        (u = !a.A.shouldFetch()),
        t
    );
}
class m extends i.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(s.A, a.A, o.default), this.syncWith([a.A], f);
    }
    get games() {
        return d;
    }
    get usersPlaying() {
        return h;
    }
    get gameIds() {
        return Object.keys(d);
    }
    getNowPlaying(e) {
        return d[e];
    }
    getUserGame(e) {
        return h[e];
    }
}
let g = new m(r.h, {
    CONNECTION_OPEN: function () {
        (d = {}), (h = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                _(e.presences) && (i = !0);
            }),
            _(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (d = {}), (h = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => A(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return _(t);
    },
});
