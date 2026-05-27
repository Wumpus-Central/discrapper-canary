n.d(e, { A: () => T });
var i = n(17928),
    l = n(228366),
    a = n(294857),
    r = n(427358),
    o = n(290863),
    u = n(287809),
    s = n(652215);
let d = !1,
    c = {},
    f = {};
function A(t) {
    let e = !1;
    return (
        t.forEach((t) => {
            e = !1 !== E(t) || e;
        }),
        e
    );
}
function _(t) {
    let e = f[t];
    if (null == e) return !1;
    let n = e.gameId;
    return (
        null != c[n] && ((c = { ...c }), delete c[n][t], 0 === Object.values(c[n]).length && delete c[n]),
        (f = { ...f }),
        delete f[t],
        !0
    );
}
function E(t) {
    let { user: e, activities: n } = t;
    if (null == e) return !1;
    let i = n.filter((t) => t.type !== s.$pd.CUSTOM_STATUS);
    if (0 === i.length) return _(e.id);
    let l = !1;
    return (
        i.forEach((t) => {
            (function (t, e) {
                let n = (0, a.A)(t);
                if (null == n) return _(e.id);
                let i = f[e.id];
                null != i && i.gameId !== n && _(e.id);
                let l = t.timestamps?.start ?? Date.now(),
                    r = { userId: e.id, activity: t, startedPlaying: l };
                return (
                    (c = { ...c, [n]: { ...c[n], [r.userId]: r } }),
                    (f = { ...f, [r.userId]: { gameId: n, startedPlaying: r.startedPlaying } }),
                    !0
                );
            })(t, e) && (l = !0);
        }),
        l
    );
}
function g() {
    let t,
        e = !1;
    return (
        r.A.shouldFetch() ||
            d ||
            ((c = {}),
            (f = {}),
            (t = !1),
            o.A.getUserIds().forEach((e) => {
                let n = u.default.getUser(e);
                null != n && (t = E({ user: n, activities: o.A.getActivities(e) }) || t);
            }),
            (e = t)),
        (d = !r.A.shouldFetch()),
        e
    );
}
class N extends i.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(o.A, r.A, u.default), this.syncWith([r.A], g);
    }
    get games() {
        return c;
    }
    get usersPlaying() {
        return f;
    }
    get gameIds() {
        return Object.keys(c);
    }
    getNowPlaying(t) {
        return c[t];
    }
    getUserGame(t) {
        return f[t];
    }
}
let T = new N(l.h, {
    CONNECTION_OPEN: function () {
        (c = {}), (f = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (t) {
        let { guilds: e, presences: n } = t,
            i = !1;
        return (
            e.forEach((t) => {
                A(t.presences) && (i = !0);
            }),
            A(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (c = {}), (f = {});
    },
    PRESENCE_UPDATES: function (t) {
        let { updates: e } = t;
        return e.map((t) => E(t)).some((t) => t);
    },
    PRESENCES_REPLACE: function (t) {
        let { presences: e } = t;
        return A(e);
    },
});
