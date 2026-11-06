var n = s(613412),
    a = s(517846),
    i = s(627784),
    r = s(669700),
    l = s(499785),
    c = s(652215);
s.d(
    t,
    {},
    {
        A: {
            createGuildFromTemplate: async function (e, t, s, o, d) {
                try {
                    let i = await l.A.post({
                        url: c.Rsh.GUILDS,
                        body: {
                            name: e,
                            icon: t,
                            channels: s.channels,
                            system_channel_id: s.system_channel_id,
                            roles: s.roles,
                            guild_template_code: s.code,
                            staff_only: !!d || void 0,
                        },
                        trackedActionData: {
                            event: n.NetworkActionNames.GUILD_CREATE,
                            properties: { template_name: s.id, is_community_intent: o },
                        },
                        rejectWithError: !1,
                    });
                    return (r.Ay.fireSurveyAction(a.w.GUILD_CREATED), i.body);
                } catch (e) {
                    throw new i.LG(e);
                }
            },
        },
    },
);
