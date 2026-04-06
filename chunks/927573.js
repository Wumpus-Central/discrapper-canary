n.d(e, { $s: () => d, Qy: () => i, T$: () => c, Ug: () => a, _4: () => r, mu: () => u });
var s,
    l = n(985018);
let r = 5,
    i = 10,
    a = 30;
var c =
    (((s = {})[(s.DISPLAY = 0)] = "DISPLAY"),
    (s[(s.PERMISSIONS = 1)] = "PERMISSIONS"),
    (s[(s.MEMBERS = 2)] = "MEMBERS"),
    (s[(s.VERIFICATIONS = 3)] = "VERIFICATIONS"),
    s);
let o = {
    afk_channel_id: () => l.intl.string(l.t.KuYcnU),
    public_updates_channel_id: () => l.intl.string(l.t.vAyDGU),
    safety_alerts_channel_id: () => l.intl.string(l.t.sMkYE8),
    system_channel_id: () => l.intl.string(l.t.NASFnq),
};
function d(t) {
    if (0 === Object.keys(t).length) return null;
    let e = Object.keys(t)[0],
        n = o[e]?.();
    return null != n ? `(${n}) ${t[e]}` : t[e];
}
let u = "https://discord.gg";
