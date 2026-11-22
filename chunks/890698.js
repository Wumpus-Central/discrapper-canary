l.d(n, { wy: () => y, MF: () => N, $w: () => C, PM: () => M, E8: () => I });
var e = l(582128),
    i = l(855986),
    u = l(73153),
    a = l(71393),
    r = l(287809),
    s = l(513425),
    o = l(722701);
let d = { submittedAt: {} };
class c extends i.Ay.DeviceSettingsStore {
    static displayName = "ConjurePublishEvalCooldownStore";
    static persistKey = "ConjurePublishEvalCooldown";
    initialize(t) {
        d = { submittedAt: t?.submittedAt ?? {} };
    }
    getSubmittedAt(t, n) {
        return d.submittedAt[`${t}:${n}`] ?? null;
    }
    getUserAgnosticState() {
        return d;
    }
}
let p = new c(u.h, {
        CONJURE_PUBLISH_EVAL_SUBMITTED: function (t) {
            let { userId: n, projectId: l, stored: e } = t;
            return !!e && ((d = { submittedAt: { ...d.submittedAt, [`${n}:${l}`]: Date.now() } }), !0);
        },
    }),
    f = { pending: null },
    g = f;
class h extends i.Ay.PersistedStore {
    static displayName = "ConjurePublishEvalStore";
    static persistKey = "ConjurePublishEval";
    initialize(t) {
        g = t ?? f;
    }
    getState() {
        return g;
    }
    getPending() {
        return g.pending;
    }
}
function b(t) {
    let { projectId: n } = t;
    return g.pending?.projectId === n && ((g = { pending: null }), !0);
}
let _ = new h(u.h, {
    CONJURE_PUBLISH_EVAL_PENDING: function (t) {
        let { pending: n } = t;
        return ((g = { pending: n }), !0);
    },
    CONJURE_PUBLISH_EVAL_SUBMITTED: function (t) {
        let { projectId: n, publishTurnId: l } = t,
            { pending: e } = g;
        return null != e && e.projectId === n && e.publishTurnId === l && ((g = { pending: null }), !0);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: b,
    CONJURE_PUBLISH_EVAL_PROJECT_GONE: b,
});
var A = l(786986),
    P = l(991238),
    S = l(191850),
    m = l(792996);
function w(t) {
    return A.n_.some((n) => null != t.getGuild(n));
}
function I(t) {
    return (0, i.bG)(
        [_, r.default, a.A],
        () => {
            let n = _.getPending();
            return n?.projectId === t && n.userId === r.default.getCurrentUser()?.id && w(a.A) ? n : null;
        },
        [t],
    );
}
function C(t) {
    let n = r.default.getCurrentUser()?.id;
    if (null == n || !w(a.A)) return;
    let l = p.getSubmittedAt(n, t);
    (null != l && Date.now() - l < A.hr) ||
        u.h.dispatch({
            type: "CONJURE_PUBLISH_EVAL_PENDING",
            pending: {
                userId: n,
                projectId: t,
                publishTurnId: (function (t) {
                    let n = s.A.getMessages(t);
                    for (let t = n.length - 1; t >= 0; t--) {
                        let l = n[t];
                        if ("assistant" === l.role) return l.turn_id ?? l.id;
                    }
                    return n[n.length - 1]?.id ?? t;
                })(t),
                createdAt: Date.now(),
            },
        });
}
let E = 221552 == l.j ? { quality: null, metExpectations: null, speed: null } : null,
    v = { quality: S.default["N94/JU"], metExpectations: S.default["7mnit0"], speed: S.default["J/xftE"] };
function y(t) {
    return m.intl.string(v[t]);
}
function N(t, n) {
    return m.intl.formatToPlainString(S.default.fML8aJ, { score: n, dimension: y(t) });
}
function M(t) {
    let [n, l] = e.useState(E),
        [i, a] = e.useState(""),
        [r, s] = e.useState(!1),
        [d, c] = e.useState(!1),
        p = (function (t) {
            let { quality: n, metExpectations: l, speed: e } = t;
            return null != n && null != l && null != e ? { quality: n, metExpectations: l, speed: e } : null;
        })(n),
        f = e.useCallback((t, n) => {
            l((l) => ({ ...l, [t]: n }));
        }, []),
        g = e.useCallback(async () => {
            if (null != p && !r) {
                (s(!0), c(!1));
                try {
                    await (async function (t, n, l) {
                        let e = o.A.getPublishStatus(t.projectId)?.publishedRevision,
                            i = await (0, P.yD)(t.projectId, {
                                publish_turn_id: t.publishTurnId,
                                published_revision: e ?? null,
                                quality: n.quality,
                                met_expectations: n.metExpectations,
                                speed: n.speed,
                                feedback: l.trim().slice(0, 2e3),
                            });
                        if (!i.ok && "gone" !== i.error && "forbidden" !== i.error) throw Error(i.error);
                        u.h.dispatch({
                            type: "CONJURE_PUBLISH_EVAL_SUBMITTED",
                            userId: t.userId,
                            projectId: t.projectId,
                            publishTurnId: t.publishTurnId,
                            stored: i.ok,
                        });
                    })(t, p, i);
                } catch {
                    (c(!0), s(!1));
                }
            }
        }, [p, i, t, r]);
    return {
        dimensions: A.Wp,
        scores: n,
        setScore: f,
        feedback: i,
        setFeedback: a,
        canSubmit: null != p && !r,
        submitting: r,
        error: d ? m.intl.string(S.default.Nu6mEB) : null,
        submit: g,
    };
}
