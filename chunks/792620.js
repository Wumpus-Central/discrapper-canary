"use strict";
n.d(t, {
    Cr: () => T,
    F9: () => d,
    IO: () => y,
    JC: () => U,
    K$: () => C,
    Ov: () => m,
    TP: () => f,
    Xi: () => x,
    YL: () => b,
    Yh: () => k,
    _3: () => u,
    a2: () => p,
    c1: () => N,
    fE: () => E,
    g5: () => O,
    hL: () => D,
    pU: () => c,
    t: () => h,
    uD: () => S,
    vS: () => _,
    vl: () => g,
    vv: () => v,
    xZ: () => A,
    xm: () => G,
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
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[i.n.PLAY_ON_DESKTOP];
}
function E(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[i.n.STREAM_ON_DESKTOP];
}
function m(e) {
    return null != e.config.taskConfigV2.tasks[i.n.ACHIEVEMENT_IN_ACTIVITY];
}
function g(e) {
    return null != e.config.taskConfigV2.tasks[i.n.PLAY_ACTIVITY];
}
function A(e) {
    return null != e && h({ quest: e });
}
let I = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function T(e) {
    return Array.from(i.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let S = I([i.n.PLAY_ON_XBOX, i.n.PLAY_ON_PLAYSTATION]),
    y = I([i.n.WATCH_VIDEO]),
    N = I([i.n.WATCH_VIDEO_ON_MOBILE]),
    v = I([i.n.WATCH_VIDEO, i.n.WATCH_VIDEO_ON_MOBILE]),
    C = (e) => N(e) && !y(e);
function O(e) {
    return S(e);
}
let R = (e, t) => {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let r = new Date(n).valueOf();
    return !isNaN(r) && r > Date.now();
};
function b(e) {
    return null != e.userStatus && (R(e.userStatus, i.n.PLAY_ON_XBOX) || R(e.userStatus, i.n.PLAY_ON_PLAYSTATION));
}
function D(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function L(e) {
    return e?.type === i.n.PLAY_ON_DESKTOP;
}
let w = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    M = (e) => {
        let { quest: t, taskType: n, includeTaskTypes: a = i.o.ALL } = e,
            l = t.config.taskConfigV2,
            u = n ?? Object.values(l.tasks).filter((e) => a.has(e.type))[0]?.type,
            c = l.tasks[u] ?? l.tasks[i.n.STREAM_ON_DESKTOP];
        if (null == c) throw Error(`No task with type ${n} found for quest ${t.id}!`);
        let d = c.target,
            _ = ((e, t) => {
                let n = t.target;
                if (e.userStatus?.completedAt != null) return n;
                let i = Math.min(
                    0.99 * n,
                    ((e, t) => {
                        let n = e.userStatus?.progress?.[t.type],
                            i = n?.value ?? e.userStatus?.streamProgressSeconds ?? 0;
                        if (v(e)) {
                            let n = o.A.getOptimisticProgress(e.id, t.type);
                            return null == n || n < i ? i : n;
                        }
                        return (
                            i +
                            ((e, t) => {
                                let n = e.userStatus?.progress?.[t.type]?.heartbeat?.lastBeatAt;
                                if (null == n || !(b(e) || o.A.isProgressingOnDesktop(e.id))) return 0;
                                let i = Date.now() - new Date(n).valueOf();
                                return (0, r.floor)(i / s.A.Millis.SECOND, 2);
                            })(e, t)
                        );
                    })(e, t),
                );
                return Math.max((0, r.floor)(i, 2), 0);
            })(t, c),
            f = Object.values(l.tasks).find(L),
            p = f?.applications?.map((e) => e.id);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / s.A.Seconds.MINUTE),
            percentComplete: w(d, _),
            taskType: u,
            applications: p,
        };
    },
    P = (e) => (i.o.ALL.has(e) ? e : null);
function x(e) {
    let t = e.taskConfigV2.tasks[i.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[i.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let k = (e, t) =>
    T(e)
        ? {
              progressSeconds: 0,
              targetSeconds: 1,
              targetMinutes: 1,
              percentComplete: 0,
              taskType: i.n.STREAM_ON_DESKTOP,
          }
        : S(e)
          ? ((e) => {
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
                    let r = P(e.eventName);
                    if (null != r && n?.has(r)) return M({ quest: t, taskType: r, includeTaskTypes: n });
                }
                return M({ quest: t, includeTaskTypes: n });
            })({ quest: e, includeTaskTypes: t ?? (b(e) ? i.o.CONSOLE : i.o.ALL) })
          : v(e)
            ? M({ quest: e, taskType: x(e.config)?.type })
            : A(e)
              ? M({ quest: e, taskType: i.n.PLAY_ON_DESKTOP })
              : g(e)
                ? M({ quest: e, taskType: i.n.PLAY_ACTIVITY })
                : M({ quest: e, taskType: i.n.STREAM_ON_DESKTOP });
function U(e) {
    let t,
        n,
        r,
        s =
            ((n = (t = e.config.taskConfigV2.tasks)[i.n.ACHIEVEMENT_IN_ACTIVITY]),
            (r = t[i.n.ACHIEVEMENT_IN_GAME]),
            n ?? r ?? null);
    if (null == s) return null;
    let a = e.userStatus?.progress?.[s.type]?.value ?? 0,
        o = w(s.target, a);
    return {
        title: s.messages.taskTitle,
        description: s.messages.taskDescription,
        target: s.target,
        progress: a,
        percentComplete: o,
    };
}
function G(e) {
    var t, n, r;
    let i = {
        minutes: Math.max(0, Math.floor((t = e.targetSeconds - e.progressSeconds) / 60)),
        seconds: Math.max(0, Math.floor(t % 60)),
    };
    return (n = i.minutes), (r = i.seconds), `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
