n.d(t, { U: () => o, c: () => i });
var r = n(73153),
    s = n(975189);
let o = {
    live_reload(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({
            type: "CONJURE_LIVE_RELOAD_SET",
            projectId: n,
            enabled: e.enabled,
            error: e.error ?? null,
            phase: e.phase ?? null,
            step: e.step ?? null,
        });
    },
};
function i(e, t) {
    let n = (0, s.KY)(e);
    try {
        if (null == n) throw Error("Not connected");
        return (n.sendLiveReload(t), !0);
    } catch (e) {
        return (console.error("[vibegrations] live reload send failed", e), !1);
    }
}
