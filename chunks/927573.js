n.d(e, { $s: () => u, Qy: () => i, T$: () => c, Ug: () => a, _4: () => s, mu: () => b });
var r,
    l = n(375708);
let s = 5,
    i = 10,
    a = 30;
var c =
    (((r = {})[(r.DISPLAY = 0)] = "DISPLAY"),
    (r[(r.PERMISSIONS = 1)] = "PERMISSIONS"),
    (r[(r.MEMBERS = 2)] = "MEMBERS"),
    (r[(r.VERIFICATIONS = 3)] = "VERIFICATIONS"),
    r);
let d = {
    afk_channel_id: () => l.intl.string(l.t.KuYcnU),
    public_updates_channel_id: () => l.intl.string(l.t.vAyDGU),
    safety_alerts_channel_id: () => l.intl.string(l.t.sMkYE8),
    system_channel_id: () => l.intl.string(l.t.NASFnq),
};
function u(t) {
    if (0 === Object.keys(t).length) return null;
    let e = Object.keys(t)[0],
        n = d[e]?.();
    return null != n ? `(${n}) ${t[e]}` : t[e];
}
let b = "https://discord.gg";
