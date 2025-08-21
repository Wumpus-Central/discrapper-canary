t.d(n, { Z: () => g });
var r,
    l = t(442837),
    i = t(570140),
    c = t(314897),
    o = t(924301),
    a = t(658041),
    u = t(765305);
function s(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                s(e, n, t[n]);
            });
    }
    return e;
}
let _ = {},
    E = {};
function f(e) {
    let n = d({}, _);
    delete n[e], (_ = n);
    let t = d({}, E);
    delete t[e], (E = t);
}
class p extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n, t;
            (_ = null != (n = e.upcomingEventDismissals) ? n : {}),
                (E = null != (t = e.upcomingEventSeenTimestamps) ? t : {});
        }
    }
    getGuildEventNoticeDismissalTime(e) {
        return _[e];
    }
    getAllEventDismissals() {
        return _;
    }
    getUpcomingNoticeSeenTime(e) {
        return E[e];
    }
    getAllUpcomingNoticeSeenTimes() {
        return E;
    }
    getState() {
        return {
            upcomingEventDismissals: _,
            upcomingEventSeenTimestamps: E,
        };
    }
}
s(p, "displayName", "UpcomingEventNoticesStore"), s(p, "persistKey", "UpcomingEventNotices");
let g = new p(i.Z, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
        let { eventId: n } = e,
            t = d({}, _);
        (t[n] = Date.now()), (_ = t);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: n } = e;
        (n.status === u.p1.CANCELED || n.status === u.p1.COMPLETED) && f(n.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: n } = e;
        f(n.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: n, guildEventId: t } = e;
        if (n !== c.default.getId()) return;
        let r = o.ZP.getGuildScheduledEvent(t);
        if (null == r || r.status !== u.p1.SCHEDULED || null != _[t]) return;
        let l = E[t];
        if ((0, a.M)(r, void 0, l, !1) === u.X_.NEW_EVENT) {
            let e = d({}, _);
            (e[t] = Date.now()), (_ = e);
        }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
        let { guildEventId: n } = e,
            t = d({}, E);
        (t[n] = Date.now()), (E = t);
    },
});
