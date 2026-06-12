"use strict";
n.d(t, { A: () => u });
var i = n(587895),
    r = n(337095),
    s = n(395671),
    a = n(734057),
    o = n(795816),
    l = n(692957);
async function u(e, t) {
    let n = i.A.getApplication(e);
    if (c(n)) return n;
    let u = a.A.getChannel(t)?.guild_id,
        { activityConfigs: d, applications: _ } = await (0, o.LV)({ guildId: u }),
        h = (0, l.A)({ applicationId: e, activityConfigs: d, applications: _ });
    if (c(h?.application)) return h?.application;
    {
        let t = await (0, r.TA)(e);
        return s.Ay.createFromServer(t);
    }
}
function c(e) {
    return null != e && null != e.embeddedActivityConfig;
}
