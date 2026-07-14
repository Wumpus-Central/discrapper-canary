r.d(e, { A: () => u });
var l = r(735438),
    n = r.n(l),
    o = r(636537),
    h = r(228366),
    i = r(157559),
    s = r(652215),
    E = r(375708);
let c = ["Spidey Bot", "Captain Hook"],
    u = {
        fetchForGuild(t) {
            h.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t }),
                o.Bo.get({ url: s.Rsh.GUILD_WEBHOOKS(t), oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        let { body: r } = e;
                        return h.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: t, webhooks: r });
                    })
                    .catch((e) => {
                        let { body: r } = e;
                        h.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: t, error: r.message });
                    });
        },
        fetchForChannel(t, e) {
            h.h.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t, channelId: e }),
                o.Bo.get({ url: s.Rsh.CHANNEL_WEBHOOKS(e), oldFormErrors: !0, rejectWithError: !0 })
                    .then((r) => {
                        let { body: l } = r;
                        return h.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: t, channelId: e, webhooks: l });
                    })
                    .catch((e) => {
                        let { body: r } = e;
                        h.h.dispatch({ type: "WEBHOOKS_UPDATE", guildId: t, error: r.message });
                    });
        },
        create: (t, e, r) => (
            null == r && (r = c[n().random(0, c.length - 1)]),
            o.Bo.post({ url: s.Rsh.CHANNEL_WEBHOOKS(e), body: { name: r }, oldFormErrors: !0, rejectWithError: !1 })
                .then((e) => {
                    let { body: r } = e;
                    return h.h.dispatch({ type: "WEBHOOK_CREATE", guildId: t, webhook: r }), r;
                })
                .catch((t) => {
                    let { body: e, status: r } = t;
                    return (
                        null != e && e.code === s.t02.TOO_MANY_WEBHOOKS
                            ? i.A.show({ title: E.intl.string(E.t.cCqsca), body: E.intl.string(E.t["w+QZoX"]) })
                            : 429 === r
                              ? i.A.show({ title: E.intl.string(E.t.cCqsca), body: E.intl.string(E.t["YBM+UW"]) })
                              : i.A.show({ title: E.intl.string(E.t.cCqsca), body: E.intl.string(E.t["/4TwKf"]) }),
                        null
                    );
                })
        ),
        delete: (t, e) =>
            o.Bo.del({ url: s.Rsh.WEBHOOK(e), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                h.h.dispatch({ type: "WEBHOOK_DELETE", guildId: t, webhookId: e });
            }),
        update: (t, e, r) =>
            o.Bo.patch({ url: s.Rsh.WEBHOOK(e), body: r, oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
                let { body: r } = e;
                return h.h.dispatch({ type: "WEBHOOK_UPDATE", guildId: t, webhook: r }), r;
            }),
    };
