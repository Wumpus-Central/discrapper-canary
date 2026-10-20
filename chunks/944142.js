n.d(t, { A: () => l });
var s = n(17928),
    r = n(73153);
let o = new Map();
class i extends s.Ay.Store {
    getLiveReload(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(r.h, {
    CONJURE_LIVE_RELOAD_SET: function (e) {
        let { projectId: t, enabled: n, error: s, phase: r, step: i, background: l } = e;
        o.set(t, { enabled: n, error: s, phase: r, step: i, ...(!0 === l ? { background: l } : {}) });
    },
});
