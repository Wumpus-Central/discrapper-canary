n.d(t, {
    BS: () => T,
    Cr: () => O,
    F9: () => d,
    IO: () => v,
    JC: () => H,
    TP: () => p,
    YL: () => R,
    Yh: () => F,
    _3: () => c,
    a2: () => _,
    fE: () => g,
    g5: () => C,
    hL: () => w,
    pU: () => u,
    t: () => m,
    uD: () => A,
    vS: () => f,
    vl: () => E,
    vv: () => I,
    xZ: () => b,
    xm: () => K,
}),
    n(896048),
    n(65821),
    n(638769);
var r = n(735438),
    i = n(412703),
    a = n(927813),
    s = n(403362),
    o = n(859703);

function l(e, t) {
    if (null == e) return;
    let n = new Set();
    for (let r of t) {
        let t = e.config.taskConfigV2.tasks[r];
        if (null != t && "applications" in t && Array.isArray(t.applications))
            for (let e of t.applications) n.add(e.id);
    }
    return n.size > 0 ? Array.from(n) : void 0;
}

function c(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return l(e, t);
}

function u(e) {
    return l(e, [i.n.PLAY_ON_DESKTOP]);
}

function d(e) {
    let t = l(e, [i.n.PLAY_ON_XBOX, i.n.PLAY_ON_PLAYSTATION]);
    return null == t ? void 0 : t[0];
}

function f(e) {
    let t = l(e, [i.n.PLAY_ACTIVITY]);
    return null == t ? void 0 : t[0];
}

function p(e) {
    let t = l(e, [i.n.PLAY_ACTIVITY, i.n.ACHIEVEMENT_IN_ACTIVITY]);
    return null == t ? void 0 : t[0];
}

function _(e) {
    let t = l(e, [i.n.STREAM_ON_DESKTOP]);
    return null == t ? void 0 : t[0];
}

function h(e) {
    return null != e.taskConfigV2.tasks[i.n.PLAY_ON_DESKTOP];
}

function m(e) {
    let { quest: t } = e;
    return h(t.config);
}

function g(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[i.n.STREAM_ON_DESKTOP];
}

function E(e) {
    return null != e.config.taskConfigV2.tasks[i.n.PLAY_ACTIVITY];
}

function b(e) {
    return (
        null != e &&
        m({
            quest: e,
        })
    );
}
let y = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);

function O(e) {
    return Array.from(i.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let A = y([i.n.PLAY_ON_XBOX, i.n.PLAY_ON_PLAYSTATION]),
    v = y([i.n.WATCH_VIDEO]),
    S = y([i.n.WATCH_VIDEO_ON_MOBILE]),
    I = y([i.n.WATCH_VIDEO, i.n.WATCH_VIDEO_ON_MOBILE]),
    T = (e) => S(e) && !v(e);

function C(e) {
    return A(e);
}
let N = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};

function R(e) {
    return null != e.userStatus && (N(e.userStatus, i.n.PLAY_ON_XBOX) || N(e.userStatus, i.n.PLAY_ON_PLAYSTATION));
}

function w(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}

function P(e) {
    return (null == e ? void 0 : e.type) === i.n.PLAY_ON_DESKTOP;
}
let D = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    x = (e) => R(e) || o.A.isProgressingOnDesktop(e.id),
    L = (e, t) => {
        var n, i, s, o;
        let l =
            null == (o = e.userStatus) ||
            null == (s = o.progress) ||
            null == (i = s[t.type]) ||
            null == (n = i.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == l || !x(e)) return 0;
        let c = Date.now() - new Date(l).valueOf();
        return (0, r.floor)(c / a.A.Millis.SECOND, 2);
    },
    j = (e, t) => {
        var n, r, i, a, s;
        let l = null == (a = e.userStatus) || null == (i = a.progress) ? void 0 : i[t.type],
            c =
                null !=
                (n =
                    null != (r = null == l ? void 0 : l.value)
                        ? r
                        : null == (s = e.userStatus)
                          ? void 0
                          : s.streamProgressSeconds)
                    ? n
                    : 0;
        if (I(e)) {
            let n = o.A.getOptimisticProgress(e.id, t.type);
            return null == n || n < c ? c : n;
        }
        return c + L(e, t);
    },
    M = 0.99,
    k = (e, t) => {
        var n;
        let i = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return i;
        let a = Math.min(i * M, j(e, t));
        return Math.max((0, r.floor)(a, 2), 0);
    },
    U = (e) => {
        var t, n, r;
        let { quest: s, taskType: o, includeTaskTypes: l = i.o.ALL } = e,
            c = s.config.taskConfigV2,
            u = null != o ? o : null == (n = Object.values(c.tasks).filter((e) => l.has(e.type))[0]) ? void 0 : n.type,
            d = null != (t = c.tasks[u]) ? t : c.tasks[i.n.STREAM_ON_DESKTOP];
        if (null == d) throw Error("No task with type ".concat(o, " found for quest ").concat(s.id, "!"));
        let f = d.target,
            p = k(s, d),
            _ = Object.values(c.tasks).find(P),
            h = null == _ || null == (r = _.applications) ? void 0 : r.map((e) => e.id);
        return {
            progressSeconds: p,
            targetSeconds: f,
            targetMinutes: Math.ceil(f / a.A.Seconds.MINUTE),
            percentComplete: D(f, p),
            taskType: u,
            applications: h,
        };
    },
    G = (e) => (i.o.ALL.has(e) ? e : null),
    V = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: a = i.o.ALL } = e;
        for (let e of Object.values(null != (t = null == (n = r.userStatus) ? void 0 : n.progress) ? t : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e || null == (n = e.heartbeat) ? void 0 : n.lastBeatAt,
                    a = null == t || null == (r = t.heartbeat) ? void 0 : r.lastBeatAt;
                return null != i && null != a
                    ? new Date(i).valueOf() > new Date(a).valueOf()
                        ? -1
                        : 1
                    : null == i &&
                        null == a &&
                        (null == e ? void 0 : e.updatedAt) != null &&
                        (null == t ? void 0 : t.updatedAt) != null
                      ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf()
                          ? -1
                          : 1
                      : null != i && null == a
                        ? -1
                        : 1;
            })
            .filter(s.Vq)) {
            let t = G(e.eventName);
            if (null != t && (null == a ? void 0 : a.has(t)))
                return U({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: a,
                });
        }
        return U({
            quest: r,
            includeTaskTypes: a,
        });
    },
    F = (e, t) => {
        if (O(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: i.n.STREAM_ON_DESKTOP,
            };
        if (A(e))
            return V({
                quest: e,
                includeTaskTypes: null != t ? t : R(e) ? i.o.CONSOLE : i.o.ALL,
            });
        if (I(e))
            if (S(e))
                return U({
                    quest: e,
                    taskType: i.n.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return U({
                    quest: e,
                    taskType: i.n.WATCH_VIDEO,
                });
        return b(e)
            ? U({
                  quest: e,
                  taskType: i.n.PLAY_ON_DESKTOP,
              })
            : E(e)
              ? U({
                    quest: e,
                    taskType: i.n.PLAY_ACTIVITY,
                })
              : U({
                    quest: e,
                    taskType: i.n.STREAM_ON_DESKTOP,
                });
    };

function B(e) {
    var t;
    let n = e.taskConfigV2.tasks,
        r = n[i.n.ACHIEVEMENT_IN_ACTIVITY],
        a = n[i.n.ACHIEVEMENT_IN_GAME];
    return null != (t = null != r ? r : a) ? t : null;
}

function H(e) {
    var t, n, r, i;
    let a = B(e.config);
    if (null == a) return null;
    let s =
            null !=
            (t = null == (i = e.userStatus) || null == (r = i.progress) || null == (n = r[a.type]) ? void 0 : n.value)
                ? t
                : 0,
        o = D(a.target, s);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: s,
        percentComplete: o,
    };
}

function Y(e) {
    return W(e.targetSeconds - e.progressSeconds);
}

function W(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}

function K(e) {
    let t = Y(e);
    return z(t.minutes, t.seconds);
}

function z(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
