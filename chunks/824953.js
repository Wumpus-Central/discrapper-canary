n.d(t, { A: () => o });
var i = n(735438),
    r = n.n(i),
    l = n(562465),
    T = n(73153),
    I = n(652215);
let E = ["Spidey Bot", "Captain Hook"],
    o = {
        fetchForGuild(e) {
            T.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
                l.Bo.get({ url: I.Rsh.GUILD_WEBHOOKS(e), oldFormErrors: !0, rejectWithError: !1 })
                    .then((t) => {
                        let { body: n } = t;
                        return T.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, webhooks: n });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        T.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
                    });
        },
        fetchForChannel(e, t) {
            T.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
                l.Bo.get({ url: I.Rsh.CHANNEL_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !0 })
                    .then((n) => {
                        let { body: i } = n;
                        return T.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, channelId: t, webhooks: i });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        T.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: n.message });
                    });
        },
        create: (e, t, n) => (
            null == n && (n = E[r().random(0, E.length - 1)]),
            l.Bo.post({
                url: I.Rsh.CHANNEL_WEBHOOKS(t),
                body: { name: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => {
                let { body: n } = t;
                return T.h.dispatch({ type: "WEBHOOK_CREATE", guildId: e, webhook: n }), n;
            })
        ),
        delete: (e, t) =>
            l.Bo.del({ url: I.Rsh.WEBHOOK(t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                T.h.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
            }),
        update: (e, t, n) =>
            l.Bo.patch({ url: I.Rsh.WEBHOOK(t), body: n, oldFormErrors: !0, rejectWithError: !1 }).then((t) => {
                let { body: n } = t;
                return T.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: e, webhook: n }), n;
            }),
    };
