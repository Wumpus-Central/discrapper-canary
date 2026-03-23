"use strict";
n.d(t, {
    Cr: () => T,
    F9: () => d,
    IO: () => y,
    JC: () => Y,
    K$: () => C,
    TP: () => f,
    Xi: () => V,
    YL: () => b,
    Yh: () => H,
    _3: () => u,
    a2: () => p,
    c1: () => v,
    fE: () => E,
    g5: () => R,
    hL: () => D,
    pU: () => c,
    t: () => m,
    uD: () => S,
    vS: () => _,
    vl: () => g,
    vv: () => N,
    xZ: () => A,
    xm: () => $,
});
var r = n(735438),
    i = n(412703),
    s = n(927813),
    a = n(403362),
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
function u(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return l(e, t);
}
function c(e) {
    return l(e, [i.n.PLAY_ON_DESKTOP]);
}
function d(e) {
    let t = l(e, [i.n.PLAY_ON_XBOX, i.n.PLAY_ON_PLAYSTATION]);
    return t?.[0];
}
function _(e) {
    let t = l(e, [i.n.PLAY_ACTIVITY]);
    return t?.[0];
}
function f(e) {
    let t = l(e, [i.n.PLAY_ACTIVITY, i.n.ACHIEVEMENT_IN_ACTIVITY]);
    return t?.[0];
}
function p(e) {
    let t = l(e, [i.n.STREAM_ON_DESKTOP]);
    return t?.[0];
}
function h(e) {
    return null != e.taskConfigV2.tasks[i.n.PLAY_ON_DESKTOP];
}
function m(e) {
    let { quest: t } = e;
    return h(t.config);
}
function E(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[i.n.STREAM_ON_DESKTOP];
}
function g(e) {
    return null != e.config.taskConfigV2.tasks[i.n.PLAY_ACTIVITY];
}
function A(e) {
    return null != e && m({ quest: e });
}
let I = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function T(e) {
    return Array.from(i.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let S = I([i.n.PLAY_ON_XBOX, i.n.PLAY_ON_PLAYSTATION]),
    y = I([i.n.WATCH_VIDEO]),
    v = I([i.n.WATCH_VIDEO_ON_MOBILE]),
    N = I([i.n.WATCH_VIDEO, i.n.WATCH_VIDEO_ON_MOBILE]),
    C = (e) => v(e) && !y(e);
function R(e) {
    return S(e);
}
let O = (e, t) => {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let r = new Date(n).valueOf();
    return !isNaN(r) && r > Date.now();
};
function b(e) {
    return null != e.userStatus && (O(e.userStatus, i.n.PLAY_ON_XBOX) || O(e.userStatus, i.n.PLAY_ON_PLAYSTATION));
}
function D(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function L(e) {
    return e?.type === i.n.PLAY_ON_DESKTOP;
}
let w = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    M = (e) => b(e) || o.A.isProgressingOnDesktop(e.id),
    x = (e, t) => {
        let n = e.userStatus?.progress?.[t.type]?.heartbeat?.lastBeatAt;
        if (null == n || !M(e)) return 0;
        let i = Date.now() - new Date(n).valueOf();
        return (0, r.floor)(i / s.A.Millis.SECOND, 2);
    },
    P = (e, t) => {
        let n = e.userStatus?.progress?.[t.type],
            r = n?.value ?? e.userStatus?.streamProgressSeconds ?? 0;
        if (N(e)) {
            let n = o.A.getOptimisticProgress(e.id, t.type);
            return null == n || n < r ? r : n;
        }
        return r + x(e, t);
    },
    k = 0.99,
    U = (e, t) => {
        let n = t.target;
        if (e.userStatus?.completedAt != null) return n;
        let i = Math.min(n * k, P(e, t));
        return Math.max((0, r.floor)(i, 2), 0);
    },
    G = (e) => {
        let { quest: t, taskType: n, includeTaskTypes: r = i.o.ALL } = e,
            a = t.config.taskConfigV2,
            o = n ?? Object.values(a.tasks).filter((e) => r.has(e.type))[0]?.type,
            l = a.tasks[o] ?? a.tasks[i.n.STREAM_ON_DESKTOP];
        if (null == l) throw Error(`No task with type ${n} found for quest ${t.id}!`);
        let u = l.target,
            c = U(t, l),
            d = Object.values(a.tasks).find(L),
            _ = d?.applications?.map((e) => e.id);
        return {
            progressSeconds: c,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / s.A.Seconds.MINUTE),
            percentComplete: w(u, c),
            taskType: o,
            applications: _,
        };
    },
    F = (e) => (i.o.ALL.has(e) ? e : null);
function V(e) {
    let t = e.taskConfigV2.tasks[i.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[i.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let B = (e) => {
        let { quest: t, includeTaskTypes: n = i.o.ALL } = e;
        for (let e of Object.values(t.userStatus?.progress ?? {})
            .sort((e, t) => {
                let n = e?.heartbeat?.lastBeatAt,
                    r = t?.heartbeat?.lastBeatAt;
                return null != n && null != r
                    ? new Date(n).valueOf() > new Date(r).valueOf()
                        ? -1
                        : 1
                    : null == n && null == r && e?.updatedAt != null && t?.updatedAt != null
                      ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf()
                          ? -1
                          : 1
                      : null != n && null == r
                        ? -1
                        : 1;
            })
            .filter(a.Vq)) {
            let r = F(e.eventName);
            if (null != r && n?.has(r)) return G({ quest: t, taskType: r, includeTaskTypes: n });
        }
        return G({ quest: t, includeTaskTypes: n });
    },
    H = (e, t) =>
        T(e)
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: i.n.STREAM_ON_DESKTOP,
              }
            : S(e)
              ? B({ quest: e, includeTaskTypes: t ?? (b(e) ? i.o.CONSOLE : i.o.ALL) })
              : N(e)
                ? G({ quest: e, taskType: V(e.config)?.type })
                : A(e)
                  ? G({ quest: e, taskType: i.n.PLAY_ON_DESKTOP })
                  : g(e)
                    ? G({ quest: e, taskType: i.n.PLAY_ACTIVITY })
                    : G({ quest: e, taskType: i.n.STREAM_ON_DESKTOP });
function j(e) {
    let t = e.taskConfigV2.tasks,
        n = t[i.n.ACHIEVEMENT_IN_ACTIVITY],
        r = t[i.n.ACHIEVEMENT_IN_GAME];
    return n ?? r ?? null;
}
function Y(e) {
    let t = j(e.config);
    if (null == t) return null;
    let n = e.userStatus?.progress?.[t.type]?.value ?? 0,
        r = w(t.target, n);
    return {
        title: t.messages.taskTitle,
        description: t.messages.taskDescription,
        target: t.target,
        progress: n,
        percentComplete: r,
    };
}
function W(e) {
    return K(e.targetSeconds - e.progressSeconds);
}
function K(e) {
    return { minutes: Math.max(0, Math.floor(e / 60)), seconds: Math.max(0, Math.floor(e % 60)) };
}
function $(e) {
    let t = W(e);
    return z(t.minutes, t.seconds);
}
function z(e, t) {
    return `${String(e).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}
