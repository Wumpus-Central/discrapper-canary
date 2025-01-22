var i,
    l = n(442837),
    r = n(570140),
    d = n(314897),
    a = n(924301),
    u = n(658041),
    s = n(765305);
function o(t, e, n) {
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
let _ = {},
    E = {};
function c(t) {
    let e = { ..._ };
    delete e[t], (_ = e);
    let n = { ...E };
    delete n[t], (E = n);
}
class I extends (i = l.ZP.PersistedStore) {
    initialize(t) {
        if (null != t) {
            var e, n;
            (_ = null !== (e = t.upcomingEventDismissals) && void 0 !== e ? e : {}), (E = null !== (n = t.upcomingEventSeenTimestamps) && void 0 !== n ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(t) {
        return _[t];
    }
    getAllEventDismissals() {
        return _;
    }
    getUpcomingNoticeSeenTime(t) {
        return E[t];
    }
    getAllUpcomingNoticeSeenTimes() {
        return E;
    }
    getState() {
        return {
            upcomingEventDismissals: _,
            upcomingEventSeenTimestamps: E
        };
    }
}
o(I, 'displayName', 'UpcomingEventNoticesStore'),
    o(I, 'persistKey', 'UpcomingEventNotices'),
    (e.Z = new I(r.Z, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
            let { eventId: e } = t,
                n = { ..._ };
            (n[e] = Date.now()), (_ = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
            let { guildScheduledEvent: e } = t;
            (e.status === s.p1.CANCELED || e.status === s.p1.COMPLETED) && c(e.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (t) {
            let { guildScheduledEvent: e } = t;
            c(e.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
            let { userId: e, guildEventId: n } = t;
            if (e !== d.default.getId()) return;
            let i = a.ZP.getGuildScheduledEvent(n);
            if (null == i || i.status !== s.p1.SCHEDULED || null != _[n]) return;
            let l = E[n];
            if ((0, u.M)(i, void 0, l, !1) === s.X_.NEW_EVENT) {
                let t = { ..._ };
                (t[n] = Date.now()), (_ = t);
            }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
            let { guildEventId: e } = t,
                n = { ...E };
            (n[e] = Date.now()), (E = n);
        }
    }));
