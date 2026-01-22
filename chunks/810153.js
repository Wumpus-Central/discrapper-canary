n.d(t, {
    A: () => m,
}),
    n(896048);
var r,
    l = n(311907),
    i = n(73153),
    a = n(187508),
    s = n(927813),
    o = n(661191),
    c = n(322387);

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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 90 * s.A.Millis.DAY,
    h = {
        tab: null,
        localItemAcks: {},
        hasNewMentions: !1,
        isDataStale: !1,
        isRefreshing: !1,
    };
class b extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(a.Ay), null != e)) {
            var t;
            ((h = e).localItemAcks = (function (e) {
                let t = {};
                for (let [n, r] of Object.entries(e)) Date.now() - r < p && (t[n] = r);
                return t;
            })(null != (t = h.localItemAcks) ? t : {})),
                (h.isDataStale = !0);
        }
    }
    getState() {
        return h;
    }
    getTab() {
        var e;
        return null != (e = h.tab) ? e : c.$w.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != h.localItemAcks[e.local_id] || o.default.age(e.id) > p);
    }
    hasNewMentions() {
        return h.hasNewMentions;
    }
    isDataStale() {
        return h.isDataStale;
    }
    isRefreshing() {
        return h.isRefreshing;
    }
    shouldReload() {
        return h.hasNewMentions || h.isDataStale || h.isRefreshing;
    }
}

function g() {
    (h.hasNewMentions = !1), (h.isDataStale = !1), (h.isRefreshing = !1);
}
u(b, "displayName", "NotificationCenterStore"), u(b, "persistKey", "NotificationCenterStore");
let m = new b(i.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        h = f(d({}, h), {
            tab: e.tab,
        });
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let { localIds: t } = e;
        t.forEach((e) => {
            h = f(d({}, h), {
                localItemAcks: f(d({}, h.localItemAcks), {
                    [e]: Date.now(),
                }),
            });
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        h.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: g,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: g,
});
