n.d(e, { Z: () => E });
var l,
    r = n(442837),
    i = n(570140),
    o = n(314897),
    u = n(924301),
    c = n(658041),
    a = n(765305);
function s(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function d(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                s(t, e, n[e]);
            });
    }
    return t;
}
let g = {},
    f = {};
function b(t) {
    let e = d({}, g);
    delete e[t], (g = e);
    let n = d({}, f);
    delete n[t], (f = n);
}
class v extends (l = r.ZP.PersistedStore) {
    initialize(t) {
        if (null != t) {
            var e, n;
            (g = null != (e = t.upcomingEventDismissals) ? e : {}),
                (f = null != (n = t.upcomingEventSeenTimestamps) ? n : {});
        }
    }
    getGuildEventNoticeDismissalTime(t) {
        return g[t];
    }
    getAllEventDismissals() {
        return g;
    }
    getUpcomingNoticeSeenTime(t) {
        return f[t];
    }
    getAllUpcomingNoticeSeenTimes() {
        return f;
    }
    getState() {
        return {
            upcomingEventDismissals: g,
            upcomingEventSeenTimestamps: f,
        };
    }
}
s(v, "displayName", "UpcomingEventNoticesStore"), s(v, "persistKey", "UpcomingEventNotices");
let E = new v(i.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
        let { eventId: e } = t,
            n = d({}, g);
        (n[e] = Date.now()), (g = n);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
        let { guildScheduledEvent: e } = t;
        (e.status === a.p1.CANCELED || e.status === a.p1.COMPLETED) && b(e.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (t) {
        let { guildScheduledEvent: e } = t;
        b(e.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
        let { userId: e, guildEventId: n } = t;
        if (e !== o.default.getId()) return;
        let l = u.ZP.getGuildScheduledEvent(n);
        if (null == l || l.status !== a.p1.SCHEDULED || null != g[n]) return;
        let r = f[n];
        if ((0, c.M)(l, void 0, r, !1) === a.X_.NEW_EVENT) {
            let t = d({}, g);
            (t[n] = Date.now()), (g = t);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
        let { guildEventId: e } = t,
            n = d({}, f);
        (n[e] = Date.now()), (f = n);
    },
});
