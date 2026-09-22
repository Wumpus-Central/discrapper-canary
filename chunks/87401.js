t.d(n, { A: () => r });
var i = t(17928),
    l = t(228366),
    s = t(988794);
let a = {};
class o extends i.Ay.PersistedStore {
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
let r = new o(l.h, {
    EVENT_BANNER_DISMISS: function (e) {
        let { eventId: n } = e;
        a = { ...a, [n]: !0 };
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: n } = e;
        if ((n.status !== s.XG.CANCELED && n.status !== s.XG.COMPLETED) || null == a[n.id]) return !1;
        let t = { ...a };
        (delete t[n.id], (a = t));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: n } = e;
        if (null == a[n.id]) return !1;
        let t = { ...a };
        (delete t[n.id], (a = t));
    },
});
