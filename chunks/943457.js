l.d(t, { A: () => r });
var i = l(110259),
    s = l(198982),
    a = l(499785),
    n = l(652215);
let r = {
    createGuildFromTemplate: async function (e, t, l, r, c) {
        try {
            return (
                await a.A.post({
                    url: n.Rsh.GUILDS,
                    body: {
                        name: e,
                        icon: t,
                        channels: l.channels,
                        system_channel_id: l.system_channel_id,
                        roles: l.roles,
                        guild_template_code: l.code,
                        staff_only: !!c || void 0,
                    },
                    trackedActionData: {
                        event: i.NetworkActionNames.GUILD_CREATE,
                        properties: { template_name: l.id, is_community_intent: r },
                    },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new s.LG(e);
        }
    },
};
