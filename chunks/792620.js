"use strict";
n.d(t, {
    Cr: () => y,
    F9: () => d,
    GL: () => O,
    I6: () => A,
    IO: () => v,
    JC: () => B,
    K$: () => D,
    Ki: () => b,
    Ov: () => g,
    TP: () => f,
    Xi: () => F,
    YL: () => M,
    Yh: () => V,
    _3: () => u,
    a2: () => p,
    fE: () => m,
    g5: () => L,
    hL: () => P,
    lG: () => H,
    pU: () => c,
    t: () => E,
    uD: () => N,
    vS: () => _,
    vl: () => I,
    vv: () => R,
    xZ: () => T,
    xc: () => h,
    xm: () => j,
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
function u(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return l(e, t);
}
function c(e) {
    return l(e, [r.n.PLAY_ON_DESKTOP]);
}
function d(e) {
    let t = l(e, [r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]);
    return t?.[0];
}
function _(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY]);
    return t?.[0];
}
function h(e) {
    let t = l(e, [r.n.ACHIEVEMENT_IN_GAME]);
    return t?.[0];
}
function f(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY, r.n.ACHIEVEMENT_IN_ACTIVITY]);
    return t?.[0];
}
function p(e) {
    let t = l(e, [r.n.STREAM_ON_DESKTOP]);
    return t?.[0];
}
function E(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.PLAY_ON_DESKTOP];
}
function m(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.STREAM_ON_DESKTOP];
}
function g(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_ACTIVITY];
}
function A(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_GAME];
}
function I(e) {
    return null != e.config.taskConfigV2.tasks[r.n.PLAY_ACTIVITY];
}
function T(e) {
    return null != e && E({ quest: e });
}
let S = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function y(e) {
    return Array.from(r.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let N = S([r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]),
    v = S([r.n.WATCH_VIDEO]),
    C = S([r.n.WATCH_VIDEO_ON_MOBILE]),
    R = S([r.n.WATCH_VIDEO, r.n.WATCH_VIDEO_ON_MOBILE]),
    O = S([
        r.n.PLAY_ON_DESKTOP,
        r.n.STREAM_ON_DESKTOP,
        r.n.PLAY_ON_PLAYSTATION,
        r.n.PLAY_ON_XBOX,
        r.n.ACHIEVEMENT_IN_GAME,
    ]),
    b = S([r.n.ACHIEVEMENT_IN_ACTIVITY, r.n.PLAY_ACTIVITY]),
    D = (e) => C(e) && !v(e);
function L(e) {
    return N(e);
}
let w = (e, t) => {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let i = new Date(n).valueOf();
    return !isNaN(i) && i > Date.now();
};
function M(e) {
    return null != e.userStatus && (w(e.userStatus, r.n.PLAY_ON_XBOX) || w(e.userStatus, r.n.PLAY_ON_PLAYSTATION));
}
function P(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function x(e) {
    return e?.type === r.n.PLAY_ON_DESKTOP;
}
let k = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    U = (e) => {
        let { quest: t, taskType: n, includeTaskTypes: a = r.o.ALL } = e,
            l = t.config.taskConfigV2,
            u = n ?? Object.values(l.tasks).filter((e) => a.has(e.type))[0]?.type,
            c = l.tasks[u] ?? l.tasks[r.n.STREAM_ON_DESKTOP];
        if (null == c) throw Error(`No task with type ${n} found for quest ${t.id}!`);
        let d = c.target,
            _ = ((e, t) => {
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
                                if (null == n || !(M(e) || o.A.isProgressingOnDesktop(e.id))) return 0;
                                let r = Date.now() - new Date(n).valueOf();
                                return (0, i.floor)(r / s.A.Millis.SECOND, 2);
                            })(e, t)
                        );
                    })(e, t),
                );
                return Math.max((0, i.floor)(r, 2), 0);
            })(t, c),
            h = Object.values(l.tasks).find(x),
            f = h?.applications?.map((e) => e.id);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / s.A.Seconds.MINUTE),
            percentComplete: k(d, _),
            taskType: u,
            applications: f,
        };
    },
    G = (e) => (r.o.ALL.has(e) ? e : null);
function F(e) {
    let t = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let V = (e, t) =>
    y(e)
        ? {
              progressSeconds: 0,
              targetSeconds: 1,
              targetMinutes: 1,
              percentComplete: 0,
              taskType: r.n.STREAM_ON_DESKTOP,
          }
        : N(e)
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
                    let i = G(e.eventName);
                    if (null != i && n?.has(i)) return U({ quest: t, taskType: i, includeTaskTypes: n });
                }
                return U({ quest: t, includeTaskTypes: n });
            })({ quest: e, includeTaskTypes: t ?? (M(e) ? r.o.CONSOLE : r.o.ALL) })
          : R(e)
            ? U({ quest: e, taskType: F(e.config)?.type })
            : T(e)
              ? U({ quest: e, taskType: r.n.PLAY_ON_DESKTOP })
              : I(e)
                ? U({ quest: e, taskType: r.n.PLAY_ACTIVITY })
                : U({ quest: e, taskType: r.n.STREAM_ON_DESKTOP });
function B(e) {
    let t,
        n,
        i,
        s =
            ((n = (t = e.config.taskConfigV2.tasks)[r.n.ACHIEVEMENT_IN_ACTIVITY]),
            (i = t[r.n.ACHIEVEMENT_IN_GAME]),
            n ?? i ?? null);
    if (null == s) return null;
    let a = e.userStatus?.progress?.[s.type]?.value ?? 0,
        o = k(s.target, a);
    return {
        title: s.messages.taskTitle,
        description: s.messages.taskDescription,
        target: s.target,
        progress: a,
        percentComplete: o,
    };
}
function H(e) {
    var t;
    return {
        minutes: Math.max(0, Math.floor((t = e.targetSeconds - e.progressSeconds) / 60)),
        seconds: Math.max(0, Math.floor(t % 60)),
    };
}
function j(e) {
    var t, n;
    let i = H(e);
    return (t = i.minutes), (n = i.seconds), `${String(t).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
