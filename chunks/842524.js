"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    r = n(73153);
let l = s();
function s() {
    return { ignoreTimestamps: {} };
}
class a extends i.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        l = { ...s(), ignoreTimestamps: t };
    }
    getState() {
        return l;
    }
    getIgnoreTimestamps() {
        return l.ignoreTimestamps;
    }
}
let o = new a(r.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        l.ignoreTimestamps[t] = n;
    },
});
