n.d(t, { A: () => r });
var i = n(17928),
    l = n(73153);
let u = new Set();
class _ extends i.Ay.Store {
    isPaused(e) {
        return null != e && u.has(e);
    }
}
let r = new _(l.h, {
    LOGOUT: function () {
        if (0 === u.size) return !1;
        u.clear();
    },
    CONJURE_PREVIEW_PAUSED_SET: function (e) {
        let { projectId: t, paused: n } = e;
        if (u.has(t) === n) return !1;
        n ? u.add(t) : u.delete(t);
    },
});
