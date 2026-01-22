n.d(t, {
    A: () => d,
});
var r,
    l = n(311907),
    i = n(73153),
    a = n(988794);

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

function o(e) {
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
let c = {};
class u extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            c = null != (t = e.dismissedEventIds) ? t : {};
        }
    }
    isEventDismissed(e) {
        return null != c[e];
    }
    getState() {
        return {
            dismissedEventIds: c,
        };
    }
}
s(u, "displayName", "EventBannerStore"), s(u, "persistKey", "EventBanner");
let d = new u(i.h, {
    EVENT_BANNER_DISMISS: function (e) {
        var t, n;
        let { eventId: r } = e;
        (t = o({}, c)),
            (n = n =
                {
                    [r]: !0,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (c = t);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        if ((t.status !== a.XG.CANCELED && t.status !== a.XG.COMPLETED) || null == c[t.id]) return !1;
        let n = o({}, c);
        delete n[t.id], (c = n);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        if (null == c[t.id]) return !1;
        let n = o({}, c);
        delete n[t.id], (c = n);
    },
});
