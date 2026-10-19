n.d(t, { V5: () => l, VF: () => a, yR: () => i });
var r = n(73153),
    s = n(975189),
    o = n(664619);
let l = {
    context_switch(e, t) {
        let { projectId: n } = t;
        (r.h.dispatch({ type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId: n, contextSwitch: e }),
            "reverted" === e.status &&
                (0, o.tZ)(n, { isPreview: !0 }).catch((e) => {
                    console.error("[conjure] post-revert refresh failed", n, e);
                }));
    },
    smart_context(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({ type: "CONJURE_SMART_CONTEXT_SET", projectId: n, enabled: e.enabled });
    },
};
function i(e, t) {
    return (0, s.b4)(e, "undo context switch", (e) => e.sendUndoContextSwitch(t));
}
function a(e, t) {
    return (0, s.b4)(e, "smart context", (e) => e.sendSmartContext(t));
}
