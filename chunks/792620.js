"use strict";
n.d(t, {
    Cr: () => C,
    F9: () => _,
    GL: () => D,
    I6: () => m,
    IO: () => O,
    JC: () => H,
    K$: () => b,
    Ki: () => v,
    Ov: () => T,
    TP: () => h,
    Xi: () => V,
    YL: () => w,
    Yh: () => B,
    _3: () => c,
    a2: () => I,
    fE: () => p,
    g5: () => M,
    hL: () => G,
    lG: () => j,
    no: () => P,
    pU: () => u,
    t: () => f,
    uD: () => R,
    vS: () => E,
    vl: () => g,
    vv: () => y,
    xZ: () => S,
    xc: () => A,
    xm: () => W,
});
var i = n(435558),
    r = n(412703),
    a = n(927813),
    s = n(403362),
    l = n(859703),
    o = n(710969);
function d(e, t) {
    if (null == e) return;
    let n = new Set();
    for (let i of t) {
        let t = e.config.taskConfigV2.tasks[i];
        if (null != t && "applications" in t && Array.isArray(t.applications))
            for (let e of t.applications) n.add(e.id);
    }
    return n.size > 0 ? Array.from(n) : void 0;
}
function c(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return d(e, t);
}
function u(e) {
    return d(e, [r.n.PLAY_ON_DESKTOP]);
}
function _(e) {
    let t = d(e, [r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]);
    return t?.[0];
}
function E(e) {
    let t = d(e, [r.n.PLAY_ACTIVITY]);
    return t?.[0];
}
function A(e) {
    let t = d(e, [r.n.ACHIEVEMENT_IN_GAME]);
    return t?.[0];
}
function h(e) {
    let t = d(e, [r.n.PLAY_ACTIVITY, r.n.ACHIEVEMENT_IN_ACTIVITY]);
    return t?.[0];
}
function I(e) {
    let t = d(e, [r.n.STREAM_ON_DESKTOP]);
    return t?.[0];
}
function f(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.PLAY_ON_DESKTOP];
}
function p(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.STREAM_ON_DESKTOP];
}
function T(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_ACTIVITY];
}
function m(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_GAME];
}
function g(e) {
    return null != e.config.taskConfigV2.tasks[r.n.PLAY_ACTIVITY];
}
function S(e) {
    return null != e && f({ quest: e });
}
function N(e) {
    return (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
}
function C(e) {
    return Array.from(r.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let R = N([r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]),
    O = N([r.n.WATCH_VIDEO]),
    L = N([r.n.WATCH_VIDEO_ON_MOBILE]),
    y = N([r.n.WATCH_VIDEO, r.n.WATCH_VIDEO_ON_MOBILE]),
    D = N([
        r.n.PLAY_ON_DESKTOP,
        r.n.STREAM_ON_DESKTOP,
        r.n.PLAY_ON_PLAYSTATION,
        r.n.PLAY_ON_XBOX,
        r.n.ACHIEVEMENT_IN_GAME,
    ]),
    v = N([r.n.ACHIEVEMENT_IN_ACTIVITY, r.n.PLAY_ACTIVITY]);
function b(e) {
    return L(e) && !O(e);
}
function M(e) {
    return R(e);
}
function P(e) {
    return !R(e) && f({ quest: e });
}
function U(e, t) {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let i = new Date(n).valueOf();
    return !isNaN(i) && i > Date.now();
}
function w(e) {
    return null != e.userStatus && (U(e.userStatus, r.n.PLAY_ON_XBOX) || U(e.userStatus, r.n.PLAY_ON_PLAYSTATION));
}
function G(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function x(e) {
    return e?.type === r.n.PLAY_ON_DESKTOP;
}
function k(e, t) {
    return e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0;
}
function F(e) {
    let { quest: t, taskType: n, includeTaskTypes: s = r.o.ALL } = e,
        d = t.config.taskConfigV2,
        c = n ?? Object.values(d.tasks).filter((e) => s.has(e.type))[0]?.type,
        u = d.tasks[c] ?? d.tasks[r.n.STREAM_ON_DESKTOP];
    if (null == u)
        return (
            (0, o.RF)(Error(`Quest ${t.id} has no task matching the include filters`), {
                tags: { source: "_getTaskDetailsForType" },
                extra: { questId: t.id, taskType: n, includeTaskTypes: Array.from(s ?? []) },
            }),
            null
        );
    let _ = u.target,
        E = (function (e, t) {
            let n = t.target;
            if (e.userStatus?.completedAt != null) return n;
            let r = Math.min(
                0.99 * n,
                (function (e, t) {
                    let n = e.userStatus?.progress?.[t.type],
                        r = n?.value ?? e.userStatus?.streamProgressSeconds ?? 0;
                    if (y(e)) {
                        let n = l.A.getOptimisticProgress(e.id, t.type);
                        return null == n || n < r ? r : n;
                    }
                    return (
                        r +
                        (function (e, t) {
                            let n = e.userStatus?.progress?.[t.type]?.heartbeat?.lastBeatAt;
                            if (null == n || !(w(e) || l.A.isProgressingOnDesktop(e.id))) return 0;
                            let r = Date.now() - new Date(n).valueOf();
                            return (0, i.floor)(r / a.A.Millis.SECOND, 2);
                        })(e, t)
                    );
                })(e, t),
            );
            return Math.max((0, i.floor)(r, 2), 0);
        })(t, u),
        A = Object.values(d.tasks).find(x),
        h = A?.applications?.map((e) => e.id);
    return {
        progressSeconds: E,
        targetSeconds: _,
        targetMinutes: Math.ceil(_ / a.A.Seconds.MINUTE),
        percentComplete: k(_, E),
        taskType: c,
        applications: h,
    };
}
function V(e) {
    let t = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
function B(e, t) {
    var n, i;
    let a =
        ((n = e),
        (i = t),
        C(n)
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: r.n.STREAM_ON_DESKTOP,
              }
            : R(n)
              ? (function (e) {
                    let { quest: t, includeTaskTypes: n = r.o.ALL } = e;
                    for (let e of Object.values(t.userStatus?.progress ?? {})
                        .sort((e, t) => {
                            let n = e?.heartbeat?.lastBeatAt,
                                i = t?.heartbeat?.lastBeatAt;
                            return null != n && null != i
                                ? new Date(n).valueOf() > new Date(i).valueOf()
                                    ? -1
                                    : 1
                                : null == n && null == i && e?.updatedAt != null && t?.updatedAt != null
                                  ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf()
                                      ? -1
                                      : 1
                                  : null != n && null == i
                                    ? -1
                                    : 1;
                        })
                        .filter(s.Vq)) {
                        var i;
                        let a = ((i = e.eventName), r.o.ALL.has(i) ? i : null);
                        if (null == a || !n?.has(a)) continue;
                        let s = F({ quest: t, taskType: a, includeTaskTypes: n });
                        if (null != s) return s;
                    }
                    return F({ quest: t, includeTaskTypes: n });
                })({ quest: n, includeTaskTypes: i ?? (w(n) ? r.o.CONSOLE : r.o.ALL) })
              : y(n)
                ? F({ quest: n, taskType: V(n.config)?.type })
                : S(n)
                  ? F({ quest: n, taskType: r.n.PLAY_ON_DESKTOP })
                  : g(n)
                    ? F({ quest: n, taskType: r.n.PLAY_ACTIVITY })
                    : F({ quest: n, taskType: r.n.STREAM_ON_DESKTOP }));
    if (null != a) return a;
    let l = F({ quest: e });
    return null != l
        ? l
        : {
              progressSeconds: 0,
              targetSeconds: 1,
              targetMinutes: 1,
              percentComplete: 0,
              taskType: r.n.STREAM_ON_DESKTOP,
          };
}
function H(e) {
    let t,
        n,
        i,
        a =
            ((n = (t = e.config.taskConfigV2.tasks)[r.n.ACHIEVEMENT_IN_ACTIVITY]),
            (i = t[r.n.ACHIEVEMENT_IN_GAME]),
            n ?? i ?? null);
    if (null == a) return null;
    let s = e.userStatus?.progress?.[a.type]?.value ?? 0,
        l = k(a.target, s);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: s,
        percentComplete: l,
    };
}
function j(e) {
    var t;
    return {
        minutes: Math.max(0, Math.floor((t = e.targetSeconds - e.progressSeconds) / 60)),
        seconds: Math.max(0, Math.floor(t % 60)),
    };
}
function W(e) {
    var t, n;
    let i = j(e);
    return (t = i.minutes), (n = i.seconds), `${String(t).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
