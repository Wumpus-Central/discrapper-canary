n.d(t, { A: () => r });
var i = n(17928),
    l = n(73153);
let _ = new Set();
class u extends i.Ay.Store {
    isPaused(e) {
        return null != e && _.has(e);
    }
}
let r = new u(l.h, {
    LOGOUT: function () {
        if (0 === _.size) return !1;
        _.clear();
    },
    CONJURE_PREVIEW_PAUSED_SET: function (e) {
        let { projectId: t, paused: n } = e;
        if (_.has(t) === n) return !1;
        n ? _.add(t) : _.delete(t);
    },
});
