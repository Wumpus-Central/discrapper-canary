s.d(t, { A: () => u });
var n = s(17928),
    r = s(73153);
let a = new Set();
class i extends n.Ay.Store {
    isPaused(e) {
        return null != e && a.has(e);
    }
}
let u = new i(r.h, {
    LOGOUT: function () {
        if (0 === a.size) return !1;
        a.clear();
    },
    CONJURE_PREVIEW_PAUSED_SET: function (e) {
        let { projectId: t, paused: s } = e;
        if (a.has(t) === s) return !1;
        s ? a.add(t) : a.delete(t);
    },
});
