n.d(t, { Z: () => g });
var i,
    r = n(442837),
    l = n(570140),
    a = n(314897),
    o = n(924301),
    s = n(658041),
    c = n(765305);
function u(e, t, n) {
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let p = {},
    f = {};
function h(e) {
    let t = d({}, p);
    delete t[e], (p = t);
    let n = d({}, f);
    delete n[e], (f = n);
}
class m extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(a.default, o.ZP), null != e)) {
            var t, n;
            (p = null != (t = e.upcomingEventDismissals) ? t : {}),
                (f = null != (n = e.upcomingEventSeenTimestamps) ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return p[e];
    }
    getAllEventDismissals() {
        return p;
    }
    getUpcomingNoticeSeenTime(e) {
        return f[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return f;
    }
    getState() {
        return {
            upcomingEventDismissals: p,
            upcomingEventSeenTimestamps: f,
        };
    }
}
u(m, "displayName", "UpcomingEventNoticesStore"), u(m, "persistKey", "UpcomingEventNotices");
let g = new m(l.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: t } = e,
            n = d({}, p);
        (n[t] = Date.now()), (p = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        (t.status === c.p1.CANCELED || t.status === c.p1.COMPLETED) && h(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        h(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n } = e;
        if (t !== a.default.getId()) return;
        let i = o.ZP.getGuildScheduledEvent(n);
        if (null == i || i.status !== c.p1.SCHEDULED || null != p[n]) return;
        let r = f[n];
        if ((0, s.M)(i, void 0, r, !1) === c.X_.NEW_EVENT) {
            let e = d({}, p);
            (e[n] = Date.now()), (p = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: t } = e,
            n = d({}, f);
        (n[t] = Date.now()), (f = n);
    },
});
