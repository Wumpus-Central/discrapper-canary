n.d(t, { A: () => r });
var i = n(311907),
    l = n(73153);
let s = {};
class a extends i.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (s[t] = e[t]);
            });
    }
    getState() {
        return s;
    }
    hasViewed(e) {
        return null != s[e];
    }
}
let r = new a(l.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        s[t] = Date.now();
    },
});
