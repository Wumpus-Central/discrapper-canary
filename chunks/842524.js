"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    r = n(73153);
let s = l();
function l() {
    return { ignoreTimestamps: {} };
}
class a extends i.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        s = { ...l(), ignoreTimestamps: t };
    }
    getState() {
        return s;
    }
    getIgnoreTimestamps() {
        return s.ignoreTimestamps;
    }
}
let c = new a(r.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        s.ignoreTimestamps[t] = n;
    },
});
