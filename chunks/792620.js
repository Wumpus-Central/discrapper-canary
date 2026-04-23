n.d(t, {
    Cr: () => f,
    F9: () => d,
    IO: () => p,
    JC: () => w,
    K$: () => D,
    Ov: () => S,
    TP: () => u,
    Xi: () => v,
    YL: () => b,
    Yh: () => B,
    _3: () => o,
    a2: () => I,
    c1: () => m,
    fE: () => T,
    g5: () => h,
    hL: () => U,
    pU: () => E,
    t: () => A,
    uD: () => C,
    vS: () => c,
    vl: () => N,
    vv: () => L,
    xZ: () => O,
    xm: () => F,
});
var i = n(735438),
    r = n(412703),
    a = n(927813),
    s = n(403362),
    _ = n(859703);
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
function o(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return l(e, t);
}
function E(e) {
    return l(e, [r.n.PLAY_ON_DESKTOP]);
}
function d(e) {
    let t = l(e, [r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]);
    return t?.[0];
}
function c(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY]);
    return t?.[0];
}
function u(e) {
    let t = l(e, [r.n.PLAY_ACTIVITY, r.n.ACHIEVEMENT_IN_ACTIVITY]);
    return t?.[0];
}
function I(e) {
    let t = l(e, [r.n.STREAM_ON_DESKTOP]);
    return t?.[0];
}
function A(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.PLAY_ON_DESKTOP];
}
function T(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[r.n.STREAM_ON_DESKTOP];
}
function S(e) {
    return null != e.config.taskConfigV2.tasks[r.n.ACHIEVEMENT_IN_ACTIVITY];
}
function N(e) {
    return null != e.config.taskConfigV2.tasks[r.n.PLAY_ACTIVITY];
}
function O(e) {
    return null != e && A({ quest: e });
}
let R = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function f(e) {
    return Array.from(r.o.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let C = R([r.n.PLAY_ON_XBOX, r.n.PLAY_ON_PLAYSTATION]),
    p = R([r.n.WATCH_VIDEO]),
    m = R([r.n.WATCH_VIDEO_ON_MOBILE]),
    L = R([r.n.WATCH_VIDEO, r.n.WATCH_VIDEO_ON_MOBILE]),
    D = (e) => m(e) && !p(e);
function h(e) {
    return C(e);
}
let g = (e, t) => {
    let n = e?.progress[t]?.heartbeat?.expiresAt;
    if (null == n) return !1;
    let i = new Date(n).valueOf();
    return !isNaN(i) && i > Date.now();
};
function b(e) {
    return null != e.userStatus && (g(e.userStatus, r.n.PLAY_ON_XBOX) || g(e.userStatus, r.n.PLAY_ON_PLAYSTATION));
}
function U(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function P(e) {
    return e?.type === r.n.PLAY_ON_DESKTOP;
}
let M = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    y = (e) => {
        let { quest: t, taskType: n, includeTaskTypes: s = r.o.ALL } = e,
            l = t.config.taskConfigV2,
            o = n ?? Object.values(l.tasks).filter((e) => s.has(e.type))[0]?.type,
            E = l.tasks[o] ?? l.tasks[r.n.STREAM_ON_DESKTOP];
        if (null == E) throw Error(`No task with type ${n} found for quest ${t.id}!`);
        let d = E.target,
            c = ((e, t) => {
                let n = t.target;
                if (e.userStatus?.completedAt != null) return n;
                let r = Math.min(
                    0.99 * n,
                    ((e, t) => {
                        let n = e.userStatus?.progress?.[t.type],
                            r = n?.value ?? e.userStatus?.streamProgressSeconds ?? 0;
                        if (L(e)) {
                            let n = _.A.getOptimisticProgress(e.id, t.type);
                            return null == n || n < r ? r : n;
                        }
                        return (
                            r +
                            ((e, t) => {
                                let n = e.userStatus?.progress?.[t.type]?.heartbeat?.lastBeatAt;
                                if (null == n || !(b(e) || _.A.isProgressingOnDesktop(e.id))) return 0;
                                let r = Date.now() - new Date(n).valueOf();
                                return (0, i.floor)(r / a.A.Millis.SECOND, 2);
                            })(e, t)
                        );
                    })(e, t),
                );
                return Math.max((0, i.floor)(r, 2), 0);
            })(t, E),
            u = Object.values(l.tasks).find(P),
            I = u?.applications?.map((e) => e.id);
        return {
            progressSeconds: c,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / a.A.Seconds.MINUTE),
            percentComplete: M(d, c),
            taskType: o,
            applications: I,
        };
    },
    G = (e) => (r.o.ALL.has(e) ? e : null);
function v(e) {
    let t = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
        n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
    return null != t && null != n ? t : (n ?? t ?? null);
}
let B = (e, t) =>
    f(e)
        ? {
              progressSeconds: 0,
              targetSeconds: 1,
              targetMinutes: 1,
              percentComplete: 0,
              taskType: r.n.STREAM_ON_DESKTOP,
          }
        : C(e)
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
                    .filter(s.Vq)) {
                    let i = G(e.eventName);
                    if (null != i && n?.has(i)) return y({ quest: t, taskType: i, includeTaskTypes: n });
                }
                return y({ quest: t, includeTaskTypes: n });
            })({ quest: e, includeTaskTypes: t ?? (b(e) ? r.o.CONSOLE : r.o.ALL) })
          : L(e)
            ? y({ quest: e, taskType: v(e.config)?.type })
            : O(e)
              ? y({ quest: e, taskType: r.n.PLAY_ON_DESKTOP })
              : N(e)
                ? y({ quest: e, taskType: r.n.PLAY_ACTIVITY })
                : y({ quest: e, taskType: r.n.STREAM_ON_DESKTOP });
function w(e) {
    let t,
        n,
        i,
        a =
            ((n = (t = e.config.taskConfigV2.tasks)[r.n.ACHIEVEMENT_IN_ACTIVITY]),
            (i = t[r.n.ACHIEVEMENT_IN_GAME]),
            n ?? i ?? null);
    if (null == a) return null;
    let s = e.userStatus?.progress?.[a.type]?.value ?? 0,
        _ = M(a.target, s);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: s,
        percentComplete: _,
    };
}
function F(e) {
    var t, n, i;
    let r = {
        minutes: Math.max(0, Math.floor((t = e.targetSeconds - e.progressSeconds) / 60)),
        seconds: Math.max(0, Math.floor(t % 60)),
    };
    return (n = r.minutes), (i = r.seconds), `${String(n).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}
