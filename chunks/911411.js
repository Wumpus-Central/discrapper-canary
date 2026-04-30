n.d(t, { A: () => g }), n(321073);
var i = n(17928),
    l = n(451988),
    s = n(228366),
    r = n(308368),
    a = n(290863),
    u = n(360469);
let o = {},
    d = {},
    c = new l.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(d)) e.push(n), (o[t] = n), delete d[t];
        0 !== e.length && r.A.subscribeActivities(e);
    });
function h(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in o || i in d;
}
function A() {
    (o = {}), (d = {});
}
class f extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(a.A);
    }
    isSubscribed(e) {
        return h(e);
    }
}
let g = new f(s.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(o)) i.expiresAt < t && (delete o[n], (e = !0));
                for (let [n, i] of Object.entries(d)) i.expiresAt < t && (delete d[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: l, partyId: s, messageId: r, channelId: a, inviteTime: A } = t;
        if (h(t) || A + u.dm < Date.now()) return n;
        let f = `${l}:${s}`,
            g = u.dm + Date.now();
        return (
            (d[f] = { userId: i, applicationId: l, partyId: s, messageId: r, channelId: a, expiresAt: g }),
            c.delay(),
            !0
        );
    },
    CONNECTION_OPEN: A,
    CONNECTION_RESUMED: A,
    LOGOUT: function () {
        (o = {}), (d = {});
    },
});
