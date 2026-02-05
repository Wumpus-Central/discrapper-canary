"use strict";
n.d(t, { A: () => u });
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(652215);
let l = ["Spidey Bot", "Captain Hook"],
    u = {
        fetchForGuild(e) {
            s.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
                a.Bo.get({ url: o.Rsh.GUILD_WEBHOOKS(e), oldFormErrors: !0, rejectWithError: !1 })
                    .then((t) => {
                        let { body: n } = t;
                        return s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, webhooks: n });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
                    });
        },
        fetchForChannel(e, t) {
            s.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
                a.Bo.get({ url: o.Rsh.CHANNEL_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !0 })
                    .then((n) => {
                        let { body: r } = n;
                        return s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, channelId: t, webhooks: r });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        s.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
                    });
        },
        create: (e, t, n) => (
            null == n && (n = l[i().random(0, l.length - 1)]),
            a.Bo.post({
                url: o.Rsh.CHANNEL_WEBHOOKS(t),
                body: { name: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => {
                let { body: n } = t;
                return s.h.dispatch({ type: "WEBHOOK_CREATE", guildId: e, webhook: n }), n;
            })
        ),
        delete: (e, t) =>
            a.Bo.del({ url: o.Rsh.WEBHOOK(t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                s.h.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
            }),
        update: (e, t, n) =>
            a.Bo.patch({ url: o.Rsh.WEBHOOK(t), body: n, oldFormErrors: !0, rejectWithError: !1 }).then((t) => {
                let { body: n } = t;
                return s.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: e, webhook: n }), n;
            }),
    };
