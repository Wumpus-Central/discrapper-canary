"use strict";
n.d(t, { A: () => u });
var r = n(587895),
    i = n(337095),
    a = n(611010),
    s = n(734057),
    o = n(795816),
    l = n(692957);
async function u(e, t) {
    let n = r.A.getApplication(e);
    if (c(n)) return n;
    let u = s.A.getChannel(t)?.guild_id,
        { activityConfigs: d, applications: _ } = await (0, o.LV)({ guildId: u }),
        f = (0, l.A)({ applicationId: e, activityConfigs: d, applications: _ });
    if (c(f?.application)) return f?.application;
    {
        let t = await (0, i.TA)(e);
        return a.Ay.createFromServer(t);
    }
}
function c(e) {
    return null != e && null != e.embeddedActivityConfig;
}
