"use strict";
n.d(t, { $s: () => c, Qy: () => r, T$: () => o, Ug: () => a, _4: () => l, mu: () => u });
var i,
    s = n(985018);
let l = 5,
    r = 10,
    a = 30;
var o =
    (((i = {})[(i.DISPLAY = 0)] = "DISPLAY"),
    (i[(i.PERMISSIONS = 1)] = "PERMISSIONS"),
    (i[(i.MEMBERS = 2)] = "MEMBERS"),
    (i[(i.VERIFICATIONS = 3)] = "VERIFICATIONS"),
    i);
let d = {
    afk_channel_id: () => s.intl.string(s.t.KuYcnU),
    public_updates_channel_id: () => s.intl.string(s.t.vAyDGU),
    safety_alerts_channel_id: () => s.intl.string(s.t.sMkYE8),
    system_channel_id: () => s.intl.string(s.t.NASFnq),
};
function c(e) {
    if (0 === Object.keys(e).length) return null;
    let t = Object.keys(e)[0],
        n = d[t]?.();
    return null != n ? `(${n}) ${e[t]}` : e[t];
}
let u = "https://discord.gg";
