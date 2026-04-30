"use strict";
n.d(t, { A: () => g });
var i = n(17928),
    r = n(228366),
    s = n(294857),
    a = n(427358),
    o = n(290863),
    l = n(287809),
    u = n(652215);
let c = !1,
    d = {},
    _ = {};
function f(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== p(e) || t;
        }),
        t
    );
}
function h(e) {
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
function p(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.$pd.CUSTOM_STATUS);
    if (0 === i.length) return h(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                let n = (0, s.A)(e);
                if (null == n) return h(t.id);
                let i = _[t.id];
                null != i && i.gameId !== n && h(t.id);
                let r = e.timestamps?.start ?? Date.now(),
                    a = { userId: t.id, activity: e, startedPlaying: r };
                return (
                    (d = { ...d, [n]: { ...d[n], [a.userId]: a } }),
                    (_ = { ..._, [a.userId]: { gameId: n, startedPlaying: a.startedPlaying } }),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function E() {
    let e,
        t = !1;
    return (
        a.A.shouldFetch() ||
            c ||
            ((d = {}),
            (_ = {}),
            (e = !1),
            o.A.getUserIds().forEach((t) => {
                let n = l.default.getUser(t);
                null != n && (e = p({ user: n, activities: o.A.getActivities(t) }) || e);
            }),
            (t = e)),
        (c = !a.A.shouldFetch()),
        t
    );
}
class m extends i.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(o.A, a.A, l.default), this.syncWith([a.A], E);
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
let g = new m(r.h, {
    CONNECTION_OPEN: function () {
        (d = {}), (_ = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                f(e.presences) && (i = !0);
            }),
            f(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (d = {}), (_ = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => p(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return f(t);
    },
});
