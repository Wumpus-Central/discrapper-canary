"use strict";
n.d(t, {
    Cr: () => S,
    F9: () => d,
    IO: () => v,
    JC: () => W,
    K$: () => R,
    Ov: () => g,
    TP: () => f,
    Xi: () => B,
    YL: () => D,
    Yh: () => j,
    _3: () => u,
    a2: () => p,
    c1: () => N,
    fE: () => E,
    g5: () => O,
    hL: () => L,
    pU: () => c,
    t: () => m,
    uD: () => y,
    vS: () => _,
    vl: () => A,
    vv: () => C,
    xZ: () => I,
    xm: () => z,
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
    return null != e.config.taskConfigV2.tasks[i.n.ACHIEVEMENT_IN_ACTIVITY];
}
function A(e) {
    return null != e.config.taskConfigV2.tasks[i.n.PLAY_ACTIVITY];
}
function I(e) {
    return null != e && m({ quest: e });
}
let T = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function S(e) {
    return Array.from(i.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let y = T([i.n.PLAY_ON_XBOX, i.n.PLAY_ON_PLAYSTATION]),
    v = T([i.n.WATCH_VIDEO]),
    N = T([i.n.WATCH_VIDEO_ON_MOBILE]),
    C = T([i.n.WATCH_VIDEO, i.n.WATCH_VIDEO_ON_MOBILE]),
    R = (e) => N(e) && !v(e);
function O(e) {
    return y(e);
}
let b = (e, t) => {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let r = new Date(n).valueOf();
    return !isNaN(r) && r > Date.now();
};
function D(e) {
    return null != e.userStatus && (b(e.userStatus, i.n.PLAY_ON_XBOX) || b(e.userStatus, i.n.PLAY_ON_PLAYSTATION));
}
function L(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function w(e) {
    return e?.type === i.n.PLAY_ON_DESKTOP;
}
let M = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    P = (e) => D(e) || o.A.isProgressingOnDesktop(e.id),
    x = (e, t) => {
        let n = e.userStatus?.progress?.[t.type]?.heartbeat?.lastBeatAt;
        if (null == n || !P(e)) return 0;
        let i = Date.now() - new Date(n).valueOf();
        return (0, r.floor)(i / s.A.Millis.SECOND, 2);
    },
    k = (e, t) => {
        let n = e.userStatus?.progress?.[t.type],
            r = n?.value ?? e.userStatus?.streamProgressSeconds ?? 0;
        if (C(e)) {
            let n = o.A.getOptimisticProgress(e.id, t.type);
            return null == n || n < r ? r : n;
        }
        return r + x(e, t);
    },
    U = 0.99,
    G = (e, t) => {
        let n = t.target;
        if (e.userStatus?.completedAt != null) return n;
        let i = Math.min(n * U, k(e, t));
        return Math.max((0, r.floor)(i, 2), 0);
    },
    F = (e) => {
        let { quest: t, taskType: n, includeTaskTypes: r = i.o.ALL } = e,
            a = t.config.taskConfigV2,
            o = n ?? Object.values(a.tasks).filter((e) => r.has(e.type))[0]?.type,
            l = a.tasks[o] ?? a.tasks[i.n.STREAM_ON_DESKTOP];
        if (null == l) throw Error(`No task with type ${n} found for quest ${t.id}!`);
        let u = l.target,
            c = G(t, l),
            d = Object.values(a.tasks).find(w),
            _ = d?.applications?.map((e) => e.id);
        return {
            progressSeconds: c,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / s.A.Seconds.MINUTE),
            percentComplete: M(u, c),
            taskType: o,
            applications: _,
        };
    },
    V = (e) => (i.o.ALL.has(e) ? e : null);
function B(e) {
    let t = e.taskConfigV2.tasks[i.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[i.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let H = (e) => {
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
            let r = V(e.eventName);
            if (null != r && n?.has(r)) return F({ quest: t, taskType: r, includeTaskTypes: n });
        }
        return F({ quest: t, includeTaskTypes: n });
    },
    j = (e, t) =>
        S(e)
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: i.n.STREAM_ON_DESKTOP,
              }
            : y(e)
              ? H({ quest: e, includeTaskTypes: t ?? (D(e) ? i.o.CONSOLE : i.o.ALL) })
              : C(e)
                ? F({ quest: e, taskType: B(e.config)?.type })
                : I(e)
                  ? F({ quest: e, taskType: i.n.PLAY_ON_DESKTOP })
                  : A(e)
                    ? F({ quest: e, taskType: i.n.PLAY_ACTIVITY })
                    : F({ quest: e, taskType: i.n.STREAM_ON_DESKTOP });
function Y(e) {
    let t = e.taskConfigV2.tasks,
        n = t[i.n.ACHIEVEMENT_IN_ACTIVITY],
        r = t[i.n.ACHIEVEMENT_IN_GAME];
    return n ?? r ?? null;
}
function W(e) {
    let t = Y(e.config);
    if (null == t) return null;
    let n = e.userStatus?.progress?.[t.type]?.value ?? 0,
        r = M(t.target, n);
    return {
        title: t.messages.taskTitle,
        description: t.messages.taskDescription,
        target: t.target,
        progress: n,
        percentComplete: r,
    };
}
function K(e) {
    return $(e.targetSeconds - e.progressSeconds);
}
function $(e) {
    return { minutes: Math.max(0, Math.floor(e / 60)), seconds: Math.max(0, Math.floor(e % 60)) };
}
function z(e) {
    let t = K(e);
    return q(t.minutes, t.seconds);
}
function q(e, t) {
    return `${String(e).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}
