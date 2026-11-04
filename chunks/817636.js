var i = n(587895),
    r = n(337095),
    a = n(327891),
    s = n(734057),
    l = n(445672),
    o = n(692957);
function d(e) {
    return null != e && null != e.embeddedActivityConfig;
}
n.d(
    t,
    {},
    {
        A: async function (e, t) {
            let n = i.A.getApplication(e);
            if (d(n)) return n;
            let c = s.A.getChannel(t)?.guild_id,
                { activityConfigs: u, applications: _ } = await (0, l.L)({ guildId: c }),
                E = (0, o.A)({ applicationId: e, activityConfigs: u, applications: _ });
            if (d(E?.application)) return E?.application;
            {
                let t = await (0, r.TA)(e);
                return a.Ay.createFromServer(t);
            }
        },
    },
);
