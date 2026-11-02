n.d(t, { A: () => l });
var r = n(17928),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getLiveReload(e) {
        return i.get(e) ?? null;
    }
}
let l = new o(s.h, {
    CONJURE_LIVE_RELOAD_SET: function (e) {
        let { projectId: t, enabled: n, error: r, phase: s, step: o, background: l } = e;
        i.set(t, { enabled: n, error: r, phase: s, step: o, ...(!0 === l ? { background: l } : {}) });
    },
});
