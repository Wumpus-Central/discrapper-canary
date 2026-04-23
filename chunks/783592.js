n.d(t, { A: () => g });
var i = n(17928),
    a = n(228366),
    l = n(294857),
    o = n(427358),
    r = n(290863),
    s = n(287809),
    d = n(652215);
let c = !1,
    u = {},
    h = {};
function _(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== p(e) || t;
        }),
        t
    );
}
function f(e) {
    let t = h[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != u[n] && ((u = { ...u }), delete u[n][e], 0 === Object.values(u[n]).length && delete u[n]),
        (h = { ...h }),
        delete h[e],
        !0
    );
}
function p(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== d.$pd.CUSTOM_STATUS);
    if (0 === i.length) return f(t.id);
    let a = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                let n = (0, l.A)(e);
                if (null == n) return f(t.id);
                let i = h[t.id];
                null != i && i.gameId !== n && f(t.id);
                let a = e.timestamps?.start ?? Date.now(),
                    o = { userId: t.id, activity: e, startedPlaying: a };
                return (
                    (u = { ...u, [n]: { ...u[n], [o.userId]: o } }),
                    (h = { ...h, [o.userId]: { gameId: n, startedPlaying: o.startedPlaying } }),
                    !0
                );
            })(e, t) && (a = !0);
        }),
        a
    );
}
function A() {
    let e,
        t = !1;
    return (
        o.A.shouldFetch() ||
            c ||
            ((u = {}),
            (h = {}),
            (e = !1),
            r.A.getUserIds().forEach((t) => {
                let n = s.default.getUser(t);
                null != n && (e = p({ user: n, activities: r.A.getActivities(t) }) || e);
            }),
            (t = e)),
        (c = !o.A.shouldFetch()),
        t
    );
}
class m extends i.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(r.A, o.A, s.default), this.syncWith([o.A], A);
    }
    get games() {
        return u;
    }
    get usersPlaying() {
        return h;
    }
    get gameIds() {
        return Object.keys(u);
    }
    getNowPlaying(e) {
        return u[e];
    }
    getUserGame(e) {
        return h[e];
    }
}
let g = new m(a.h, {
    CONNECTION_OPEN: function () {
        (u = {}), (h = {});
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
        (u = {}), (h = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => p(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return _(t);
    },
});
