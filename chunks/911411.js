"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(17928),
    r = n(451988),
    s = n(228366),
    a = n(308368),
    o = n(290863),
    l = n(360469);
let u = {},
    c = {},
    d = new r.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(c)) e.push(n), (u[t] = n), delete c[t];
        0 !== e.length && a.A.subscribeActivities(e);
    });
function _(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in u || i in c;
}
function f() {
    (u = {}), (c = {});
}
class h extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(o.A);
    }
    isSubscribed(e) {
        return _(e);
    }
}
let p = new h(s.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(u)) i.expiresAt < t && (delete u[n], (e = !0));
                for (let [n, i] of Object.entries(c)) i.expiresAt < t && (delete c[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: r, partyId: s, messageId: a, channelId: o, inviteTime: f } = t;
        if (_(t) || f + l.dm < Date.now()) return n;
        let h = `${r}:${s}`,
            p = l.dm + Date.now();
        return (
            (c[h] = { userId: i, applicationId: r, partyId: s, messageId: a, channelId: o, expiresAt: p }),
            d.delay(),
            !0
        );
    },
    CONNECTION_OPEN: f,
    CONNECTION_RESUMED: f,
    LOGOUT: function () {
        (u = {}), (c = {});
    },
});
