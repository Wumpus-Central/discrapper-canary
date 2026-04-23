r.d(t, { A: () => s });
var o = r(311907),
    a = r(73153);
let l = n();
function n() {
    return { ignoreTimestamps: {} };
}
class i extends o.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        l = { ...n(), ignoreTimestamps: t };
    }
    getState() {
        return l;
    }
    getIgnoreTimestamps() {
        return l.ignoreTimestamps;
    }
}
let s = new i(a.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: r } = e;
        l.ignoreTimestamps[t] = r;
    },
});
