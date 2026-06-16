r.d(t, { A: () => s });
var l = r(735438),
    o = r.n(l),
    h = r(636537),
    n = r(228366),
    E = r(652215);
let u = ["Spidey Bot", "Captain Hook"],
    s = {
        fetchForGuild(e) {
            n.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
                h.Bo.get({ url: E.Rsh.GUILD_WEBHOOKS(e), oldFormErrors: !0, rejectWithError: !1 })
                    .then((t) => {
                        let { body: r } = t;
                        return n.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, webhooks: r });
                    })
                    .catch((t) => {
                        let { body: r } = t;
                        n.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: r.message });
                    });
        },
        fetchForChannel(e, t) {
            n.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
                h.Bo.get({ url: E.Rsh.CHANNEL_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !0 })
                    .then((r) => {
                        let { body: l } = r;
                        return n.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, channelId: t, webhooks: l });
                    })
                    .catch((t) => {
                        let { body: r } = t;
                        n.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: e, error: r.message });
                    });
        },
        create: (e, t, r) => (
            null == r && (r = u[o().random(0, u.length - 1)]),
            h.Bo.post({
                url: E.Rsh.CHANNEL_WEBHOOKS(t),
                body: { name: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((t) => {
                let { body: r } = t;
                return n.h.dispatch({ type: "WEBHOOK_CREATE", guildId: e, webhook: r }), r;
            })
        ),
        delete: (e, t) =>
            h.Bo.del({ url: E.Rsh.WEBHOOK(t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                n.h.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
            }),
        update: (e, t, r) =>
            h.Bo.patch({ url: E.Rsh.WEBHOOK(t), body: r, oldFormErrors: !0, rejectWithError: !1 }).then((t) => {
                let { body: r } = t;
                return n.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: e, webhook: r }), r;
            }),
    };
