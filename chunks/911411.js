n.d(t, { A: () => A }), n(321073);
var i = n(17928),
    l = n(451988),
    r = n(228366),
    s = n(308368),
    a = n(290863),
    o = n(360469);
let u = {},
    d = {},
    c = new l.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(d)) e.push(n), (u[t] = n), delete d[t];
        0 !== e.length && s.A.subscribeActivities(e);
    });
function h(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in u || i in d;
}
function g() {
    (u = {}), (d = {});
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
let A = new f(r.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(u)) i.expiresAt < t && (delete u[n], (e = !0));
                for (let [n, i] of Object.entries(d)) i.expiresAt < t && (delete d[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: l, partyId: r, messageId: s, channelId: a, inviteTime: g } = t;
        if (h(t) || g + o.dm < Date.now()) return n;
        let f = `${l}:${r}`,
            A = o.dm + Date.now();
        return (
            (d[f] = { userId: i, applicationId: l, partyId: r, messageId: s, channelId: a, expiresAt: A }),
            c.delay(),
            !0
        );
    },
    CONNECTION_OPEN: g,
    CONNECTION_RESUMED: g,
    LOGOUT: function () {
        (u = {}), (d = {});
    },
});
