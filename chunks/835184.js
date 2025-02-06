n.d(e, { Z: () => I });
var i,
    l = n(442837),
    r = n(570140),
    a = n(314897),
    d = n(924301),
    s = n(658041),
    u = n(765305);
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
    c = {};
function E(t) {
    let e = { ..._ };
    delete e[t], (_ = e);
    let n = { ...c };
    delete n[t], (c = n);
}
class g extends (i = l.ZP.PersistedStore) {
    initialize(t) {
        if (null != t) {
            var e, n;
            (_ = null !== (e = t.upcomingEventDismissals) && void 0 !== e ? e : {}), (c = null !== (n = t.upcomingEventSeenTimestamps) && void 0 !== n ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(t) {
        return _[t];
    }
    getAllEventDismissals() {
        return _;
    }
    getUpcomingNoticeSeenTime(t) {
        return c[t];
    }
    getAllUpcomingNoticeSeenTimes() {
        return c;
    }
    getState() {
        return {
            upcomingEventDismissals: _,
            upcomingEventSeenTimestamps: c
        };
    }
}
o(g, 'displayName', 'UpcomingEventNoticesStore'), o(g, 'persistKey', 'UpcomingEventNotices');
let I = new g(r.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
        let { eventId: e } = t,
            n = { ..._ };
        (n[e] = Date.now()), (_ = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
        let { guildScheduledEvent: e } = t;
        (e.status === u.p1.CANCELED || e.status === u.p1.COMPLETED) && E(e.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (t) {
        let { guildScheduledEvent: e } = t;
        E(e.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
        let { userId: e, guildEventId: n } = t;
        if (e !== a.default.getId()) return;
        let i = d.ZP.getGuildScheduledEvent(n);
        if (null == i || i.status !== u.p1.SCHEDULED || null != _[n]) return;
        let l = c[n];
        if ((0, s.M)(i, void 0, l, !1) === u.X_.NEW_EVENT) {
            let t = { ..._ };
            (t[n] = Date.now()), (_ = t);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
        let { guildEventId: e } = t,
            n = { ...c };
        (n[e] = Date.now()), (c = n);
    }
});
