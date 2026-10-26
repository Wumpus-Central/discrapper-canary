n.d(t, { A: () => i });
var r = n(17928),
    s = n(73153);
let o = new Map();
class l extends r.Ay.Store {
    getLiveReload(e) {
        return o.get(e) ?? null;
    }
}
let i = new l(s.h, {
    CONJURE_LIVE_RELOAD_SET: function (e) {
        let { projectId: t, enabled: n, error: r, phase: s, step: l, background: i } = e;
        o.set(t, { enabled: n, error: r, phase: s, step: l, ...(!0 === i ? { background: i } : {}) });
    },
});
