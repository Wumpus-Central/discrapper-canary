n.d(t, { A: () => l });
var r = n(17928),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getLiveReload(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(s.h, {
    CONJURE_LIVE_RELOAD_SET: function (e) {
        let { projectId: t, enabled: n, error: r, phase: s, step: i } = e;
        o.set(t, { enabled: n, error: r, phase: s, step: i });
    },
});
