n.d(t, { A: () => r });
var l = n(110259),
    i = n(198982),
    s = n(499785),
    a = n(652215);
let r = {
    createGuildFromTemplate: async function (e, t, n, r, c) {
        try {
            return (
                await s.A.post({
                    url: a.Rsh.GUILDS,
                    body: {
                        name: e,
                        icon: t,
                        channels: n.channels,
                        system_channel_id: n.system_channel_id,
                        roles: n.roles,
                        guild_template_code: n.code,
                        staff_only: !!c || void 0,
                    },
                    trackedActionData: {
                        event: l.NetworkActionNames.GUILD_CREATE,
                        properties: {
                            template_name: n.id,
                            is_community_intent: r,
                        },
                    },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new i.LG(e);
        }
    },
};
