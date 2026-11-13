n.d(t, { wy: () => R, MF: () => L, jo: () => g, $w: () => N, PM: () => y, CF: () => T, E8: () => S });
var i = n(582128),
    r = n(855986),
    a = n(73153),
    s = n(71393),
    l = n(287809),
    o = n(513425),
    d = n(722701);
let c = { pending: null },
    u = c;
class _ extends r.Ay.PersistedStore {
    static displayName = "ConjurePublishEvalStore";
    static persistKey = "ConjurePublishEval";
    initialize(e) {
        u = e ?? c;
    }
    getState() {
        return u;
    }
    getPending() {
        return u.pending;
    }
}
function E(e) {
    let { projectId: t } = e;
    return u.pending?.projectId === t && ((u = { pending: null }), !0);
}
let A = new _(a.h, {
    CONJURE_PUBLISH_EVAL_PENDING: function (e) {
        let { pending: t } = e;
        return ((u = { pending: t }), !0);
    },
    CONJURE_PUBLISH_EVAL_SUBMITTED: function (e) {
        let { projectId: t, publishTurnId: n } = e,
            { pending: i } = u;
        return null != i && i.projectId === t && i.publishTurnId === n && ((u = { pending: null }), !0);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: E,
    CONJURE_PUBLISH_EVAL_PROJECT_GONE: E,
});
var f = n(786986),
    h = n(768857),
    I = n(191850),
    p = n(792996);
function m(e) {
    return f.n.some((t) => null != e.getGuild(t));
}
function T() {
    return (0, r.bG)([s.A], () => m(s.A));
}
function g() {
    let e = A.getPending();
    return null != e && e.userId === l.default.getCurrentUser()?.id && m(s.A) ? e : null;
}
function S(e) {
    return (0, r.bG)(
        [A, l.default, s.A],
        () => {
            let t = A.getPending();
            return t?.projectId === e && t.userId === l.default.getCurrentUser()?.id && m(s.A) ? t : null;
        },
        [e],
    );
}
function N(e) {
    let t = l.default.getCurrentUser()?.id;
    null != t &&
        m(s.A) &&
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
let C = { quality: null, metExpectations: null, speed: null },
    O = { quality: I.default["N94/JU"], metExpectations: I.default["7mnit0"], speed: I.default["J/xftE"] };
function R(e) {
    return p.intl.string(O[e]);
}
function L(e, t) {
    return p.intl.formatToPlainString(I.default.fML8aJ, { score: t, dimension: R(e) });
}
function y(e) {
    let [t, n] = i.useState(C),
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
                            r = await (0, h.yD)(e.projectId, {
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
                            projectId: e.projectId,
                            publishTurnId: e.publishTurnId,
                        });
                    })(e, _, r);
                } catch {
                    (u(!0), o(!1));
                }
            }
        }, [_, r, e, l]);
    return {
        dimensions: f.W,
        scores: t,
        setScore: E,
        feedback: r,
        setFeedback: s,
        canSubmit: null != _ && !l,
        submitting: l,
        error: c ? p.intl.string(I.default.Nu6mEB) : null,
        submit: A,
    };
}
