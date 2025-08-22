n.d(t, { Z: () => _ });
var l,
    i = n(442837),
    r = n(570140),
    u = n(314897),
    a = n(924301),
    o = n(658041),
    s = n(765305);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let E = {},
    f = {};
function N(e) {
    let t = d({}, E);
    delete t[e], (E = t);
    let n = d({}, f);
    delete n[e], (f = n);
}
class g extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (E = null != (t = e.upcomingEventDismissals) ? t : {}),
                (f = null != (n = e.upcomingEventSeenTimestamps) ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return E[e];
    }
    getAllEventDismissals() {
        return E;
    }
    getUpcomingNoticeSeenTime(e) {
        return f[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return f;
    }
    getState() {
        return {
            upcomingEventDismissals: E,
            upcomingEventSeenTimestamps: f,
        };
    }
}
c(g, "displayName", "UpcomingEventNoticesStore"), c(g, "persistKey", "UpcomingEventNotices");
let _ = new g(r.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = d({}, E);
        (n[t] = Date.now()), (E = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === s.p1.CANCELED || t.status === s.p1.COMPLETED) && N(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        N(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== u.default.getId()) return;
        let l = a.ZP.getGuildScheduledEvent(n);
        if (null == l || l.status !== s.p1.SCHEDULED || null != E[n]) return;
        let i = f[n];
        if ((0, o.M)(l, void 0, i, !1) === s.X_.NEW_EVENT) {
            let e = d({}, E);
            (e[n] = Date.now()), (E = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = d({}, f);
        (n[t] = Date.now()), (f = n);
    },
});
