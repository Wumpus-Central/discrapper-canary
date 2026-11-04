var r = n(73153),
    s = n(975189),
    i = n(664619);
n.d(
    t,
    {},
    {
        V5: {
            context_switch(e, t) {
                let { projectId: n } = t;
                (r.h.dispatch({ type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId: n, contextSwitch: e }),
                    "reverted" === e.status &&
                        (0, i.tZ)(n, { isPreview: !0 }).catch((e) => {
                            console.error("[conjure] post-revert refresh failed", n, e);
                        }));
            },
            smart_context(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({ type: "CONJURE_SMART_CONTEXT_SET", projectId: n, enabled: e.enabled });
            },
        },
        VF: function (e, t) {
            return (0, s.b4)(e, "smart context", (e) => e.sendSmartContext(t));
        },
        yR: function (e, t) {
            return (0, s.b4)(e, "undo context switch", (e) => e.sendUndoContextSwitch(t));
        },
    },
);
