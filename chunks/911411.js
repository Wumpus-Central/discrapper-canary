"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(17928),
    r = n(451988),
    a = n(228366),
    s = n(308368),
    l = n(290863),
    o = n(360469);
let d = {},
    c = {},
    u = new r.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(c)) e.push(n), (d[t] = n), delete c[t];
        0 !== e.length && s.A.subscribeActivities(e);
    });
function _(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in d || i in c;
}
function E() {
    (d = {}), (c = {});
}
class A extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(l.A);
    }
    isSubscribed(e) {
        return _(e);
    }
}
let h = new A(a.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(d)) i.expiresAt < t && (delete d[n], (e = !0));
                for (let [n, i] of Object.entries(c)) i.expiresAt < t && (delete c[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: r, partyId: a, messageId: s, channelId: l, inviteTime: E } = t;
        if (_(t) || E + o.dm < Date.now()) return n;
        let A = `${r}:${a}`,
            h = o.dm + Date.now();
        return (
            (c[A] = { userId: i, applicationId: r, partyId: a, messageId: s, channelId: l, expiresAt: h }),
            u.delay(),
            !0
        );
    },
    CONNECTION_OPEN: E,
    CONNECTION_RESUMED: E,
    LOGOUT: function () {
        (d = {}), (c = {});
    },
});
