"use strict";
n.d(t, { A: () => u });
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(652215);
let l = ["Spidey Bot", "Captain Hook"],
    u = {
        fetchForGuild(e) {
            a.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
                s.Bo.get({ url: o.Rsh.GUILD_WEBHOOKS(e), oldFormErrors: !0, rejectWithError: !1 })
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
                s.Bo.get({ url: o.Rsh.CHANNEL_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !0 })
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
            null == n && (n = l[r().random(0, l.length - 1)]),
            s.Bo.post({
                url: o.Rsh.CHANNEL_WEBHOOKS(t),
                body: { name: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => {
                let { body: n } = t;
                return a.h.dispatch({ type: "WEBHOOK_CREATE", guildId: e, webhook: n }), n;
            })
        ),
        delete: (e, t) =>
            s.Bo.del({ url: o.Rsh.WEBHOOK(t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                a.h.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
            }),
        update: (e, t, n) =>
            s.Bo.patch({ url: o.Rsh.WEBHOOK(t), body: n, oldFormErrors: !0, rejectWithError: !1 }).then((t) => {
                let { body: n } = t;
                return a.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: e, webhook: n }), n;
            }),
    };
