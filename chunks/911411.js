n.d(t, { A: () => g }), n(321073);
var i = n(311907),
    l = n(451988),
    a = n(73153),
    s = n(308368),
    r = n(290863),
    o = n(360469);
let c = {},
    d = {},
    u = new l.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(d)) e.push(n), (c[t] = n), delete d[t];
        0 !== e.length && s.A.subscribeActivities(e);
    });
function h(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in c || i in d;
}
function m() {
    (c = {}), (d = {});
}
class A extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(r.A);
    }
    isSubscribed(e) {
        return h(e);
    }
}
let g = new A(a.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(c)) i.expiresAt < t && (delete c[n], (e = !0));
                for (let [n, i] of Object.entries(d)) i.expiresAt < t && (delete d[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: l, partyId: a, messageId: s, channelId: r, inviteTime: m } = t;
        if (h(t) || m + o.dm < Date.now()) return n;
        let A = `${l}:${a}`,
            g = o.dm + Date.now();
        return (
            (d[A] = { userId: i, applicationId: l, partyId: a, messageId: s, channelId: r, expiresAt: g }),
            u.delay(),
            !0
        );
    },
    CONNECTION_OPEN: m,
    CONNECTION_RESUMED: m,
    LOGOUT: function () {
        (c = {}), (d = {});
    },
});
