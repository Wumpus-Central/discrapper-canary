"use strict";
n.d(t, {
    Cr: () => T,
    F9: () => u,
    IO: () => N,
    JC: () => G,
    K$: () => C,
    Ov: () => g,
    TP: () => E,
    Xi: () => U,
    YL: () => L,
    Yh: () => M,
    _3: () => _,
    a2: () => h,
    fE: () => f,
    g5: () => y,
    hL: () => v,
    pU: () => d,
    t: () => m,
    uD: () => S,
    vS: () => c,
    vl: () => A,
    vv: () => R,
    xZ: () => I,
    xm: () => x,
});
var i = n(735438),
    r = n(412703),
    s = n(927813),
    a = n(403362),
    o = n(859703);
function l(e, t) {
    if (null == e) return;
    let n = new Set();
    for (let i of t) {
        let t = e.config.taskConfigV2.tasks[i];
        if (null != t && "applications" in t && Array.isArray(t.applications))
            for (let e of t.applications) n.add(e.id);
    }
    return n.size > 0 ? Array.from(n) : void 0;
}
function _(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return l(e, t);
}
function d(e) {
    return l(e, [r.n.PLAY_ON_DESKTOP]);
}
function u(e) {
    let t = l(e, [r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]);
    return t?.[0];
}
function c(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY]);
    return t?.[0];
}
function E(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY, r.n.ACHIEVEMENT_IN_ACTIVITY]);
    return t?.[0];
}
function h(e) {
    let t = l(e, [r.n.STREAM_ON_DESKTOP]);
    return t?.[0];
}
function m(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.PLAY_ON_DESKTOP];
}
function f(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.STREAM_ON_DESKTOP];
}
function g(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_ACTIVITY];
}
function A(e) {
    return null != e.config.taskConfigV2.tasks[r.n.PLAY_ACTIVITY];
}
function I(e) {
    return null != e && m({ quest: e });
}
let p = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function T(e) {
    return Array.from(r.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let S = p([r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]),
    N = p([r.n.WATCH_VIDEO]),
    O = p([r.n.WATCH_VIDEO_ON_MOBILE]),
    R = p([r.n.WATCH_VIDEO, r.n.WATCH_VIDEO_ON_MOBILE]),
    C = (e) => O(e) && !N(e);
function y(e) {
    return S(e);
}
let D = (e, t) => {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let i = new Date(n).valueOf();
    return !isNaN(i) && i > Date.now();
};
function L(e) {
    return null != e.userStatus && (D(e.userStatus, r.n.PLAY_ON_XBOX) || D(e.userStatus, r.n.PLAY_ON_PLAYSTATION));
}
function v(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function w(e) {
    return e?.type === r.n.PLAY_ON_DESKTOP;
}
let P = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    b = (e) => {
        let { quest: t, taskType: n, includeTaskTypes: a = r.o.ALL } = e,
            l = t.config.taskConfigV2,
            _ = n ?? Object.values(l.tasks).filter((e) => a.has(e.type))[0]?.type,
            d = l.tasks[_] ?? l.tasks[r.n.STREAM_ON_DESKTOP];
        if (null == d) throw Error(`No task with type ${n} found for quest ${t.id}!`);
        let u = d.target,
            c = ((e, t) => {
                let n = t.target;
                if (e.userStatus?.completedAt != null) return n;
                let r = Math.min(
                    0.99 * n,
                    ((e, t) => {
                        let n = e.userStatus?.progress?.[t.type],
                            r = n?.value ?? e.userStatus?.streamProgressSeconds ?? 0;
                        if (R(e)) {
                            let n = o.A.getOptimisticProgress(e.id, t.type);
                            return null == n || n < r ? r : n;
                        }
                        return (
                            r +
                            ((e, t) => {
                                let n = e.userStatus?.progress?.[t.type]?.heartbeat?.lastBeatAt;
                                if (null == n || !(L(e) || o.A.isProgressingOnDesktop(e.id))) return 0;
                                let r = Date.now() - new Date(n).valueOf();
                                return (0, i.floor)(r / s.A.Millis.SECOND, 2);
                            })(e, t)
                        );
                    })(e, t),
                );
                return Math.max((0, i.floor)(r, 2), 0);
            })(t, d),
            E = Object.values(l.tasks).find(w),
            h = E?.applications?.map((e) => e.id);
        return {
            progressSeconds: c,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / s.A.Seconds.MINUTE),
            percentComplete: P(u, c),
            taskType: _,
            applications: h,
        };
    },
    k = (e) => (r.o.ALL.has(e) ? e : null);
function U(e) {
    let t = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let M = (e, t) =>
    T(e)
        ? {
              progressSeconds: 0,
              targetSeconds: 1,
              targetMinutes: 1,
              percentComplete: 0,
              taskType: r.n.STREAM_ON_DESKTOP,
          }
        : S(e)
          ? ((e) => {
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
                    .filter(a.Vq)) {
                    let i = k(e.eventName);
                    if (null != i && n?.has(i)) return b({ quest: t, taskType: i, includeTaskTypes: n });
                }
                return b({ quest: t, includeTaskTypes: n });
            })({ quest: e, includeTaskTypes: t ?? (L(e) ? r.o.CONSOLE : r.o.ALL) })
          : R(e)
            ? b({ quest: e, taskType: U(e.config)?.type })
            : I(e)
              ? b({ quest: e, taskType: r.n.PLAY_ON_DESKTOP })
              : A(e)
                ? b({ quest: e, taskType: r.n.PLAY_ACTIVITY })
                : b({ quest: e, taskType: r.n.STREAM_ON_DESKTOP });
function G(e) {
    let t,
        n,
        i,
        s =
            ((n = (t = e.config.taskConfigV2.tasks)[r.n.ACHIEVEMENT_IN_ACTIVITY]),
            (i = t[r.n.ACHIEVEMENT_IN_GAME]),
            n ?? i ?? null);
    if (null == s) return null;
    let a = e.userStatus?.progress?.[s.type]?.value ?? 0,
        o = P(s.target, a);
    return {
        title: s.messages.taskTitle,
        description: s.messages.taskDescription,
        target: s.target,
        progress: a,
        percentComplete: o,
    };
}
function x(e) {
    var t, n, i;
    let r = {
        minutes: Math.max(0, Math.floor((t = e.targetSeconds - e.progressSeconds) / 60)),
        seconds: Math.max(0, Math.floor(t % 60)),
    };
    return (n = r.minutes), (i = r.seconds), `${String(n).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}
