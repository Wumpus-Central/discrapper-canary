"use strict";
n.d(t, { A: () => d });
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(157559),
    l = n(652215),
    u = n(375708);
let c = ["Spidey Bot", "Captain Hook"],
    d = {
        fetchForGuild(e) {
            a.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
                s.Bo.get({ url: l.Rsh.GUILD_WEBHOOKS(e), oldFormErrors: !0, rejectWithError: !1 })
                    .then((t) => {
                        let { body: n } = t;
                        return a.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, webhooks: n });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        a.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
                    });
        },
        fetchForChannel(e, t) {
            a.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
                s.Bo.get({ url: l.Rsh.CHANNEL_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !0 })
                    .then((n) => {
                        let { body: i } = n;
                        return a.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, channelId: t, webhooks: i });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        a.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
                    });
        },
        create: (e, t, n) => (
            null == n && (n = c[r().random(0, c.length - 1)]),
            s.Bo.post({ url: l.Rsh.CHANNEL_WEBHOOKS(t), body: { name: n }, oldFormErrors: !0, rejectWithError: !1 })
                .then((t) => {
                    let { body: n } = t;
                    return a.h.dispatch({ type: "WEBHOOK_CREATE", guildId: e, webhook: n }), n;
                })
                .catch((e) => {
                    let { body: t, status: n } = e;
                    return (
                        null != t && t.code === l.t02.TOO_MANY_WEBHOOKS
                            ? o.A.show({ title: u.intl.string(u.t.cCqsca), body: u.intl.string(u.t["w+QZoX"]) })
                            : 429 === n
                              ? o.A.show({ title: u.intl.string(u.t.cCqsca), body: u.intl.string(u.t["YBM+UW"]) })
                              : o.A.show({ title: u.intl.string(u.t.cCqsca), body: u.intl.string(u.t["/4TwKf"]) }),
                        null
                    );
                })
        ),
        delete: (e, t) =>
            s.Bo.del({ url: l.Rsh.WEBHOOK(t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                a.h.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
            }),
        update: (e, t, n) =>
            s.Bo.patch({ url: l.Rsh.WEBHOOK(t), body: n, oldFormErrors: !0, rejectWithError: !1 }).then((t) => {
                let { body: n } = t;
                return a.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: e, webhook: n }), n;
            }),
    };
