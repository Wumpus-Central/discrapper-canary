(n.d(t, { A: () => C }), n(321073));
var i = n(17928),
    l = n(451988),
    r = n(73153),
    s = n(308368),
    a = n(290863),
    o = n(818023);
let u = {},
    d = {},
    c = new l.J_(3e3, function () {
        let e = [];
        for (let [t, n] of Object.entries(d)) (e.push(n), (u[t] = n), delete d[t]);
        0 !== e.length && s.A.subscribeActivities(e);
    });
function h(e) {
    var t, n;
    let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
    return i in u || i in d;
}
function f() {
    ((u = {}), (d = {}));
}
class g extends i.Ay.Store {
    static displayName = "PresenceSubscriptionsStore";
    initialize() {
        this.waitFor(a.A);
    }
    isSubscribed(e) {
        return h(e);
    }
}
let C = new g(r.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
        let { subscription: t } = e,
            n = (function () {
                let e = !1,
                    t = Date.now();
                for (let [n, i] of Object.entries(u)) i.expiresAt < t && (delete u[n], (e = !0));
                for (let [n, i] of Object.entries(d)) i.expiresAt < t && (delete d[n], (e = !0));
                return e;
            })(),
            { userId: i, applicationId: l, partyId: r, messageId: s, channelId: a, inviteTime: f } = t;
        if (h(t) || f + o.dm < Date.now()) return n;
        let g = `${l}:${r}`,
            C = o.dm + Date.now();
        return (
            (d[g] = { userId: i, applicationId: l, partyId: r, messageId: s, channelId: a, expiresAt: C }),
            c.delay(),
            !0
        );
    },
    CONNECTION_OPEN: f,
    CONNECTION_RESUMED: f,
    LOGOUT: function () {
        ((u = {}), (d = {}));
    },
});
