n.d(t, { A: () => _ });
var s = n(311907),
    a = n(73153),
    l = n(187508),
    i = n(927813),
    r = n(661191),
    o = n(322387);
let d = 90 * i.A.Millis.DAY,
    c = { tab: null, localItemAcks: {}, hasNewMentions: !1, isDataStale: !1, isRefreshing: !1 };
class u extends s.Ay.PersistedStore {
    static displayName = "NotificationCenterStore";
    static persistKey = "NotificationCenterStore";
    initialize(e) {
        this.waitFor(l.Ay),
            null != e &&
                (((c = e).localItemAcks = (function (e) {
                    let t = {};
                    for (let [n, s] of Object.entries(e)) Date.now() - s < d && (t[n] = s);
                    return t;
                })(c.localItemAcks ?? {})),
                (c.isDataStale = !0));
    }
    getState() {
        return c;
    }
    getTab() {
        return c.tab ?? o.$w.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != c.localItemAcks[e.local_id] || r.default.age(e.id) > d);
    }
    hasNewMentions() {
        return c.hasNewMentions;
    }
    isDataStale() {
        return c.isDataStale;
    }
    isRefreshing() {
        return c.isRefreshing;
    }
    shouldReload() {
        return c.hasNewMentions || c.isDataStale || c.isRefreshing;
    }
}
function h() {
    (c.hasNewMentions = !1), (c.isDataStale = !1), (c.isRefreshing = !1);
}
let _ = new u(a.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        c = { ...c, tab: e.tab };
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let { localIds: t } = e;
        t.forEach((e) => {
            c = { ...c, localItemAcks: { ...c.localItemAcks, [e]: Date.now() } };
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        c.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: h,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: h,
});
