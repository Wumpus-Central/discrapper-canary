"use strict";
n.d(t, {
    Cr: () => T,
    F9: () => d,
    GL: () => v,
    IO: () => N,
    JC: () => F,
    K$: () => R,
    Ki: () => O,
    Ov: () => m,
    TP: () => f,
    Xi: () => k,
    YL: () => L,
    Yh: () => G,
    _3: () => u,
    a2: () => h,
    fE: () => E,
    g5: () => b,
    hL: () => w,
    pU: () => c,
    t: () => p,
    uD: () => S,
    vS: () => _,
    vl: () => g,
    vv: () => C,
    xZ: () => A,
    xm: () => V,
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
function f(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY, r.n.ACHIEVEMENT_IN_ACTIVITY]);
    return t?.[0];
}
function h(e) {
    let t = l(e, [r.n.STREAM_ON_DESKTOP]);
    return t?.[0];
}
function p(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.PLAY_ON_DESKTOP];
}
function E(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.STREAM_ON_DESKTOP];
}
function m(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_ACTIVITY];
}
function g(e) {
    return null != e.config.taskConfigV2.tasks[r.n.PLAY_ACTIVITY];
}
function A(e) {
    return null != e && p({ quest: e });
}
let I = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function T(e) {
    return Array.from(r.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let S = I([r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]),
    N = I([r.n.WATCH_VIDEO]),
    y = I([r.n.WATCH_VIDEO_ON_MOBILE]),
    C = I([r.n.WATCH_VIDEO, r.n.WATCH_VIDEO_ON_MOBILE]),
    v = I([
        r.n.PLAY_ON_DESKTOP,
        r.n.STREAM_ON_DESKTOP,
        r.n.PLAY_ON_PLAYSTATION,
        r.n.PLAY_ON_XBOX,
        r.n.ACHIEVEMENT_IN_GAME,
    ]),
    O = I([r.n.ACHIEVEMENT_IN_ACTIVITY, r.n.PLAY_ACTIVITY]),
    R = (e) => y(e) && !N(e);
function b(e) {
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
function w(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function M(e) {
    return e?.type === r.n.PLAY_ON_DESKTOP;
}
let P = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    x = (e) => {
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
                        if (C(e)) {
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
            })(t, c),
            f = Object.values(l.tasks).find(M),
            h = f?.applications?.map((e) => e.id);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / s.A.Seconds.MINUTE),
            percentComplete: P(d, _),
            taskType: u,
            applications: h,
        };
    },
    U = (e) => (r.o.ALL.has(e) ? e : null);
function k(e) {
    let t = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let G = (e, t) =>
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
                    let i = U(e.eventName);
                    if (null != i && n?.has(i)) return x({ quest: t, taskType: i, includeTaskTypes: n });
                }
                return x({ quest: t, includeTaskTypes: n });
            })({ quest: e, includeTaskTypes: t ?? (L(e) ? r.o.CONSOLE : r.o.ALL) })
          : C(e)
            ? x({ quest: e, taskType: k(e.config)?.type })
            : A(e)
              ? x({ quest: e, taskType: r.n.PLAY_ON_DESKTOP })
              : g(e)
                ? x({ quest: e, taskType: r.n.PLAY_ACTIVITY })
                : x({ quest: e, taskType: r.n.STREAM_ON_DESKTOP });
function F(e) {
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
function V(e) {
    var t, n, i;
    let r = {
        minutes: Math.max(0, Math.floor((t = e.targetSeconds - e.progressSeconds) / 60)),
        seconds: Math.max(0, Math.floor(t % 60)),
    };
    return (n = r.minutes), (i = r.seconds), `${String(n).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}
