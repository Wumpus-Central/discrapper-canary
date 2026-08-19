"use strict";
n.d(t, { A: () => d });
var i = n(587895),
    r = n(337095),
    a = n(395671),
    s = n(734057),
    l = n(795816),
    o = n(692957);
async function d(e, t) {
    let n = i.A.getApplication(e);
    if (c(n)) return n;
    let d = s.A.getChannel(t)?.guild_id,
        { activityConfigs: u, applications: _ } = await (0, l.LV)({ guildId: d }),
        E = (0, o.A)({ applicationId: e, activityConfigs: u, applications: _ });
    if (c(E?.application)) return E?.application;
    {
        let t = await (0, r.TA)(e);
        return a.Ay.createFromServer(t);
    }
}
function c(e) {
    return null != e && null != e.embeddedActivityConfig;
}
