E.d(e, { A: () => c });
var i = E(17928),
    n = E(73153);
let _ = new Set();
class a extends i.Ay.Store {
    isPaused(t) {
        return null != t && _.has(t);
    }
}
let c = new a(n.h, {
    LOGOUT: function () {
        if (0 === _.size) return !1;
        _.clear();
    },
    CONJURE_PREVIEW_PAUSED_SET: function (t) {
        let { projectId: e, paused: E } = t;
        if (_.has(e) === E) return !1;
        E ? _.add(e) : _.delete(e);
    },
});
