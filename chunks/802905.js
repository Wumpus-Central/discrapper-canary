n.d(t, { A: () => a });
var u = n(17928),
    r = n(73153);
let s = new Set();
class i extends u.Ay.Store {
    isPaused(e) {
        return null != e && s.has(e);
    }
}
let a = new i(r.h, {
    LOGOUT: function () {
        if (0 === s.size) return !1;
        s.clear();
    },
    CONJURE_PREVIEW_PAUSED_SET: function (e) {
        let { projectId: t, paused: n } = e;
        if (s.has(t) === n) return !1;
        n ? s.add(t) : s.delete(t);
    },
});
