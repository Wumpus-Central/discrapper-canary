n.d(t, { A: () => A }), n(321073);
var i = n(17928),
    a = n(451988),
    r = n(228366),
    l = n(308368),
    s = n(290863),
    o = n(360469);
let c = {},
    d = {},
    u = new a.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(d)) e.push(n), (c[t] = n), delete d[t];
        0 !== e.length && l.A.subscribeActivities(e);
    });
function _(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in c || i in d;
}
function E() {
    (c = {}), (d = {});
}
class f extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(s.A);
    }
    isSubscribed(e) {
        return _(e);
    }
}
let A = new f(r.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(c)) i.expiresAt < t && (delete c[n], (e = !0));
                for (let [n, i] of Object.entries(d)) i.expiresAt < t && (delete d[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: a, partyId: r, messageId: l, channelId: s, inviteTime: E } = t;
        if (_(t) || E + o.dm < Date.now()) return n;
        let f = `${a}:${r}`,
            A = o.dm + Date.now();
        return (
            (d[f] = { userId: i, applicationId: a, partyId: r, messageId: l, channelId: s, expiresAt: A }),
            u.delay(),
            !0
        );
    },
    CONNECTION_OPEN: E,
    CONNECTION_RESUMED: E,
    LOGOUT: function () {
        (c = {}), (d = {});
    },
});
