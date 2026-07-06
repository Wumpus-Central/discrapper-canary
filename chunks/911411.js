"use strict";
n.d(t, { A: () => E }), n(321073);
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
function h() {
    (u = {}), (c = {});
}
class f extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(o.A);
    }
    isSubscribed(e) {
        return _(e);
    }
}
let E = new f(s.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(u)) i.expiresAt < t && (delete u[n], (e = !0));
                for (let [n, i] of Object.entries(c)) i.expiresAt < t && (delete c[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: r, partyId: s, messageId: a, channelId: o, inviteTime: h } = t;
        if (_(t) || h + l.dm < Date.now()) return n;
        let f = `${r}:${s}`,
            E = l.dm + Date.now();
        return (
            (c[f] = { userId: i, applicationId: r, partyId: s, messageId: a, channelId: o, expiresAt: E }),
            d.delay(),
            !0
        );
    },
    CONNECTION_OPEN: h,
    CONNECTION_RESUMED: h,
    LOGOUT: function () {
        (u = {}), (c = {});
    },
});
