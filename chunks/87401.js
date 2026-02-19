"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153),
    l = n(988794);
let r = {};
class a extends i.Ay.PersistedStore {
    static displayName = "EventBannerStore";
    static persistKey = "EventBanner";
    initialize(e) {
        null != e && (r = e.dismissedEventIds ?? {});
    }
    isEventDismissed(e) {
        return null != r[e];
    }
    getState() {
        return { dismissedEventIds: r };
    }
}
let o = new a(s.h, {
    EVENT_BANNER_DISMISS: function (e) {
        let { eventId: t } = e;
        r = { ...r, [t]: !0 };
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        if ((t.status !== l.XG.CANCELED && t.status !== l.XG.COMPLETED) || null == r[t.id]) return !1;
        let n = { ...r };
        delete n[t.id], (r = n);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        if (null == r[t.id]) return !1;
        let n = { ...r };
        delete n[t.id], (r = n);
    },
});
