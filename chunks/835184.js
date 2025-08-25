n.d(t, { Z: () => N });
var r,
    l = n(442837),
    i = n(570140),
    u = n(314897),
    c = n(924301),
    o = n(658041),
    a = n(765305);
function s(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let f = {},
    E = {};
function Z(e) {
    let t = d({}, f);
    delete t[e], (f = t);
    let n = d({}, E);
    delete n[e], (E = n);
}
class g extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (f = null != (t = e.upcomingEventDismissals) ? t : {}),
                (E = null != (n = e.upcomingEventSeenTimestamps) ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return f[e];
    }
    getAllEventDismissals() {
        return f;
    }
    getUpcomingNoticeSeenTime(e) {
        return E[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return E;
    }
    getState() {
        return {
            upcomingEventDismissals: f,
            upcomingEventSeenTimestamps: E,
        };
    }
}
s(g, "displayName", "UpcomingEventNoticesStore"), s(g, "persistKey", "UpcomingEventNotices");
let N = new g(i.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = d({}, f);
        (n[t] = Date.now()), (f = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) && Z(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        Z(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== u.default.getId()) return;
        let r = c.ZP.getGuildScheduledEvent(n);
        if (null == r || r.status !== a.p1.SCHEDULED || null != f[n]) return;
        let l = E[n];
        if ((0, o.M)(r, void 0, l, !1) === a.X_.NEW_EVENT) {
            let e = d({}, f);
            (e[n] = Date.now()), (f = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = d({}, E);
        (n[t] = Date.now()), (E = n);
    },
});
