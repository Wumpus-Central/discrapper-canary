n.d(e, { A: () => I });
var i = n(350835),
    l = n(17928),
    a = n(73153),
    r = n(294857),
    o = n(427358),
    u = n(290863),
    s = n(287809);
let d = !1,
    c = {},
    A = {};
function f(t) {
    let e = !1;
    return (
        t.forEach((t) => {
            e = !1 !== E(t) || e;
        }),
        e
    );
}
function _(t) {
    let e = A[t];
    if (null == e) return !1;
    let n = e.gameId;
    return (
        null != c[n] && ((c = { ...c }), delete c[n][t], 0 === Object.values(c[n]).length && delete c[n]),
        (A = { ...A }),
        delete A[t],
        !0
    );
}
function E(t) {
    let { user: e, activities: n } = t;
    if (null == e) return !1;
    let l = n.filter((t) => t.type !== i.$.CUSTOM_STATUS);
    if (0 === l.length) return _(e.id);
    let a = !1;
    return (
        l.forEach((t) => {
            (function (t, e) {
                let n = (0, r.A)(t);
                if (null == n) return _(e.id);
                let i = A[e.id];
                null != i && i.gameId !== n && _(e.id);
                let l = t.timestamps?.start ?? Date.now(),
                    a = { userId: e.id, activity: t, startedPlaying: l };
                return (
                    (c = { ...c, [n]: { ...c[n], [a.userId]: a } }),
                    (A = { ...A, [a.userId]: { gameId: n, startedPlaying: a.startedPlaying } }),
                    !0
                );
            })(t, e) && (a = !0);
        }),
        a
    );
}
function N() {
    let t,
        e = !1;
    return (
        o.A.shouldFetch() ||
            d ||
            ((c = {}),
            (A = {}),
            (t = !1),
            u.A.getUserIds().forEach((e) => {
                let n = s.default.getUser(e);
                null != n && (t = E({ user: n, activities: u.A.getActivities(e) }) || t);
            }),
            (e = t)),
        (d = !o.A.shouldFetch()),
        e
    );
}
class T extends l.Ay.Store {
    static displayName = "NowPlayingStore";
    initialize() {
        (this.waitFor(u.A, o.A, s.default), this.syncWith([o.A], N));
    }
    get games() {
        return c;
    }
    get usersPlaying() {
        return A;
    }
    get gameIds() {
        return Object.keys(c);
    }
    getNowPlaying(t) {
        return c[t];
    }
    getUserGame(t) {
        return A[t];
    }
}
let I = new T(a.h, {
    CONNECTION_OPEN: function () {
        ((c = {}), (A = {}));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (t) {
        let { guilds: e, presences: n } = t,
            i = !1;
        return (
            e.forEach((t) => {
                f(t.presences) && (i = !0);
            }),
            f(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        ((c = {}), (A = {}));
    },
    PRESENCE_UPDATES: function (t) {
        let { updates: e } = t;
        return e.map((t) => E(t)).some((t) => t);
    },
    PRESENCES_REPLACE: function (t) {
        let { presences: e } = t;
        return f(e);
    },
});
