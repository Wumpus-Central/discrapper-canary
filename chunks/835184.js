n.d(e, { Z: () => T });
var i,
    l = n(442837),
    d = n(570140),
    r = n(314897),
    a = n(924301),
    s = n(658041),
    u = n(765305);
function _(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let E = {},
    o = {};
function c(t) {
    let e = { ...E };
    delete e[t], (E = e);
    let n = { ...o };
    delete n[t], (o = n);
}
class I extends (i = l.ZP.PersistedStore) {
    initialize(t) {
        if (null != t) {
            var e, n;
            (E = null !== (e = t.upcomingEventDismissals) && void 0 !== e ? e : {}), (o = null !== (n = t.upcomingEventSeenTimestamps) && void 0 !== n ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(t) {
        return E[t];
    }
    getAllEventDismissals() {
        return E;
    }
    getUpcomingNoticeSeenTime(t) {
        return o[t];
    }
    getAllUpcomingNoticeSeenTimes() {
        return o;
    }
    getState() {
        return {
            upcomingEventDismissals: E,
            upcomingEventSeenTimestamps: o
        };
    }
}
_(I, 'displayName', 'UpcomingEventNoticesStore'), _(I, 'persistKey', 'UpcomingEventNotices');
let T = new I(d.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
        let { eventId: e } = t,
            n = { ...E };
        (n[e] = Date.now()), (E = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
        let { guildScheduledEvent: e } = t;
        (e.status === u.p1.CANCELED || e.status === u.p1.COMPLETED) && c(e.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (t) {
        let { guildScheduledEvent: e } = t;
        c(e.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
        let { userId: e, guildEventId: n } = t;
        if (e !== r.default.getId()) return;
        let i = a.ZP.getGuildScheduledEvent(n);
        if (null == i || i.status !== u.p1.SCHEDULED || null != E[n]) return;
        let l = o[n];
        if ((0, s.M)(i, void 0, l, !1) === u.X_.NEW_EVENT) {
            let t = { ...E };
            (t[n] = Date.now()), (E = t);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
        let { guildEventId: e } = t,
            n = { ...o };
        (n[e] = Date.now()), (o = n);
    }
});
