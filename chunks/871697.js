"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(73153);
let l = {};
class r extends i.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (l[t] = e[t]);
            });
    }
    getState() {
        return l;
    }
    hasViewed(e) {
        return null != l[e];
    }
}
let a = new r(s.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        l[t] = Date.now();
    },
});
