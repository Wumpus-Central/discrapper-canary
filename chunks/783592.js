n.d(t, { A: () => S });
var i = n(311907),
    r = n(73153),
    s = n(294857),
    l = n(21119),
    a = n(290863),
    u = n(287809),
    o = n(652215);
let d = !1,
    c = {},
    h = {};
function I(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== f(e) || t;
        }),
        t
    );
}
function g(e) {
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
function f(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== o.$pd.CUSTOM_STATUS);
    if (0 === i.length) return g(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                let n = (0, s.A)(e);
                if (null == n) return g(t.id);
                let i = h[t.id];
                null != i && i.gameId !== n && g(t.id);
                let r = e.timestamps?.start ?? Date.now(),
                    l = { userId: t.id, activity: e, startedPlaying: r };
                return (
                    (c = { ...c, [n]: { ...c[n], [l.userId]: l } }),
                    (h = { ...h, [l.userId]: { gameId: n, startedPlaying: l.startedPlaying } }),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function A() {
    let e,
        t = !1;
    return (
        l.A.shouldFetch() ||
            d ||
            ((c = {}),
            (h = {}),
            (e = !1),
            a.A.getUserIds().forEach((t) => {
                let n = u.default.getUser(t);
                null != n && (e = f({ user: n, activities: a.A.getActivities(t) }) || e);
            }),
            (t = e)),
        (d = !l.A.shouldFetch()),
        t
    );
}
class E extends i.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        this.waitFor(a.A, l.A, u.default), this.syncWith([l.A], A);
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
let S = new E(r.h, {
    CONNECTION_OPEN: function () {
        (c = {}), (h = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                I(e.presences) && (i = !0);
            }),
            I(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (c = {}), (h = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => f(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return I(t);
    },
});
