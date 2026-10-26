s.d(t, { A: () => r });
var n = s(562708),
    a = s(913122),
    i = s(499785),
    l = s(652215);
let r = {
    createGuildFromTemplate: async function (e, t, s, r, c) {
        try {
            return (
                await i.A.post({
                    url: l.Rsh.GUILDS,
                    body: {
                        name: e,
                        icon: t,
                        channels: s.channels,
                        system_channel_id: s.system_channel_id,
                        roles: s.roles,
                        guild_template_code: s.code,
                        staff_only: !!c || void 0,
                    },
                    trackedActionData: {
                        event: n.NetworkActionNames.GUILD_CREATE,
                        properties: { template_name: s.id, is_community_intent: r },
                    },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new a.LG(e);
        }
    },
};
