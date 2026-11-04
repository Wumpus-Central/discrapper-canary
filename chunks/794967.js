var t = l(620632),
    i = l(73153),
    r = l(327891),
    u = l(619019),
    o = l(652215);
l.d(
    n,
    {},
    {
        D: function (e) {
            return t.Bo.get({ url: o.Rsh.GUILD_WIDGET(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                i.h.dispatch({
                    type: "GUILD_SETTINGS_SET_WIDGET",
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id,
                });
            });
        },
        c: async function (e) {
            let n = (
                await t.Bo.get({
                    url: o.Rsh.GUILD_INTEGRATIONS(e),
                    query: { include_applications: !0, include_role_connections_metadata: !0 },
                    oldFormErrors: !0,
                    rejectWithError: (0, t.fT)(),
                })
            ).body.map((e) => ({
                ...e,
                application:
                    "application" in e && null != e.application ? r.kJ.createFromServer(e.application) : void 0,
                user: "user" in e && null != e.user ? new u.A(e.user) : void 0,
            }));
            return (i.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: e, integrations: n }), n);
        },
    },
);
