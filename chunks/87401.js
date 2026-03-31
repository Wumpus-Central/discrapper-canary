n.d(t, { A: () => o });
var i = n(311907),
    l = n(73153),
    s = n(988794);
let a = {};
class r extends i.Ay.PersistedStore {
    static displayName = "EventBannerStore";
    static persistKey = "EventBanner";
    initialize(e) {
        null != e && (a = e.dismissedEventIds ?? {});
    }
    isEventDismissed(e) {
        return null != a[e];
    }
    getState() {
        return { dismissedEventIds: a };
    }
}
let o = new r(l.h, {
    EVENT_BANNER_DISMISS: function (e) {
        let { eventId: t } = e;
        a = { ...a, [t]: !0 };
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        if ((t.status !== s.XG.CANCELED && t.status !== s.XG.COMPLETED) || null == a[t.id]) return !1;
        let n = { ...a };
        delete n[t.id], (a = n);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        if (null == a[t.id]) return !1;
        let n = { ...a };
        delete n[t.id], (a = n);
    },
});
