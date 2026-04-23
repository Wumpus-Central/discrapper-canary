t.d(n, { A: () => o });
var l = t(311907),
    i = t(73153),
    a = t(988794);
let s = {};
class r extends l.Ay.PersistedStore {
    static displayName = "EventBannerStore";
    static persistKey = "EventBanner";
    initialize(e) {
        null != e && (s = e.dismissedEventIds ?? {});
    }
    isEventDismissed(e) {
        return null != s[e];
    }
    getState() {
        return { dismissedEventIds: s };
    }
}
let o = new r(i.h, {
    EVENT_BANNER_DISMISS: function (e) {
        let { eventId: n } = e;
        s = { ...s, [n]: !0 };
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: n } = e;
        if ((n.status !== a.XG.CANCELED && n.status !== a.XG.COMPLETED) || null == s[n.id]) return !1;
        let t = { ...s };
        delete t[n.id], (s = t);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: n } = e;
        if (null == s[n.id]) return !1;
        let t = { ...s };
        delete t[n.id], (s = t);
    },
});
