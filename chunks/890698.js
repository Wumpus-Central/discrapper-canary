n.d(t, { wy: () => D, MF: () => b, jo: () => C, $w: () => R, PM: () => v, CF: () => N, E8: () => O });
var i = n(582128),
    r = n(855986),
    a = n(73153),
    s = n(71393),
    l = n(287809),
    o = n(513425),
    d = n(722701);
let c = { submittedAt: {} };
class u extends r.Ay.DeviceSettingsStore {
    static displayName = "ConjurePublishEvalCooldownStore";
    static persistKey = "ConjurePublishEvalCooldown";
    initialize(e) {
        c = { submittedAt: e?.submittedAt ?? {} };
    }
    getSubmittedAt(e, t) {
        return c.submittedAt[`${e}:${t}`] ?? null;
    }
    getUserAgnosticState() {
        return c;
    }
}
let _ = new u(a.h, {
        CONJURE_PUBLISH_EVAL_SUBMITTED: function (e) {
            let { userId: t, projectId: n, stored: i } = e;
            return !!i && ((c = { submittedAt: { ...c.submittedAt, [`${t}:${n}`]: Date.now() } }), !0);
        },
    }),
    E = { pending: null },
    A = E;
class f extends r.Ay.PersistedStore {
    static displayName = "ConjurePublishEvalStore";
    static persistKey = "ConjurePublishEval";
    initialize(e) {
        A = e ?? E;
    }
    getState() {
        return A;
    }
    getPending() {
        return A.pending;
    }
}
function h(e) {
    let { projectId: t } = e;
    return A.pending?.projectId === t && ((A = { pending: null }), !0);
}
let I = new f(a.h, {
    CONJURE_PUBLISH_EVAL_PENDING: function (e) {
        let { pending: t } = e;
        return ((A = { pending: t }), !0);
    },
    CONJURE_PUBLISH_EVAL_SUBMITTED: function (e) {
        let { projectId: t, publishTurnId: n } = e,
            { pending: i } = A;
        return null != i && i.projectId === t && i.publishTurnId === n && ((A = { pending: null }), !0);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: h,
    CONJURE_PUBLISH_EVAL_PROJECT_GONE: h,
});
var p = n(786986),
    m = n(768857),
    g = n(191850),
    T = n(792996);
function S(e) {
    return p.n_.some((t) => null != e.getGuild(t));
}
function N() {
    return (0, r.bG)([s.A], () => S(s.A));
}
function C() {
    let e = I.getPending();
    return null != e && e.userId === l.default.getCurrentUser()?.id && S(s.A) ? e : null;
}
function O(e) {
    return (0, r.bG)(
        [I, l.default, s.A],
        () => {
            let t = I.getPending();
            return t?.projectId === e && t.userId === l.default.getCurrentUser()?.id && S(s.A) ? t : null;
        },
        [e],
    );
}
function R(e) {
    let t = l.default.getCurrentUser()?.id;
    if (null == t || !S(s.A)) return;
    let n = _.getSubmittedAt(t, e);
    (null != n && Date.now() - n < p.hr) ||
        a.h.dispatch({
            type: "CONJURE_PUBLISH_EVAL_PENDING",
            pending: {
                userId: t,
                projectId: e,
                publishTurnId: (function (e) {
                    let t = o.A.getMessages(e);
                    for (let e = t.length - 1; e >= 0; e--) {
                        let n = t[e];
                        if ("assistant" === n.role) return n.turn_id ?? n.id;
                    }
                    return t[t.length - 1]?.id ?? e;
                })(e),
                createdAt: Date.now(),
            },
        });
}
let L = { quality: null, metExpectations: null, speed: null },
    y = { quality: g.default["N94/JU"], metExpectations: g.default["7mnit0"], speed: g.default["J/xftE"] };
function D(e) {
    return T.intl.string(y[e]);
}
function b(e, t) {
    return T.intl.formatToPlainString(g.default.fML8aJ, { score: t, dimension: D(e) });
}
function v(e) {
    let [t, n] = i.useState(L),
        [r, s] = i.useState(""),
        [l, o] = i.useState(!1),
        [c, u] = i.useState(!1),
        _ = (function (e) {
            let { quality: t, metExpectations: n, speed: i } = e;
            return null != t && null != n && null != i ? { quality: t, metExpectations: n, speed: i } : null;
        })(t),
        E = i.useCallback((e, t) => {
            n((n) => ({ ...n, [e]: t }));
        }, []),
        A = i.useCallback(async () => {
            if (null != _ && !l) {
                (o(!0), u(!1));
                try {
                    await (async function (e, t, n) {
                        let i = d.A.getPublishStatus(e.projectId)?.publishedRevision,
                            r = await (0, m.yD)(e.projectId, {
                                publish_turn_id: e.publishTurnId,
                                published_revision: i ?? null,
                                quality: t.quality,
                                met_expectations: t.metExpectations,
                                speed: t.speed,
                                feedback: n.trim().slice(0, 2e3),
                            });
                        if (!r.ok && "gone" !== r.error && "forbidden" !== r.error) throw Error(r.error);
                        a.h.dispatch({
                            type: "CONJURE_PUBLISH_EVAL_SUBMITTED",
                            userId: e.userId,
                            projectId: e.projectId,
                            publishTurnId: e.publishTurnId,
                            stored: r.ok,
                        });
                    })(e, _, r);
                } catch {
                    (u(!0), o(!1));
                }
            }
        }, [_, r, e, l]);
    return {
        dimensions: p.Wp,
        scores: t,
        setScore: E,
        feedback: r,
        setFeedback: s,
        canSubmit: null != _ && !l,
        submitting: l,
        error: c ? T.intl.string(g.default.Nu6mEB) : null,
        submit: A,
    };
}
