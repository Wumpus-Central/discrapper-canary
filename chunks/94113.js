s.d(t, { A: () => d });
var n = s(311907),
    i = s(73153),
    l = s(522435);
s(131955);
let r = { recentImageUrls: [] },
    a = r;
function c(e) {
    let t = (0, l.K7)(e),
        s = a.recentImageUrls.filter((e) => e !== t);
    return (a = { recentImageUrls: [t, ...s].slice(0, 6) }), !0;
}
class o extends n.Ay.PersistedStore {
    static displayName = "HangoutWindowHistoryStore";
    static persistKey = "HangoutWindowHistoryStore";
    initialize(e) {
        a = e ?? r;
    }
    getState() {
        return a;
    }
    getRecentImageUrls() {
        return a.recentImageUrls;
    }
}
let d = new o(i.h, {
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        let { status: t } = e;
        return !!(null != t && (0, l.TP)(t)) && c(t);
    },
    HANGOUT_WINDOW_IMAGE_SELECTED: function (e) {
        let { url: t } = e;
        return c(t);
    },
    LOGOUT: function () {
        return (a = r), !0;
    },
});
