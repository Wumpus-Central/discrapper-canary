n.d(t, { A: () => A }), n(896048), n(321073);
var r,
    l,
    i = n(311907),
    a = n(451988),
    s = n(73153),
    o = n(308368),
    c = n(290863),
    u = n(360469);
function d(e, t) {
    return "".concat(e, ":").concat(t);
}
let f = {},
    p = {},
    h = new a.J_(3000, function () {
        let e = [];
        for (let [t, n] of Object.entries(p)) e.push(n), (f[t] = n), delete p[t];
        0 !== e.length && o.A.subscribeActivities(e);
    });
function b(e) {
    let t = d(e.applicationId, e.partyId);
    return t in f || t in p;
}
function g() {
    (f = {}), (p = {});
}
class m extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A);
    }
    isSubscribed(e) {
        return b(e);
    }
}
(l = "displayName") in m
    ? Object.defineProperty(m, l, {
          value: "PresenceSubscriptionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[l] = "PresenceSubscriptionsStore");
let A = new m(s.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, r] of Object.entries(f)) r.expiresAt < t && (delete f[n], (e = !0));
                for (let [n, r] of Object.entries(p)) r.expiresAt < t && (delete p[n], (e = !0));
                return e;
            })(),
            { userId: r, applicationId: l, partyId: i, messageId: a, channelId: s, inviteTime: o } = t;
        if (b(t) || o + u.dm < Date.now()) return n;
        let c = d(l, i),
            g = u.dm + Date.now();
        return (
            (p[c] = {
                userId: r,
                applicationId: l,
                partyId: i,
                messageId: a,
                channelId: s,
                expiresAt: g,
            }),
            h.delay(),
            !0
        );
    },
    CONNECTION_OPEN: g,
    CONNECTION_RESUMED: g,
    LOGOUT: function () {
        (f = {}), (p = {});
    },
});
