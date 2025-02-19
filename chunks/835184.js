n.d(t, { Z: () => g });
var l,
    r = n(442837),
    i = n(570140),
    u = n(314897),
    c = n(924301),
    d = n(658041),
    o = n(765305);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
let s = {},
    f = {};
function N(e) {
    let t = a({}, s);
    delete t[e], (s = t);
    let n = a({}, f);
    delete n[e], (f = n);
}
class _ extends (l = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (s = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}), (f = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return s[e];
    }
    getAllEventDismissals() {
        return s;
    }
    getUpcomingNoticeSeenTime(e) {
        return f[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return f;
    }
    getState() {
        return {
            upcomingEventDismissals: s,
            upcomingEventSeenTimestamps: f
        };
    }
}
E(_, 'displayName', 'UpcomingEventNoticesStore'), E(_, 'persistKey', 'UpcomingEventNotices');
let g = new _(i.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = a({}, s);
        (n[t] = Date.now()), (s = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === o.p1.CANCELED || t.status === o.p1.COMPLETED) && N(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        N(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== u.default.getId()) return;
        let l = c.ZP.getGuildScheduledEvent(n);
        if (null == l || l.status !== o.p1.SCHEDULED || null != s[n]) return;
        let r = f[n];
        if ((0, d.M)(l, void 0, r, !1) === o.X_.NEW_EVENT) {
            let e = a({}, s);
            (e[n] = Date.now()), (s = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = a({}, f);
        (n[t] = Date.now()), (f = n);
    }
});
