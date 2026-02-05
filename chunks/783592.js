n.d(t, { A: () => m });
var l = n(311907),
    i = n(73153),
    s = n(294857),
    r = n(21119),
    a = n(290863),
    u = n(287809),
    o = n(652215);
let d = !1,
    c = {},
    h = {};
function g(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== E(e) || t;
        }),
        t
    );
}
function I(e) {
    let t = h[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != c[n] && ((c = { ...c }), delete c[n][e], 0 === Object.values(c[n]).length && delete c[n]),
        (h = { ...h }),
        delete h[e],
        !0
    );
}
function E(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let l = n.filter((e) => e.type !== o.$pd.CUSTOM_STATUS);
    if (0 === l.length) return I(t.id);
    let i = !1;
    return (
        l.forEach((e) => {
            (function (e, t) {
                let n = (0, s.A)(e);
                if (null == n) return I(t.id);
                let l = h[t.id];
                null != l && l.gameId !== n && I(t.id);
                let i = e.timestamps?.start ?? Date.now(),
                    r = { userId: t.id, activity: e, startedPlaying: i };
                return (
                    (c = { ...c, [n]: { ...c[n], [r.userId]: r } }),
                    (h = { ...h, [r.userId]: { gameId: n, startedPlaying: r.startedPlaying } }),
                    !0
                );
            })(e, t) && (i = !0);
        }),
        i
    );
}
function A() {
    let e,
        t = !1;
    return (
        r.A.shouldFetch() ||
            d ||
            ((c = {}),
            (h = {}),
            (e = !1),
            a.A.getUserIds().forEach((t) => {
                let n = u.default.getUser(t);
                null != n && (e = E({ user: n, activities: a.A.getActivities(t) }) || e);
            }),
            (t = e)),
        (d = !r.A.shouldFetch()),
        t
    );
}
class f extends l.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(a.A, r.A, u.default), this.syncWith([r.A], A);
    }
    get games() {
        return c;
    }
    get usersPlaying() {
        return h;
    }
    get gameIds() {
        return Object.keys(c);
    }
    getNowPlaying(e) {
        return c[e];
    }
    getUserGame(e) {
        return h[e];
    }
}
let m = new f(i.h, {
    CONNECTION_OPEN: function () {
        (c = {}), (h = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            l = !1;
        return (
            t.forEach((e) => {
                g(e.presences) && (l = !0);
            }),
            g(n) && (l = !0),
            l
        );
    },
    LOGOUT: function () {
        (c = {}), (h = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => E(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return g(t);
    },
});
