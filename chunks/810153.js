n.d(t, { A: () => A });
var i = n(311907),
    l = n(73153),
    s = n(187508),
    a = n(927813),
    r = n(661191),
    o = n(322387);
let c = 90 * a.A.Millis.DAY,
    d = { tab: null, localItemAcks: {}, hasNewMentions: !1, isDataStale: !1, isRefreshing: !1 };
class u extends i.Ay.PersistedStore {
    static displayName = "NotificationCenterStore";
    static persistKey = "NotificationCenterStore";
    initialize(e) {
        this.waitFor(s.Ay),
            null != e &&
                (((d = e).localItemAcks = (function (e) {
                    let t = {};
                    for (let [n, i] of Object.entries(e)) Date.now() - i < c && (t[n] = i);
                    return t;
                })(d.localItemAcks ?? {})),
                (d.isDataStale = !0));
    }
    getState() {
        return d;
    }
    getTab() {
        return d.tab ?? o.$w.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != d.localItemAcks[e.local_id] || r.default.age(e.id) > c);
    }
    hasNewMentions() {
        return d.hasNewMentions;
    }
    isDataStale() {
        return d.isDataStale;
    }
    isRefreshing() {
        return d.isRefreshing;
    }
    shouldReload() {
        return d.hasNewMentions || d.isDataStale || d.isRefreshing;
    }
}
function h() {
    (d.hasNewMentions = !1), (d.isDataStale = !1), (d.isRefreshing = !1);
}
let A = new u(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        d = { ...d, tab: e.tab };
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let { localIds: t } = e;
        t.forEach((e) => {
            d = { ...d, localItemAcks: { ...d.localItemAcks, [e]: Date.now() } };
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        d.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: h,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: h,
});
