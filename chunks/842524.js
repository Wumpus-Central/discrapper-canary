n.d(t, { A: () => o });
var i = n(311907),
    l = n(73153);
let a = r();
function r() {
    return { ignoreTimestamps: {} };
}
class s extends i.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        a = { ...r(), ignoreTimestamps: t };
    }
    getState() {
        return a;
    }
    getIgnoreTimestamps() {
        return a.ignoreTimestamps;
    }
}
let o = new s(l.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        a.ignoreTimestamps[t] = n;
    },
});
